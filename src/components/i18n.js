import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_hire: "Hire Me",
      nav_skills: "Skills",
      nav_experience: "Experience",
      nav_logo_alt: "kelvruntime logo",
      lang_aria: "Language",

      status_available: "Available for Hire",
      hero_prefix: "Engineering",
      hero_highlight: "Global",
      hero_suffix: "Solutions",
      hero_description_rest:
        "a software engineer bridging the gap between code and communication across four languages.",
      btn_get_started: "Get Started \u{1F680}",
      btn_story: "The Story \u2192 \u{1F449}",
      open_to_work: "Open to work",
      hero_i_am: "I'm",
      hero_avatar_alt: "Kelvin C Edouard, software engineer",

      contact_title: "Contact",
      contact_title_span: "Me",
      contact_subtitle: "Get in touch and let's build something great.",
      label_name: "Name",
      label_email: "Email",
      label_phone: "Phone (Optional)",
      label_reply_via: "Reply via",
      label_message: "Message",
      placeholder_name: "Full Name",
      placeholder_email: "your@email.com",
      placeholder_phone: "+1...",
      placeholder_phone_local: "Phone number",
      placeholder_message: "How can I help you?",
      option_email: "Email",
      option_whatsapp: "WhatsApp",
      btn_send: "Send Message",
      btn_sending: "Sending...",
      contact_err_config: "\u274C Email service is not configured.",
      contact_success: "\u2705 Message sent successfully!",
      contact_err_send: "\u274C Error sending. Try again.",

      footer_tagline: "Building scalable solutions and clean interfaces.",
      footer_rights: "All rights reserved.",

      about_tag: "Beyond the Code",
      about_title_1: "The",
      about_title_highlight: "Global DNA",
      about_title_2: "of a Developer",
      about_intro:
        "I'm Kelvin C Edouard, also known as kelvruntime. I do more than build applications; I transform complex technical needs into impactful global solutions across four languages and three cultures.",
      about_timeline_1_h: "Cultural Adaptability",
      about_timeline_1_p:
        "My journey from the Dominican Republic to Brazil, the United States, and now Haiti has strengthened my ability to adapt, collaborate, and lead across diverse environments.",
      about_timeline_2_h: "Technical Mastery",
      about_timeline_2_p:
        "I bring a CS50-driven problem-solving mindset combined with modern full-stack development expertise in React, Node.js, and AWS.",
      stat_languages_label: "Native/Fluent Languages",
      stat_mindset_label: "Problem Solver Mindset",
      stat_global_value: "Global",
      stat_ready_label: "Project Ready",
      about_teaser_text:
        "Want to see how I can connect your business to the world? ",
      about_teaser_link: "Let's talk strategy.",

      services_header_1: "What I Can Do",
      services_header_2: "For You",
      service_0_title: "Full-Stack Development",
      service_0_desc:
        "Building fast, SEO-friendly web applications with modern architecture and best practices.",
      service_1_title: "Multilingual Tech Support",
      service_1_desc:
        "Expert technical support in English, Spanish, Portuguese, and Haitian Creole.",
      service_2_title: "Cloud & DevOps",
      service_2_desc:
        "Secure and scalable cloud solutions using AWS and other cloud platforms.",
      service_3_title: "Software Localization",
      service_3_desc:
        "Adapting software for international users and multiple languages.",

      skills_title: "My Skills",
      skills_subtitle: "Technologies and tools I work with daily.",
      skill_cat_frontend: "Frontend",
      skill_cat_backend: "Backend",
      skill_cat_cloud: "Cloud & DevOps",
      skill_cat_workflow: "Workflow",
      skill_mobile_first: "Mobile-First",

      projects_title: "My Projects",
      projects_subtitle: "Here are some of my recent projects.",
      project_0_title: "Personal Portfolio",
      project_0_desc:
        "A modern, responsive portfolio website built with React, featuring smooth animations, dark theme, and optimized performance.",
      project_1_title: "E-Commerce Platform",
      project_1_desc:
        "Full-stack e-commerce solution with React frontend, Node.js backend, and integrated payment processing.",
      project_2_title: "Task Management App",
      project_2_desc:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team features.",
      project_3_title: "Weather Dashboard",
      project_3_desc:
        "Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.",
      project_4_title: "Social Media Analytics",
      project_4_desc:
        "Comprehensive analytics dashboard for social media management with data visualization and reporting features.",
      project_5_title: "AI Chat Assistant",
      project_5_desc:
        "Intelligent chat assistant powered by machine learning, featuring natural language processing and context awareness.",

      journey_title: "My Journey",
      journey_subtitle: "A global path through education and technology.",
      edu_0_location: "Dominican Republic",
      edu_0_level: "Primary School",
      edu_0_desc: "Foundation of my academic journey.",
      edu_1_location: "Brazil",
      edu_1_level: "Secondary School",
      edu_1_desc:
        "8th grade through 2nd year of high school—developed logic and multilingual skills.",
      edu_2_location: "United States",
      edu_2_level: "High School Senior / CS Start",
      edu_2_desc:
        "Completed my final year and began deep-diving into computer science.",
      certs_section_title: "Certifications & Learning",
      cert_0_title: "CS50: Introduction to Programming",
      cert_0_provider: "Harvard University / Online",
      cert_0_info:
        "Self-taught fundamentals: algorithms, C, and data structures.",
      cert_1_title: "TodCODE: Introduction to Programming",
      cert_1_provider: "Prof. Clarita",
      cert_1_info:
        "First steps into OOP (object-oriented programming) and Java syntax.",
      cert_2_title: "AWS Cloud Practitioner",
      cert_2_provider: "Amazon Web Services",
      cert_2_info:
        "Fundamental concepts of cloud computing and infrastructure.",
      cert_3_title: "Full-Stack Web",
      cert_3_provider: "MiduDev / Tech Communities",
      cert_3_info: "Modern React, Node.js, and the JavaScript ecosystem.",

      meta_title:
        "Kelvin C Edouard (kelvruntime) | Software Engineer Portfolio",
      meta_description:
        "Kelvin C Edouard (kelvruntime) is a Full-Stack Software Engineer building modern, scalable, and global digital solutions with React, Node.js, and AWS.",
      meta_keywords:
        "Kelvin C Edouard, kelvruntime, software engineer, full stack developer, React developer, Node.js, AWS, portfolio",
      og_title: "Kelvin C Edouard (kelvruntime) | Software Engineer",
      og_description:
        "Software Engineer focused on high-impact, global-ready web applications.",
      og_site_name: "Kelvin C Edouard Portfolio",
      twitter_title: "Kelvin C Edouard (kelvruntime) | Software Engineer",
      twitter_description:
        "Explore projects, skills, and services from a full-stack engineer.",
      jsonld_job_title: "Software Engineer",
      jsonld_description:
        "Full-Stack Software Engineer building global-ready web applications with React, Node.js, and AWS.",
      service_0_tags:
        "React.js|Node.js|JavaScript|TypeScript|Framework|Vite|PERN Stack|Web App",
      service_1_tags: "Customer Success|Support|Technical Help|Bilingual",
      service_2_tags: "AWS|Infrastructure|Deployment|Automation",
      service_3_tags: "Translation|Global Markets|UI/UX Adaptation",
      skill_rest_apis: "REST APIs",

      view_project: "View Project",
    },
  },
  pt: {
    translation: {
      nav_home: "Início",
      nav_about: "Sobre",
      nav_services: "Serviços",
      nav_projects: "Projetos",
      nav_hire: "Contrate-me",
      nav_skills: "Competências",
      nav_experience: "Percurso",
      nav_logo_alt: "Logótipo kelvruntime",
      lang_aria: "Idioma",

      status_available: "Disponível para contratação",
      hero_prefix: "Engenharia de",
      hero_highlight: "Soluções",
      hero_suffix: "Globais",
      hero_description_rest:
        "sou engenheiro de software a unir código e comunicação em quatro idiomas.",
      btn_get_started: "Começar \u{1F680}",
      btn_story: "A história \u2192 \u{1F449}",
      open_to_work: "Aberto a oportunidades",
      hero_i_am: "Sou",
      hero_avatar_alt: "Kelvin C Edouard, engenheiro de software",

      contact_title: "Contacte",
      contact_title_span: "me",
      contact_subtitle: "Fale comigo e vamos criar algo incrível.",
      label_name: "Nome",
      label_email: "E-mail",
      label_phone: "Telefone (opcional)",
      label_reply_via: "Responder por",
      label_message: "Mensagem",
      placeholder_name: "Nome completo",
      placeholder_email: "seu@email.com",
      placeholder_phone: "+351...",
      placeholder_phone_local: "Número de telefone",
      placeholder_message: "Como posso ajudar?",
      option_email: "E-mail",
      option_whatsapp: "WhatsApp",
      btn_send: "Enviar mensagem",
      btn_sending: "A enviar...",
      contact_err_config: "\u274C Serviço de e-mail não configurado.",
      contact_success: "\u2705 Mensagem enviada com sucesso!",
      contact_err_send: "\u274C Erro ao enviar. Tente novamente.",

      footer_tagline: "Soluções escaláveis e interfaces cuidadas.",
      footer_rights: "Todos os direitos reservados.",

      about_tag: "Além do código",
      about_title_1: "O",
      about_title_highlight: "ADN global",
      about_title_2: "de um desenvolvedor",
      about_intro:
        "Sou Kelvin C Edouard, também conhecido como kelvruntime. Faço mais do que criar aplicações: transformo necessidades técnicas complexas em soluções globais impactantes em quatro idiomas e três culturas.",
      about_timeline_1_h: "Adaptabilidade cultural",
      about_timeline_1_p:
        "O meu percurso da República Dominicana ao Brasil, Estados Unidos e agora Haiti fortaleceu a minha capacidade de adaptar-me, colaborar e liderar em ambientes diversos.",
      about_timeline_2_h: "Domínio técnico",
      about_timeline_2_p:
        "Trago uma mentalidade de resolução de problemas inspirada no CS50, combinada com experiência full-stack moderna em React, Node.js e AWS.",
      stat_languages_label: "Idiomas nativos/fluentes",
      stat_mindset_label: "Mentalidade de resolver problemas",
      stat_global_value: "Global",
      stat_ready_label: "Pronto para projetos",
      about_teaser_text: "Quer ver como posso ligar o seu negócio ao mundo? ",
      about_teaser_link: "Vamos falar de estratégia.",

      services_header_1: "O que posso fazer",
      services_header_2: "por si",
      service_0_title: "Desenvolvimento full-stack",
      service_0_desc:
        "Aplicações web rápidas e otimizadas para SEO, com arquitetura moderna e boas práticas.",
      service_1_title: "Suporte técnico multilingue",
      service_1_desc:
        "Suporte técnico em inglês, espanhol, português e crioulo haitiano.",
      service_2_title: "Cloud e DevOps",
      service_2_desc:
        "Soluções na nuvem seguras e escaláveis com AWS e outras plataformas.",
      service_3_title: "Localização de software",
      service_3_desc:
        "Adaptação de software para utilizadores internacionais e vários idiomas.",

      skills_title: "As minhas competências",
      skills_subtitle: "Tecnologias e ferramentas que uso no dia a dia.",
      skill_cat_frontend: "Frontend",
      skill_cat_backend: "Backend",
      skill_cat_cloud: "Cloud e DevOps",
      skill_cat_workflow: "Fluxo de trabalho",
      skill_mobile_first: "Mobile-first",

      projects_title: "Os meus projetos",
      projects_subtitle: "Alguns dos meus projetos recentes.",
      project_0_title: "Portfólio pessoal",
      project_0_desc:
        "Site de portfólio moderno e responsivo em React, com animações suaves, tema escuro e desempenho otimizado.",
      project_1_title: "Plataforma de e-commerce",
      project_1_desc:
        "Solução e-commerce full-stack com frontend React, backend Node.js e pagamentos integrados.",
      project_2_title: "App de gestão de tarefas",
      project_2_desc:
        "Aplicação colaborativa com atualizações em tempo real, arrastar e largar e funcionalidades de equipa.",
      project_3_title: "Painel meteorológico",
      project_3_desc:
        "Painel interativo com previsões por localização, dados históricos e alertas de tempo severo.",
      project_4_title: "Análise de redes sociais",
      project_4_desc:
        "Dashboard de analytics para redes sociais com visualização de dados e relatórios.",
      project_5_title: "Assistente de chat com IA",
      project_5_desc:
        "Assistente de conversação com machine learning, processamento de linguagem natural e contexto.",

      journey_title: "O meu percurso",
      journey_subtitle: "Um caminho global pela educação e pela tecnologia.",
      edu_0_location: "República Dominicana",
      edu_0_level: "Ensino primário",
      edu_0_desc: "Base do meu percurso académico.",
      edu_1_location: "Brasil",
      edu_1_level: "Ensino secundário",
      edu_1_desc:
        "Do 8.º ano ao 2.º ano do ensino médio—desenvolvimento da lógica e competências multilingues.",
      edu_2_location: "Estados Unidos",
      edu_2_level: "Último ano do secundário / início em CS",
      edu_2_desc:
        "Concluí o último ano e aprofundei-me em ciência da computação.",
      certs_section_title: "Certificações e formação",
      cert_0_title: "CS50: Introdução à programação",
      cert_0_provider: "Universidade Harvard / Online",
      cert_0_info:
        "Fundamentos em autodidata: algoritmos, C e estruturas de dados.",
      cert_1_title: "TodCODE: Introdução à programação",
      cert_1_provider: "Prof. Clarita",
      cert_1_info:
        "Primeiros passos em POO (programação orientada a objetos) e sintaxe Java.",
      cert_2_title: "AWS Cloud Practitioner",
      cert_2_provider: "Amazon Web Services",
      cert_2_info: "Conceitos fundamentais de cloud e infraestrutura.",
      cert_3_title: "Web full-stack",
      cert_3_provider: "MiduDev / Comunidades tech",
      cert_3_info: "React, Node.js e ecossistema JavaScript moderno.",

      meta_title:
        "Kelvin C Edouard (kelvruntime) | Portfólio Engenheiro de Software",
      meta_description:
        "Kelvin C Edouard (kelvruntime) é engenheiro de software full-stack a criar soluções digitais modernas, escaláveis e globais com React, Node.js e AWS.",
      meta_keywords:
        "Kelvin C Edouard, kelvruntime, engenheiro de software, desenvolvedor full stack, React, Node.js, AWS, portfólio",
      og_title: "Kelvin C Edouard (kelvruntime) | Engenheiro de Software",
      og_description:
        "Engenheiro de software focado em aplicações web globais de alto impacto.",
      og_site_name: "Portfólio Kelvin C Edouard",
      twitter_title: "Kelvin C Edouard (kelvruntime) | Engenheiro de Software",
      twitter_description:
        "Projetos, competências e serviços de um engenheiro full-stack.",
      jsonld_job_title: "Engenheiro de Software",
      jsonld_description:
        "Engenheiro de software full-stack a criar aplicações web globais com React, Node.js e AWS.",
      service_0_tags:
        "React.js|Node.js|JavaScript|TypeScript|Framework|Vite|PERN Stack|Aplicação web",
      service_1_tags: "Sucesso do cliente|Suporte|Ajuda técnica|Bilingue",
      service_2_tags: "AWS|Infraestrutura|Implementação|Automação",
      service_3_tags: "Tradução|Mercados globais|Adaptação UI/UX",
      skill_rest_apis: "APIs REST",

      view_project: "Ver projeto",
    },
  },
  es: {
    translation: {
      nav_home: "Inicio",
      nav_about: "Sobre mí",
      nav_services: "Servicios",
      nav_projects: "Proyectos",
      nav_hire: "Contrátame",
      nav_skills: "Habilidades",
      nav_experience: "Trayectoria",
      nav_logo_alt: "Logo kelvruntime",
      lang_aria: "Idioma",

      status_available: "Disponible para trabajar",
      hero_prefix: "Ingeniería de",
      hero_highlight: "Soluciones",
      hero_suffix: "Globales",
      hero_description_rest:
        "ingeniero de software que une código y comunicación en cuatro idiomas.",
      btn_get_started: "Empezar \u{1F680}",
      btn_story: "La historia \u2192 \u{1F449}",
      open_to_work: "Abierto a ofertas",
      hero_i_am: "Soy",
      hero_avatar_alt: "Kelvin C Edouard, ingeniero de software",

      contact_title: "Contácta",
      contact_title_span: "me",
      contact_subtitle: "Hablemos y construyamos algo grande.",
      label_name: "Nombre",
      label_email: "Correo",
      label_phone: "Teléfono (opcional)",
      label_reply_via: "Responder por",
      label_message: "Mensaje",
      placeholder_name: "Nombre completo",
      placeholder_email: "tu@correo.com",
      placeholder_phone: "+34...",
      placeholder_phone_local: "Número de teléfono",
      placeholder_message: "¿En qué puedo ayudarte?",
      option_email: "Correo",
      option_whatsapp: "WhatsApp",
      btn_send: "Enviar mensaje",
      btn_sending: "Enviando...",
      contact_err_config: "\u274C El servicio de correo no está configurado.",
      contact_success: "\u2705 ¡Mensaje enviado con éxito!",
      contact_err_send: "\u274C Error al enviar. Inténtalo de nuevo.",

      footer_tagline: "Soluciones escalables e interfaces limpias.",
      footer_rights: "Todos los derechos reservados.",

      about_tag: "Más allá del código",
      about_title_1: "El",
      about_title_highlight: "ADN global",
      about_title_2: "de un desarrollador",
      about_intro:
        "Soy Kelvin C Edouard, también conocido como kelvruntime. Hago más que construir aplicaciones: transformo necesidades técnicas complejas en soluciones globales impactantes en cuatro idiomas y tres culturas.",
      about_timeline_1_h: "Adaptabilidad cultural",
      about_timeline_1_p:
        "Mi trayectoria desde República Dominicana hasta Brasil, Estados Unidos y ahora Haití fortaleció mi capacidad para adaptarme, colaborar y liderar en entornos diversos.",
      about_timeline_2_h: "Dominio técnico",
      about_timeline_2_p:
        "Aporto una mentalidad de resolución de problemas inspirada en CS50, combinada con experiencia full-stack moderna en React, Node.js y AWS.",
      stat_languages_label: "Idiomas nativos/fluidos",
      stat_mindset_label: "Mentalidad de resolución de problemas",
      stat_global_value: "Global",
      stat_ready_label: "Listo para proyectos",
      about_teaser_text:
        "¿Quieres ver cómo puedo conectar tu negocio con el mundo? ",
      about_teaser_link: "Hablemos de estrategia.",

      services_header_1: "Lo que puedo hacer",
      services_header_2: "por ti",
      service_0_title: "Desarrollo full-stack",
      service_0_desc:
        "Aplicaciones web rápidas y optimizadas para SEO, con arquitectura moderna y buenas prácticas.",
      service_1_title: "Soporte técnico multilingüe",
      service_1_desc:
        "Soporte experto en inglés, español, portugués y criollo haitiano.",
      service_2_title: "Cloud y DevOps",
      service_2_desc:
        "Soluciones en la nube seguras y escalables con AWS y otras plataformas.",
      service_3_title: "Localización de software",
      service_3_desc:
        "Adaptación de software para usuarios internacionales y varios idiomas.",

      skills_title: "Mis habilidades",
      skills_subtitle: "Tecnologías y herramientas que uso a diario.",
      skill_cat_frontend: "Frontend",
      skill_cat_backend: "Backend",
      skill_cat_cloud: "Cloud y DevOps",
      skill_cat_workflow: "Flujo de trabajo",
      skill_mobile_first: "Mobile-first",

      projects_title: "Mis proyectos",
      projects_subtitle: "Algunos de mis proyectos recientes.",
      project_0_title: "Portafolio personal",
      project_0_desc:
        "Sitio de portafolio moderno y responsive con React, animaciones suaves, tema oscuro y rendimiento optimizado.",
      project_1_title: "Plataforma e-commerce",
      project_1_desc:
        "Solución e-commerce full-stack con React, Node.js y pagos integrados.",
      project_2_title: "App de gestión de tareas",
      project_2_desc:
        "Aplicación colaborativa con actualizaciones en tiempo real, arrastrar y soltar y funciones de equipo.",
      project_3_title: "Panel meteorológico",
      project_3_desc:
        "Panel interactivo con pronósticos por ubicación, datos históricos y alertas meteorológicas.",
      project_4_title: "Analítica de redes sociales",
      project_4_desc:
        "Dashboard de analítica para redes sociales con visualización de datos e informes.",
      project_5_title: "Asistente de chat con IA",
      project_5_desc:
        "Asistente conversacional con machine learning, PLN y contexto.",

      journey_title: "Mi trayectoria",
      journey_subtitle: "Un camino global por la educación y la tecnología.",
      edu_0_location: "República Dominicana",
      edu_0_level: "Educación primaria",
      edu_0_desc: "Base de mi trayectoria académica.",
      edu_1_location: "Brasil",
      edu_1_level: "Educación secundaria",
      edu_1_desc:
        "Del 8.º grado al 2.º año de bachillerato—lógica y habilidades multilingües.",
      edu_2_location: "Estados Unidos",
      edu_2_level: "Último año de bachillerato / inicio en CS",
      edu_2_desc: "Completé el último año y profundicé en informática.",
      certs_section_title: "Certificaciones y aprendizaje",
      cert_0_title: "CS50: Introducción a la programación",
      cert_0_provider: "Universidad Harvard / Online",
      cert_0_info:
        "Fundamentos autodidactas: algoritmos, C y estructuras de datos.",
      cert_1_title: "TodCODE: Introducción a la programación",
      cert_1_provider: "Prof. Clarita",
      cert_1_info: "Primeros pasos en POO y sintaxis Java.",
      cert_2_title: "AWS Cloud Practitioner",
      cert_2_provider: "Amazon Web Services",
      cert_2_info: "Conceptos fundamentales de cloud e infraestructura.",
      cert_3_title: "Web full-stack",
      cert_3_provider: "MiduDev / Comunidades tech",
      cert_3_info: "React, Node.js y ecosistema JavaScript moderno.",

      meta_title:
        "Kelvin C Edouard (kelvruntime) | Portafolio Ingeniero de Software",
      meta_description:
        "Kelvin C Edouard (kelvruntime) es ingeniero de software full-stack que construye soluciones digitales modernas, escalables y globales con React, Node.js y AWS.",
      meta_keywords:
        "Kelvin C Edouard, kelvruntime, ingeniero de software, desarrollador full stack, React, Node.js, AWS, portafolio",
      og_title: "Kelvin C Edouard (kelvruntime) | Ingeniero de Software",
      og_description:
        "Ingeniero de software enfocado en aplicaciones web globales de alto impacto.",
      og_site_name: "Portafolio Kelvin C Edouard",
      twitter_title: "Kelvin C Edouard (kelvruntime) | Ingeniero de Software",
      twitter_description:
        "Proyectos, habilidades y servicios de un ingeniero full-stack.",
      jsonld_job_title: "Ingeniero de Software",
      jsonld_description:
        "Ingeniero de software full-stack que construye aplicaciones web globales con React, Node.js y AWS.",
      service_0_tags:
        "React.js|Node.js|JavaScript|TypeScript|Framework|Vite|PERN Stack|Aplicación web",
      service_1_tags: "Éxito del cliente|Soporte|Ayuda técnica|Bilingüe",
      service_2_tags: "AWS|Infraestructura|Despliegue|Automatización",
      service_3_tags: "Traducción|Mercados globales|Adaptación UI/UX",
      skill_rest_apis: "APIs REST",

      view_project: "Ver proyecto",
    },
  },
  ht: {
    translation: {
      nav_home: "Komansman",
      nav_about: "De mwen",
      nav_services: "Sèvis",
      nav_projects: "Pwojè",
      nav_hire: "Anboche m",
      nav_skills: "Konpetans",
      nav_experience: "Eksperyans",
      nav_logo_alt: "Logo kelvruntime",
      lang_aria: "Lang",

      status_available: "Disponib pou travay",
      hero_prefix: "Enjenieri",
      hero_highlight: "Solisyon",
      hero_suffix: "Global yo",
      hero_description_rest:
        "yon enjenyè lojisyèl ki rasanble kòd ak kominikasyon nan kat lang.",
      btn_get_started: "Kòmanse \u{1F680}",
      btn_story: "Istwa a \u2192 \u{1F449}",
      open_to_work: "Disponib pou travay",
      hero_i_am: "Mwen se",
      hero_avatar_alt: "Kelvin C Edouard, enjenyè lojisyèl",

      contact_title: "Kontakte",
      contact_title_span: "mwen",
      contact_subtitle: "Pale avè m, ann bati yon bagay bèl.",
      label_name: "Non",
      label_email: "Imèl",
      label_phone: "Telefòn (opsyonèl)",
      label_reply_via: "Reponn pa",
      label_message: "Mesaj",
      placeholder_name: "Non konplè",
      placeholder_email: "ou@imel.com",
      placeholder_phone: "+509...",
      placeholder_phone_local: "Nimewo telefòn",
      placeholder_message: "Kijan m ka ede w?",
      option_email: "Imèl",
      option_whatsapp: "WhatsApp",
      btn_send: "Voye mesaj",
      btn_sending: "Ap voye...",
      contact_err_config: "\u274C Sèvis imèl la pa konfigire.",
      contact_success: "\u2705 Mesaj la voye avèk siksè!",
      contact_err_send: "\u274C Erè pandan voye a. Eseye ankò.",

      footer_tagline: "Solisyon ki ka grandi ak entèfas ki pwòp.",
      footer_rights: "Tout dwa rezève.",

      about_tag: "Pi lwen pase kòd la",
      about_title_1: "",
      about_title_highlight: "ADN Global",
      about_title_2: "nan yon devlopè",
      about_intro:
        "Mwen se Kelvin C Edouard, kelvruntime. Mwen fè plis pase bati aplikasyon; mwen transfòme bezwen teknik konplèks an solisyon global ki gen enpak nan kat lang ak twa kilti.",
      about_timeline_1_h: "Adapte kilti",
      about_timeline_1_p:
        "Vwayaj mwen soti Repiblik Dominiken rive Brezil, Etazini, epi kounye a Ayiti, sa ki fòse kapasite m adapte, kolabore epi mennen nan anviwòn diferan.",
      about_timeline_2_h: "Metriz teknik",
      about_timeline_2_p:
        "Mwen pote yon tèt rezoud pwoblèm ki soti nan CS50, melanje ak eksperyans full-stack modèn nan React, Node.js, ak AWS.",
      stat_languages_label: "Lang natif/natiflans",
      stat_mindset_label: "Tèt rezoud pwoblèm",
      stat_global_value: "Global",
      stat_ready_label: "Pare pou pwojè",
      about_teaser_text: "Ou vle wè kijan m ka konekte biznis ou ak mond lan? ",
      about_teaser_link: "Ann pale estrateji.",

      services_header_1: "Sa m ka fè",
      services_header_2: "pou ou",
      service_0_title: "Devlopman full-stack",
      service_0_desc:
        "Bati aplikasyon entènèt rapid, SEO, ak achitekti modèn ak bon pratik.",
      service_1_title: "Sipò teknik plizyè lang",
      service_1_desc:
        "Sipò teknik nan angle, panyòl, pòtigè, ak kreyòl ayisyen.",
      service_2_title: "Cloud ak DevOps",
      service_2_desc:
        "Solisyon nwaj ki an sekirite epi ki ka grandi ak AWS ak lòt platfòm.",
      service_3_title: "Lokalizasyon lojisyèl",
      service_3_desc:
        "Adapte lojisyèl pou itilizatè entènasyonal ak plizyè lang.",

      skills_title: "Konpetans mwen",
      skills_subtitle: "Teknoloji ak zouti m itilize chak jou.",
      skill_cat_frontend: "Frontend",
      skill_cat_backend: "Backend",
      skill_cat_cloud: "Cloud ak DevOps",
      skill_cat_workflow: "Travay",
      skill_mobile_first: "Mobil an premye",

      projects_title: "Pwojè mwen",
      projects_subtitle: "Kèk nan pwojè resan mwen yo.",
      project_0_title: "Pòtfolyo pèsonèl",
      project_0_desc:
        "Sit pòtfolyo modèn, reponn, ak React, animasyon, tèm nwa, ak bon pèfòmans.",
      project_1_title: "Platfòm e-komès",
      project_1_desc: "Solisyon e-komès ak React, Node.js, ak peman entegre.",
      project_2_title: "App jesyon travay",
      project_2_desc:
        "Aplikasyon kolaboratif ak mete ajou an tan reyèl, drag-and-drop, ak ekip.",
      project_3_title: "Tablo meteo",
      project_3_desc:
        "Tablo entèaktif ak previzyon pa kote, done istorik, ak alèt tan sevè.",
      project_4_title: "Analiz rezo sosyal",
      project_4_desc: "Tablo analiz pou rezo sosyal ak vizyalizasyon ak rapò.",
      project_5_title: "Asistan chat IA",
      project_5_desc: "Asistan chat ak aprantisaj machin, NLP, ak kontèks.",

      journey_title: "Vwayaj mwen",
      journey_subtitle: "Yon chemen global nan edikasyon ak teknoloji.",
      edu_0_location: "Repiblik Dominiken",
      edu_0_level: "Lekòl primè",
      edu_0_desc: "Fondasyon vwayaj akademik mwen.",
      edu_1_location: "Brezil",
      edu_1_level: "Lekòl segondè",
      edu_1_desc:
        "Soti 8yè ane rive 2yè ane segondè—devlope lòjik ak konpetans plizyè lang.",
      edu_2_location: "Etazini",
      edu_2_level: "Dènye ane segondè / kòmansman CS",
      edu_2_desc:
        "Mwen fini dènye ane a epi mwen kòmanse plonje nan syans konpitè.",
      certs_section_title: "Sètifika ak aprantisaj",
      cert_0_title: "CS50: Entwodiksyon nan pwogramasyon",
      cert_0_provider: "Inivèsite Harvard / Entènèt",
      cert_0_info: "Baz: algorit, C, ak estrikti done.",
      cert_1_title: "TodCODE: Entwodiksyon nan pwogramasyon",
      cert_1_provider: "Prof. Clarita",
      cert_1_info: "Premye pa nan OOP ak sintaks Java.",
      cert_2_title: "AWS Cloud Practitioner",
      cert_2_provider: "Amazon Web Services",
      cert_2_info: "Konsèp baz sou nwaj ak enfrastrikti.",
      cert_3_title: "Web full-stack",
      cert_3_provider: "MiduDev / Kominote tech",
      cert_3_info: "React, Node.js, ak ekosistèm JavaScript modèn.",

      meta_title: "Kelvin C Edouard (kelvruntime) | Pòtfolyo Enjenyè Lojisyèl",
      meta_description:
        "Kelvin C Edouard (kelvruntime) se yon enjenyè lojisyèl full-stack ki bati solisyon dijital modèn, ki ka grandi, ak global ak React, Node.js, ak AWS.",
      meta_keywords:
        "Kelvin C Edouard, kelvruntime, enjenyè lojisyèl, devlopè full stack, React, Node.js, AWS, pòtfolyo",
      og_title: "Kelvin C Edouard (kelvruntime) | Enjenyè Lojisyèl",
      og_description:
        "Enjenyè lojisyèl ki konsantre sou aplikasyon entènèt global ki gen enpak.",
      og_site_name: "Pòtfolyo Kelvin C Edouard",
      twitter_title: "Kelvin C Edouard (kelvruntime) | Enjenyè Lojisyèl",
      twitter_description: "Pwojè, konpetans, ak sèvis yon enjenyè full-stack.",
      jsonld_job_title: "Enjenyè Lojisyèl",
      jsonld_description:
        "Enjenyè lojisyèl full-stack ki bati aplikasyon entènèt global ak React, Node.js, ak AWS.",
      service_0_tags:
        "React.js|Node.js|JavaScript|TypeScript|Framework|Vite|PERN Stack|Aplikasyon entènèt",
      service_1_tags: "Siksè kliyan|Sipò|Èd teknik|Biling",
      service_2_tags: "AWS|Enfrastrikti|Deplwaman|Otomatizasyon",
      service_3_tags: "Tradiksyon|Mache global|Adapte UI/UX",
      skill_rest_apis: "API REST",

      view_project: "Gade pwojè a",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "pt", "es", "ht"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
