export interface ProjectDetail {
  id: number
  slug: string
  title: string
  category: string
  description: string
  tags: string[]
  color: string
  overview: string
  challenge: string
  solution: string
  process: {
    step: string
    description: string
  }[]
  tools: string[]
  results: string[]
}

export const projects: ProjectDetail[] = [
  {
    id: 1,
    slug: "app-finanzas-personales",
    title: "App de Finanzas Personales",
    category: "UI/UX Design",
    description:
      "Rediseño completo de una app de gestión financiera. Investigación de usuarios, wireframes, prototipo interactivo y design system en Figma.",
    tags: ["Figma", "User Research", "Prototipado", "Design System"],
    color: "bg-primary/10",
    overview:
      "Este proyecto consistió en el rediseño integral de una aplicación móvil de finanzas personales. El objetivo principal fue mejorar la experiencia de usuario, simplificando flujos complejos y creando una interfaz visual moderna y accesible que permita a los usuarios gestionar sus finanzas de forma intuitiva.",
    challenge:
      "La app original presentaba una navegación confusa, pantallas sobrecargadas de información y una tasa de abandono alta en el flujo de registro. Los usuarios reportaban dificultad para encontrar funciones clave como el historial de transacciones y la configuración de presupuestos.",
    solution:
      "Se realizó una reestructuración completa de la arquitectura de información, se simplificaron los flujos principales y se creó un design system consistente. Se priorizó la visualización de datos financieros con gráficos claros y se implementó un onboarding guiado para nuevos usuarios.",
    process: [
      {
        step: "Investigación",
        description:
          "Entrevistas con 12 usuarios, análisis de competencia de 5 apps líderes del mercado, encuestas de satisfacción y creación de 3 user personas representativos.",
      },
      {
        step: "Ideación",
        description:
          "Sesiones de card sorting con usuarios reales, nueva arquitectura de información, user flows optimizados y sketches iniciales de las pantallas principales.",
      },
      {
        step: "Diseño",
        description:
          "Wireframes de baja y alta fidelidad en Figma, design system con componentes reutilizables, paleta de colores accesible y tipografía optimizada para lectura en dispositivos móviles.",
      },
      {
        step: "Validación",
        description:
          "Tests de usabilidad con 8 participantes, iteraciones basadas en feedback, prototipo interactivo final y documentación completa del design system.",
      },
    ],
    tools: ["Figma", "FigJam", "Maze", "Google Forms", "Notion"],
    results: [
      "Reducción del flujo de registro de 6 a 3 pasos",
      "Arquitectura de información reorganizada con acceso directo a las 4 funciones más usadas",
      "Design system con más de 40 componentes documentados",
      "Prototipo interactivo de alta fidelidad con 25 pantallas",
    ],
  },
  {
    id: 2,
    slug: "plataforma-e-learning",
    title: "Plataforma E-learning",
    category: "UX Research + UI",
    description:
      "Diseño de plataforma educativa desde cero. Entrevistas con usuarios, mapas de empatía, wireframes y prototipo de alta fidelidad.",
    tags: ["Figma", "Wireframing", "UX Research", "Prototipado"],
    color: "bg-chart-2/10",
    overview:
      "Diseño integral de una plataforma de e-learning orientada a estudiantes universitarios. El proyecto abarcó desde la investigación inicial con usuarios hasta la entrega de un prototipo de alta fidelidad, con foco en la accesibilidad y la motivación del aprendizaje continuo.",
    challenge:
      "Las plataformas educativas existentes presentaban interfaces abrumadoras, falta de personalización en las rutas de aprendizaje y baja retención de estudiantes. Se necesitaba una experiencia que motivara el aprendizaje continuo y se adaptara a diferentes estilos de estudio.",
    solution:
      "Se diseñó una plataforma con rutas de aprendizaje personalizables, un sistema de gamificación sutil para mantener la motivación, y una interfaz limpia que prioriza el contenido. Se implementó un dashboard personalizado que muestra el progreso de forma visual y celebra los logros.",
    process: [
      {
        step: "Investigación",
        description:
          "Entrevistas en profundidad con 15 estudiantes universitarios, benchmark de 6 plataformas educativas, mapas de empatía y definición de 4 user personas.",
      },
      {
        step: "Ideación",
        description:
          "Workshop de co-creación con estudiantes, mapas de experiencia del usuario, definición de features prioritarias con metodología MoSCoW y storyboards de flujos clave.",
      },
      {
        step: "Diseño",
        description:
          "Wireframes iterativos, sistema de diseño con foco en accesibilidad WCAG 2.1 AA, prototipos de baja y alta fidelidad, y micro-interacciones para feedback del sistema.",
      },
      {
        step: "Validación",
        description:
          "Tests de usabilidad remotos con Maze, análisis de mapas de calor, iteraciones en 3 ciclos de mejora y presentación final a stakeholders.",
      },
    ],
    tools: ["Figma", "FigJam", "Maze", "Miro", "Optimal Workshop"],
    results: [
      "Diseño responsive completo para desktop, tablet y móvil",
      "Sistema de gamificación con badges y streaks de estudio",
      "Flujo de onboarding que personaliza la experiencia en 4 pasos",
      "Prototipo interactivo con más de 35 pantallas conectadas",
    ],
  },
  {
    id: 3,
    slug: "dashboard-gestion",
    title: "Dashboard de Gestión",
    category: "UI Design",
    description:
      "Interfaz de administración para sistema interno. Componentes reutilizables, responsive design y documentación de design system.",
    tags: ["Figma", "Design System", "Responsive", "Componentes"],
    color: "bg-chart-3/10",
    overview:
      "Diseño de un dashboard de gestión interna para una organización que necesitaba centralizar métricas, reportes y tareas en una sola interfaz. El proyecto se centró en crear un sistema visual claro, eficiente y escalable, con un design system completo para facilitar futuras implementaciones.",
    challenge:
      "El equipo de gestión manejaba la información en múltiples hojas de cálculo y herramientas desconectadas. No existía una vista unificada de las métricas clave, lo que generaba demoras en la toma de decisiones y errores por falta de datos actualizados en tiempo real.",
    solution:
      "Se diseñó un dashboard modular con widgets configurables, visualización de datos en tiempo real, sistema de alertas inteligentes y una arquitectura de componentes escalable. Se priorizó la eficiencia en las tareas recurrentes y la personalización según el rol del usuario.",
    process: [
      {
        step: "Investigación",
        description:
          "Entrevistas con 6 miembros del equipo de gestión, análisis de los workflows actuales, auditoría de herramientas existentes e identificación de pain points principales.",
      },
      {
        step: "Ideación",
        description:
          "Definición de métricas clave por rol, sketches de layouts modulares, definición de jerarquía de información y priorización de features con el equipo de desarrollo.",
      },
      {
        step: "Diseño",
        description:
          "Design system completo con componentes atómicos, gráficos y visualizaciones de datos, diseño responsive para desktop y tablet, y modos claro/oscuro.",
      },
      {
        step: "Validación",
        description:
          "Revisión con el equipo de desarrollo para asegurar viabilidad técnica, tests con usuarios finales, iteraciones y documentación completa en Figma.",
      },
    ],
    tools: ["Figma", "FigJam", "Notion", "Zeroheight"],
    results: [
      "Design system con más de 60 componentes documentados",
      "Dashboard personalizable por rol con 4 vistas predefinidas",
      "Sistema de visualización de datos con 8 tipos de gráficos",
      "Documentación completa con guías de uso para el equipo de desarrollo",
    ],
  },
]
