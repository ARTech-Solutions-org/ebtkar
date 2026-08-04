// ============================================================
// DEFAULT CONTENT — extracted from original page components
// Do NOT change the structure. Values are replaced at runtime
// by the CMS admin panel via localStorage persistence.
// ============================================================

export interface SiteContent {
  global: {
    footer: {
      phone: string;
      phoneLabel: string;
    };
    nav: {
      home: string;
      about: string;
      programs: string;
      empowerment: string;
      initiatives: string;
      knowledge: string;
      partners: string;
      impact: string;
      governance: string;
      policies: string;
      contact: string;
    };
  };

  // ---- HOME (Frame3877) ----
  home: {
    heroTitle: string;
    heroSubtitle: string;
    section1Title: string;
    section1Body: string;
    section2Title: string;
    section2Body: string;
    section3Title: string;
    section3Body: string;
    section4Title: string;
    section4Body: string;
    heroImage: string; // URL/path override
    section1Image: string;
    section2Image: string;
    section3Image: string;
    section4Image: string;
  };

  // ---- ABOUT (Frame3876) ----
  about: {
    heroTitle: string;
    heroSubtitle: string;
    mainTitle: string;
    mainBody: string;
    visionTitle: string;
    visionBody: string;
    missionTitle: string;
    missionBody: string;
    valuesTitle: string;
    value1Title: string;
    value1Body: string;
    value2Title: string;
    value2Body: string;
    value3Title: string;
    value3Body: string;
    value4Title: string;
    value4Body: string;
    heroImage: string;
    mainImage: string;
  };

  // ---- PROGRAMS (Frame3875) ----
  programs: {
    heroTitle: string;
    heroSubtitle: string;
    prog1Title: string;
    prog1Body: string;
    prog2Title: string;
    prog2Body: string;
    prog3Title: string;
    prog3Body: string;
    heroImage: string;
    prog1Image: string;
    prog2Image: string;
    prog3Image: string;
  };

  // ---- EMPOWERMENT (Frame3871) ----
  empowerment: {
    heroTitle: string;
    heroSubtitle: string;
    card1Title: string;
    card1Body: string;
    card2Title: string;
    card2Body: string;
    card3Title: string;
    card3Body: string;
    card4Title: string;
    card4Body: string;
    card5Title: string;
    card5Body: string;
    card6Title: string;
    card6Body: string;
    card7Title: string;
    card7Body: string;
    card8Title: string;
    card8Body: string;
    heroImage: string;
  };

  // ---- INITIATIVES (Frame3867) ----
  initiatives: {
    heroTitle: string;
    heroSubtitle: string;
    init1Number: string;
    init1Title: string;
    init1ParticipationTitle: string;
    init1Body: string;
    init1Participation: string;
    init2Number: string;
    init2Title: string;
    init2ParticipationTitle: string;
    init2Body: string;
    init2Participation: string;
    init3Number: string;
    init3TitleLine1: string;
    init3TitleLine2: string;
    init3ParticipationTitle: string;
    init3Body: string;
    init3Participation: string;
    init4Number: string;
    init4Title: string;
    init4ParticipationTitle: string;
    init4Body: string;
    init4Participation: string;
    init5Number: string;
    init5TitleLine1: string;
    init5TitleLine2: string;
    init5ParticipationTitle: string;
    init5Body: string;
    init5Participation: string;
    heroImage: string;
    init1Image: string;
    init2Image: string;
    init3Image: string;
    init4Image: string;
    init5Image: string;
  };

  // ---- KNOWLEDGE (Frame3874) ----
  knowledge: {
    heroTitle: string;
    heroSubtitle: string;
    section1Title: string;
    section1Body: string;
    section2Title: string;
    section2Body: string;
    section3Title: string;
    section3Body: string;
    section4Title: string;
    section4Body: string;
    section5Title: string;
    section5Body: string;
    heroImage: string;
    section1Image: string;
    section2Image: string;
    section3Image: string;
    section4Image: string;
    section5Image: string;
  };

  // ---- GOVERNANCE (Frame3868) ----
  governance: {
    heroTitle: string;
    heroSubtitle: string;
    sectionTitle: string;
    sectionBodyLine1: string;
    sectionBodyLine2: string;
    heroImage: string;
    sectionImage: string;
  };

