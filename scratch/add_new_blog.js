const fs = require('fs');
const path = require('path');

const newPost = {
  es: {
    hero: {
      title: "Cómo conseguir trabajo en Francia desde América Latina (sin estar allá)",
      subtitle: "Estrategias y plataformas para encontrar empleador desde tu país y asegurar tu visa Salarié o Saisonnier.",
      category: "Trabajo"
    },
    section1: {
      title: "Por qué es importante tener trabajo antes de viajar",
      p1: "Uno de los miedos más comunes entre quienes quieren emigrar a Francia es este: '¿cómo consigo un empleador si estoy al otro lado del mundo?' La buena noticia es que es completamente posible, y hay una estrategia clara para hacerlo. En Allée France hemos acompañado a más de 700 personas a través de este proceso, y en este artículo te compartimos exactamente cómo abordarlo.",
      p2: "Para la visa Salarié y Saisonnier, el contrato de trabajo con un empleador francés es el pilar central del expediente. Sin él, no hay visa. Por eso, conseguir empleo desde LATAM no es solo una ventaja: es el primer paso obligatorio en el proceso migratorio laboral. Además, llegar con trabajo garantizado te permite planificar tu alojamiento, tus finanzas y tu adaptación con mucha más tranquilidad. No es lo mismo llegar a improvisar que llegar con un plan concreto."
    },
    plataformasTitle: "Las plataformas donde buscar trabajo en Francia",
    plataformas: [
      { name: "France Travail (ex-Pôle Emploi)", text: "Es el portal oficial de empleo del gobierno francés. Está en francés, pero tiene miles de ofertas actualizadas diariamente. Podés registrarte desde el exterior y aplicar en línea. Buscá por sector y región." },
      { name: "LinkedIn", text: "Muchos empleadores franceses, especialmente en gastronomía, turismo, construcción y tecnología, publican en LinkedIn. Optimizá tu perfil en francés, indicá que buscás trabajo en Francia y que contás con disponibilidad para visa. Contactá directamente a los responsables de RRHH." },
      { name: "Indeed France", text: "indeed.fr es el motor de búsqueda de empleo más grande en Francia. Filtrá por 'CDI', 'CDD', o 'saisonnier' según el tipo de contrato que necesitás para tu visa." },
      { name: "APEC y Cadreemploi", text: "Para perfiles profesionales y ejecutivos. Requieren nivel de francés intermedio o avanzado." },
      { name: "Grupos de Facebook y WhatsApp de la comunidad latina", text: "Hay redes de latinoamericanos en Francia muy activas donde empleadores comparten vacantes informales. Muchos contratos para visa Saisonnier surgen de esta forma." }
    ],
    sectoresTitle: "Los sectores con mayor demanda (Métiers en Tension)",
    sectoresText: "Francia tiene oficialmente sectores con escasez de personal, los llamados Métiers en Tension. Trabajar en uno de estos sectores simplifica enormemente el proceso de visa porque el empleador no necesita publicar la oferta por 21 días en France Travail. Los principales son:",
    sectores: [
      "Hotelería y restauración (cocinero, mozo, recepcionista, encargado de sala)",
      "Agricultura y vendimia (recolección de frutas, uvas, flores)",
      "Construcción (albañil, pintor, electricista, plomero)",
      "Cuidado de personas mayores (auxiliar de vida, enfermería)",
      "Transporte y logística"
    ],
    sectoresConclusion: "Si tu oficio califica como Métier en Tension en la región donde trabajarás, el proceso es más rápido y sencillo.",
    cvTitle: "Cómo preparar tu CV para el mercado francés",
    cvText: "El CV en Francia sigue un formato diferente al latinoamericano. Algunos puntos clave:",
    cvList: [
      "Máximo 1 página (2 si tenés más de 10 años de experiencia).",
      "Foto opcional, pero muy común incluirla.",
      "Sin información como estado civil, número de hijos o DNI.",
      "Formato cronológico inverso: lo más reciente primero.",
      "Redactado completamente en francés, incluso si el empleador habla español."
    ],
    cvConclusion: "El nivel de francés exigido varía por sector. En agricultura o trabajo estacional podés arreglarte con nivel básico. En gastronomía y cuidados, un nivel intermedio (B1) abre más puertas.",
    procesoTitle: "El proceso una vez que encontrás empleador",
    procesoText: "Cuando un empleador francés acepta contratarte, comienza el proceso formal de visa:",
    procesoList: [
      "El empleador inicia el trámite en la plataforma ANEF (Ministerio del Interior).",
      "DREETS verifica la oferta y otorga la autorización de trabajo.",
      "Con la autorización, el empleador te envía la documentación necesaria.",
      "Vos solicitás la visa en el consulado francés de tu país.",
      "Una vez aprobada, podés volar a Francia y comenzar a trabajar."
    ],
    procesoConclusion: "El tiempo total desde que se inicia el trámite hasta que viajás suele ser de 6 a 12 semanas, según la región y el tipo de visa.",
    asesoriaTitle: "El rol de la asesoría migratoria en este proceso",
    asesoriaText: "Muchos errores en el expediente ocurren en la coordinación entre el solicitante y el empleador: documentos incompletos, plazos mal calculados, o formatos incorrectos. Allée France acompaña tanto al trabajador como al empleador para que el proceso sea limpio y sin retrasos."
  },
  en: {
    hero: {
      title: "How to find a job in France from Latin America (without being there)",
      subtitle: "Strategies and platforms to find an employer from your country and secure your Salarié or Saisonnier visa.",
      category: "Work"
    },
    section1: {
      title: "Why it's important to have a job before traveling",
      p1: "One of the most common fears among those who want to emigrate to France is this: 'How do I get an employer if I'm on the other side of the world?' The good news is that it is completely possible, and there is a clear strategy to do so. At Allée France we have accompanied more than 700 people through this process, and in this article we share exactly how to approach it.",
      p2: "For the Salarié and Saisonnier visa, the employment contract with a French employer is the central pillar of the application. Without it, there is no visa. That is why getting a job from LATAM is not just an advantage: it is the mandatory first step in the labor migration process. In addition, arriving with guaranteed work allows you to plan your accommodation, your finances and your adaptation with much more peace of mind. It's not the same to arrive and improvise as it is to arrive with a concrete plan."
    },
    plataformasTitle: "Platforms where to look for work in France",
    plataformas: [
      { name: "France Travail (ex-Pôle Emploi)", text: "It's the official employment portal of the French government. It's in French, but has thousands of offers updated daily. You can register from abroad and apply online. Search by sector and region." },
      { name: "LinkedIn", text: "Many French employers, especially in gastronomy, tourism, construction, and technology, post on LinkedIn. Optimize your profile in French, indicate that you are looking for work in France and that you are available for a visa. Contact HR managers directly." },
      { name: "Indeed France", text: "indeed.fr is the largest job search engine in France. Filter by 'CDI', 'CDD', or 'saisonnier' according to the type of contract you need for your visa." },
      { name: "APEC and Cadreemploi", text: "For professional and executive profiles. They require an intermediate or advanced level of French." },
      { name: "Facebook and WhatsApp groups of the Latino community", text: "There are very active networks of Latin Americans in France where employers share informal vacancies. Many contracts for the Saisonnier visa arise this way." }
    ],
    sectoresTitle: "Sectors with the highest demand (Métiers en Tension)",
    sectoresText: "France officially has sectors with staff shortages, the so-called Métiers en Tension. Working in one of these sectors greatly simplifies the visa process because the employer does not need to publish the offer for 21 days on France Travail. The main ones are:",
    sectores: [
      "Hospitality and catering (cook, waiter, receptionist, room manager)",
      "Agriculture and grape harvesting (fruit, grape, flower harvesting)",
      "Construction (bricklayer, painter, electrician, plumber)",
      "Care of the elderly (life assistant, nursing)",
      "Transport and logistics"
    ],
    sectoresConclusion: "If your trade qualifies as a Métier en Tension in the region where you will work, the process is faster and simpler.",
    cvTitle: "How to prepare your CV for the French market",
    cvText: "The CV in France follows a different format from the Latin American one. Some key points:",
    cvList: [
      "Maximum 1 page (2 if you have more than 10 years of experience).",
      "Photo is optional, but very common to include.",
      "No information such as marital status, number of children, or ID.",
      "Reverse chronological format: most recent first.",
      "Written entirely in French, even if the employer speaks Spanish."
    ],
    cvConclusion: "The required level of French varies by sector. In agriculture or seasonal work, you can get by with a basic level. In gastronomy and care, an intermediate level (B1) opens more doors.",
    procesoTitle: "The process once you find an employer",
    procesoText: "When a French employer agrees to hire you, the formal visa process begins:",
    procesoList: [
      "The employer initiates the procedure on the ANEF platform (Ministry of the Interior).",
      "DREETS verifies the offer and grants the work authorization.",
      "With the authorization, the employer sends you the necessary documentation.",
      "You apply for the visa at the French consulate in your country.",
      "Once approved, you can fly to France and start working."
    ],
    procesoConclusion: "The total time from the start of the procedure until you travel is usually 6 to 12 weeks, depending on the region and the type of visa.",
    asesoriaTitle: "The role of migration advice in this process",
    asesoriaText: "Many errors in the file occur in the coordination between the applicant and the employer: incomplete documents, miscalculated deadlines, or incorrect formats. Allée France accompanies both the worker and the employer so that the process is clean and without delays."
  },
  fr: {
    hero: {
      title: "Comment trouver un emploi en France depuis l'Amérique latine (sans y être)",
      subtitle: "Stratégies et plateformes pour trouver un employeur depuis votre pays et obtenir votre visa Salarié ou Saisonnier.",
      category: "Travail"
    },
    section1: {
      title: "Pourquoi il est important d'avoir un emploi avant de voyager",
      p1: "L'une des craintes les plus courantes chez ceux qui veulent émigrer en France est la suivante : 'Comment trouver un employeur si je suis à l'autre bout du monde ?' La bonne nouvelle, c'est que c'est tout à fait possible et qu'il existe une stratégie claire pour y parvenir. Chez Allée France, nous avons accompagné plus de 700 personnes dans cette démarche, et dans cet article, nous partageons exactement comment l'aborder.",
      p2: "Pour les visas Salarié et Saisonnier, le contrat de travail avec un employeur français est le pilier central du dossier. Sans lui, pas de visa. C'est pourquoi trouver un emploi depuis l'Amérique latine n'est pas seulement un avantage : c'est la première étape obligatoire du processus de migration professionnelle. De plus, arriver avec un emploi garanti vous permet de planifier votre logement, vos finances et votre adaptation avec beaucoup plus de tranquillité. Ce n'est pas la même chose d'arriver pour improviser que d'arriver avec un plan concret."
    },
    plataformasTitle: "Les plateformes où chercher du travail en France",
    plataformas: [
      { name: "France Travail (ex-Pôle Emploi)", text: "C'est le portail officiel de l'emploi du gouvernement français. Il est en français, mais propose des milliers d'offres actualisées quotidiennement. Vous pouvez vous inscrire depuis l'étranger et postuler en ligne. Cherchez par secteur et par région." },
      { name: "LinkedIn", text: "De nombreux employeurs français, notamment dans la gastronomie, le tourisme, la construction et la technologie, publient sur LinkedIn. Optimisez votre profil en français, indiquez que vous cherchez du travail en France et que vous êtes disponible pour un visa. Contactez directement les responsables RH." },
      { name: "Indeed France", text: "indeed.fr est le plus grand moteur de recherche d'emploi en France. Filtrez par 'CDI', 'CDD' ou 'saisonnier' selon le type de contrat dont vous avez besoin pour votre visa." },
      { name: "APEC et Cadreemploi", text: "Pour les profils professionnels et cadres. Ils exigent un niveau de français intermédiaire ou avancé." },
      { name: "Groupes Facebook et WhatsApp de la communauté latino", text: "Il existe des réseaux de latino-américains très actifs en France où les employeurs partagent des offres informelles. De nombreux contrats pour le visa Saisonnier voient le jour de cette manière." }
    ],
    sectoresTitle: "Les secteurs les plus demandés (Métiers en Tension)",
    sectoresText: "La France a officiellement des secteurs en pénurie de personnel, les fameux Métiers en Tension. Travailler dans l'un de ces secteurs simplifie grandement le processus de visa car l'employeur n'a pas besoin de publier l'offre pendant 21 jours sur France Travail. Les principaux sont :",
    sectores: [
      "Hôtellerie et restauration (cuisinier, serveur, réceptionniste, chef de salle)",
      "Agriculture et vendanges (récolte de fruits, raisins, fleurs)",
      "Bâtiment (maçon, peintre, électricien, plombier)",
      "Soins aux personnes âgées (auxiliaire de vie, infirmerie)",
      "Transport et logistique"
    ],
    sectoresConclusion: "Si votre métier est qualifié de Métier en Tension dans la région où vous allez travailler, le processus est plus rapide et plus simple.",
    cvTitle: "Comment préparer votre CV pour le marché français",
    cvText: "Le CV en France suit un format différent de celui d'Amérique latine. Quelques points clés :",
    cvList: [
      "Maximum 1 page (2 si vous avez plus de 10 ans d'expérience).",
      "Photo facultative, mais très courante.",
      "Aucune information telle que l'état civil, le nombre d'enfants ou la carte d'identité.",
      "Format chronologique inversé : le plus récent en premier.",
      "Rédigé entièrement en français, même si l'employeur parle espagnol."
    ],
    cvConclusion: "Le niveau de français requis varie selon le secteur. Dans l'agriculture ou le travail saisonnier, vous pouvez vous en sortir avec un niveau de base. Dans la gastronomie et les soins, un niveau intermédiaire (B1) ouvre plus de portes.",
    procesoTitle: "Le processus une fois que vous avez trouvé un employeur",
    procesoText: "Lorsqu'un employeur français accepte de vous embaucher, le processus officiel de visa commence :",
    procesoList: [
      "L'employeur initie la démarche sur la plateforme ANEF (Ministère de l'Intérieur).",
      "La DREETS vérifie l'offre et accorde l'autorisation de travail.",
      "Avec l'autorisation, l'employeur vous envoie les documents nécessaires.",
      "Vous demandez le visa au consulat de France de votre pays.",
      "Une fois approuvé, vous pouvez vous envoler pour la France et commencer à travailler."
    ],
    procesoConclusion: "Le délai total entre le début de la procédure et votre voyage est généralement de 6 à 12 semaines, selon la région et le type de visa.",
    asesoriaTitle: "Le rôle du conseil en migration dans ce processus",
    asesoriaText: "De nombreuses erreurs dans le dossier se produisent lors de la coordination entre le demandeur et l'employeur : documents incomplets, délais mal calculés ou formats incorrects. Allée France accompagne à la fois le travailleur et l'employeur pour que le processus soit clair et sans retard."
  }
};

