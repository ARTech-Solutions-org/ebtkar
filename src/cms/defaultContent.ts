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
    // Hero badges
    heroBadge1Number: string;
    heroBadge1Label: string;
    heroBadge2Number: string;
    heroBadge2Label: string;
    // About intro
    section1Title: string;
    section1Body: string;
    section1Body2: string;
    // Why section
    section2Title: string;
    section2Body: string;
    section2Body2: string;
    // Impact stats
    impactIntro: string;
    impactStat1Label: string;
    impactStat1Value: string;
    impactStat2Label: string;
    impactStat2Value: string;
    impactStat3Label: string;
    impactStat3Value: string;
    impactStat4Label: string;
    impactStat4Value: string;
    // Partners intro
    partnersTitle: string;
    partnersBody: string;
    // CTA
    ctaTitle: string;
    ctaSubtitle: string;
    ctaBody: string;
    // Programs section
    programsBody: string;
    // Legacy generic sections (kept for compatibility)
    section3Title: string;
    section3Body: string;
    section4Title: string;
    section4Body: string;
    heroImage: string;
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
    // Founding story
    foundingStoryTitle: string;
    foundingStoryBody: string;
    foundingStoryBody2: string;
    // Mission & Vision
    missionTitle: string;
    missionBody: string;
    visionTitle: string;
    visionBody: string;
    // Values (8)
    valuesTitle: string;
    value1Title: string;
    value1Body: string;
    value2Title: string;
    value2Body: string;
    value3Title: string;
    value3Body: string;
    value4Title: string;
    value4Body: string;
    value5Title: string;
    value5Body: string;
    value6Title: string;
    value6Body: string;
    value7Title: string;
    value7Body: string;
    value8Title: string;
    value8Body: string;
    // Strategic objectives
    strategicObjectivesTitle: string;
    strategicObjectivesBody: string;
    // Chairman message
    chairmanMessageTitle: string;
    chairmanMessageBody: string;
    // CEO message
    ceoMessageTitle: string;
    ceoMessageBody: string;
    // Board members (5 confirmed, slot for 6th)
    boardMember1Name: string;
    boardMember1Role: string;
    boardMember1Specialty: string;
    boardMember1Bio: string;
    boardMember2Name: string;
    boardMember2Role: string;
    boardMember2Specialty: string;
    boardMember2Bio: string;
    boardMember3Name: string;
    boardMember3Role: string;
    boardMember3Specialty: string;
    boardMember3Bio: string;
    boardMember4Name: string;
    boardMember4Role: string;
    boardMember4Specialty: string;
    boardMember4Bio: string;
    boardMember5Name: string;
    boardMember5Role: string;
    boardMember5Specialty: string;
    boardMember5Bio: string;
    boardMember6Name: string;
    boardMember6Role: string;
    boardMember6Specialty: string;
    boardMember6Bio: string;
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
    prog4Title: string;
    prog4Body: string;
    prog5Title: string;
    prog5Body: string;
    heroImage: string;
    prog1Image: string;
    prog2Image: string;
    prog3Image: string;
    prog4Image: string;
    prog5Image: string;
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
    card9Title: string;
    card9Body: string;
    card10Title: string;
    card10Body: string;
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
    section6Title: string;
    section6Body: string;
    // FAQ (5 questions)
    faq1Q: string;
    faq1A: string;
    faq2Q: string;
    faq2A: string;
    faq3Q: string;
    faq3A: string;
    faq4Q: string;
    faq4A: string;
    faq5Q: string;
    faq5A: string;
    heroImage: string;
    section1Image: string;
    section2Image: string;
    section3Image: string;
    section4Image: string;
    section5Image: string;
    section6Image: string;
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
    benefitsTitle: string;
    benefitsBody: string;
    areasTitle: string;
    areasBody: string;
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
    methodologyTitle: string;
    methodologyBody: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    step6: string;
    heroImage: string;
    sectionImage: string;
  };
}