  // ---- POLICIES (Frame3869) ----
  policies: {
    heroTitle: string;
    heroSubtitle: string;
    card1Title: string;
    card2Title: string;
    card3Title: string;
    card4Title: string;
    card5Title: string;
    card6Title: string;
    heroImage: string;
  };

  // ---- CONTACT (Frame3870) ----
  contact: {
    heroTitle: string;
    heroSubtitle: string;
    field1Placeholder: string;
    field2Placeholder: string;
    field3Placeholder: string;
    field4Placeholder: string;
    field5Placeholder: string;
    field6Placeholder: string;
    field7Placeholder: string;
    submitButton: string;
    faq1Q: string;
    faq1A: string;
    faq2Q: string;
    faq2A: string;
    faq3Q: string;
    faq3A: string;
    faq4Q: string;
    faq4A: string;
    heroImage: string;
  };

  // ---- PARTNERS (Frame3872) ----
  partners: {
    heroTitle: string;
    heroSubtitle: string;
    sectionTitle: string;
    sectionBodyLine1: string;
    sectionBodyLine2: string;
    heroImage: string;
    sectionImage: string;
  };

  // ---- IMPACT (Frame3873) ----
  impact: {
    heroTitle: string;
    heroSubtitle: string;
    sectionTitle: string;
    sectionBodyLine1: string;
    sectionBodyLine2: string;
    heroImage: string;
    sectionImage: string;
  };
}

