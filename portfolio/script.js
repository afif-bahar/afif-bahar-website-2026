

const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
const cursorRing = document.createElement('div');
cursorRing.className = 'custom-cursor-ring';
document.body.appendChild(cursor);
document.body.appendChild(cursorRing);

let mouseX = -100, mouseY = -100;
let ringX = -100, ringY = -100;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

// Ring suit avec lag élégant
function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Hover sur éléments interactifs
document.querySelectorAll('a, button, .expertise-card, .ach-card, .lang-item, .contact-card, .tcard-tags span, .about-stat-mini').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hovered');
    cursorRing.classList.add('hovered');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovered');
    cursorRing.classList.remove('hovered');
  });
});
document.addEventListener('mousedown', () => cursor.classList.add('clicked'));
document.addEventListener('mouseup', () => cursor.classList.remove('clicked'));

// ════════════════════════════════════════════════
// TRANSLATIONS
// ════════════════════════════════════════════════
const i18n = {
  en: {
    "brand.name": "Afif Bahar",
    "nav.about": "About","nav.expertise": "Expertise","nav.experience": "Experience",
    "nav.achievements": "Impact","nav.education": "Education","nav.contact": "Contact",
    "hero.eyebrow": "Lead Financial Analyst",
    "hero.tagline": "Transforming financial data into strategic business decisions.",
    "hero.stat1": "Years Experience","hero.stat2": "EMEA Markets","hero.stat3": "Languages",
    "hero.btn1": "View Experience","hero.btn2": "Contact Me",
    "about.eyebrow": "About Me","about.title": "Finance That Drives Decisions",
    "about.badge_num": "30+","about.badge_label": "Years in Finance",
    "about.stat1": "Clear Financial Storytelling","about.stat2": "Executive Decision Support",
    "about.stat3": "Operational Discipline","about.stat4": "Sustainable Business Growth",
    "about.p1": "With over three decades of hands-on experience across multinational environments, I have built a career at the intersection of financial rigor, business performance, and executive decision-making. My journey across Ansaldo Energia and Ericsson Group has given me a broad view of finance operations, from financial administration and project controlling to leading financial analysis across Customer Units and international markets.",
    "about.p2": "I specialize in financial planning, forecasting, and performance reporting — not as abstract exercises, but as instruments of real business influence. I have guided cross-functional teams through complex system migrations (SAP, iScala), navigated multi-country tax and audit landscapes, and partnered with banking institutions and customers to protect financial health and ensure compliance.",
    "about.p3": "My approach is simple: numbers tell stories. I make sure those stories are told clearly, strategically, and with impact.",
    "about.pillar1": "Strategic Forecasting","about.pillar2": "Multi-Country Operations",
    "about.pillar3": "Compliance & Audit","about.pillar4": "System Migrations",
    "expertise.eyebrow": "Core Competencies","expertise.title": "Core Expertise Across Finance Operations",
    "expertise.c1.title": "Financial Analysis & Reporting","expertise.c1.desc": "Comprehensive P&L analysis, balance sheet management, and executive-level reporting that enable confident business decisions.",
    "expertise.c2.title": "Forecasting & Budgeting","expertise.c2.desc": "Target-setting and rolling forecasts that align financial planning with strategic objectives across complex organizational units.",
    "expertise.c3.title": "Business Performance Monitoring","expertise.c3.desc": "Real-time KPI tracking, variance analysis, and performance optimization to ensure business units achieve or exceed financial targets.",
    "expertise.c4.title": "Compliance & Ethical Standards","expertise.c4.desc": "End-to-end coordination of tax audits, social audits, and regulatory compliance across multiple jurisdictions with zero tolerance for risk.",
    "expertise.c5.title": "SAP Business Intelligence","expertise.c5.desc": "Advanced SAP BI expertise including system migration support, process continuity, and integration with finance operations.",
    "expertise.c6.title": "Power BI","expertise.c6.desc": "Interactive dashboards and data visualization solutions that transform complex financial data into clear management insights.",
    "expertise.c7.title": "Cross-functional Leadership","expertise.c7.desc": "Proven track record of leading multi-disciplinary teams across borders, aligning finance, operations, and commercial stakeholders.",
    "expertise.c8.title": "Strategic Decision Support","expertise.c8.desc": "Translating financial complexity into clear, actionable insights that empower executive and operational leadership to move with confidence.",
    "exp.eyebrow": "Professional Journey","exp.title": "Three Decades of Impact",
    "exp.job1.title": "Lead Financial Analyst — CU FBAT",
    "exp.job1.b1": "Led forecasting, financial planning, reporting, and target-setting across the Customer Unit.",
    "exp.job1.b2": "Drove unit performance to achieve or exceed financial targets, ensuring full alignment with strategic objectives.",
    "exp.job1.b3": "Provided financial analysis to optimize total unit profitability and balance sheet health.",
    "exp.job1.b4": "Acted as CU Finance representative across MA and Group FA teams; collaborated with the Analysis & Innovation Team to upgrade reporting packages.",
    "exp.job2.title": "Lead Financial Analyst — CU Maghreb",
    "exp.job2.b1": "Led full forecasting, financial planning, and reporting cycle across the Maghreb Customer Unit.",
    "exp.job2.b2": "Oversaw Letters of Credit processes and drove bank guarantee recovery initiatives, liaising directly with customers and banking institutions.",
    "exp.job2.b3": "Coordinated tax and social audit activities across multiple jurisdictions, ensuring compliance and timely completion.",
    "exp.job2.b4": "Delivered consistent unit performance against financial targets over a nine-year mandate.",
    "exp.job3.title": "Head of Financial Analysis — Tunisia & Libya",
    "exp.job3.b1": "Drove forecasting, financial planning, and reporting process at country level.",
    "exp.job3.b2": "Reported actuals vs. forecast and targets, with detailed variance analysis and recommended corrective actions.",
    "exp.job3.b3": "Coordinated tax and social audit activities, ensuring full regulatory compliance.",
    "exp.job4.title": "Business Controller — Tunisia & Libya",
    "exp.job4.b1": "Advised KAMs on T&C, tax structuring, and Letter of Credit wording to ensure compliance and mitigate financial risk.",
    "exp.job4.b2": "Built strong working relationships with key account managers and customer finance organizations.",
    "exp.job4.b3": "Supported the migration of the branch financial system to SAP, ensuring smooth implementation and process continuity.",
    "exp.job5.title": "Project Controller — Tunisia & Libya",
    "exp.job5.b1": "Led end-to-end customer project finance activities: invoicing, cash collection, and cost control.",
    "exp.job5.b2": "Provided guidance on the financial impact of major business decisions.",
    "exp.job5.b3": "Supported the migration of the accounting system (iScala Project module), ensuring process continuity.",
    "exp.job6.title": "Financial & Administrative Manager",
    "exp.job6.b1": "Managed end-to-end project finance and full administrative operations of the branch.",
    "exp.job6.b2": "Led finance interactions with customers, tax authorities, banks, and social security institutions.",
    "exp.job6.b3": "Successfully led branch closure: fiscal and social audits, fund repatriation, tax file closure, and bank guarantee recovery.",
    "ach.eyebrow": "Career Impact","ach.title": "Career Impact in Numbers",
    "ach.a1": "Years of Finance Experience","ach.a2": "EMEA Markets",
    "ach.a3": "System Migrations Led","ach.a4": "Languages Spoken",
    "ach.a5": "Forecasting & Reporting Leadership","ach.a6": "Compliance & Audit Experience",
    "lang.eyebrow": "Languages","lang.title": "Languages for International Business",
    "lang.en": "English","lang.fr": "French","lang.ar": "Arabic","lang.es": "Spanish",
    "edu.eyebrow": "Academic Background","edu.title": "The Foundation",
    "edu.d1": "Bachelor's Degree in Accounting","edu.d2": "University Diploma in Accounting",
    "contact.eyebrow": "Get In Touch","contact.title": "Let's Connect Around Strategic Finance",
    "contact.tagline": "Let's discuss how financial insight, performance monitoring, and strategic reporting can support stronger business decisions.",
    "contact.email_label": "Email","contact.email_val": "Send me an email","contact.email_copy": "Copy email address","contact.linkedin_label": "LinkedIn","contact.linkedin_val": "View Profile",
    "contact.location_label": "Location","contact.location_val": "Spain / Open to Relocation",
    "footer.copyright": "© 2026 Afif Bahar — Lead Financial Analyst. All rights reserved."
  },
  fr: {
    "brand.name": "Afif Bahar",
    "nav.about": "À propos","nav.expertise": "Expertise","nav.experience": "Parcours",
    "nav.achievements": "Impact","nav.education": "Formation","nav.contact": "Contact",
    "hero.eyebrow": "Lead Financial Analyst",
    "hero.tagline": "Transformer les données financières en décisions stratégiques.",
    "hero.stat1": "Années d’expérience","hero.stat2": "Marchés EMEA","hero.stat3": "Langues",
    "hero.btn1": "Voir le parcours","hero.btn2": "Me contacter",
    "about.eyebrow": "À propos","about.title": "Une finance au service de la stratégie",
    "about.badge_num": "30+","about.badge_label": "ans en finance",
    "about.stat1": "Lecture claire des chiffres","about.stat2": "Appui aux décisions exécutives",
    "about.stat3": "Rigueur opérationnelle","about.stat4": "Croissance durable",
    "about.p1": "Avec plus de trois décennies d’expérience dans des environnements multinationaux, j’ai construit mon parcours à l’intersection de la rigueur financière, de la performance business et de l’aide à la décision. Mon expérience chez Ansaldo Energia et Ericsson Group m’a donné une vision large des opérations financières, de l’administration financière et du contrôle de projets jusqu’au pilotage de l’analyse financière au sein de Customer Units et de marchés internationaux.",
    "about.p2": "Mon expertise couvre la planification financière, les prévisions, le reporting de performance et le suivi de la rentabilité. J’ai accompagné des équipes transverses dans des migrations systèmes complexes comme SAP et iScala, coordonné des sujets fiscaux et d’audit dans plusieurs pays, et travaillé avec des banques, des clients et des équipes internes pour préserver la solidité financière et la conformité.",
    "about.p3": "Mon approche est directe : les chiffres doivent être fiables, lisibles et utiles. Je veille à ce qu’ils racontent la bonne histoire, au bon niveau, pour permettre des décisions claires et impactantes.",
    "about.pillar1": "Prévisions stratégiques","about.pillar2": "Opérations multi-pays",
    "about.pillar3": "Conformité & audit","about.pillar4": "Migrations systèmes",
    "expertise.eyebrow": "Compétences clés","expertise.title": "Expertise clé en opérations financières",
    "expertise.c1.title": "Analyse financière & reporting","expertise.c1.desc": "Analyse du P&L, suivi du bilan et reporting exécutif pour donner aux décideurs une vision claire et fiable de la performance.",
    "expertise.c2.title": "Prévisions & budget","expertise.c2.desc": "Construction d’objectifs, de budgets et de prévisions alignés avec les priorités stratégiques de l’organisation.",
    "expertise.c3.title": "Pilotage de la performance","expertise.c3.desc": "Suivi des KPI, analyse des écarts et identification des leviers d’amélioration pour aider les unités à atteindre leurs objectifs financiers.",
    "expertise.c4.title": "Conformité & éthique","expertise.c4.desc": "Coordination des audits fiscaux et sociaux, gestion des exigences réglementaires et approche rigoureuse de la maîtrise des risques.",
    "expertise.c5.title": "SAP Business Intelligence","expertise.c5.desc": "Maîtrise de SAP BI, accompagnement des migrations systèmes et continuité des processus financiers au quotidien.",
    "expertise.c6.title": "Power BI","expertise.c6.desc": "Tableaux de bord interactifs et visualisations permettant de transformer des données financières complexes en informations exploitables.",
    "expertise.c7.title": "Leadership transversal","expertise.c7.desc": "Collaboration avec des équipes finance, opérations, commerciales et management pour aligner les priorités et accélérer l’exécution.",
    "expertise.c8.title": "Appui à la décision stratégique","expertise.c8.desc": "Traduction de sujets financiers complexes en analyses simples, structurées et directement utiles aux décisions de direction.",
    "exp.eyebrow": "Parcours professionnel","exp.title": "Trois décennies d’impact",
    "exp.job1.title": "Lead Financial Analyst — CU FBAT",
    "exp.job1.b1": "Pilotage des prévisions, de la planification financière, du reporting et de la fixation des objectifs au niveau de la Customer Unit.",
    "exp.job1.b2": "Suivi de la performance de l’unité afin d’atteindre ou de dépasser les objectifs financiers, en cohérence avec les priorités stratégiques.",
    "exp.job1.b3": "Analyses financières destinées à optimiser la rentabilité globale et la santé du bilan.",
    "exp.job1.b4": "Représentation de la finance CU auprès des équipes MA et Group FA, avec contribution à l’amélioration des packages de reporting.",
    "exp.job2.title": "Lead Financial Analyst — CU Maghreb",
    "exp.job2.b1": "Pilotage du cycle complet de prévision, planification financière et reporting pour la Customer Unit Maghreb.",
    "exp.job2.b2": "Supervision des crédits documentaires et des actions de récupération des garanties bancaires, en lien avec les clients et les banques.",
    "exp.job2.b3": "Coordination des audits fiscaux et sociaux dans plusieurs juridictions, avec un suivi rigoureux des délais et de la conformité.",
    "exp.job2.b4": "Contribution continue à la performance financière de l’unité pendant neuf ans.",
    "exp.job3.title": "Head of Financial Analysis — Tunisie & Libye",
    "exp.job3.b1": "Pilotage des prévisions, de la planification financière et du reporting au niveau pays.",
    "exp.job3.b2": "Analyse des écarts entre réalisations, prévisions et objectifs, avec recommandations d’actions correctives.",
    "exp.job3.b3": "Coordination des audits fiscaux et sociaux dans le respect des exigences réglementaires.",
    "exp.job4.title": "Business Controller — Tunisie & Libye",
    "exp.job4.b1": "Conseil aux KAMs sur les conditions contractuelles, la fiscalité et la formulation des crédits documentaires afin de limiter les risques.",
    "exp.job4.b2": "Développement de relations solides avec les équipes commerciales et les organisations finance côté client.",
    "exp.job4.b3": "Accompagnement de la migration du système financier de la branche vers SAP, avec maintien de la continuité des processus.",
    "exp.job5.title": "Project Controller — Tunisie & Libye",
    "exp.job5.b1": "Gestion financière de bout en bout des projets clients : facturation, recouvrement et contrôle des coûts.",
    "exp.job5.b2": "Éclairage des décisions business par l’analyse de leurs impacts financiers potentiels.",
    "exp.job5.b3": "Participation à la migration du système comptable, notamment le module iScala Project.",
    "exp.job6.title": "Financial & Administrative Manager",
    "exp.job6.b1": "Suivi financier et administratif complet des projets et des opérations de la branche.",
    "exp.job6.b2": "Gestion des interactions financières avec les clients, les administrations fiscales, les banques et les organismes sociaux.",
    "exp.job6.b3": "Clôture réussie de la branche : audits fiscaux et sociaux, rapatriement des fonds, clôture des dossiers et récupération des garanties bancaires.",
    "ach.eyebrow": "Impact professionnel","ach.title": "Impact professionnel en chiffres",
    "ach.a1": "Années d’expérience en finance","ach.a2": "Marchés EMEA",
    "ach.a3": "Migrations systèmes accompagnées","ach.a4": "Langues parlées",
    "ach.a5": "Leadership prévision & reporting","ach.a6": "Expérience conformité & audit",
    "lang.eyebrow": "Langues","lang.title": "Langues pour le business international",
    "lang.en": "Anglais","lang.fr": "Français","lang.ar": "Arabe","lang.es": "Espagnol",
    "edu.eyebrow": "Formation","edu.title": "Des bases solides",
    "edu.d1": "Licence en comptabilité","edu.d2": "Diplôme universitaire en comptabilité",
    "contact.eyebrow": "Contact","contact.title": "Échangeons autour de la finance stratégique",
    "contact.tagline": "Discutons de la manière dont l’analyse financière, le suivi de la performance et le reporting stratégique peuvent soutenir de meilleures décisions business.",
    "contact.email_label": "Email","contact.email_val": "M’envoyer un email","contact.email_copy": "Copier l’adresse email","contact.linkedin_label": "LinkedIn","contact.linkedin_val": "Voir le profil",
    "contact.location_label": "Localisation","contact.location_val": "Espagne / Ouvert à la mobilité",
    "footer.copyright": "© 2026 Afif Bahar — Lead Financial Analyst. Tous droits réservés."
  },
  es: {
    "brand.name": "Afif Bahar",
    "nav.about": "Sobre mí","nav.expertise": "Expertise","nav.experience": "Trayectoria",
    "nav.achievements": "Impacto","nav.education": "Formación","nav.contact": "Contacto",
    "hero.eyebrow": "Lead Financial Analyst",
    "hero.tagline": "Convirtiendo datos financieros en decisiones estratégicas.",
    "hero.stat1": "Años de experiencia","hero.stat2": "Mercados EMEA","hero.stat3": "Idiomas",
    "hero.btn1": "Ver trayectoria","hero.btn2": "Contactar",
    "about.eyebrow": "Sobre mí","about.title": "Finanzas al servicio de la estrategia",
    "about.badge_num": "30+","about.badge_label": "años en finanzas",
    "about.stat1": "Lectura financiera clara","about.stat2": "Apoyo a la decisión ejecutiva",
    "about.stat3": "Disciplina operativa","about.stat4": "Crecimiento sostenible",
    "about.p1": "Con más de tres décadas de experiencia en entornos multinacionales, he construido mi carrera en la intersección entre rigor financiero, performance empresarial y apoyo a la toma de decisiones. Mi trayectoria en Ansaldo Energia y Ericsson Group me ha dado una visión amplia de las operaciones financieras, desde la administración financiera y el control de proyectos hasta el liderazgo del análisis financiero en Customer Units y mercados internacionales.",
    "about.p2": "Mi experiencia abarca planificación financiera, forecasting, reporting de performance y seguimiento de la rentabilidad. He acompañado a equipos transversales en migraciones complejas de sistemas como SAP e iScala, coordinado temas fiscales y de auditoría en varios países, y trabajado con bancos, clientes y equipos internos para proteger la salud financiera y asegurar el cumplimiento.",
    "about.p3": "Mi enfoque es sencillo: los números deben ser fiables, claros y útiles. Me aseguro de que cuenten la historia correcta, al nivel adecuado, para facilitar decisiones sólidas y con impacto.",
    "about.pillar1": "Forecasting estratégico","about.pillar2": "Operaciones multipaís",
    "about.pillar3": "Compliance & auditoría","about.pillar4": "Migraciones de sistemas",
    "expertise.eyebrow": "Competencias clave","expertise.title": "Expertise clave en operaciones financieras",
    "expertise.c1.title": "Análisis financiero & reporting","expertise.c1.desc": "Análisis de P&L, seguimiento del balance y reporting ejecutivo para ofrecer una visión clara y fiable de la performance.",
    "expertise.c2.title": "Forecasting & presupuesto","expertise.c2.desc": "Definición de objetivos, presupuestos y previsiones alineados con las prioridades estratégicas de la organización.",
    "expertise.c3.title": "Seguimiento de performance","expertise.c3.desc": "Seguimiento de KPI, análisis de desviaciones e identificación de palancas de mejora para alcanzar los objetivos financieros.",
    "expertise.c4.title": "Compliance & ética","expertise.c4.desc": "Coordinación de auditorías fiscales y sociales, gestión de exigencias regulatorias y enfoque riguroso de control de riesgos.",
    "expertise.c5.title": "SAP Business Intelligence","expertise.c5.desc": "Experiencia sólida en SAP BI, soporte a migraciones de sistemas y continuidad de los procesos financieros.",
    "expertise.c6.title": "Power BI","expertise.c6.desc": "Dashboards interactivos y visualizaciones que convierten datos financieros complejos en información clara y accionable.",
    "expertise.c7.title": "Liderazgo transversal","expertise.c7.desc": "Colaboración con equipos de finanzas, operaciones, ventas y dirección para alinear prioridades y acelerar la ejecución.",
    "expertise.c8.title": "Apoyo a decisiones estratégicas","expertise.c8.desc": "Traducción de temas financieros complejos en análisis simples, estructurados y útiles para la toma de decisiones.",
    "exp.eyebrow": "Trayectoria profesional","exp.title": "Tres décadas de impacto",
    "exp.job1.title": "Lead Financial Analyst — CU FBAT",
    "exp.job1.b1": "Liderazgo de forecasting, planificación financiera, reporting y definición de objetivos para la Customer Unit.",
    "exp.job1.b2": "Seguimiento de la performance de la unidad para alcanzar o superar los objetivos financieros, en línea con las prioridades estratégicas.",
    "exp.job1.b3": "Análisis financiero orientado a optimizar la rentabilidad total de la unidad y la salud del balance.",
    "exp.job1.b4": "Representación de Finanzas CU ante equipos MA y Group FA, con contribución a la mejora de los paquetes de reporting.",
    "exp.job2.title": "Lead Financial Analyst — CU Maghreb",
    "exp.job2.b1": "Gestión del ciclo completo de forecasting, planificación financiera y reporting para la Customer Unit Maghreb.",
    "exp.job2.b2": "Supervisión de cartas de crédito y acciones de recuperación de garantías bancarias, en coordinación con clientes y bancos.",
    "exp.job2.b3": "Coordinación de auditorías fiscales y sociales en varias jurisdicciones, asegurando cumplimiento y seguimiento de plazos.",
    "exp.job2.b4": "Contribución sostenida a la performance financiera de la unidad durante nueve años.",
    "exp.job3.title": "Head of Financial Analysis — Túnez & Libia",
    "exp.job3.b1": "Gestión del proceso de forecasting, planificación financiera y reporting a nivel país.",
    "exp.job3.b2": "Análisis de desviaciones entre resultados reales, previsiones y objetivos, con recomendaciones de acciones correctivas.",
    "exp.job3.b3": "Coordinación de auditorías fiscales y sociales cumpliendo con los requisitos regulatorios.",
    "exp.job4.title": "Business Controller — Túnez & Libia",
    "exp.job4.b1": "Asesoramiento a KAMs en condiciones contractuales, fiscalidad y redacción de cartas de crédito para reducir riesgos financieros.",
    "exp.job4.b2": "Desarrollo de relaciones sólidas con equipos comerciales y organizaciones financieras de clientes.",
    "exp.job4.b3": "Apoyo a la migración del sistema financiero de la sucursal a SAP, manteniendo la continuidad de procesos.",
    "exp.job5.title": "Project Controller — Túnez & Libia",
    "exp.job5.b1": "Gestión financiera integral de proyectos de clientes: facturación, cobros y control de costes.",
    "exp.job5.b2": "Aporte de análisis sobre el impacto financiero de decisiones clave de negocio.",
    "exp.job5.b3": "Participación en la migración del sistema contable, incluido el módulo iScala Project.",
    "exp.job6.title": "Financial & Administrative Manager",
    "exp.job6.b1": "Seguimiento financiero y administrativo completo de proyectos y operaciones de la sucursal.",
    "exp.job6.b2": "Gestión de relaciones financieras con clientes, autoridades fiscales, bancos y organismos de seguridad social.",
    "exp.job6.b3": "Cierre exitoso de la sucursal: auditorías fiscales y sociales, repatriación de fondos, cierre de expedientes y recuperación de garantías bancarias.",
    "ach.eyebrow": "Impacto profesional","ach.title": "Impacto profesional en cifras",
    "ach.a1": "Años de experiencia en finanzas","ach.a2": "Mercados EMEA",
    "ach.a3": "Migraciones de sistemas acompañadas","ach.a4": "Idiomas hablados",
    "ach.a5": "Liderazgo en forecasting & reporting","ach.a6": "Experiencia en compliance & auditoría",
    "lang.eyebrow": "Idiomas","lang.title": "Idiomas para negocios internacionales",
    "lang.en": "Inglés","lang.fr": "Francés","lang.ar": "Árabe","lang.es": "Español",
    "edu.eyebrow": "Formación","edu.title": "Una base sólida",
    "edu.d1": "Licenciatura en Contabilidad","edu.d2": "Diploma universitario en Contabilidad",
    "contact.eyebrow": "Contacto","contact.title": "Hablemos de finanzas estratégicas",
    "contact.tagline": "Conectemos para hablar de cómo el análisis financiero, el seguimiento de performance y el reporting estratégico pueden apoyar mejores decisiones de negocio.",
    "contact.email_label": "Email","contact.email_val": "Enviarme un email","contact.email_copy": "Copiar dirección email","contact.linkedin_label": "LinkedIn","contact.linkedin_val": "Ver perfil",
    "contact.location_label": "Ubicación","contact.location_val": "España / Abierto a movilidad",
    "footer.copyright": "© 2026 Afif Bahar — Lead Financial Analyst. Todos los derechos reservados."
  },
  ar: {
    "brand.name": "عفيف البحار",
    "nav.about": "نبذة","nav.expertise": "الخبرات","nav.experience": "المسيرة",
    "nav.achievements": "الأثر","nav.education": "التعليم","nav.contact": "تواصل",
    "hero.eyebrow": "Lead Financial Analyst",
    "hero.tagline": "تحويل البيانات المالية إلى قرارات استراتيجية واضحة.",
    "hero.stat1": "سنة خبرة","hero.stat2": "أسواق EMEA","hero.stat3": "لغات",
    "hero.btn1": "عرض المسيرة","hero.btn2": "تواصل معي",
    "about.eyebrow": "نبذة","about.title": "المالية كأداة لدعم القرار الاستراتيجي",
    "about.badge_num": "+30","about.badge_label": "سنة في المجال المالي",
    "about.stat1": "قراءة مالية واضحة","about.stat2": "دعم القرار التنفيذي",
    "about.stat3": "انضباط تشغيلي","about.stat4": "نمو مستدام",
    "about.p1": "على امتداد أكثر من ثلاثة عقود في بيئات متعددة الجنسيات، بنيت مسيرتي عند تقاطع الانضباط المالي، أداء الأعمال، ودعم القرار التنفيذي. منحني عملي في Ansaldo Energia و Ericsson Group رؤية واسعة للعمليات المالية، من الإدارة المالية ومراقبة المشاريع إلى قيادة التحليل المالي على مستوى وحدات العملاء والأسواق الدولية.",
    "about.p2": "تغطي خبرتي التخطيط المالي، التوقعات، تقارير الأداء، ومتابعة الربحية. كما ساهمت في مرافقة فرق متعددة الاختصاصات خلال عمليات انتقال أنظمة معقدة مثل SAP و iScala، ونسّقت مواضيع ضريبية وتدقيقية في عدة دول، وعملت مع البنوك والعملاء والفرق الداخلية للحفاظ على الصحة المالية وضمان الامتثال.",
    "about.p3": "منهجي بسيط: الأرقام يجب أن تكون دقيقة، واضحة، وقابلة للاستخدام. أحرص على أن تروي القصة الصحيحة، بالمستوى المناسب، حتى تدعم قرارات عملية ومؤثرة.",
    "about.pillar1": "توقعات استراتيجية","about.pillar2": "عمليات متعددة الدول",
    "about.pillar3": "امتثال وتدقيق","about.pillar4": "انتقال الأنظمة",
    "expertise.eyebrow": "الخبرات الأساسية","expertise.title": "خبرة محورية في العمليات المالية",
    "expertise.c1.title": "التحليل المالي والتقارير","expertise.c1.desc": "تحليل الأرباح والخسائر، متابعة الميزانية، وإعداد تقارير تنفيذية تمنح الإدارة رؤية واضحة وموثوقة للأداء.",
    "expertise.c2.title": "التوقعات والميزانية","expertise.c2.desc": "بناء الأهداف والميزانيات والتوقعات بما يتماشى مع الأولويات الاستراتيجية للمؤسسة.",
    "expertise.c3.title": "متابعة أداء الأعمال","expertise.c3.desc": "متابعة مؤشرات الأداء، تحليل الفروقات، وتحديد فرص التحسين لمساعدة الوحدات على تحقيق أهدافها المالية.",
    "expertise.c4.title": "الامتثال والأخلاقيات","expertise.c4.desc": "تنسيق التدقيقات الضريبية والاجتماعية، التعامل مع المتطلبات التنظيمية، واعتماد مقاربة صارمة لإدارة المخاطر.",
    "expertise.c5.title": "SAP Business Intelligence","expertise.c5.desc": "خبرة قوية في SAP BI، مع دعم انتقال الأنظمة وضمان استمرارية العمليات المالية.",
    "expertise.c6.title": "Power BI","expertise.c6.desc": "لوحات قيادة تفاعلية وتصوّرات بيانات تحوّل المعلومات المالية المعقدة إلى مؤشرات واضحة وقابلة للتنفيذ.",
    "expertise.c7.title": "قيادة فرق متعددة الاختصاصات","expertise.c7.desc": "عمل مباشر مع فرق المالية والعمليات والمبيعات والإدارة لتوحيد الأولويات وتسريع التنفيذ.",
    "expertise.c8.title": "دعم القرار الاستراتيجي","expertise.c8.desc": "تبسيط المواضيع المالية المعقدة وتحويلها إلى تحليلات منظمة تساعد الإدارة على اتخاذ قرارات واثقة.",
    "exp.eyebrow": "المسيرة المهنية","exp.title": "ثلاثة عقود من الأثر",
    "exp.job1.title": "Lead Financial Analyst — CU FBAT",
    "exp.job1.b1": "قيادة التوقعات، التخطيط المالي، التقارير، وتحديد الأهداف على مستوى وحدة العملاء.",
    "exp.job1.b2": "متابعة أداء الوحدة لتحقيق الأهداف المالية أو تجاوزها بما يتماشى مع الأولويات الاستراتيجية.",
    "exp.job1.b3": "إعداد تحليلات مالية لتحسين الربحية الإجمالية للوحدة وتعزيز صحة الميزانية.",
    "exp.job1.b4": "تمثيل مالية وحدة العملاء لدى فرق MA و Group FA، والمساهمة في تطوير حزم التقارير.",
    "exp.job2.title": "Lead Financial Analyst — CU Maghreb",
    "exp.job2.b1": "إدارة الدورة الكاملة للتوقعات، التخطيط المالي، والتقارير الخاصة بوحدة عملاء المغرب العربي.",
    "exp.job2.b2": "الإشراف على الاعتمادات المستندية ومتابعة استرجاع الضمانات البنكية بالتنسيق مع العملاء والبنوك.",
    "exp.job2.b3": "تنسيق التدقيقات الضريبية والاجتماعية في عدة دول مع ضمان الالتزام بالمواعيد ومتطلبات الامتثال.",
    "exp.job2.b4": "مساهمة مستمرة في الأداء المالي للوحدة على مدى تسع سنوات.",
    "exp.job3.title": "Head of Financial Analysis — تونس وليبيا",
    "exp.job3.b1": "إدارة عمليات التوقعات، التخطيط المالي، والتقارير على مستوى البلد.",
    "exp.job3.b2": "تحليل الفروقات بين النتائج الفعلية والتوقعات والأهداف، مع اقتراح إجراءات تصحيحية.",
    "exp.job3.b3": "تنسيق التدقيقات الضريبية والاجتماعية وفق المتطلبات التنظيمية.",
    "exp.job4.title": "Business Controller — تونس وليبيا",
    "exp.job4.b1": "تقديم المشورة لمديري الحسابات حول الشروط التعاقدية، الجوانب الضريبية، وصياغة الاعتمادات المستندية لتقليل المخاطر.",
    "exp.job4.b2": "بناء علاقات عمل قوية مع الفرق التجارية ومع إدارات المالية لدى العملاء.",
    "exp.job4.b3": "دعم انتقال النظام المالي للفرع إلى SAP مع الحفاظ على استمرارية العمليات.",
    "exp.job5.title": "Project Controller — تونس وليبيا",
    "exp.job5.b1": "إدارة الجوانب المالية لمشاريع العملاء من البداية إلى النهاية: الفوترة، التحصيل، ومراقبة التكاليف.",
    "exp.job5.b2": "تقديم رؤية مالية حول الأثر المحتمل للقرارات التجارية الرئيسية.",
    "exp.job5.b3": "المساهمة في انتقال النظام المحاسبي، بما في ذلك وحدة iScala Project.",
    "exp.job6.title": "Financial & Administrative Manager",
    "exp.job6.b1": "متابعة مالية وإدارية شاملة للمشاريع وعمليات الفرع.",
    "exp.job6.b2": "إدارة العلاقات المالية مع العملاء، الإدارات الضريبية، البنوك، والهيئات الاجتماعية.",
    "exp.job6.b3": "إغلاق ناجح للفرع شمل التدقيقات الضريبية والاجتماعية، إعادة الأموال، إغلاق الملفات، واسترجاع الضمانات البنكية.",
    "ach.eyebrow": "الأثر المهني","ach.title": "الأثر المهني بالأرقام",
    "ach.a1": "سنة خبرة في المالية","ach.a2": "أسواق EMEA",
    "ach.a3": "انتقالات أنظمة تمت مرافقتها","ach.a4": "لغات متقنة",
    "ach.a5": "قيادة التوقعات والتقارير","ach.a6": "خبرة في الامتثال والتدقيق",
    "lang.eyebrow": "اللغات","lang.title": "لغات للأعمال الدولية",
    "lang.en": "الإنجليزية","lang.fr": "الفرنسية","lang.ar": "العربية","lang.es": "الإسبانية",
    "edu.eyebrow": "التعليم","edu.title": "أساس متين",
    "edu.d1": "إجازة في المحاسبة","edu.d2": "دبلوم جامعي في المحاسبة",
    "contact.eyebrow": "تواصل","contact.title": "لنتحدث عن المالية الاستراتيجية",
    "contact.tagline": "لنتواصل ونناقش كيف يمكن للتحليل المالي، متابعة الأداء، والتقارير الاستراتيجية أن تدعم قرارات أعمال أفضل.",
    "contact.email_label": "البريد الإلكتروني","contact.email_copy": "نسخ البريد الإلكتروني","contact.linkedin_label": "LinkedIn","contact.email_val": "أرسل لي بريداً إلكترونياً","contact.linkedin_val": "عرض الملف الشخصي",
    "contact.location_label": "الموقع","contact.location_val": "إسبانيا / منفتح على التنقل",
    "footer.copyright": "© 2026 عفيف البحار — محلل مالي رئيسي. جميع الحقوق محفوظة."
  }};

