import React, { useState, useRef, useCallback } from "react";
import { useContent } from "./ContentContext";
import { getSavedFirebaseConfig, saveFirebaseConfig, isFirebaseConfigured } from "./firebaseConfig";
import { initFirebase } from "./firebaseService";

// ================================================================
// ADMIN PANEL — CMS for the ARTech Connect website
// Route: /admin  (protected by simple password gate)
// ================================================================

const ADMIN_PASSWORD = "artechcms2025";

// ---- tiny helpers ----
type FieldDef = { label: string; path: string; type?: "text" | "textarea" | "image" };
type SectionDef = { title: string; fields: FieldDef[] };

// ================================================================
// Field components
// ================================================================

function TextField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [val, setVal] = useState(value);

  React.useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <div style={styles.field}>
      <label style={styles.label}>{label}</label>
      <input
        style={styles.input}
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          onChange(e.target.value);
        }}
        dir="auto"
      />
    </div>
  );
}

function TextareaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [val, setVal] = useState(value);

  React.useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <div style={styles.field}>
      <label style={styles.label}>{label}</label>
      <textarea
        style={styles.textarea}
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          onChange(e.target.value);
        }}
        dir="auto"
      />
    </div>
  );
}

function ImageField({
  label,
  value,
  path,
  onChange,
}: {
  label: string;
  value: string;
  path: string;
  onChange: (v: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          onChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    },
    [onChange]
  );

  const handleClear = useCallback(() => {
    onChange("");
    if (inputRef.current) inputRef.current.value = "";
  }, [onChange]);

  return (
    <div style={styles.field}>
      <label style={styles.label}>{label}</label>
      <div style={styles.imageRow}>
        {value ? (
          <img
            src={value}
            alt={label}
            style={styles.imagePreview}
          />
        ) : (
          <div style={styles.imagePlaceholder}>
            <span style={{ color: "#888", fontSize: 13 }}>
              لا توجد صورة — يستخدم الصورة الافتراضية
            </span>
          </div>
        )}
        <div style={styles.imageButtons}>
          <button
            style={styles.uploadBtn}
            onClick={() => inputRef.current?.click()}
          >
            📁 رفع صورة
          </button>
          {value && (
            <button style={styles.clearBtn} onClick={handleClear}>
              ✕ إزالة
            </button>
          )}
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFile}
        id={`img-${path}`}
      />
    </div>
  );
}

// ================================================================
// Section block
// ================================================================