export const defaultContent: SiteContent = {
  global: {
    footer: {
      phone: "+966 00 000 0000",
      phoneLabel: "رقم التواصل:",
    },
    nav: {
      home: "الـرئيسية",
      about: "عن الجمعية",
      programs: "البـــرامج والأكاديمية",
      empowerment: "مجـــالات التمكين",
      initiatives: "المبادرات",
      knowledge: "مـركـز المعرفة",
      partners: "الشركاء",
      impact: "الأثر",
      governance: "الحـوكمة والشفافية",
      policies: "اللوائح و السياسات",
      contact: "تواصل معـنا",
    },
  },

  home: {
    heroTitle: "نمــــكّن الابتكار",
    heroSubtitle: "ونصنع أثـراً مستداماً",
    section1Title: "ما يميزنا",
    section1Body: "نبني مستقبلاً مستداماً من خلال الابتكار والشراكة المجتمعية",
    section2Title: "رؤيتنا",
    section2Body: "مجتمع مبتكر ومستدام يُسهم في تحقيق رؤية 2030",
    section3Title: "مهمتنا",
    section3Body: "تمكين الأفراد والجهات من بناء بيئات مبتكرة مستدامة",
    section4Title: "أثرنا",
    section4Body: "شراكات استراتيجية، ومبادرات نوعية، وقدرات بشرية متطورة",
    heroImage: "",
    section1Image: "",
    section2Image: "",
    section3Image: "",
    section4Image: "",
  },

  about: {
    heroTitle: "عن الجمعية...",
    heroSubtitle:
      "جمعية الابتكار والاستدامة المجتمعية هي جمعية أهلية وطنية متخصصة في تمكين الابتكار والاستدامة المجتمعية، تعمل على تطوير القدرات، وتصميم الحلول، ودعم المبادرات، وبناء الشراكات التي تسهم في تحقيق التنمية المستدامة وتعزيز جودة الحياة.\n\nتسعى الجمعية إلى أن تكون منصة وطنية تجمع بين المعرفة والابتكار والعمل المجتمعي، وتربط مختلف القطاعات لبناء حلول عملية ومستدامة للتحديات الوطنية.",
    mainTitle: "جمعية الابتكار والاستدامة",
    mainBody:
      "تعمل الجمعية على بناء منظومة متكاملة تجمع بين الأفراد والمؤسسات والقطاعات المختلفة، بهدف تحقيق أثر تنموي حقيقي ومستدام، يتوافق مع مستهدفات رؤية المملكة العربية السعودية 2030.",
    visionTitle: "الرؤية",
    visionBody:
      "مجتمع مبتكر ومستدام يقود التحول نحو مستقبل أفضل، مُسهمًا في تحقيق مستهدفات رؤية المملكة العربية السعودية 2030.",
    missionTitle: "الرسالة",
    missionBody:
      "تمكين الأفراد والجهات من بناء بيئات ابتكارية مستدامة، من خلال تطوير القدرات، ونشر المعرفة، وتعزيز الشراكات، وقيادة المبادرات التي تحقق أثرًا مجتمعيًا حقيقيًا.",
    valuesTitle: "قيمنا",
    value1Title: "الابتكار",
    value1Body: "نؤمن بأن الابتكار هو محرك التغيير والتطور في كل جانب من جوانب الحياة.",
    value2Title: "الاستدامة",
    value2Body: "نسعى إلى تحقيق التوازن بين التنمية الاقتصادية والاجتماعية والبيئية.",
    value3Title: "الشراكة",
    value3Body: "نؤمن بقوة التعاون وبناء الشراكات الاستراتيجية لتحقيق الأهداف المشتركة.",
    value4Title: "التميز",
    value4Body: "نلتزم بأعلى معايير الجودة والكفاءة في جميع أعمالنا ومبادراتنا.",
    heroImage: "",
    mainImage: "",
  },

  programs: {
    heroTitle: "البرامج والأكاديمية...",
    heroSubtitle:
      "تقدم الجمعية مجموعة متنوعة من البرامج التدريبية والأكاديمية المتخصصة في مجالات الابتكار والاستدامة.",
    prog1Title: "أكاديمية الابتكار",
    prog1Body:
      "برامج تدريبية متخصصة في مجالات الابتكار والتصميم التفكيري وريادة الأعمال وتطوير النماذج الإبداعية.",
    prog2Title: "برنامج الاستدامة",
    prog2Body:
      "برامج متخصصة في مجالات الاستدامة البيئية والاجتماعية وقياس الأثر وإعداد تقارير الاستدامة.",
    prog3Title: "برامج التطوير المؤسسي",
    prog3Body:
      "حلول تدريبية متكاملة لتطوير الكفاءات المؤسسية وبناء القدرات وتعزيز ثقافة الابتكار.",
    heroImage: "",
    prog1Image: "",
    prog2Image: "",
    prog3Image: "",
  },

  empowerment: {
    heroTitle: "مجالات التمكين...",
    heroSubtitle:
      "نمكّن الجهات من بناء بيئات ابتكارية مستدامة من خلال تطوير الإستراتيجيات، والحوكمة، وإدارة الابتكار، وتعزيز الثقافة الابتكارية، وقياس النضج، وتصميم الخدمات ،والحلول.",
    card1Title: "استراتيجية الابتكار",
    card1Body:
      "نصمم ونطوّر استراتيجيات الابتكار المتكاملة التي تحدد الاتجاه وتُرسي الأهداف، وتُبني خارطة طريق واضحة نحو تحقيق التميز والريادة المؤسسية.",
    card2Title: "حوكمة الابتكار",
    card2Body:
      "نبني أنظمة حوكمة الابتكار الشاملة التي تُرسي الهياكل والسياسات والآليات اللازمة لضمان توجيه الجهود الابتكارية نحو تحقيق الأهداف الاستراتيجية.",
    card3Title: "ثقافة الابتكار",
    card3Body:
      "نعمل على تحويل الثقافة التنظيمية إلى بيئة مُحفِّزة للإبداع والابتكار، من خلال تصميم وتنفيذ البرامج والمبادرات التي تُرسّخ قيم الإبداع والمجازفة المحسوبة.",
    card4Title: "إدارة الابتكار",
    card4Body:
      "نقدم الحلول المتكاملة لإدارة الابتكار التي تشمل بناء المختبرات والمسرّعات الداخلية، وتصميم العمليات والأنظمة اللازمة لتحويل الأفكار إلى مشاريع ناجحة.",
    card5Title: "قياس نضج الابتكار",
    card5Body:
      "نقيس النضج الابتكاري للمنظمات من خلال نماذج ومنهجيات معتمدة، ونقدم تقييمًا شاملًا للوضع الراهن، وخطة طريق واضحة لتطوير القدرات الابتكارية.",
    card6Title: "تصميم الخدمات والحلول",
    card6Body:
      "نُصمم خدمات ومنتجات مبتكرة تُلبي احتياجات العملاء باستخدام منهجيات التصميم المتمحور حول الإنسان، وتحليل بيانات المستخدمين، وأدوات الابتكار المتطورة.",
    card7Title: "التحول المؤسسي",
    card7Body:
      "ندعم المؤسسات في تنفيذ التحول المؤسسي من خلال تطوير الهياكل التنظيمية، وتحسين الإجراءات، وإدارة التغيير، بما يعزز الكفاءة ويرفع جودة الأداء.",
    card8Title: "المبادرات المجتمعية",
    card8Body:
      "نعمل على تصميم وتنفيذ مبادرات مجتمعية مبتكرة تستجيب لاحتياجات المجتمع، وتعزز المشاركة المجتمعية، وتسهم في تحقيق أثر مستدام.",
    heroImage: "",
  },

  initiatives: {
    heroTitle: "المــبادرات...",
    heroSubtitle:
      "تعمل الجمعية على إطلاق وتنفيذ مبادرات وطنية نوعية تسهم في معالجة التحديات المجتمعية، وتعزيز ثقافة الابتكار، ودعم الاستدامة، وبناء شراكات تحقق أثرًا مستدامًا على مستوى المملكة.",
    init1Number: "المبادرة الاولـي",
    init1Title: "مبادرة الابتكار المجتمعي",
    init1ParticipationTitle: "فـرص المشاركة",
    init1Body:
      "تهدف مبادرة الابتكار المجتمعي إلى تمكين الأفراد والجهات من تطوير حلول مبتكرة للتحديات المجتمعية، من خلال تعزيز المشاركة المجتمعية، ودعم الأفكار الإبداعية، وبناء شراكات فاعلة تسهم في تحقيق أثر مستدام.",
    init1Participation:
      "يمكن للأفراد والجهات المشاركة من خلال تقديم الأفكار، أو الانضمام إلى فرق العمل، أو المساهمة في تنفيذ المبادرات، أو دعمها كشركاء.",
    init2Number: "المبادرة الثانية",
    init2Title: "مبادرة الابتكار الأخضر والاستدامة",
    init2ParticipationTitle: "فـرص المشاركة",
    init2Body:
      "تسعى المبادرة إلى نشر ثقافة الاستدامة البيئية وتشجيع تبني الممارسات المستدامة، من خلال تنفيذ مشاريع ومبادرات تدعم الحفاظ على الموارد وتعزز المسؤولية البيئية.",
    init2Participation:
      "يمكن المشاركة من خلال التطوع، أو دعم المبادرات، أو تنفيذ مشاريع مشتركة، أو الانضمام إلى الأنشطة البيئية.",
    init3Number: "المبادرة الثالثة",
    init3TitleLine1: "مبادرة قادة",
    init3TitleLine2: "الابتكار",
    init3ParticipationTitle: "فـرص المشاركة",
    init3Body:
      "مبادرة تهدف إلى إعداد جيل من القيادات الوطنية القادرة على قيادة الابتكار وإدارة التغيير، من خلال برامج تدريبية، وورش عمل، وتجارب عملية تسهم في تطوير المهارات القيادية.",
    init3Participation:
      "يمكن التسجيل في البرامج القيادية، أو ترشيح المشاركين من الجهات، أو المساهمة كشريك في تنفيذ المبادرة.",
    init4Number: "المبادرة الرابعة",
    init4Title: "مبادرة الابتكار الرقمي والذكاء الاصطناعي",
    init4ParticipationTitle: "فـرص المشاركة",
    init4Body:
      "تهدف المبادرة إلى تمكين المجتمع من الاستفادة من تقنيات التحول الرقمي والذكاء الاصطناعي، وتعزيز استخدامها في تطوير الخدمات والمبادرات وتحسين جودة الحياة.",
    init4Participation:
      "يمكن المشاركة من خلال التسجيل في البرامج، أو تقديم الأفكار، أو رعاية المبادرات، أو التعاون في تنفيذ الأنشطة.",
    init5Number: "المبادرة الخامسة",
    init5TitleLine1: "مبادرة",
    init5TitleLine2: "شركاء الأثر",
    init5ParticipationTitle: "فـرص المشاركة",
    init5Body:
      "تسعى المبادرة إلى بناء شبكة من الشركاء الاستراتيجيين من مختلف القطاعات، للعمل معًا على تنفيذ مبادرات وبرامج تحقق أثرًا تنمويًا مستدامًا، وتدعم مستهدفات رؤية المملكة العربية السعودية 2030.",
    init5Participation:
      "يمكن للجهات الراغبة التعاون مع الجمعية من خلال توقيع اتفاقيات شراكة، أو دعم المبادرات، أو المشاركة في تنفيذ البرامج، أو تقديم الخبرات والاستشارات بما يسهم في تحقيق الأهداف المشتركة.",
    heroImage: "",
    init1Image: "",
    init2Image: "",
    init3Image: "",
    init4Image: "",
    init5Image: "",
  },

  knowledge: {
    heroTitle: "مركز المعرفة...",
    heroSubtitle:
      "يمثل مركز المعرفة منصة متخصصة لنشر المحتوى المعرفي في مجالات الابتكار والاستدامة المجتمعية، ويهدف إلى تمكين الأفراد والجهات من الوصول إلى مصادر معرفية موثوقة، وأدلة عملية، ودراسات وتقارير متخصصة، تسهم في تعزيز الوعي، وبناء القدرات، ودعم اتخاذ القرار، ونشر أفضل الممارسات بما يتوافق مع مستهدفات رؤية المملكة العربية السعودية 2030.",
    section1Title: "المقالات",
    section1Body:
      "يضم قسم المقالات مجموعة من المقالات المتخصصة التي تتناول أحدث المفاهيم والتوجهات في مجالات الابتكار، والاستدامة، والتحول المؤسسي، والتحول الرقمي، والذكاء الاصطناعي، وبناء القدرات، مع التركيز على تقديم محتوى معرفي مبسط يدعم التطوير المؤسسي والمجتمعي.",
    section2Title: "الدراسات",
    section2Body:
      "يضم هذا القسم الدراسات والأبحاث المتخصصة التي تسلط الضوء على القضايا الوطنية والاتجاهات الحديثة في مجالات الابتكار والاستدامة، وتوفر معلومات تدعم متخذي القرار والباحثين والمهتمين.",
    section3Title: "التقارير",
    section3Body:
      "يتضمن هذا القسم التقارير الدورية التي تستعرض إنجازات الجمعية، ومؤشرات الأداء، ونتائج المبادرات والبرامج، إضافة إلى التقارير البحثية والتحليلية التي تدعم الشفافية وتعزز تبادل المعرفة.",
    section4Title: "الفيديوهات",
    section4Body:
      "يوفر قسم الفيديوهات محتوى مرئيًا يهدف إلى نشر المعرفة وتعزيز التعلم، من خلال تسجيلات للبرامج التدريبية، والندوات، والمؤتمرات، واللقاءات، إضافة إلى الفيديوهات التعريفية التي تسلط الضوء على مبادرات الجمعية وإنجازاتها.",
    section5Title: "البودكاست",
    section5Body:
      "يقدم البودكاست سلسلة من الحلقات الحوارية التي تستضيف خبراء ومختصين في مجالات الابتكار والاستدامة والبحث والتطوير، لمناقشة التجارب، واستعراض أفضل الممارسات، وتبادل المعرفة والخبرات.",
    heroImage: "",
    section1Image: "",
    section2Image: "",
    section3Image: "",
    section4Image: "",
    section5Image: "",
  },

  governance: {
    heroTitle: "الحكومة والشفافية...",
    heroSubtitle:
      "تعتمد الجمعية إطارًا متكاملًا للحوكمة، يرتكز على الالتزام باللوائح والأنظمة المنظمة للقطاع غير الربحي في المملكة العربية السعودية، بما يضمن الامتثال ويعزز كفاءة الأداء المؤسسي.",
    sectionTitle: "الحكومة والشفافية",
    sectionBodyLine1:
      "تلتزم جمعية الابتكار والاستدامة المجتمعية بأعلى معايير الحوكمة والشفافية والامتثال، من خلال تطبيق الأنظمة واللوائح، والإفصاح المؤسسي، وإدارة المخاطر، بما يعزز الثقة ويضمن استدامة الأداء وتحقيق الأثر.",
    sectionBodyLine2:
      "وتحرص الجمعية على ترسيخ مبادئ النزاهة والمساءلة والشفافية في جميع أعمالها، وتوفير المعلومات والوثائق ذات العلاقة بما يعزز ثقة المستفيدين والشركاء، ويدعم استدامة العمل المؤسسي",
    heroImage: "",
    sectionImage: "",
  },

  policies: {
    heroTitle: "اللوائح والسياسات...",
    heroSubtitle:
      "تلتزم الجمعية بتطبيق منظومة متكاملة من اللوائح والسياسات المؤسسية التي تضمن الامتثال، وتعزز الحوكمة، وتُرسي مبادئ الشفافية والنزاهة.",
    card1Title: "لائحة العضوية",
    card2Title: "لائحة المالية",
    card3Title: "لائحة الموارد البشرية",
    card4Title: "لائحة المشتريات",
    card5Title: "سياسة الخصوصية",
    card6Title: "لائحة الحوكمة",
    heroImage: "",
  },

  contact: {
    heroTitle: "نموذج التواصل...",
    heroSubtitle:
      "يمكن للزوار إرسال استفساراتهم أو مقترحاتهم أو طلبات التعاون من خلال تعبئة نموذج التواصل.",
    field1Placeholder: "الاسم الكامل",
    field2Placeholder: "اسم الجهة (اختياري)",
    field3Placeholder: "البريد الإلكتروني",
    field4Placeholder: "رقم الهاتف",
    field5Placeholder: "موضوع الرسالة",
    field6Placeholder: "نوع الطلب",
    field7Placeholder: "تفاصيل الرسالة",
    submitButton: "ارسال",
    faq1Q: "كيف يمكن التواصل مع الجمعية؟",
    faq1A:
      "يمكن التواصل من خلال نموذج التواصل الإلكتروني، أو عبر الهاتف، أو البريد الإلكتروني، أو حسابات الجمعية على منصات التواصل الاجتماعي.",
    faq2Q: "متى يتم الرد على الاستفسارات؟",
    faq2A:
      "تسعى الجمعية إلى الرد على جميع الاستفسارات وطلبات التواصل خلال أيام العمل الرسمية وفي أقرب وقت ممكن.",
    faq3Q: "كيف يمكن طلب شراكة مع الجمعية؟",
    faq3A:
      "يمكن تقديم طلب شراكة من خلال نموذج التواصل أو عبر صفحة الشركاء، وسيتم التواصل مع الجهة لاستكمال إجراءات الشراكة.",
    faq4Q: "هل يمكن التسجيل في البرامج من خلال الموقع؟",
    faq4A:
      "نعم، عند توفر التسجيل الإلكتروني يمكن التقديم مباشرة من خلال صفحة البرامج، وسيتم الإعلان عن البرامج والمواعيد المتاحة عبر الموقع.",
    heroImage: "",
  },

  partners: {
    heroTitle: "الشـــركاء...",
    heroSubtitle:
      "نؤمن بأن الشراكات الاستراتيجية هي أساس تحقيق الأثر المستدام، ونسعى إلى بناء منظومة تعاون فاعلة مع مختلف القطاعات.",
    sectionTitle: "الشراكات الاستراتيجية",
    sectionBodyLine1:
      "نؤمن بأن الشراكات الاستراتيجية هي أساس تحقيق الأثر المستدام، ونسعى إلى بناء منظومة تعاون فاعلة مع الجهات الحكومية، والقطاع الخاص، والقطاع غير الربحي، والجامعات، والمراكز البحثية، والشركاء المحليين والدوليين.",
    sectionBodyLine2:
      "وتسعى الجمعية إلى بناء علاقات طويلة الأمد تقوم على تبادل المعرفة، وتكامل الخبرات، وتوحيد الجهود، بما يسهم في تطوير المبادرات والبرامج، وتحقيق التنمية المستدامة، ودعم مستهدفات رؤية المملكة العربية السعودية 2030.",
    heroImage: "",
    sectionImage: "",
  },

  impact: {
    heroTitle: "الأثــــــر...",
    heroSubtitle:
      "تؤمن الجمعية بأن النجاح الحقيقي لا يقاس بعدد البرامج أو المبادرات المنفذة، وإنما بما تتركه من أثر إيجابي ومستدام على المجتمع.",
    sectionTitle: "مستهدفات الأثر المستدام",
    sectionBodyLine1:
      "تؤمن جمعية الابتكار والاستدامة المجتمعية بأن النجاح الحقيقي لا يقاس بعدد البرامج أو المبادرات المنفذة، وإنما بما تتركه من أثر إيجابي ومستدام على الأفراد والمؤسسات والمجتمع.",
    sectionBodyLine2:
      "ومن هذا المنطلق، تعمل الجمعية على تصميم وتنفيذ برامج ومبادرات نوعية تُسهم في بناء القدرات، وتعزيز الابتكار، وتطوير الشراكات، ودعم التنمية المستدامة بما ينسجم مع مستهدفات رؤية المملكة العربية السعودية 2030.",
    heroImage: "",
    sectionImage: "",
  },
};
