/* ══════════════════════════════════════════════
   FELLOWSHIP HUNTER — Shared i18n System
   Usage: include this script + call initI18n()
══════════════════════════════════════════════ */

const FH_TRANSLATIONS = {

  /* ── SHARED (nav, footer, buttons) ── */
  shared: {
    en: {
      nav_home:"Home", nav_calls:"Calls", nav_map:"Map",
      nav_ai:"Hunter AI", nav_advisory:"Advisory",
      lang_en:"EN", lang_es:"ES", lang_pt:"PT",
      footer_copy:"© 2026 Fellowship Hunter",
      footer_partner:"In strategic partnership with",
      btn_view:"View Details →", btn_official:"Official Site",
      btn_ai:"Try Hunter AI — Free",
      btn_calls:"Browse 88 Calls →",
      btn_advisory:"Visit RICAI Advisory →",
    },
    es: {
      nav_home:"Inicio", nav_calls:"Convocatorias", nav_map:"Mapa",
      nav_ai:"Hunter AI", nav_advisory:"Asesoría",
      lang_en:"EN", lang_es:"ES", lang_pt:"PT",
      footer_copy:"© 2026 Fellowship Hunter",
      footer_partner:"En alianza estratégica con",
      btn_view:"Ver Detalles →", btn_official:"Sitio Oficial",
      btn_ai:"Probar Hunter AI — Gratis",
      btn_calls:"Ver las 88 Convocatorias →",
      btn_advisory:"Visitar Asesoría RICAI →",
    },
    pt: {
      nav_home:"Início", nav_calls:"Vagas", nav_map:"Mapa",
      nav_ai:"Hunter AI", nav_advisory:"Assessoria",
      lang_en:"EN", lang_es:"ES", lang_pt:"PT",
      footer_copy:"© 2026 Fellowship Hunter",
      footer_partner:"Em parceria estratégica com",
      btn_view:"Ver Detalhes →", btn_official:"Site Oficial",
      btn_ai:"Experimentar Hunter AI — Grátis",
      btn_calls:"Ver as 88 Vagas →",
      btn_advisory:"Visitar Assessoria RICAI →",
    }
  },

  /* ── CALLS PAGE ── */
  calls: {
    en: {
      page_tag:"Global Database",
      page_title:"Every funded call. <em>Decoded.</em>",
      page_sub:"88 fully funded opportunities across 35+ countries — with real deadlines, real stipends, and the context to actually win them.",
      stat_calls:"Total Calls", stat_countries:"Countries",
      stat_levels:"Levels", stat_funded:"Fully Funded",
      search_ph:"Search by name, country, field…",
      filter_country:"All Countries", filter_level:"All Levels",
      filter_all_levels:"All Levels",
      filter_priority:"All Priorities",
      priority_high:"⭐ High Priority", priority_med:"Medium Priority",
      showing:"Showing", of:"of", calls_label:"calls",
      clear:"Clear filters",
      lbl_funding:"Funding", lbl_level:"Level", lbl_fields:"Fields",
      lbl_who:"Who", lbl_opens:"Opens", lbl_deadline:"Deadline",
      lbl_freq:"Frequency",
      modal_funding:"Funding & Coverage",
      modal_elig:"Fields & Eligibility",
      modal_time:"Timeline",
      modal_notes:"Strategic Notes",
      no_results:"No calls match your filters",
      no_results_sub:"Try adjusting your search or clearing the filters.",
      high_priority:"High Priority",
    },
    es: {
      page_tag:"Base de Datos Global",
      page_title:"Cada convocatoria financiada. <em>Decodificada.</em>",
      page_sub:"88 oportunidades completamente financiadas en 35+ países — con fechas límite reales, estipendios reales y el contexto para ganarlas.",
      stat_calls:"Convocatorias", stat_countries:"Países",
      stat_levels:"Niveles", stat_funded:"Financiadas",
      search_ph:"Buscar por nombre, país, área…",
      filter_country:"Todos los Países", filter_level:"Todos los Niveles",
      filter_all_levels:"Todos los Niveles",
      filter_priority:"Todas las Prioridades",
      priority_high:"⭐ Alta Prioridad", priority_med:"Prioridad Media",
      showing:"Mostrando", of:"de", calls_label:"convocatorias",
      clear:"Limpiar filtros",
      lbl_funding:"Estipendio", lbl_level:"Nivel", lbl_fields:"Áreas",
      lbl_who:"Para quién", lbl_opens:"Apertura", lbl_deadline:"Plazo",
      lbl_freq:"Frecuencia",
      modal_funding:"Financiamiento y Cobertura",
      modal_elig:"Áreas y Elegibilidad",
      modal_time:"Fechas",
      modal_notes:"Notas Estratégicas",
      no_results:"Ninguna convocatoria coincide con tus filtros",
      no_results_sub:"Intenta ajustar la búsqueda o limpiar los filtros.",
      high_priority:"Alta Prioridad",
    },
    pt: {
      page_tag:"Base de Dados Global",
      page_title:"Cada vaga financiada. <em>Decodificada.</em>",
      page_sub:"88 oportunidades totalmente financiadas em 35+ países — com prazos reais, bolsas reais e o contexto para vencê-las.",
      stat_calls:"Vagas", stat_countries:"Países",
      stat_levels:"Níveis", stat_funded:"Financiadas",
      search_ph:"Buscar por nome, país, área…",
      filter_country:"Todos os Países", filter_level:"Todos os Níveis",
      filter_all_levels:"Todos os Níveis",
      filter_priority:"Todas as Prioridades",
      priority_high:"⭐ Alta Prioridade", priority_med:"Prioridade Média",
      showing:"Mostrando", of:"de", calls_label:"vagas",
      clear:"Limpar filtros",
      lbl_funding:"Bolsa", lbl_level:"Nível", lbl_fields:"Áreas",
      lbl_who:"Para quem", lbl_opens:"Abertura", lbl_deadline:"Prazo",
      lbl_freq:"Frequência",
      modal_funding:"Financiamento e Cobertura",
      modal_elig:"Áreas e Elegibilidade",
      modal_time:"Datas",
      modal_notes:"Notas Estratégicas",
      no_results:"Nenhuma vaga corresponde aos seus filtros",
      no_results_sub:"Tente ajustar a busca ou limpar os filtros.",
      high_priority:"Alta Prioridade",
    }
  },

  /* ── MAP PAGE ── */
  map: {
    en: {
      page_title:"🗺️ Global Fellowship Map",
      page_sub_tpl:"{n} funded opportunities · {c} countries",
      search_ph:"Search calls…",
      filter_all:"All", filter_phd:"PhD", filter_masters:"Masters",
      filter_postdoc:"Postdoc", filter_research:"Research",
      showing_n:"Showing {n} calls",
      lbl_funding:"Funding", lbl_level:"Level",
      lbl_deadline:"Deadline", lbl_fields:"Fields",
      legend_title:"Level",
      btn_site:"Official Site →", btn_all:"All Details",
    },
    es: {
      page_title:"🗺️ Mapa Global de Becas",
      page_sub_tpl:"{n} oportunidades financiadas · {c} países",
      search_ph:"Buscar convocatorias…",
      filter_all:"Todas", filter_phd:"Doctorado", filter_masters:"Maestría",
      filter_postdoc:"Posdoctorado", filter_research:"Investigación",
      showing_n:"Mostrando {n} convocatorias",
      lbl_funding:"Estipendio", lbl_level:"Nivel",
      lbl_deadline:"Plazo", lbl_fields:"Áreas",
      legend_title:"Nivel",
      btn_site:"Sitio Oficial →", btn_all:"Ver Detalles",
    },
    pt: {
      page_title:"🗺️ Mapa Global de Bolsas",
      page_sub_tpl:"{n} oportunidades financiadas · {c} países",
      search_ph:"Buscar vagas…",
      filter_all:"Todas", filter_phd:"Doutorado", filter_masters:"Mestrado",
      filter_postdoc:"Pós-doutorado", filter_research:"Pesquisa",
      showing_n:"Mostrando {n} vagas",
      lbl_funding:"Bolsa", lbl_level:"Nível",
      lbl_deadline:"Prazo", lbl_fields:"Áreas",
      legend_title:"Nível",
      btn_site:"Site Oficial →", btn_all:"Ver Detalhes",
    }
  },

  /* ── HUNTER AI PAGE ── */
  ai: {
    en: {
      sidebar_title:"🤖 Hunter AI Tools",
      sidebar_sub:"Select a tool and describe your needs — the AI will guide you.",
      tools_discover:"Discover",
      tools_create:"Create",
      tools_analyze:"Analyze",
      tool_finder_name:"Fellowship Finder",
      tool_finder_desc:"Tell me your profile and I'll match you with the best calls from our 88-call database.",
      tool_letter_name:"Motivation Letter",
      tool_letter_desc:"Generate a high-impact motivation letter tailored to a specific call.",
      tool_cv_name:"CV Builder & Checker",
      tool_cv_desc:"Upload your CV — get feedback and an optimized academic version.",
      tool_doc_name:"Document Reviewer",
      tool_doc_desc:"Upload any document — get expert feedback based on selection committee criteria.",
      tool_interview_name:"Interview Prep",
      tool_interview_desc:"Simulate an interview with the selection committee for your target fellowship.",
      status:"AI Online · Powered by Claude",
      upload_cv:"📎 Upload CV (PDF)",
      upload_doc:"📄 Upload Document",
      input_ph:"Describe your profile, field, and goals…",
      footer_privacy:"🔒 Your data is not stored ·",
      footer_human:"Need human advisory?",
      badge_new:"New",
    },
    es: {
      sidebar_title:"🤖 Herramientas Hunter AI",
      sidebar_sub:"Selecciona una herramienta y describe tu necesidad — la IA te guiará.",
      tools_discover:"Descubrir",
      tools_create:"Crear",
      tools_analyze:"Analizar",
      tool_finder_name:"Buscador de Becas",
      tool_finder_desc:"Cuéntame tu perfil y te emparejaré con las mejores convocatorias de nuestra base de datos.",
      tool_letter_name:"Carta de Motivación",
      tool_letter_desc:"Genera una carta de motivación de alto impacto adaptada a una convocatoria específica.",
      tool_cv_name:"Constructor de CV",
      tool_cv_desc:"Sube tu CV — obtén feedback y una versión académica optimizada.",
      tool_doc_name:"Revisor de Documentos",
      tool_doc_desc:"Sube cualquier documento — recibe feedback experto basado en criterios de comités reales.",
      tool_interview_name:"Preparación de Entrevista",
      tool_interview_desc:"Simula una entrevista con el comité de selección para tu beca objetivo.",
      status:"IA en línea · Impulsada por Claude",
      upload_cv:"📎 Subir CV (PDF)",
      upload_doc:"📄 Subir Documento",
      input_ph:"Describe tu perfil, área y objetivos…",
      footer_privacy:"🔒 Tus datos no se almacenan ·",
      footer_human:"¿Necesitas asesoría humana?",
      badge_new:"Nuevo",
    },
    pt: {
      sidebar_title:"🤖 Ferramentas Hunter AI",
      sidebar_sub:"Selecione uma ferramenta e descreva sua necessidade — a IA irá guiá-lo.",
      tools_discover:"Descobrir",
      tools_create:"Criar",
      tools_analyze:"Analisar",
      tool_finder_name:"Buscador de Bolsas",
      tool_finder_desc:"Conte-me seu perfil e vou encontrar as melhores vagas do nosso banco de dados.",
      tool_letter_name:"Carta de Motivação",
      tool_letter_desc:"Gere uma carta de motivação de alto impacto adaptada a uma vaga específica.",
      tool_cv_name:"Construtor de CV",
      tool_cv_desc:"Envie seu CV — receba feedback e uma versão acadêmica otimizada.",
      tool_doc_name:"Revisor de Documentos",
      tool_doc_desc:"Envie qualquer documento — receba feedback especializado baseado em critérios reais.",
      tool_interview_name:"Preparação para Entrevista",
      tool_interview_desc:"Simule uma entrevista com o comitê de seleção para sua bolsa alvo.",
      status:"IA Online · Powered by Claude",
      upload_cv:"📎 Enviar CV (PDF)",
      upload_doc:"📄 Enviar Documento",
      input_ph:"Descreva seu perfil, área e objetivos…",
      footer_privacy:"🔒 Seus dados não são armazenados ·",
      footer_human:"Precisa de assessoria humana?",
      badge_new:"Novo",
    }
  },

  /* ── ADVISORY PAGE ── */
  advisory: {
    en: {
      page_tag:"Strategic Advisory",
      page_title:'The link is public.<br><em>The strategy to win it is not.</em>',
      page_sub:"Expert advisory from active researchers who have navigated the committees, won the fellowships, and built careers across borders. Free to start — serious when it counts.",
      btn_try:"Try Hunter AI — Free",
      btn_meet:"Meet RICAI Network",
      sec1_eyebrow:"What we offer",
      sec1_title:"Seven advisory pathways",
      sec1_lead:"From finding the right call to walking into the interview prepared — every step covered.",
      featured_label:"Most Requested",
      featured_title:"Fellowship Search & Matching",
      featured_desc:"We don't share generic lists. We map your profile — field, level, language, country preference, deadline urgency — against our curated database of 88+ funded calls and identify the opportunities where your application will land strongest.",
      how_eyebrow:"The Process",
      how_title:"From profile to funded position",
      how_lead:"Four moves. No bureaucracy between you and the guidance you need.",
      step1_title:"Use Hunter AI", step1_desc:"Start with our free AI tool — describe your profile and get matched to the best opportunities in our 88-call database instantly.",
      step2_title:"Identify Your Need", step2_desc:"Choose the advisory pathway that fits your stage — search, letter, CV, proposal, interview, translation, or outreach.",
      step3_title:"Connect with an Advisor", step3_desc:"Get matched with a RICAI researcher who has direct experience in your target field, fellowship, and destination country.",
      step4_title:"Apply & Win", step4_desc:"Submit a strategically built application — and walk into that interview prepared to turn your profile into a funded position.",
      ai_eyebrow:"AI-Powered",
      ai_title:"Start in 30 seconds.<br>No account needed.",
      ai_desc:"Before booking a session with a human advisor, try Hunter AI — our free tool that gives you instant fellowship matches, motivation letter drafts, CV feedback, and interview practice.",
      ricai_badge:"🔬 Strategic Partnership",
      ricai_title:"RICAI × Fellowship Hunter",
      ricai_lead:"RICAI Research Network is an independent open-science community of active researchers across 16+ countries. When you need a human expert — not just an AI — RICAI's advisors step in.",
      cta_badge:"✦ 100% Free to Start",
      cta_title:"Your next fellowship is already out there.",
      cta_desc:"The gap between who wins and who doesn't is rarely talent. It's strategy, preparation, and knowing where to look. Start with Hunter AI — no account, no cost.",
      free1:"No account required", free2:"Responds in EN · ES · PT",
      free3:"Access all 88 calls free", free4:"Powered by Claude AI",
    },
    es: {
      page_tag:"Asesoría Estratégica",
      page_title:'El link es público.<br><em>La estrategia para ganar, no.</em>',
      page_sub:"Asesoría experta de investigadores activos que han navegado los comités, ganado las becas y construido carreras más allá de las fronteras. Gratis para empezar — serio cuando importa.",
      btn_try:"Probar Hunter AI — Gratis",
      btn_meet:"Conocer RICAI Network",
      sec1_eyebrow:"Lo que ofrecemos",
      sec1_title:"Siete caminos de asesoría",
      sec1_lead:"Desde encontrar la convocatoria correcta hasta entrar a la entrevista preparado — cada paso cubierto.",
      featured_label:"Más Solicitado",
      featured_title:"Búsqueda y Emparejamiento de Becas",
      featured_desc:"No compartimos listas genéricas. Mapeamos tu perfil — campo, nivel, idioma, preferencia de país, urgencia de plazo — contra nuestra base de datos curada de 88+ convocatorias financiadas e identificamos las oportunidades donde tu aplicación aterrizará más fuerte.",
      how_eyebrow:"El Proceso",
      how_title:"Del perfil a la posición financiada",
      how_lead:"Cuatro movimientos. Sin burocracia entre tú y la orientación que necesitas.",
      step1_title:"Usa Hunter AI", step1_desc:"Empieza con nuestra herramienta de IA gratuita — describe tu perfil y obtén al instante las mejores oportunidades de nuestra base de datos.",
      step2_title:"Identifica tu Necesidad", step2_desc:"Elige el camino de asesoría que se ajuste a tu etapa — búsqueda, carta, CV, propuesta, entrevista, traducción o contacto con supervisores.",
      step3_title:"Conecta con un Asesor", step3_desc:"Te emparejamos con un investigador de RICAI que tiene experiencia directa en tu campo objetivo, beca y país de destino.",
      step4_title:"Aplica y Gana", step4_desc:"Presenta una aplicación construida estratégicamente — y entra a esa entrevista preparado para convertir tu perfil en una posición financiada.",
      ai_eyebrow:"Impulsado por IA",
      ai_title:"Empieza en 30 segundos.<br>Sin cuenta necesaria.",
      ai_desc:"Antes de reservar una sesión con un asesor humano, prueba Hunter AI — nuestra herramienta gratuita que te da emparejamientos instantáneos, borradores de carta de motivación, feedback de CV y práctica de entrevistas.",
      ricai_badge:"🔬 Alianza Estratégica",
      ricai_title:"RICAI × Fellowship Hunter",
      ricai_lead:"RICAI Research Network es una comunidad independiente de ciencia abierta con investigadores activos en más de 16 países. Cuando necesitas un experto humano — no solo una IA — los asesores de RICAI entran en acción.",
      cta_badge:"✦ 100% Gratis para Empezar",
      cta_title:"Tu próxima beca ya existe.",
      cta_desc:"La diferencia entre quien gana y quien no rara vez es el talento. Es la estrategia, la preparación y saber dónde buscar. Empieza con Hunter AI — sin cuenta, sin costo.",
      free1:"Sin cuenta requerida", free2:"Responde en EN · ES · PT",
      free3:"Acceso a las 88 convocatorias gratis", free4:"Powered by Claude AI",
    },
    pt: {
      page_tag:"Assessoria Estratégica",
      page_title:'O link é público.<br><em>A estratégia para vencer, não.</em>',
      page_sub:"Assessoria especializada de pesquisadores ativos que navegaram os comitês, venceram bolsas e construíram carreiras além das fronteiras. Gratuito para começar — sério quando importa.",
      btn_try:"Experimentar Hunter AI — Grátis",
      btn_meet:"Conhecer RICAI Network",
      sec1_eyebrow:"O que oferecemos",
      sec1_title:"Sete caminhos de assessoria",
      sec1_lead:"Desde encontrar a vaga certa até entrar na entrevista preparado — cada etapa coberta.",
      featured_label:"Mais Solicitado",
      featured_title:"Busca e Correspondência de Bolsas",
      featured_desc:"Não compartilhamos listas genéricas. Mapeamos seu perfil — área, nível, idioma, preferência de país, urgência de prazo — contra nosso banco de dados de 88+ vagas financiadas e identificamos as oportunidades onde sua candidatura terá mais força.",
      how_eyebrow:"O Processo",
      how_title:"Do perfil à posição financiada",
      how_lead:"Quatro movimentos. Sem burocracia entre você e a orientação que precisa.",
      step1_title:"Use o Hunter AI", step1_desc:"Comece com nossa ferramenta de IA gratuita — descreva seu perfil e obtenha imediatamente as melhores oportunidades do nosso banco de dados.",
      step2_title:"Identifique sua Necessidade", step2_desc:"Escolha o caminho de assessoria que se adequa à sua etapa — busca, carta, CV, proposta, entrevista, tradução ou contato com orientadores.",
      step3_title:"Conecte-se com um Assessor", step3_desc:"Conectamos você a um pesquisador do RICAI com experiência direta em seu campo alvo, bolsa e país de destino.",
      step4_title:"Candidate-se e Vença", step4_desc:"Envie uma candidatura construída estrategicamente — e entre naquela entrevista preparado para transformar seu perfil em uma posição financiada.",
      ai_eyebrow:"Impulsionado por IA",
      ai_title:"Comece em 30 segundos.<br>Sem conta necessária.",
      ai_desc:"Antes de agendar uma sessão com um assessor humano, experimente o Hunter AI — nossa ferramenta gratuita que oferece correspondências instantâneas, rascunhos de carta de motivação, feedback de CV e prática de entrevistas.",
      ricai_badge:"🔬 Parceria Estratégica",
      ricai_title:"RICAI × Fellowship Hunter",
      ricai_lead:"RICAI Research Network é uma comunidade independente de ciência aberta com pesquisadores ativos em mais de 16 países. Quando você precisa de um especialista humano — não apenas IA — os assessores do RICAI entram em ação.",
      cta_badge:"✦ 100% Gratuito para Começar",
      cta_title:"Sua próxima bolsa já existe.",
      cta_desc:"A diferença entre quem vence e quem não vence raramente é talento. É estratégia, preparação e saber onde procurar. Comece com o Hunter AI — sem conta, sem custo.",
      free1:"Sem conta necessária", free2:"Responde em EN · ES · PT",
      free3:"Acesso a todas as 88 vagas grátis", free4:"Powered by Claude AI",
    }
  }
};

/* ══ ENGINE ══ */
let FH_LANG = localStorage.getItem('fh_lang') || 'en';

function fhT(page, key) {
  const shared = FH_TRANSLATIONS.shared[FH_LANG] || FH_TRANSLATIONS.shared.en;
  const pageT = (FH_TRANSLATIONS[page] && FH_TRANSLATIONS[page][FH_LANG])
    || (FH_TRANSLATIONS[page] && FH_TRANSLATIONS[page].en)
    || {};
  return pageT[key] || shared[key] || key;
}

function setLang(lang) {
  FH_LANG = lang;
  localStorage.setItem('fh_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.toLowerCase() === lang);
  });
  if(typeof applyPageTranslations === 'function') applyPageTranslations(lang);
  document.documentElement.lang = lang;
}

function initI18n(page) {
  /* restore saved lang */
  const saved = localStorage.getItem('fh_lang') || 'en';
  FH_LANG = saved;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.toLowerCase() === saved);
  });
  /* apply data-i18n attributes */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = fhT(page, key);
    if(val && val !== key) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const val = fhT(page, key);
    if(val && val !== key) el.placeholder = val;
  });
  if(typeof applyPageTranslations === 'function') applyPageTranslations(saved);
  document.documentElement.lang = saved;
}