function SectionBlock({
  section,
  getVal,
  onUpdate,
}: {
  section: SectionDef;
  getVal: (path: string) => string;
  onUpdate: (path: string, value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.sectionBlock}>
      <button style={styles.sectionHeader} onClick={() => setOpen((o) => !o)}>
        <span>{section.title}</span>
        <span style={styles.chevron}>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div style={styles.sectionBody}>
          {section.fields.map((f) => {
            const val = getVal(f.path);
            const type = f.type ?? "text";
            if (type === "image") {
              return (
                <ImageField
                  key={f.path}
                  label={f.label}
                  value={val}
                  path={f.path}
                  onChange={(v) => onUpdate(f.path, v)}
                />
              );
            }
            if (type === "textarea") {
              return (
                <TextareaField
                  key={f.path}
                  label={f.label}
                  value={val}
                  onChange={(v) => onUpdate(f.path, v)}
                />
              );
            }
            return (
              <TextField
                key={f.path}
                label={f.label}
                value={val}
                onChange={(v) => onUpdate(f.path, v)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

// ================================================================
// Section definitions
// ================================================================

const sections: SectionDef[] = [
  // ---- GLOBAL ----
  {
    title: "🌐 الإعدادات العامة (التذييل والتنقل)",
    fields: [
      { label: "رقم الهاتف (التذييل)", path: "global.footer.phone" },
      { label: "تسمية الهاتف (التذييل)", path: "global.footer.phoneLabel" },
      { label: "تنقل: الرئيسية", path: "global.nav.home" },
      { label: "تنقل: عن الجمعية", path: "global.nav.about" },
      { label: "تنقل: البرامج", path: "global.nav.programs" },
      { label: "تنقل: مجالات التمكين", path: "global.nav.empowerment" },
      { label: "تنقل: المبادرات", path: "global.nav.initiatives" },
      { label: "تنقل: مركز المعرفة", path: "global.nav.knowledge" },
      { label: "تنقل: الشركاء", path: "global.nav.partners" },
      { label: "تنقل: الأثر", path: "global.nav.impact" },
      { label: "تنقل: الحوكمة", path: "global.nav.governance" },
      { label: "تنقل: السياسات", path: "global.nav.policies" },
      { label: "تنقل: تواصل معنا", path: "global.nav.contact" },
    ],
  },

  // ---- HOME ----
  {
    title: "🏠 الصفحة الرئيسية",
    fields: [
      { label: "عنوان الهيرو", path: "home.heroTitle" },
      { label: "نص الهيرو الفرعي", path: "home.heroSubtitle", type: "textarea" },
      { label: "عنوان القسم 1", path: "home.section1Title" },
      { label: "محتوى القسم 1", path: "home.section1Body", type: "textarea" },
      { label: "عنوان القسم 2", path: "home.section2Title" },
      { label: "محتوى القسم 2", path: "home.section2Body", type: "textarea" },
      { label: "عنوان القسم 3", path: "home.section3Title" },
      { label: "محتوى القسم 3", path: "home.section3Body", type: "textarea" },
      { label: "عنوان القسم 4", path: "home.section4Title" },
      { label: "محتوى القسم 4", path: "home.section4Body", type: "textarea" },
      { label: "صورة الهيرو", path: "home.heroImage", type: "image" },
      { label: "صورة القسم 1", path: "home.section1Image", type: "image" },
      { label: "صورة القسم 2", path: "home.section2Image", type: "image" },
      { label: "صورة القسم 3", path: "home.section3Image", type: "image" },
      { label: "صورة القسم 4", path: "home.section4Image", type: "image" },
    ],
  },

  // ---- ABOUT ----
  {
    title: "ℹ️ صفحة عن الجمعية",
    fields: [
      { label: "عنوان الهيرو", path: "about.heroTitle" },
      { label: "نص الهيرو الفرعي", path: "about.heroSubtitle", type: "textarea" },
      { label: "العنوان الرئيسي", path: "about.mainTitle" },
      { label: "المحتوى الرئيسي", path: "about.mainBody", type: "textarea" },
      { label: "عنوان الرؤية", path: "about.visionTitle" },
      { label: "نص الرؤية", path: "about.visionBody", type: "textarea" },
      { label: "عنوان الرسالة", path: "about.missionTitle" },
      { label: "نص الرسالة", path: "about.missionBody", type: "textarea" },
      { label: "عنوان القيم", path: "about.valuesTitle" },
      { label: "قيمة 1: العنوان", path: "about.value1Title" },
      { label: "قيمة 1: المحتوى", path: "about.value1Body", type: "textarea" },
      { label: "قيمة 2: العنوان", path: "about.value2Title" },
      { label: "قيمة 2: المحتوى", path: "about.value2Body", type: "textarea" },
      { label: "قيمة 3: العنوان", path: "about.value3Title" },
      { label: "قيمة 3: المحتوى", path: "about.value3Body", type: "textarea" },
      { label: "قيمة 4: العنوان", path: "about.value4Title" },
      { label: "قيمة 4: المحتوى", path: "about.value4Body", type: "textarea" },
      { label: "صورة الهيرو", path: "about.heroImage", type: "image" },
      { label: "الصورة الرئيسية", path: "about.mainImage", type: "image" },
    ],
  },

  // ---- PROGRAMS ----
  {
    title: "📚 صفحة البرامج والأكاديمية",
    fields: [
      { label: "عنوان الهيرو", path: "programs.heroTitle" },
      { label: "نص الهيرو الفرعي", path: "programs.heroSubtitle", type: "textarea" },
      { label: "برنامج 1: العنوان", path: "programs.prog1Title" },
      { label: "برنامج 1: المحتوى", path: "programs.prog1Body", type: "textarea" },
      { label: "برنامج 2: العنوان", path: "programs.prog2Title" },
      { label: "برنامج 2: المحتوى", path: "programs.prog2Body", type: "textarea" },
      { label: "برنامج 3: العنوان", path: "programs.prog3Title" },
      { label: "برنامج 3: المحتوى", path: "programs.prog3Body", type: "textarea" },
      { label: "صورة الهيرو", path: "programs.heroImage", type: "image" },
      { label: "صورة البرنامج 1", path: "programs.prog1Image", type: "image" },
      { label: "صورة البرنامج 2", path: "programs.prog2Image", type: "image" },
      { label: "صورة البرنامج 3", path: "programs.prog3Image", type: "image" },
    ],
  },

  // ---- EMPOWERMENT ----
  {
    title: "💪 صفحة مجالات التمكين",
    fields: [
      { label: "عنوان الهيرو", path: "empowerment.heroTitle" },
      { label: "نص الهيرو الفرعي", path: "empowerment.heroSubtitle", type: "textarea" },
      { label: "بطاقة 1: العنوان", path: "empowerment.card1Title" },
      { label: "بطاقة 1: المحتوى", path: "empowerment.card1Body", type: "textarea" },
      { label: "بطاقة 2: العنوان", path: "empowerment.card2Title" },
      { label: "بطاقة 2: المحتوى", path: "empowerment.card2Body", type: "textarea" },
      { label: "بطاقة 3: العنوان", path: "empowerment.card3Title" },
      { label: "بطاقة 3: المحتوى", path: "empowerment.card3Body", type: "textarea" },
      { label: "بطاقة 4: العنوان", path: "empowerment.card4Title" },
      { label: "بطاقة 4: المحتوى", path: "empowerment.card4Body", type: "textarea" },
      { label: "بطاقة 5: العنوان", path: "empowerment.card5Title" },
      { label: "بطاقة 5: المحتوى", path: "empowerment.card5Body", type: "textarea" },
      { label: "بطاقة 6: العنوان", path: "empowerment.card6Title" },
      { label: "بطاقة 6: المحتوى", path: "empowerment.card6Body", type: "textarea" },
      { label: "بطاقة 7: العنوان", path: "empowerment.card7Title" },
      { label: "بطاقة 7: المحتوى", path: "empowerment.card7Body", type: "textarea" },
      { label: "بطاقة 8: العنوان", path: "empowerment.card8Title" },
      { label: "بطاقة 8: المحتوى", path: "empowerment.card8Body", type: "textarea" },
      { label: "صورة الهيرو", path: "empowerment.heroImage", type: "image" },
    ],
  },

  // ---- INITIATIVES ----
  {
    title: "🚀 صفحة المبادرات",
    fields: [
      { label: "عنوان الهيرو", path: "initiatives.heroTitle" },
      { label: "نص الهيرو الفرعي", path: "initiatives.heroSubtitle", type: "textarea" },
      { label: "مبادرة 1: الترقيم", path: "initiatives.init1Number" },
      { label: "مبادرة 1: العنوان", path: "initiatives.init1Title" },
      { label: "مبادرة 1: عنوان فرص المشاركة", path: "initiatives.init1ParticipationTitle" },
      { label: "مبادرة 1: المحتوى", path: "initiatives.init1Body", type: "textarea" },
      { label: "مبادرة 1: فرص المشاركة", path: "initiatives.init1Participation", type: "textarea" },
      { label: "مبادرة 2: الترقيم", path: "initiatives.init2Number" },
      { label: "مبادرة 2: العنوان", path: "initiatives.init2Title" },
      { label: "مبادرة 2: عنوان فرص المشاركة", path: "initiatives.init2ParticipationTitle" },
      { label: "مبادرة 2: المحتوى", path: "initiatives.init2Body", type: "textarea" },
      { label: "مبادرة 2: فرص المشاركة", path: "initiatives.init2Participation", type: "textarea" },
      { label: "مبادرة 3: الترقيم", path: "initiatives.init3Number" },
      { label: "مبادرة 3: العنوان السطر 1", path: "initiatives.init3TitleLine1" },
      { label: "مبادرة 3: العنوان السطر 2", path: "initiatives.init3TitleLine2" },
      { label: "مبادرة 3: عنوان فرص المشاركة", path: "initiatives.init3ParticipationTitle" },
      { label: "مبادرة 3: المحتوى", path: "initiatives.init3Body", type: "textarea" },
      { label: "مبادرة 3: فرص المشاركة", path: "initiatives.init3Participation", type: "textarea" },
      { label: "مبادرة 4: الترقيم", path: "initiatives.init4Number" },
      { label: "مبادرة 4: العنوان", path: "initiatives.init4Title" },
      { label: "مبادرة 4: عنوان فرص المشاركة", path: "initiatives.init4ParticipationTitle" },
      { label: "مبادرة 4: المحتوى", path: "initiatives.init4Body", type: "textarea" },
      { label: "مبادرة 4: فرص المشاركة", path: "initiatives.init4Participation", type: "textarea" },
      { label: "مبادرة 5: الترقيم", path: "initiatives.init5Number" },
      { label: "مبادرة 5: العنوان السطر 1", path: "initiatives.init5TitleLine1" },
      { label: "مبادرة 5: العنوان السطر 2", path: "initiatives.init5TitleLine2" },
      { label: "مبادرة 5: عنوان فرص المشاركة", path: "initiatives.init5ParticipationTitle" },
      { label: "مبادرة 5: المحتوى", path: "initiatives.init5Body", type: "textarea" },
      { label: "مبادرة 5: فرص المشاركة", path: "initiatives.init5Participation", type: "textarea" },
      { label: "صورة الهيرو", path: "initiatives.heroImage", type: "image" },
      { label: "صورة المبادرة 1", path: "initiatives.init1Image", type: "image" },
      { label: "صورة المبادرة 2", path: "initiatives.init2Image", type: "image" },
      { label: "صورة المبادرة 3", path: "initiatives.init3Image", type: "image" },
      { label: "صورة المبادرة 4", path: "initiatives.init4Image", type: "image" },
      { label: "صورة المبادرة 5", path: "initiatives.init5Image", type: "image" },
    ],
  },

  // ---- KNOWLEDGE ----
  {
    title: "📖 مركز المعرفة",
    fields: [
      { label: "عنوان الهيرو", path: "knowledge.heroTitle" },
      { label: "نص الهيرو الفرعي", path: "knowledge.heroSubtitle", type: "textarea" },
      { label: "قسم 1: العنوان (الأدلة)", path: "knowledge.section1Title" },
      { label: "قسم 1: المحتوى", path: "knowledge.section1Body", type: "textarea" },
      { label: "قسم 2: العنوان (الدراسات)", path: "knowledge.section2Title" },
      { label: "قسم 2: المحتوى", path: "knowledge.section2Body", type: "textarea" },
      { label: "قسم 3: العنوان (التقارير)", path: "knowledge.section3Title" },
      { label: "قسم 3: المحتوى", path: "knowledge.section3Body", type: "textarea" },
      { label: "قسم 4: العنوان (الفيديوهات)", path: "knowledge.section4Title" },
      { label: "قسم 4: المحتوى", path: "knowledge.section4Body", type: "textarea" },
      { label: "قسم 5: العنوان (البودكاست)", path: "knowledge.section5Title" },
      { label: "قسم 5: المحتوى", path: "knowledge.section5Body", type: "textarea" },
      { label: "صورة الهيرو", path: "knowledge.heroImage", type: "image" },
      { label: "صورة قسم 1", path: "knowledge.section1Image", type: "image" },
      { label: "صورة قسم 2", path: "knowledge.section2Image", type: "image" },
      { label: "صورة قسم 3", path: "knowledge.section3Image", type: "image" },
      { label: "صورة قسم 4", path: "knowledge.section4Image", type: "image" },
      { label: "صورة قسم 5", path: "knowledge.section5Image", type: "image" },
    ],
  },

  // ---- GOVERNANCE ----
  {
    title: "⚖️ الحوكمة والشفافية",
    fields: [
      { label: "عنوان الهيرو", path: "governance.heroTitle" },
      { label: "نص الهيرو الفرعي", path: "governance.heroSubtitle", type: "textarea" },
      { label: "عنوان القسم", path: "governance.sectionTitle" },
      { label: "محتوى القسم (السطر 1)", path: "governance.sectionBodyLine1", type: "textarea" },
      { label: "محتوى القسم (السطر 2)", path: "governance.sectionBodyLine2", type: "textarea" },
      { label: "صورة الهيرو", path: "governance.heroImage", type: "image" },
      { label: "صورة القسم", path: "governance.sectionImage", type: "image" },
    ],
  },

  // ---- POLICIES ----
  {
    title: "📋 اللوائح والسياسات",
    fields: [
      { label: "عنوان الهيرو", path: "policies.heroTitle" },
      { label: "نص الهيرو الفرعي", path: "policies.heroSubtitle", type: "textarea" },
      { label: "بطاقة 1: العنوان", path: "policies.card1Title" },
      { label: "بطاقة 2: العنوان", path: "policies.card2Title" },
      { label: "بطاقة 3: العنوان", path: "policies.card3Title" },
      { label: "بطاقة 4: العنوان", path: "policies.card4Title" },
      { label: "بطاقة 5: العنوان", path: "policies.card5Title" },
      { label: "بطاقة 6: العنوان", path: "policies.card6Title" },
      { label: "صورة الهيرو", path: "policies.heroImage", type: "image" },
    ],
  },

  // ---- CONTACT ----
  {
    title: "📞 نموذج التواصل",
    fields: [
      { label: "عنوان الهيرو", path: "contact.heroTitle" },
      { label: "نص الهيرو الفرعي", path: "contact.heroSubtitle", type: "textarea" },
      { label: "حقل 1: النص التوضيحي (الاسم)", path: "contact.field1Placeholder" },
      { label: "حقل 2: النص التوضيحي (اسم الجهة)", path: "contact.field2Placeholder" },
      { label: "حقل 3: النص التوضيحي (البريد)", path: "contact.field3Placeholder" },
      { label: "حقل 4: النص التوضيحي (الهاتف)", path: "contact.field4Placeholder" },
      { label: "حقل 5: النص التوضيحي (الموضوع)", path: "contact.field5Placeholder" },
      { label: "حقل 6: النص التوضيحي (نوع الطلب)", path: "contact.field6Placeholder" },
      { label: "حقل 7: النص التوضيحي (التفاصيل)", path: "contact.field7Placeholder" },
      { label: "نص زر الإرسال", path: "contact.submitButton" },
      { label: "س&ج 1: السؤال", path: "contact.faq1Q" },
      { label: "س&ج 1: الجواب", path: "contact.faq1A", type: "textarea" },
      { label: "س&ج 2: السؤال", path: "contact.faq2Q" },
      { label: "س&ج 2: الجواب", path: "contact.faq2A", type: "textarea" },
      { label: "س&ج 3: السؤال", path: "contact.faq3Q" },
      { label: "س&ج 3: الجواب", path: "contact.faq3A", type: "textarea" },
      { label: "س&ج 4: السؤال", path: "contact.faq4Q" },
      { label: "س&ج 4: الجواب", path: "contact.faq4A", type: "textarea" },
      { label: "صورة الهيرو", path: "contact.heroImage", type: "image" },
    ],
  },
];

// ================================================================
// Login screen
// ================================================================

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div style={styles.loginWrap}>
      <div style={styles.loginCard}>
        <div style={styles.loginLogo}>🔐</div>
        <h1 style={styles.loginTitle}>لوحة التحكم — ARTech Connect</h1>
        <p style={styles.loginSub}>يرجى إدخال كلمة المرور للمتابعة</p>
        <form onSubmit={handleSubmit} style={styles.loginForm}>
          <input
            type="password"
            placeholder="كلمة المرور"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            style={{
              ...styles.loginInput,
              borderColor: error ? "#e53e3e" : "rgba(255,255,255,0.2)",
            }}
            dir="ltr"
            autoFocus
          />
          {error && (
            <p style={styles.loginError}>كلمة المرور غير صحيحة</p>
          )}
          <button type="submit" style={styles.loginBtn}>
            دخول
          </button>
        </form>
      </div>
    </div>
  );
}

function FirebaseConfigCard() {
  const [showConfig, setShowConfig] = useState(false);
  const [config, setConfig] = useState(getSavedFirebaseConfig);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const configured = isFirebaseConfigured(config);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveFirebaseConfig(config);
    initFirebase();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div style={{ background: "#1a202c", border: "1px solid #2d3748", borderRadius: "12px", padding: "16px 20px", marginBottom: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "20px" }}>{configured ? "🔥" : "☁️"}</span>
          <div>
            <div style={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}>
              حالة المزامنة السحابية (Firebase Cloud Sync)
            </div>
            <div style={{ color: configured ? "#48bb78" : "#ecc94b", fontSize: "14px", marginTop: "2px" }}>
              {configured ? "🟢 متصل بقاعدة البيانات السحابية (تغييراتك تظهر فوراً لكل الزوار)" : "🟡 يعمل محلياً — أدخل بيانات Firebase لتشغيل المزامنة لجميع الزوار"}
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowConfig(!showConfig)}
          style={{ background: "#2b6cb0", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 14px", cursor: "pointer", fontSize: "13px", fontWeight: "bold" }}
        >
          {showConfig ? "إغلاق الإعدادات" : "⚙️ إعدادات Firebase"}
        </button>
      </div>

      {showConfig && (
        <form onSubmit={handleSave} style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #2d3748" }}>
          <div style={{ color: "#a0aec0", fontSize: "13px", marginBottom: "12px" }}>
            احصل على مفاتيح مشروعك المجاني من <a href="https://console.firebase.google.com/" target="_blank" rel="noreferrer" style={{ color: "#63b3ed", textDecoration: "underline" }}>console.firebase.google.com</a> وضعها هنا:
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={styles.label}>API Key</label>
              <input style={styles.input} value={config.apiKey} onChange={(e) => setConfig({ ...config, apiKey: e.target.value })} placeholder="AIzaSy..." />
            </div>
            <div>
              <label style={styles.label}>Project ID</label>
              <input style={styles.input} value={config.projectId} onChange={(e) => setConfig({ ...config, projectId: e.target.value })} placeholder="my-project-id" />
            </div>
            <div>
              <label style={styles.label}>Auth Domain</label>
              <input style={styles.input} value={config.authDomain} onChange={(e) => setConfig({ ...config, authDomain: e.target.value })} placeholder="my-project.firebaseapp.com" />
            </div>
            <div>
              <label style={styles.label}>Storage Bucket</label>
              <input style={styles.input} value={config.storageBucket} onChange={(e) => setConfig({ ...config, storageBucket: e.target.value })} placeholder="my-project.appspot.com" />
            </div>
          </div>
          <div style={{ marginTop: "16px", display: "flex", gap: "12px", alignItems: "center" }}>
            <button type="submit" style={{ background: "#38a169", color: "#fff", border: "none", borderRadius: "6px", padding: "10px 20px", fontWeight: "bold", cursor: "pointer" }}>
              💾 حفظ تفعيل السحابة
            </button>
            {savedSuccess && <span style={{ color: "#48bb78", fontSize: "14px", fontWeight: "bold" }}>✓ تم حفظ المفاتيح وتفعيل الاقتران!</span>}
          </div>
        </form>
      )}
    </div>
  );
}

// ================================================================
// Main Admin Panel
// ================================================================

function AdminPanelInner() {
  const { content, updateContent, resetContent } = useContent();
  const [saved, setSaved] = useState(false);
  const [resetConfirm, setResetConfirm] = useState(false);

  // Helper: get nested value by dot-path
  const getVal = useCallback(
    (path: string): string => {
      const parts = path.split(".");
      let cursor: unknown = content;
      for (const p of parts) {
        if (cursor === null || typeof cursor !== "object") return "";
        cursor = (cursor as Record<string, unknown>)[p];
      }
      return typeof cursor === "string" ? cursor : "";
    },
    [content]
  );

  const handleUpdate = useCallback(
    (path: string, value: string) => {
      updateContent(path, value);
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    },
    [updateContent]
  );

  const handleReset = () => {
    if (resetConfirm) {
      resetContent();
      setResetConfirm(false);
    } else {
      setResetConfirm(true);
      setTimeout(() => setResetConfirm(false), 4000);
    }
  };

  return (
    <div style={styles.panelWrap}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.headerLogo}>⚙️</div>
          <div>
            <div style={styles.headerTitle}>لوحة إدارة المحتوى</div>
            <div style={styles.headerSub}>
              ARTech Connect — كل التغييرات تُحفظ تلقائيًا
            </div>
          </div>
        </div>
        <div style={styles.headerRight}>
          {saved && (
            <div style={styles.savedBadge}>✓ تم الحفظ</div>
          )}
          <a
            href="/#/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.previewBtn}
          >
            👁 معاينة الموقع
          </a>
          <button
            style={{
              ...styles.resetBtn,
              background: resetConfirm ? "#c53030" : "#2d3748",
            }}
            onClick={handleReset}
          >
            {resetConfirm ? "⚠️ تأكيد الاستعادة؟" : "🔄 استعادة الافتراضي"}
          </button>
        </div>
      </div>

      {/* Firebase Cloud Sync Status Card */}
      <FirebaseConfigCard />

      {/* Info bar */}
      <div style={styles.infoBar}>
        <span>📌 التغييرات تظهر فورًا على الموقع عند فتحه أو إعادة تحميله.</span>
        <span>🖼 الصور المرفوعة تُخزَّن كـ Base64 في المتصفح.</span>
      </div>

      {/* Sections */}
      <div style={styles.sectionsWrap}>
        {sections.map((sec) => (
          <SectionBlock
            key={sec.title}
            section={sec}
            getVal={getVal}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}

// ================================================================
// Root export
// ================================================================

export default function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(() => {
    return sessionStorage.getItem("cms_auth") === "1";
  });

  const handleLogin = () => {
    sessionStorage.setItem("cms_auth", "1");
    setLoggedIn(true);
  };

  if (!loggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <AdminPanelInner />;
}

// ================================================================
// Inline styles (no TailwindCSS - admin panel only)
// ================================================================

const styles: Record<string, React.CSSProperties> = {
  // --- Login ---
  loginWrap: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0e3141 0%, #164256 50%, #0199c2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', Tahoma, sans-serif",
    direction: "rtl",
  },
  loginCard: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 20,
    padding: "48px 40px",
    width: 380,
    textAlign: "center",
    boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
  },
  loginLogo: { fontSize: 48, marginBottom: 16 },
  loginTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: 700,
    margin: "0 0 8px",
    direction: "rtl",
  },
  loginSub: { color: "rgba(255,255,255,0.6)", fontSize: 14, margin: "0 0 28px" },
  loginForm: { display: "flex", flexDirection: "column", gap: 12 },
  loginInput: {
    padding: "14px 16px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.1)",
    color: "white",
    fontSize: 16,
    outline: "none",
    textAlign: "center",
  },
  loginError: { color: "#fc8181", fontSize: 13, margin: 0 },
  loginBtn: {
    padding: "14px",
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(135deg, #0199c2, #52489c)",
    color: "white",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    transition: "opacity 0.2s",
  },

  // --- Panel ---
  panelWrap: {
    minHeight: "100vh",
    background: "#f7f8fa",
    fontFamily: "'Segoe UI', Tahoma, Arial, sans-serif",
    direction: "rtl",
  },
  header: {
    background: "linear-gradient(135deg, #0e3141, #164256)",
    padding: "20px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
  },
  headerLeft: { display: "flex", alignItems: "center", gap: 16 },
  headerLogo: { fontSize: 32 },
  headerTitle: { color: "white", fontSize: 20, fontWeight: 700 },
  headerSub: { color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 2 },
  headerRight: { display: "flex", alignItems: "center", gap: 12 },
  savedBadge: {
    background: "#38a169",
    color: "white",
    padding: "6px 14px",
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 600,
    animation: "fadeIn 0.3s ease",
  },
  previewBtn: {
    background: "rgba(255,255,255,0.15)",
    color: "white",
    padding: "8px 18px",
    borderRadius: 8,
    fontSize: 14,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.25)",
    cursor: "pointer",
    fontWeight: 600,
  },
  resetBtn: {
    color: "white",
    padding: "8px 18px",
    borderRadius: 8,
    fontSize: 14,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    transition: "background 0.3s",
  },

  // --- Info bar ---
  infoBar: {
    background: "#edf2f7",
    borderBottom: "1px solid #e2e8f0",
    padding: "10px 32px",
    display: "flex",
    gap: 24,
    fontSize: 13,
    color: "#4a5568",
    flexWrap: "wrap",
  },

  // --- Sections ---
  sectionsWrap: { padding: "24px 32px", maxWidth: 900, margin: "0 auto" },
  sectionBlock: {
    background: "white",
    borderRadius: 12,
    marginBottom: 16,
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    overflow: "hidden",
    border: "1px solid #e2e8f0",
  },
  sectionHeader: {
    width: "100%",
    padding: "18px 24px",
    background: "none",
    border: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 700,
    color: "#1a202c",
    textAlign: "right" as const,
    direction: "rtl",
  },
  chevron: { fontSize: 12, color: "#718096" },
  sectionBody: {
    padding: "0 24px 24px",
    borderTop: "1px solid #f0f0f0",
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },

  // --- Fields ---
  field: { display: "flex", flexDirection: "column", gap: 6, paddingTop: 16 },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: "#4a5568",
    direction: "rtl",
  },
  input: {
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #e2e8f0",
    fontSize: 14,
    color: "#1a202c",
    direction: "rtl",
    background: "#fafafa",
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
    boxSizing: "border-box" as const,
  },
  textarea: {
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #e2e8f0",
    fontSize: 14,
    color: "#1a202c",
    direction: "rtl",
    background: "#fafafa",
    outline: "none",
    resize: "vertical" as const,
    minHeight: 100,
    width: "100%",
    boxSizing: "border-box" as const,
    lineHeight: 1.6,
  },

  // --- Image field ---
  imageRow: { display: "flex", gap: 16, alignItems: "flex-start" },
  imagePreview: {
    width: 120,
    height: 80,
    objectFit: "cover" as const,
    borderRadius: 8,
    border: "1px solid #e2e8f0",
    flexShrink: 0,
  },
  imagePlaceholder: {
    width: 120,
    height: 80,
    borderRadius: 8,
    border: "1px dashed #cbd5e0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f7fafc",
    flexShrink: 0,
  },
  imageButtons: { display: "flex", flexDirection: "column", gap: 8 },
  uploadBtn: {
    padding: "8px 16px",
    borderRadius: 8,
    border: "1px solid #0199c2",
    background: "white",
    color: "#0199c2",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },
  clearBtn: {
    padding: "8px 16px",
    borderRadius: 8,
    border: "1px solid #e53e3e",
    background: "white",
    color: "#e53e3e",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },
};