// ════════════════════════════════════════════════
// LANGUAGE SWITCH
// ════════════════════════════════════════════════
let currentLang = 'en';
function applyLanguage(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  const isRTL = lang === 'ar';
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict && dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});

// ════════════════════════════════════════════════
// NAVBAR
// ════════════════════════════════════════════════
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ════════════════════════════════════════════════
// MOBILE MENU
// ════════════════════════════════════════════════
const menuToggle = document.getElementById('menuToggle');
const mobileClose = document.getElementById('mobileClose');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose && mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// ════════════════════════════════════════════════
// PARTICLES
// ════════════════════════════════════════════════
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.35 + 0.05;
    this.gold = Math.random() > 0.85;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.gold ? `rgba(201,168,76,${this.opacity})` : `rgba(107,140,174,${this.opacity})`;
    ctx.fill();
  }
}
const particles = Array.from({length: 140}, () => new Particle());
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  particles.forEach((p, i) => {
    particles.slice(i + 1, i + 4).forEach(q => {
      const dist = Math.hypot(p.x - q.x, p.y - q.y);
      if (dist < 90) {
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(107,140,174,${0.04 * (1 - dist / 90)})`;
        ctx.lineWidth = 0.5; ctx.stroke();
      }
    });
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ════════════════════════════════════════════════
// COUNTER ANIMATION
// ════════════════════════════════════════════════
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = target / (duration / 16);
  el.classList.add('counting');
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start);
    if (start >= target) {
      el.textContent = target;
      el.classList.remove('counting');
      clearInterval(timer);
    }
  }, 16);
}
setTimeout(() => {
  document.querySelectorAll('.hero .stat-num').forEach(el => {
    animateCounter(el, parseInt(el.getAttribute('data-target')));
  });
}, 1200);

// ════════════════════════════════════════════════
// SCROLL REVEAL (reveal + reveal-left)
// ════════════════════════════════════════════════
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal, .reveal-left').forEach(el => revealObserver.observe(el));

// ════════════════════════════════════════════════
// TIMELINE LINE 
// ════════════════════════════════════════════════
const timelineLine = document.getElementById('timelineLine');
let timelineDrawn = false;
const dots = Array.from(document.querySelectorAll('.timeline-dot'));

function updateActiveDot() {
  const mid = window.innerHeight * 0.55;
  let closestDot = null;
  let closestDist = Infinity;
  dots.forEach(dot => {
    const rect = dot.getBoundingClientRect();
    const dotCenter = rect.top + rect.height / 2;
    const dist = Math.abs(dotCenter - mid);
    if (dist < closestDist) { closestDist = dist; closestDot = dot; }
  });
  dots.forEach(d => d.classList.remove('active-dot'));
  if (closestDot && closestDist < window.innerHeight * 0.5) {
    closestDot.classList.add('active-dot');
  }
}

const tlObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !timelineDrawn) {
    timelineDrawn = true;
    const tl = document.querySelector('.timeline');
    timelineLine.style.height = (tl ? tl.scrollHeight : 1200) + 'px';
  }
}, { threshold: 0.05 });
if (timelineLine) tlObserver.observe(timelineLine.parentElement);

window.addEventListener('scroll', updateActiveDot, { passive: true });
setTimeout(updateActiveDot, 500);

// ════════════════════════════════════════════════
// ACHIEVEMENTS COUNTERS
// ════════════════════════════════════════════════
const achObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.ach-num[data-target]').forEach(el => {
        const suffix = el.getAttribute('data-suffix') || '';
        const target = parseInt(el.getAttribute('data-target'));
        animateCounter(el, target);
        setTimeout(() => { el.textContent = target + suffix; }, 2100);
      });
      achObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
const achSection = document.querySelector('.achievements-section');
if (achSection) achObserver.observe(achSection);

// ════════════════════════════════════════════════
// LANGUAGE BARS
// ════════════════════════════════════════════════
const langObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.lang-fill').forEach((bar, i) => {
        setTimeout(() => { bar.style.width = bar.getAttribute('data-pct') + '%'; }, 300 + i * 100);
      });
      langObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
const langSection = document.querySelector('.languages-section');
if (langSection) langObserver.observe(langSection);


// ════════════════════════════════════════════════
// COPY EMAIL FALLBACK
// ════════════════════════════════════════════════
function showCopyToast(message) {
  let toast = document.querySelector('.email-copy-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'email-copy-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__emailToastTimer);
  window.__emailToastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

document.querySelectorAll('.copy-email-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const email = btn.dataset.email || 'afif.bahar@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      showCopyToast('Email copied: ' + email);
    } catch (error) {
      const temp = document.createElement('textarea');
      temp.value = email;
      temp.style.position = 'fixed';
      temp.style.opacity = '0';
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      temp.remove();
      showCopyToast('Email copied: ' + email);
    }
  });
});

// ════════════════════════════════════════════════
// SMOOTH SCROLL
// ════════════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
