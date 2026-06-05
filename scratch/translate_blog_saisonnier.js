import fs from 'fs';
import path from 'path';

const translations = {
  es: {
    BlogPosts: {
      "visa-saisonier-salarie": {
        hero: {
          title: "Visa saisonnier o Salarié: Guía 2024",
          subtitle: "Cómo conseguir un contrato temporal, preparar tu dossier y presentar la visa sin cometer los errores que más rechazos generan.",
          category: "Visas de Trabajo"
        },
        section1: {
          title: "¿Qué cubre la visa saisonnier / Salarié?",
          p1: "Permite trabajar en Francia entre 3 y 6 meses (renovable hasta 9) en sectores con demanda temporal. La empresa francesa inicia el expediente y valida el contrato ante la DIRECCTE o mediante la plataforma ANEF. Con ese contrato y una carta de motivación consistente demostrás que volverás al finalizar la temporada.",
          p2: "No necesitás demostrar francés perfecto, pero sí entender las tareas básicas. Contar con experiencia relacionada, cursos cortos o referencias laborales ayuda a que Recursos Humanos confíe en tu perfil y acelere el trámite."
        },
        reqsTitle: "Requisitos imprescindibles",
        reqs: [
          "Contrato temporal firmado + autorización de trabajo",
          "Seguro médico por todo el periodo y repatriación",
          "Fondos mínimos de 600 € mensuales si el empleador no cubre alojamiento",
          "Pasaje de regreso o dinero reservado para comprarlo"
        ],
        advTitle: "Ventajas",
        adv: [
          "Posibilidad de encadenar contratos y volver cada temporada",
          "Acceso a alojamiento de empresa en agro y hostelería",
          "Sumás experiencia francesa para futuras visas de trabajo",
          "Puedes cambiar a una visa de trabajo larga si recibes un CDI"
        ],
        timelineTitle: "Cronograma sugerido",
        timeline: [
          { month: "Mes 1", detail: "Definí sector, región y contactos. prepara CV/Carta en francés y empieza a enviar candidaturas." },
          { month: "Mes 2", detail: "Cerrá contrato + promesa de empleo, reune documentación personal y pide turno consular." },
          { month: "Mes 3", detail: "Entrevista en el consulado, espera del pasaporte y organización del viaje (seguro, alojamiento, llegada)." }
        ],
        docsTitle: "Documentación que revisan con lupa",
        docs: [
          "Contrato de trabajo visado por la DIRECCTE o validado vía ANEF",
          "Pasaporte vigente + copia completa",
          "Carta de motivación y CV en francés",
          "Seguro médico internacional que cubra toda la estadía",
          "Comprobante de alojamiento o attestation d'hébergement",
          "Fondos suficientes (extractos bancarios de los últimos 3 meses)"
        ],
        sectorsTitle: "Sectores con mayor demanda en 2024",
        sectors: [
          { title: "Agro / Vendimias", text: "Alta demanda entre agosto y octubre. Es clave postular con antelación y mostrar experiencia previa o ganas de aprender rápido." },
          { title: "Hostelería y turismo", text: "Hoteles de estaciones de ski y zonas costeras contratan para temporada alta. Buscan francés conversacional y disponibilidad de 4/6 meses." },
          { title: "Servicios urbanos", text: "Restaurantes, mudanzas y delivery suman personal en ciudades grandes. La red de contactos locales acelera tu búsqueda." }
        ],
        tipsTitle: "Tips para presentar el expediente",
        tips: [
          "Agendá el turno apenas recibas el contrato; en temporada alta se agotan rápido.",
          "Si tu empleador cubre alojamiento o comidas, pide que lo indiquen por escrito para justificar fondos menores.",
          "Incluí cartas de recomendación traducidas al francés para fortalecer tu perfil.",
          "Organiza el dossier en el orden que pide el consulado y llevá copias extra."
        ]
      }
    }
  },
  en: {
    BlogPosts: {
      "visa-saisonier-salarie": {
        hero: {
          title: "Saisonnier or Salarié Visa: 2024 Guide",
          subtitle: "How to get a temporary contract, prepare your dossier and present the visa without making the mistakes that generate the most rejections.",
          category: "Work Visas"
        },
        section1: {
          title: "What does the saisonnier / Salarié visa cover?",
          p1: "It allows working in France for 3 to 6 months (renewable up to 9) in sectors with temporary demand. The French company initiates the file and validates the contract with the DIRECCTE or via the ANEF platform. With that contract and a consistent motivation letter, you prove that you will return at the end of the season.",
          p2: "You don't need to demonstrate perfect French, but you do need to understand basic tasks. Having related experience, short courses or job references helps Human Resources trust your profile and speed up the process."
        },
        reqsTitle: "Essential requirements",
        reqs: [
          "Signed temporary contract + work authorization",
          "Medical insurance for the entire period and repatriation",
          "Minimum funds of €600 per month if the employer does not cover accommodation",
          "Return ticket or money reserved to buy it"
        ],
        advTitle: "Advantages",
        adv: [
          "Possibility of linking contracts and returning each season",
          "Access to company accommodation in agriculture and hospitality",
          "You add French experience for future work visas",
          "You can change to a long work visa if you receive a CDI"
        ],
        timelineTitle: "Suggested timeline",
        timeline: [
          { month: "Month 1", detail: "Define sector, region and contacts. Prepare CV/Letter in French and start sending applications." },
          { month: "Month 2", detail: "Close contract + job promise, gather personal documentation and request a consular appointment." },
          { month: "Month 3", detail: "Interview at the consulate, wait for the passport and organize the trip (insurance, accommodation, arrival)." }
        ],
        docsTitle: "Documentation they scrutinize",
        docs: [
          "Work contract endorsed by DIRECCTE or validated via ANEF",
          "Valid passport + full copy",
          "Motivation letter and CV in French",
          "International medical insurance covering the entire stay",
          "Proof of accommodation or attestation d'hébergement",
          "Sufficient funds (bank statements for the last 3 months)"
        ],
        sectorsTitle: "Sectors with the highest demand in 2024",
        sectors: [
          { title: "Agro / Grape harvests", text: "High demand between August and October. It is key to apply in advance and show previous experience or a desire to learn quickly." },
          { title: "Hospitality and tourism", text: "Ski resort and coastal area hotels hire for the high season. They look for conversational French and 4/6 months availability." },
          { title: "Urban services", text: "Restaurants, moving companies and delivery add staff in large cities. The network of local contacts speeds up your search." }
        ],
        tipsTitle: "Tips for presenting the file",
        tips: [
          "Schedule the appointment as soon as you receive the contract; in high season they sell out fast.",
          "If your employer covers accommodation or meals, ask them to state it in writing to justify fewer funds.",
          "Include recommendation letters translated into French to strengthen your profile.",
          "Organize the dossier in the order requested by the consulate and bring extra copies."
        ]
      }
    }
  },
  fr: {
    BlogPosts: {
      "visa-saisonier-salarie": {
        hero: {
          title: "Visa Saisonnier ou Salarié : Guide 2024",
          subtitle: "Comment obtenir un contrat temporaire, préparer votre dossier et présenter le visa sans commettre les erreurs qui génèrent le plus de rejets.",
          category: "Visas de Travail"
        },
        section1: {
          title: "Que couvre le visa saisonnier / Salarié ?",
          p1: "Il permet de travailler en France de 3 à 6 mois (renouvelable jusqu'à 9) dans des secteurs à demande temporaire. L'entreprise française initie le dossier et valide le contrat auprès de la DIRECCTE ou via la plateforme ANEF. Avec ce contrat et une lettre de motivation cohérente, vous prouvez que vous rentrerez à la fin de la saison.",
          p2: "Vous n'avez pas besoin de démontrer un français parfait, mais de comprendre les tâches de base. Avoir une expérience connexe, des formations courtes ou des références professionnelles aide les Ressources Humaines à faire confiance à votre profil et accélère la procédure."
        },
        reqsTitle: "Exigences essentielles",
        reqs: [
          "Contrat temporaire signé + autorisation de travail",
          "Assurance médicale pour toute la période et rapatriement",
          "Fonds minimums de 600 € par mois si l'employeur ne couvre pas le logement",
          "Billet de retour ou argent réservé pour l'acheter"
        ],
        advTitle: "Avantages",
        adv: [
          "Possibilité d'enchaîner les contrats et de revenir chaque saison",
          "Accès au logement d'entreprise dans l'agriculture et l'hôtellerie",
          "Vous ajoutez une expérience française pour de futurs visas de travail",
          "Vous pouvez passer à un visa de travail long si vous recevez un CDI"
        ],
        timelineTitle: "Calendrier suggéré",
        timeline: [
          { month: "Mois 1", detail: "Définissez le secteur, la région et les contacts. Préparez CV/Lettre en français et commencez à envoyer des candidatures." },
          { month: "Mois 2", detail: "Concluez le contrat + promesse d'embauche, rassemblez les documents personnels et demandez un rendez-vous consulaire." },
          { month: "Mois 3", detail: "Entretien au consulat, attente du passeport et organisation du voyage (assurance, hébergement, arrivée)." }
        ],
        docsTitle: "Documentation examinée à la loupe",
        docs: [
          "Contrat de travail visé par la DIRECCTE ou validé via l'ANEF",
          "Passeport en cours de validité + copie intégrale",
          "Lettre de motivation et CV en français",
          "Assurance médicale internationale couvrant tout le séjour",
          "Justificatif de domicile ou attestation d'hébergement",
          "Fonds suffisants (relevés bancaires des 3 derniers mois)"
        ],
        sectorsTitle: "Secteurs les plus demandés en 2024",
        sectors: [
          { title: "Agro / Vendanges", text: "Forte demande entre août et octobre. Il est essentiel de postuler à l'avance et de montrer une expérience préalable ou une envie d'apprendre rapidement." },
          { title: "Hôtellerie et tourisme", text: "Les hôtels des stations de ski et des zones côtières embauchent pour la haute saison. Ils recherchent un français conversationnel et une disponibilité de 4/6 mois." },
          { title: "Services urbains", text: "Les restaurants, les déménagements et la livraison recrutent du personnel dans les grandes villes. Le réseau de contacts locaux accélère votre recherche." }
        ],
        tipsTitle: "Conseils pour présenter le dossier",
        tips: [
          "Prenez rendez-vous dès que vous recevez le contrat ; en haute saison, ils s'épuisent vite.",
          "Si votre employeur couvre le logement ou les repas, demandez-lui de l'indiquer par écrit pour justifier des fonds moindres.",
          "Incluez des lettres de recommandation traduites en français pour renforcer votre profil.",
          "Organisez le dossier dans l'ordre demandé par le consulat et apportez des copies supplémentaires."
        ]
      }
    }
  }
};

const locales = ['es', 'en', 'fr'];
for (const locale of locales) {
  const filePath = path.join(process.cwd(), 'messages', `${locale}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (!data.BlogPosts) {
    data.BlogPosts = {};
  }
  data.BlogPosts["visa-saisonnier-salarie"] = translations[locale].BlogPosts["visa-saisonier-salarie"];
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${locale}.json with Saisonnier Visa blog post`);
}