export const defaultContent: SiteContent = {
  global: {
    footer: {
      phone: "+966 0000 000 0000",
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
    heroBadge1Number: "98%",
    heroBadge1Label: "نسبة رضا المستفيدين",
    heroBadge2Number: "+15",
    heroBadge2Label: "سنة من الخبرة الموثوقة",
    section1Title: "نبذة عن الجمعية",
    section1Body:
      "جمعية الابتكار والاستدامة المجتمعية هي جمعية أهلية وطنية متخصصة في تمكين الابتكار والاستدامة المجتمعية، تعمل على تطوير القدرات، وتصميم الحلول، ودعم المبادرات، وبناء الشراكات التي تسهم في تحقيق التنمية المستدامة وتعزيز جودة الحياة.",
    section1Body2:
      "نقدم حلولًا متكاملة في الابتكار المؤسسي، والابتكار المجتمعي، والاستدامة، وبناء القدرات، وأكاديمية STEAM، والدراسات والاستشارات، بما يسهم في تحويل الأفكار إلى أثر مستدام.",
    section2Title: "لماذا جمعية الابتكار والاستدامة المجتمعية؟",
    section2Body:
      "يشهد العالم تحولًا متسارعًا يجعل الابتكار والاستدامة من أهم عوامل التنافس والتنمية. وفي ظل هذا التحول، تبرز الحاجة إلى جهة وطنية متخصصة تسهم في بناء القدرات، وتطوير الحلول، وربط مختلف القطاعات، وتحويل الأفكار إلى أثر مستدام.",
    section2Body2:
      "جاء تأسيس الجمعية لتكون منصة وطنية تجمع بين الابتكار والاستدامة المجتمعية، وتدعم الأفراد والجهات في تطوير المبادرات، وتعزيز المعرفة، وبناء الشراكات، والمساهمة في معالجة التحديات المجتمعية من خلال حلول مبتكرة ومستدامة.",
    impactIntro: "رسالتنا لا تُقاس بعدد الأنشطة، بل بما تحققه من أثر مستدام.",
    impactStat1Label: "عدد المستفيدين",
    impactStat1Value: "204",
    impactStat2Label: "عدد البرامج",
    impactStat2Value: "19",
    impactStat3Label: "عدد المبادرات",
    impactStat3Value: "132",
    impactStat4Label: "عدد الشراكات",
    impactStat4Value: "8",
    partnersTitle: "الشركاء",
    partnersBody:
      "نؤمن بأن الشراكات الاستراتيجية هي أساس تحقيق الأثر المستدام، ونسعى إلى بناء منظومة تعاون فاعلة مع الجهات الحكومية، والقطاع الخاص، والقطاع غير الربحي، والجامعات، والمراكز البحثية، والشركاء المحليين والدوليين.",
    ctaTitle: "دعوة للتعاون",
    ctaSubtitle: "لنصنع الأثر معًا",
    ctaBody:
      "ندعو جميع الجهات والأفراد والشركاء إلى التعاون معنا لبناء مستقبل أكثر ابتكارًا واستدامة، وتحويل الأفكار إلى مبادرات ومشروعات تسهم في تنمية المجتمع وتحقيق مستهدفات رؤية المملكة العربية السعودية 2030.",
    section3Title: "أبرز البرامج",
    section3Body:
      "تقدّم الجمعية برامج نوعية تستهدف مختلف الفئات، وتركّز على بناء القدرات في الابتكار والاستدامة المجتمعية، من خلال برامج احترافية، وأكاديمية STEAM، وورش العمل، والمعسكرات، والهاكاثونات، والبرامج التنفيذية والقيادية.",
    programsBody:
      "تقدّم الجمعية برامج نوعية تستهدف مختلف الفئات، وتركّز على بناء القدرات في الابتكار والاستدامة المجتمعية، من خلال برامج احترافية، وأكاديمية STEAM، وورش العمل، والمعسكرات، والهاكاثونات، والبرامج التنفيذية والقيادية.",
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
    mainTitle: "عن الجمعية...",
    mainBody:
      "جمعية الابتكار والاستدامة المجتمعية هي جمعية أهلية وطنية متخصصة في تمكين الابتكار والاستدامة المجتمعية، تعمل على تطوير القدرات، وتصميم الحلول، ودعم المبادرات، وبناء الشراكات التي تسهم في تحقيق التنمية المستدامة وتعزيز جودة الحياة.\n\nتسعى الجمعية إلى أن تكون منصة وطنية تجمع بين المعرفة والابتكار والعمل المجتمعي، وتربط مختلف القطاعات لبناء حلول عملية ومستدامة للتحديات الوطنية.",
    foundingStoryTitle: "قصة التأسيس",
    foundingStoryBody:
      "جمعية الابتكار والاستدامة المجتمعية هي جمعية أهلية وطنية متخصصة في تمكين الابتكار والاستدامة المجتمعية، تعمل على تطوير القدرات، وتصميم الحلول، ودعم المبادرات، وبناء الشراكات التي تسهم في تحقيق التنمية المستدامة وتعزيز جودة الحياة.",
    foundingStoryBody2:
      "نقدم حلولًا متكاملة في الابتكار المؤسسي، والابتكار المجتمعي، والاستدامة، وبناء القدرات، وأكاديمية STEAM، والدراسات والاستشارات، بما يسهم في تحويل الأفكار إلى أثر مستدام.",
    missionTitle: "الرسالة",
    missionBody:
      "تمكين الأفراد والمنظمات والمجتمع من تطوير وتطبيق حلول مبتكرة ومستدامة، من خلال بناء القدرات، ونقل المعرفة، وتطوير المبادرات، وتعزيز الشراكات، بما يسهم في تحقيق التنمية المستدامة ومستهدفات رؤية المملكة 2030.",
    visionTitle: "الرؤية",
    visionBody:
      "أن نكون الجمعية الوطنية الرائدة في تمكين الابتكار والاستدامة المجتمعية، والإسهام في بناء مجتمع أكثر ابتكارًا واستدامة، وأثرًا.",
    valuesTitle: "القيم",
    value1Title: "المعرفة",
    value1Body: "نعزز التعلم المستمر ونقل أفضل الممارسات والخبرات.",
    value2Title: "التمكين",
    value2Body: "نبني القدرات ونوفر البيئة الداعمة للإبداع والتميز.",
    value3Title: "الاستدامة",
    value3Body: "نعمل على تطوير حلول تستمر آثارها وتحقق قيمة طويلة المدى.",
    value4Title: "الابتكار",
    value4Body: "نؤمن بأن الابتكار هو المحرك الرئيس للتنمية وصناعة المستقبل.",
    value5Title: "التحول",
    value5Body: "نقود التغيير الإيجابي نحو مستقبل أكثر ابتكارًا واستدامة.",
    value6Title: "الأثر",
    value6Body: "نقيس نجاحنا بما نحققه من أثر حقيقي ومستدام.",
    value7Title: "الشراكة",
    value7Body: "نؤمن بأن التعاون أساس النجاح وتحقيق الأثر.",
    value8Title: "الجودة",
    value8Body: "نلتزم بأعلى معايير الجودة والاحترافية في جميع أعمالنا.",
    strategicObjectivesTitle: "الأهداف الاستراتيجية",
    strategicObjectivesBody:
      "نشر ثقافة الابتكار والاستدامة المجتمعية.\nبناء القدرات الوطنية في مجالات الابتكار.\nتطوير المبادرات والمشروعات ذات الأثر.\nدعم الاستدامة المجتمعية وجودة الحياة.\nتعزيز نقل المعرفة وأفضل الممارسات.\nبناء شراكات وطنية ودولية فاعلة.\nتطوير حلول مبتكرة للتحديات المجتمعية.\nقياس وتعظيم الأثر التنموي للمبادرات والبرامج.",
    chairmanMessageTitle: "كلمة رئيس مجلس الإدارة",
    chairmanMessageBody:
      "نؤمن بأن الابتكار لم يعد خيارًا، بل أصبح ضرورة لتحقيق التنمية المستدامة وتعزيز تنافسية المجتمعات. وانطلاقًا من هذا الإيمان، تأسست جمعية الابتكار والاستدامة المجتمعية لتكون منصة وطنية تجمع بين الفكر والمعرفة والشراكات، وتمكّن الأفراد والجهات من تحويل الأفكار إلى حلول ذات أثر مستدام.\n\nنسعى إلى بناء منظومة متكاملة تدعم الابتكار في مختلف القطاعات، وتطوّر القدرات الوطنية، وتعزز الاستدامة المجتمعية، من خلال مبادرات وبرامج نوعية، وشراكات استراتيجية تسهم في تحقيق مستهدفات رؤية المملكة العربية السعودية 2030.\n\nإننا نؤمن بأن الأثر الحقيقي يبدأ بفكرة، وينمو بالشراكة، ويستمر بالاستدامة، ونتطلع إلى العمل مع جميع شركائنا لبناء مستقبل أكثر ابتكارًا واستدامة.",
    ceoMessageTitle: "كلمة المدير التنفيذي",
    ceoMessageBody:
      "نؤمن بأن الابتكار لم يعد خيارًا، بل أصبح ضرورة لتحقيق التنمية المستدامة وتعزيز تنافسية المجتمعات. وانطلاقًا من هذا الإيمان، تأسست جمعية الابتكار والاستدامة المجتمعية لتكون منصة وطنية تجمع بين الفكر والمعرفة والشراكات، وتمكّن الأفراد والجهات من تحويل الأفكار إلى حلول ذات أثر مستدام.\n\nنسعى إلى بناء منظومة متكاملة تدعم الابتكار في مختلف القطاعات، وتطوّر القدرات الوطنية، وتعزز الاستدامة المجتمعية، من خلال مبادرات وبرامج نوعية، وشراكات استراتيجية تسهم في تحقيق مستهدفات رؤية المملكة العربية السعودية 2030.\n\nإننا نؤمن بأن الأثر الحقيقي يبدأ بفكرة، وينمو بالشراكة، ويستمر بالاستدامة، ونتطلع إلى العمل مع جميع شركائنا لبناء مستقبل أكثر ابتكارًا واستدامة.",
    boardMember1Name: "د. علي صالح الشمراني",
    boardMember1Role: "رئيس مجلس الإدارة",
    boardMember1Specialty: "قيادات وطنية في مجالات الابتكار والبحث والتطوير",
    boardMember1Bio:
      "يُعد من القيادات الوطنية في مجالات الابتكار والبحث والتطوير، ويتمتع بخبرة تتجاوز 19 عامًا في قيادة منظومات الابتكار، وإدارة مراكز الأبحاث التطبيقية، وتصميم الحلول الاستراتيجية للتحديات الوطنية. يقود الجمعية برؤية طموحة نحو تمكين الابتكار والاستدامة المجتمعية، وبناء شراكات ومبادرات وطنية ذات أثر مستدام.",
    boardMember2Name: "د. عبدالله غانم آل منصور",
    boardMember2Role: "نائب رئيس مجلس الإدارة",
    boardMember2Specialty:
      "خبير دولي في الابتكار المؤسسي والاستدامة المجتمعية | مستشار تنفيذي في الابتكار والتحول الاستراتيجي",
    boardMember2Bio:
      "يقود مبادرات وطنية ودولية في الابتكار، ومتخصص في تطوير منظومات الابتكار، وبناء القدرات، وتصميم الاستراتيجيات، وتطوير المبادرات ذات الأثر، وتعزيز الاستدامة المؤسسية والمجتمعية، وبناء الشراكات الاستراتيجية لتحقيق أثر مستدام.",
    boardMember3Name: "سهاج سعود العتيبي",
    boardMember3Role: "عضو مجلس الإدارة",
    boardMember3Specialty:
      "خبير في التخطيط الاستراتيجي والتطوير المؤسسي وإدارة التغيير",
    boardMember3Bio:
      "خبير في القطاع الصحي بخبرة تمتد لأكثر من عشرين عامًا، شغل خلالها عددًا من المناصب القيادية والتنفيذية، وأسهم في قيادة مبادرات التطوير المؤسسي، والتخطيط الاستراتيجي، وإدارة التغيير، وتطوير الأعمال، ودعم الابتكار والاستدامة المجتمعية.",
    boardMember4Name: "بندر العويمري",
    boardMember4Role: "عضو مجلس الإدارة",
    boardMember4Specialty:
      "خبير في الإعلام الاستراتيجي والاتصال المؤسسي",
    boardMember4Bio:
      "متخصص في الإعلام الاستراتيجي والاتصال المؤسسي، بخبرة في بناء الاستراتيجيات الإعلامية والهوية المؤسسية، وتوظيف الاتصال المؤثر لدعم الابتكار، وتعزيز الأثر المجتمعي، وبناء الشراكات.",
    boardMember5Name: "د. عمر بن حماد البلوي",
    boardMember5Role: "عضو مجلس الإدارة",
    boardMember5Specialty:
      "مهندس محترف (PE) ورئيس تنفيذي معتمد للابتكار، ومتخصص في الهندسة الصناعية وبناء منظومات الابتكار وريادة الأعمال",
    boardMember5Bio:
      "يشغل منصب رئيس مركز الابتكار وريادة الأعمال، ويتمتع بخبرة في تطوير البرامج والمبادرات الابتكارية، واحتضان المشاريع، وتحويل الأفكار والمخرجات البحثية والطلابية إلى حلول تطبيقية ذات أثر اقتصادي ومجتمعي مستدام.",
    boardMember6Name: "",
    boardMember6Role: "عضو مجلس الإدارة",
    boardMember6Specialty: "",
    boardMember6Bio: "",
    heroImage: "",
    mainImage: "",
  },

  programs: {
    heroTitle: "البرامج والأكاديمية...",
    heroSubtitle:
      "تقدّم الجمعية برامج نوعية تستهدف مختلف الفئات، وتركّز على بناء القدرات في الابتكار والاستدامة المجتمعية، من خلال برامج احترافية، وأكاديمية STEAM، وورش العمل، والمعسكرات، والهاكاثونات، والبرامج التنفيذية والقيادية.",
    prog1Title: "الابتكار المؤسسي",
    prog1Body:
      "برنامج تدريبي احترافي يهدف إلى تمكين الجهات الحكومية والخاصة وغير الربحية من بناء منظومات ابتكار مؤسسية مستدامة، وتطوير استراتيجيات الابتكار، وتعزيز ثقافة الابتكار داخل بيئة العمل، بما يسهم في رفع كفاءة الأداء وتحقيق التميز المؤسسي.",
    prog2Title: "الاستدامة المجتمعية",
    prog2Body:
      "يهدف البرنامج إلى تعزيز فهم مفاهيم الاستدامة المجتمعية، وتمكين المشاركين من تصميم وتنفيذ مبادرات مستدامة تحقق أثرًا طويل المدى وتدعم جودة الحياة.",
    prog3Title: "التحول الرقمي والذكاء الاصطناعي",
    prog3Body:
      "برنامج يركز على تمكين المشاركين من فهم التحول الرقمي وتطبيقات الذكاء الاصطناعي، والاستفادة منها في تطوير الخدمات وتحسين العمليات ورفع كفاءة الأداء.",
    prog4Title: "بناء القدرات القيادية",
    prog4Body:
      "برنامج يهدف إلى تطوير القيادات الوطنية وتعزيز مهارات القيادة، وإدارة التغيير، والابتكار، واتخاذ القرار، بما يسهم في رفع كفاءة الأداء المؤسسي.",
    prog5Title: "أكاديمية STEAM",
    prog5Body:
      "تطوّر أكاديمية الابتكار STEAM مهارات المستقبل لدى الأطفال والطلاب والمعلمين والجامعات، من خلال برامج STEAM، والروبوتات، والبرمجة، والذكاء الاصطناعي، والتفكير التصميمي، والابتكار وريادة الأعمال، بما يسهم في إعداد جيل قادر على الإبداع والابتكار ومواكبة متطلبات المستقبل.",
    heroImage: "",
    prog1Image: "",
    prog2Image: "",
    prog3Image: "",
    prog4Image: "",
    prog5Image: "",
  },

  empowerment: {
    heroTitle: "مجالات التمكين...",
    heroSubtitle:
      "نمكّن الجهات من بناء بيئات ابتكارية مستدامة من خلال تطوير الإستراتيجيات، وإدارة الابتكار، وتعزيز الثقافة الابتكارية، وقياس النضج، وتصميم الخدمات، والحلول.",
    card1Title: "التحول المؤسسي",
    card1Body:
      "ندعم المؤسسات في تنفيذ التحول المؤسسي من خلال تطوير الهياكل التنظيمية، وتحسين الإجراءات، وإدارة التغيير، بما يعزز الكفاءة ويرفع جودة الأداء.",
    card2Title: "الاستدامة",
    card2Body:
      "نعزز استدامة المبادرات والمنظمات من خلال تطوير نماذج الاستدامة، وقياس الأثر، وربط المبادرات بأهداف التنمية المستدامة.",
    card3Title: "البحث والتطوير والابتكار",
    card3Body:
      "ندعم منظومة البحث والتطوير والابتكار من خلال ربط المعرفة بالتطبيق، وتشجيع البحث العلمي، وتطوير الحلول المبتكرة التي تستجيب للتحديات الوطنية وتحقق التنمية المستدامة.",
    card4Title: "الابتكار المؤسسي",
    card4Body:
      "نمكّن الجهات من بناء بيئات ابتكارية مستدامة من خلال تطوير الإستراتيجيات، وإدارة الابتكار، وتعزيز الثقافة الابتكارية، وقياس النضج، وتصميم الخدمات، والحلول.",
    card5Title: "المبادرات المجتمعية",
    card5Body:
      "نعمل على تصميم وتنفيذ مبادرات مجتمعية مبتكرة تستجيب لاحتياجات المجتمع، وتعزز المشاركة المجتمعية، وتسهم في تحقيق أثر مستدام.",
    card6Title: "بناء القدرات",
    card6Body:
      "نقدّم برامج احترافية وتنفيذية، وورش عمل، ومعسكرات، وهاكاثونات، لتطوير القيادات والكفاءات الوطنية في مجالات الابتكار والاستدامة.",
    card7Title: "الذكاء الاصطناعي",
    card7Body:
      "نعمل على تمكين الجهات والأفراد من الاستفادة من تقنيات الذكاء الاصطناعي في تطوير الخدمات، وتحليل البيانات، وابتكار حلول تدعم التنمية المستدامة.",
    card8Title: "التحول الرقمي",
    card8Body:
      "ندعم رحلة التحول الرقمي من خلال تبني التقنيات الحديثة، وتطوير الخدمات الرقمية، وتحسين تجربة المستفيد، ورفع كفاءة العمليات.",
    card9Title: "الاستشارات",
    card9Body:
      "نوفر دراسات متخصصة واستشارات استراتيجية تقييمًا للمبادرات والبرامج، بما يدعم اتخاذ القرار وتحقيق الأثر المؤسسي والمجتمعي.",
    card10Title: "الشراكات",
    card10Body:
      "نبني شراكات استراتيجية، وننظم المؤتمرات والملتقيات، ونعزز تبادل الخبرات ونشر المعرفة لدعم منظومة الابتكار والاستدامة.",
    heroImage: "",
  },

  initiatives: {
    heroTitle: "المــبادرات...",
    heroSubtitle:
      "تعمل الجمعية على إطلاق وتنفيذ مبادرات وطنية نوعية تسهم في معالجة التحديات المجتمعية، وتعزيز ثقافة الابتكار، ودعم الاستدامة، وبناء شراكات تحقق أثرًا مستدامًا على مستوى المملكة.",
    init1Number: "المبادرة الأولى",
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
      "تهدف المبادرة إلى تمكين المجتمع من الاستفادة من تقنيات التحول الرقمي والذكاء الاصطناعي، وتعزيز استخدامهما في تطوير الخدمات والمبادرات وتحسين جودة الحياة.",
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
    section2Title: "الأدلة",
    section2Body:
      "يوفر قسم الأدلة مجموعة من الأدلة الإرشادية والأدوات العملية التي تساعد الجهات والأفراد على تطبيق أفضل الممارسات في مجالات الابتكار والاستدامة، وتطوير المبادرات، وقياس الأثر، وتحسين الأداء المؤسسي.",
    section3Title: "الدراسات",
    section3Body:
      "يضم هذا القسم الدراسات والأبحاث المتخصصة التي تسلط الضوء على القضايا الوطنية والاتجاهات الحديثة في مجالات الابتكار والاستدامة، وتوفر معلومات تدعم متخذي القرار والباحثين والمهتمين.",
    section4Title: "التقارير",
    section4Body:
      "يتضمن هذا القسم التقارير الدورية التي تستعرض إنجازات الجمعية، ومؤشرات الأداء، ونتائج المبادرات والبرامج، إضافة إلى التقارير البحثية والتحليلية التي تدعم الشفافية وتعزز تبادل المعرفة.",
    section5Title: "الفيديوهات",
    section5Body:
      "يوفر قسم الفيديوهات محتوى مرئيًا يهدف إلى نشر المعرفة وتعزيز التعلم، من خلال تسجيلات للبرامج التدريبية، والندوات، والمؤتمرات، واللقاءات، إضافة إلى الفيديوهات التعريفية التي تسلط الضوء على مبادرات الجمعية وإنجازاتها.",
    section6Title: "البودكاست",
    section6Body:
      "يقدم البودكاست سلسلة من الحلقات الحوارية التي تستضيف خبراء ومختصين في مجالات الابتكار والاستدامة والبحث والتطوير، لمناقشة التجارب، واستعراض أفضل الممارسات، وتبادل المعرفة والخبرات.",
    faq1Q: "كيف يمكن الاستفادة من محتوى مركز المعرفة؟",
    faq1A:
      "يمكن تصفح المقالات، وتحميل الأدلة والتقارير، والاطلاع على الدراسات، ومشاهدة الفيديوهات، والاستماع إلى حلقات البودكاست المتاحة عبر الموقع.",
    faq2Q: "هل المحتوى متاح للجميع؟",
    faq2A:
      "يتوفر جزء كبير من المحتوى لجميع الزوار، بينما قد تتطلب بعض المواد أو الإصدارات المتخصصة التسجيل أو الاشتراك للاستفادة منها.",
    faq3Q: "هل يتم تحديث المحتوى بشكل دوري؟",
    faq3A:
      "نعم، يتم تحديث مركز المعرفة بشكل مستمر بإضافة مقالات، وأدلة، ودراسات، وتقارير، ومواد مرئية وصوتية جديدة، بما يواكب أحدث التطورات في مجالات الابتكار والاستدامة.",
    faq4Q: "هل يمكن تحميل الأدلة والتقارير؟",
    faq4A:
      "نعم، يمكن تحميل الأدلة والتقارير المتاحة بصيغ إلكترونية، وفقًا لسياسة النشر الخاصة بالجمعية.",
    faq5Q: "هل يمكن المساهمة بمحتوى علمي أو بحثي؟",
    faq5A:
      "ترحب الجمعية بالتعاون مع الباحثين والخبراء والجهات المتخصصة للمساهمة في إثراء المحتوى المعرفي، وفق ضوابط ومعايير النشر المعتمدة.",
    heroImage: "",
    section1Image: "",
    section2Image: "",
    section3Image: "",
    section4Image: "",
    section5Image: "",
    section6Image: "",
  },

  governance: {
    heroTitle: "الحوكمة والشفافية...",
    heroSubtitle:
      "تعتمد الجمعية إطارًا متكاملًا للحوكمة، يرتكز على الالتزام باللوائح والأنظمة المنظمة للقطاع غير الربحي في المملكة العربية السعودية، بما يضمن الامتثال ويعزز كفاءة الأداء المؤسسي.",
    sectionTitle: "الحوكمة والشفافية",
    sectionBodyLine1:
      "تلتزم جمعية الابتكار والاستدامة المجتمعية بأعلى معايير الحوكمة والشفافية والامتثال، من خلال تطبيق الأنظمة واللوائح، والإفصاح المؤسسي، وإدارة المخاطر، بما يعزز الثقة ويضمن استدامة الأداء وتحقيق الأثر.",
    sectionBodyLine2:
      "وتحرص الجمعية على ترسيخ مبادئ النزاهة والمساءلة والشفافية في جميع أعمالها، وتوفير المعلومات والوثائق ذات العلاقة بما يعزز ثقة المستفيدين والشركاء، ويدعم استدامة العمل المؤسسي.",
    heroImage: "",
    sectionImage: "",
  },

  policies: {
    heroTitle: "اللوائح والسياسات...",
    heroSubtitle:
      "تلتزم الجمعية بتطبيق اللوائح والأنظمة المنظمة لعمل القطاع غير الربحي في المملكة العربية السعودية، وتعمل وفق الأطر النظامية المعتمدة لضمان الامتثال وتحقيق الحوكمة المؤسسية.",
    card1Title: "لائحة العضوية",
    card2Title: "اللائحة التنظيمية",
    card3Title: "اللائحة الأساسية للجمعية",
    card4Title: "لائحة الصلاحيات",
    card5Title: "اللائحة المالية",
    card6Title: "لائحة الموارد البشرية",
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
    sectionTitle: "الشركاء...",
    sectionBodyLine1:
      "نؤمن بأن الشراكات الاستراتيجية هي أساس تحقيق الأثر المستدام، ونسعى إلى بناء منظومة تعاون فاعلة مع الجهات الحكومية، والقطاع الخاص، والقطاع غير الربحي، والجامعات، والمراكز البحثية، والشركاء المحليين والدوليين.",
    sectionBodyLine2:
      "وتسعى الجمعية إلى بناء علاقات طويلة الأمد تقوم على تبادل المعرفة، وتكامل الخبرات، وتوحيد الجهود، بما يسهم في تطوير المبادرات والبرامج، وتحقيق التنمية المستدامة، ودعم مستهدفات رؤية المملكة العربية السعودية 2030.",
    benefitsTitle: "مزايا الشراكة",
    benefitsBody:
      "تمنح الشراكة مع الجمعية فرصًا متعددة لتحقيق قيمة مضافة لجميع الأطراف، ومن أبرزها:\n- تبادل الخبرات والمعرفة وأفضل الممارسات.\n- بناء شراكات استراتيجية مع مختلف القطاعات.\n- المشاركة في تنفيذ برامج ومبادرات وطنية ذات أثر مستدام.\n- الاستفادة من البرامج التدريبية وورش العمل والمؤتمرات.\n- تعزيز المسؤولية الاجتماعية والاستدامة المؤسسية.\n- المساهمة في تطوير حلول مبتكرة للتحديات المجتمعية.\n- الإسهام في تحقيق مستهدفات رؤية المملكة العربية السعودية 2030.\n- توسيع شبكة العلاقات والتعاون مع الجهات المحلية والدولية.",
    areasTitle: "مجالات التعاون",
    areasBody:
      "التحول الرقمي، التحول المؤسسي، الاستدامة المجتمعية، البحث والتطوير والابتكار، الابتكار المؤسسي، تنظيم المؤتمرات والملتقيات، الدراسات والاستشارات، المبادرات المجتمعية، بناء القدرات، الذكاء الاصطناعي، رعاية المبادرات والفعاليات، نقل المعرفة وتبادل الخبرات، البرامج التدريبية.",
    heroImage: "",
    sectionImage: "",
  },

  impact: {
    heroTitle: "الأثــــــر...",
    heroSubtitle:
      "تؤمن جمعية الابتكار والاستدامة المجتمعية بأن النجاح الحقيقي لا يقاس بعدد البرامج أو المبادرات المنفذة، وإنما بما تتركه من أثر إيجابي ومستدام على الأفراد والمؤسسات والمجتمع.",
    sectionTitle: "الأثر...",
    sectionBodyLine1:
      "تؤمن جمعية الابتكار والاستدامة المجتمعية بأن النجاح الحقيقي لا يقاس بعدد البرامج أو المبادرات المنفذة، وإنما بما تتركه من أثر إيجابي ومستدام على الأفراد والمؤسسات والمجتمع. ومن هذا المنطلق، تعمل الجمعية على تصميم وتنفيذ برامج ومبادرات نوعية تسهم في بناء القدرات، وتعزيز الابتكار، وتطوير الشراكات، ودعم التنمية المستدامة بما ينسجم مع مستهدفات رؤية المملكة العربية السعودية 2030.",
    sectionBodyLine2: "",
    methodologyTitle: "منهجية قياس الأثر",
    methodologyBody:
      "تعتمد الجمعية منهجية متكاملة لقياس أثر برامجها ومبادراتها، بهدف تقييم النتائج، وتحسين الأداء، وتعظيم القيمة المضافة للمستفيدين والشركاء، وترتكز المنهجية على مجموعة من المراحل.",
    step1: "تحديد الأهداف",
    step2: "تحديد مؤشرات الأداء",
    step3: "جمع البيانات",
    step4: "تحليل النتائج",
    step5: "إعداد التقارير",
    step6: "التحسين المستمر",
    heroImage: "",
    sectionImage: "",
  },
};