const blogIndexUpdate = {
  es: {
    title: "Cómo conseguir trabajo en Francia desde América Latina (sin estar allá)",
    excerpt: "Una estrategia clara para conseguir un empleador francés estando al otro lado del mundo y empezar tu proceso de visa.",
    date: "12 Junio 2026",
    readTime: "9 min",
    image: "/conseguir-trabajo-francia.webp",
    category: "Trabajo",
    slug: "conseguir-trabajo-francia-desde-latam"
  },
  en: {
    title: "How to find a job in France from Latin America (without being there)",
    excerpt: "A clear strategy to find a French employer from across the world and start your visa process.",
    date: "12 June 2026",
    readTime: "9 min",
    image: "/conseguir-trabajo-francia.webp",
    category: "Work",
    slug: "conseguir-trabajo-francia-desde-latam"
  },
  fr: {
    title: "Comment trouver un emploi en France depuis l'Amérique latine (sans y être)",
    excerpt: "Une stratégie claire pour trouver un employeur français depuis l'autre bout du monde et commencer votre démarche de visa.",
    date: "12 Juin 2026",
    readTime: "9 min",
    image: "/conseguir-trabajo-francia.webp",
    category: "Travail",
    slug: "conseguir-trabajo-francia-desde-latam"
  }
};

const categoryMap = {
  es: { from: "Visas de Trabajo", to: "Trabajo" },
  en: { from: "Work Visas", to: "Work" },
  fr: { from: "Visas de Travail", to: "Travail" }
};

const locales = ['es', 'en', 'fr'];
for (const locale of locales) {
  const filePath = path.join(process.cwd(), 'messages', `${locale}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // 1. Rename category in categories list
  if (data.Blog && data.Blog.index && data.Blog.index.categories) {
    const idx = data.Blog.index.categories.indexOf(categoryMap[locale].from);
    if (idx !== -1) {
      data.Blog.index.categories[idx] = categoryMap[locale].to;
    }
  }

  // 2. Rename category in existing posts
  if (data.Blog && data.Blog.index && data.Blog.index.posts) {
    data.Blog.index.posts.forEach(post => {
      if (post.category === categoryMap[locale].from) {
        post.category = categoryMap[locale].to;
      }
    });
  }
  
  // Also fix the FAQ sections and Services translations if any mention "Visas de Trabajo"
  if (locale === 'es') {
    if (data.FAQHome && data.FAQHome.workTitle === "Preguntas Frecuentes: Visas de Trabajo") {
      data.FAQHome.workTitle = "Preguntas Frecuentes: Trabajo";
    }
    if (data.Footer && data.Footer.services && data.Footer.services.work === "Visas de Trabajo") {
      data.Footer.services.work = "Trabajo";
    }
    if (data.FAQHome && data.FAQHome.categories && data.FAQHome.categories["Trabajo"]) {
      // it is already Trabajo
    }
  }
  if (locale === 'en') {
    if (data.FAQHome && data.FAQHome.workTitle === "FAQ: Work Visas") {
      data.FAQHome.workTitle = "FAQ: Work";
    }
    if (data.Footer && data.Footer.services && data.Footer.services.work === "Work Visas") {
      data.Footer.services.work = "Work";
    }
  }
  if (locale === 'fr') {
    if (data.FAQHome && data.FAQHome.workTitle === "FAQ: Visas de Travail") {
      data.FAQHome.workTitle = "FAQ: Travail";
    }
    if (data.Footer && data.Footer.services && data.Footer.services.work === "Visas de Travail") {
      data.Footer.services.work = "Travail";
    }
  }

  // 3. Add the new post metadata at the beginning of the posts array
  if (data.Blog && data.Blog.index && data.Blog.index.posts) {
    // Only add if not already there
    if (!data.Blog.index.posts.find(p => p.slug === blogIndexUpdate[locale].slug)) {
      data.Blog.index.posts.unshift(blogIndexUpdate[locale]);
    }
  }

  // 4. Add the new post translations
  if (!data.BlogPosts) {
    data.BlogPosts = {};
  }
  data.BlogPosts["conseguir-trabajo-francia-desde-latam"] = newPost[locale];

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${locale}.json`);
}
