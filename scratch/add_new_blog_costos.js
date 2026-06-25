const fs = require('fs');
const path = require('path');

const newPost = {
  es: {
    hero: {
      title: "Cuánto cuesta vivir en Francia: presupuesto real para latinoamericanos en 2026",
      subtitle: "Un desglose detallado de gastos: alquiler, alimentación, transporte y consejos para ahorrar mientras te adaptás a tu nueva vida.",
      category: "Vida en Francia"
    },
    intro: "Una de las preguntas más frecuentes que recibimos es: '¿Cuánto dinero necesito para vivir en Francia?' La respuesta depende de la ciudad, tu estilo de vida y tu situación migratoria. En este artículo te compartimos cifras reales basadas en la experiencia de los cientos de latinoamericanos que hemos acompañado.",
    section1: {
      title: "La diferencia entre ciudades",
      p1: "Francia no tiene el mismo costo en todas partes. París es significativamente más cara que el resto, pero también es donde más oportunidades laborales existen. Lyon, Marsella, Burdeos, Toulouse, Nantes y Estrasburgo ofrecen un equilibrio muy bueno entre calidad de vida y costo."
    },
    alquiler: {
      title: "El gasto más importante: el alquiler",
      p1: "El alquiler es el rubro que más impacta en el presupuesto mensual:",
      list: [
        "París: habitación compartida 700-900 €/mes | estudio 900-1.400 €/mes",
        "Lyon: habitación compartida 450-650 €/mes | estudio 600-900 €/mes",
        "Marsella: habitación compartida 350-500 €/mes | estudio 500-750 €/mes",
        "Ciudades medianas (Toulouse, Nantes, Rennes): 400-700 €/mes para estudio"
      ],
      p2: "Muchos recién llegados optan por la colocation (piso compartido) durante los primeros meses. Es la opción más económica y además facilita la integración. Plataformas como Leboncoin, PAP y SeLoger son las más usadas.",
      p3: "Importante: en Francia es necesario presentar garantías para alquilar (fiador con ingresos o seguro de alquiler Visale). Esto puede ser una barrera inicial para extranjeros sin historial en el país."
    },
    alimentacion: {
      title: "Alimentación",
      p1: "Comer en Francia puede ser económico si cocinás en casa y aprovechás los supermercados. Cadenas como Lidl, Aldi, Super U y Leclerc tienen precios muy accesibles.",
      list: [
        "Supermercado (semana para una persona): 50-80 €",
        "Menú del día en restaurante: 10-15 €",
        "Café o croissant: 2-4 €",
        "Presupuesto mensual de alimentación cocinando en casa: 200-300 €"
      ]
    },
    transporte: {
      title: "Transporte",
      p1: "El transporte público en Francia es excelente y relativamente económico. Las ciudades grandes tienen metro, tranvía y autobús bien integrados.",
      list: [
        "Abono mensual en Lyon (TCL): ~75 € (con algunos descuentos según ingresos)",
        "Abono mensual en París (Navigo): ~86 €",
        "Bicicleta compartida (Vélo'v en Lyon): 1,65 €/mes con abono anual",
        "Tren interurbano (SNCF): variable, conviene comprar con anticipación"
      ],
      p2: "Si tenés vehículo propio, sumá seguro (100-150 €/mes), combustible y mantenimiento."
    },
    servicios: {
      title: "Servicios y telefonía",
      list: [
        "Factura de agua, electricidad y gas: 80-150 €/mes (incluido en muchas colocations)",
        "Internet fibra óptica: 15-30 €/mes",
        "Plan de telefonía con datos ilimitados: 10-20 €/mes (Free Mobile, Bouygues, SFR)"
      ]
    },
    salud: {
      title: "Salud",
      p1: "Una vez que estás afiliado a la Sécurité Sociale (seguridad social francesa), la cobertura médica es muy amplia. Las consultas médicas cuestan entre 26-30 €, con un reembolso del 70% por parte del sistema. Para cubrir el resto, la mayoría contrata una mutuelle (seguro complementario) desde 20-50 €/mes.",
      p2: "Durante los primeros 3 meses antes de poder acceder a la seguridad social, es fundamental tener un seguro de viaje internacional vigente."
    },
    presupuesto: {
      title: "Presupuesto mensual estimado",
      p1: "Un resumen orientativo para una persona viviendo fuera de París:",
      list: [
        "Alquiler (habitación en colocation): 500 €",
        "Alimentación: 250 €",
        "Transporte: 80 €",
        "Telefonía e internet: 25 €",
        "Ocio y salidas: 100 €",
        "Gastos varios (ropa, higiene, imprevistos): 100 €"
      ],
      conclusion: "Total estimado: entre 1.050 y 1.200 € por mes para una vida razonable fuera de París. En París, sumá entre 300 y 500 € más."
    },
    ahorros: {
      title: "¿Cuánto necesito tener ahorrado antes de ir?",
      p1: "La recomendación general es tener entre 2.000 y 3.000 € disponibles al momento de llegar, para cubrir los primeros dos meses antes de recibir el primer sueldo y para el depósito de garantía del alquiler (habitualmente 1 mes de alquiler)."
    },
    asesoria: {
      title: "¿Tenés dudas sobre cómo financiar tu llegada a Francia?",
      p1: "Nuestro equipo está listo para asesorarte. Consultanos en alleefrance.com."
    }
  },
  en: {
    hero: {
      title: "How much it costs to live in France: real budget for Latin Americans in 2026",
      subtitle: "A detailed breakdown of expenses: rent, food, transportation, and tips for saving money as you adapt to your new life.",
      category: "Life in France"
    },
    intro: "One of the most frequently asked questions we receive is: 'How much money do I need to live in France?' The answer depends on the city, your lifestyle, and your immigration status. In this article, we share real figures based on the experience of the hundreds of Latin Americans we have accompanied.",
    section1: {
      title: "The difference between cities",
      p1: "France does not have the same cost everywhere. Paris is significantly more expensive than the rest, but it is also where the most job opportunities exist. Lyon, Marseille, Bordeaux, Toulouse, Nantes, and Strasbourg offer a very good balance between quality of life and cost."
    },
    alquiler: {
      title: "The most important expense: rent",
      p1: "Rent is the category that most impacts the monthly budget:",
      list: [
        "Paris: shared room 700-900 €/month | studio 900-1,400 €/month",
        "Lyon: shared room 450-650 €/month | studio 600-900 €/month",
        "Marseille: shared room 350-500 €/month | studio 500-750 €/month",
        "Medium cities (Toulouse, Nantes, Rennes): 400-700 €/month for a studio"
      ],
      p2: "Many newcomers opt for colocation (shared apartment) during their first months. It is the most affordable option and also facilitates integration. Platforms like Leboncoin, PAP, and SeLoger are the most used.",
      p3: "Important: in France it is necessary to present guarantees to rent (guarantor with income or Visale rental insurance). This can be an initial barrier for foreigners with no history in the country."
    },
    alimentacion: {
      title: "Food",
      p1: "Eating in France can be affordable if you cook at home and take advantage of supermarkets. Chains like Lidl, Aldi, Super U, and Leclerc have very accessible prices.",
      list: [
        "Supermarket (week for one person): 50-80 €",
        "Menu of the day in a restaurant: 10-15 €",
        "Coffee or croissant: 2-4 €",
        "Monthly food budget cooking at home: 200-300 €"
      ]
    },
    transporte: {
      title: "Transportation",
      p1: "Public transportation in France is excellent and relatively affordable. Large cities have well-integrated metro, tram, and bus systems.",
      list: [
        "Monthly pass in Lyon (TCL): ~75 € (with some discounts based on income)",
        "Monthly pass in Paris (Navigo): ~86 €",
        "Shared bike (Vélo'v in Lyon): 1.65 €/month with annual subscription",
        "Intercity train (SNCF): variable, best to buy in advance"
      ],
      p2: "If you have your own vehicle, add insurance (100-150 €/month), fuel, and maintenance."
    },
    servicios: {
      title: "Utilities and telephony",
      list: [
        "Water, electricity, and gas bill: 80-150 €/month (included in many colocations)",
        "Fiber optic internet: 15-30 €/month",
        "Unlimited data phone plan: 10-20 €/month (Free Mobile, Bouygues, SFR)"
      ]
    },
    salud: {
      title: "Health",
      p1: "Once you are affiliated with the Sécurité Sociale (French social security), medical coverage is very comprehensive. Medical consultations cost between 26-30 €, with a 70% reimbursement by the system. To cover the rest, most contract a mutuelle (complementary insurance) from 20-50 €/month.",
      p2: "During the first 3 months before being able to access social security, it is essential to have a valid international travel insurance."
    },
    presupuesto: {
      title: "Estimated monthly budget",
      p1: "A rough summary for one person living outside of Paris:",
      list: [
        "Rent (room in colocation): 500 €",
        "Food: 250 €",
        "Transportation: 80 €",
        "Telephony and internet: 25 €",
        "Leisure and outings: 100 €",
        "Miscellaneous expenses (clothing, hygiene, unforeseen): 100 €"
      ],
      conclusion: "Estimated total: between 1,050 and 1,200 € per month for a reasonable life outside of Paris. In Paris, add between 300 and 500 € more."
    },
    ahorros: {
      title: "How much do I need to have saved before going?",
      p1: "The general recommendation is to have between 2,000 and 3,000 € available upon arrival, to cover the first two months before receiving the first salary and for the rental security deposit (usually 1 month's rent)."
    },
    asesoria: {
      title: "Do you have doubts about how to finance your arrival in France?",
      p1: "Our team is ready to advise you. Contact us at alleefrance.com."
    }
  },
  fr: {
    hero: {
      title: "Combien coûte la vie en France : budget réel pour les Latino-Américains en 2026",
      subtitle: "Une répartition détaillée des dépenses : loyer, nourriture, transport et astuces pour économiser pendant que vous vous adaptez à votre nouvelle vie.",
      category: "Vie en France"
    },
    intro: "L'une des questions les plus fréquentes que nous recevons est : 'De combien d'argent ai-je besoin pour vivre en France ?' La réponse dépend de la ville, de votre style de vie et de votre situation migratoire. Dans cet article, nous partageons de vrais chiffres basés sur l'expérience des centaines de Latino-Américains que nous avons accompagnés.",
    section1: {
      title: "La différence entre les villes",
      p1: "La France n'a pas le même coût partout. Paris est nettement plus chère que le reste, mais c'est aussi là qu'il y a le plus d'opportunités d'emploi. Lyon, Marseille, Bordeaux, Toulouse, Nantes et Strasbourg offrent un très bon équilibre entre qualité de vie et coût."
    },
    alquiler: {
      title: "La dépense la plus importante : le loyer",
      p1: "Le loyer est le poste qui impacte le plus le budget mensuel :",
      list: [
        "Paris : chambre partagée 700-900 €/mois | studio 900-1 400 €/mois",
        "Lyon : chambre partagée 450-650 €/mois | studio 600-900 €/mois",
        "Marseille : chambre partagée 350-500 €/mois | studio 500-750 €/mois",
        "Villes moyennes (Toulouse, Nantes, Rennes) : 400-700 €/mois pour un studio"
      ],
      p2: "De nombreux nouveaux arrivants optent pour la colocation pendant leurs premiers mois. C'est l'option la plus économique et elle facilite également l'intégration. Les plateformes comme Leboncoin, PAP et SeLoger sont les plus utilisées.",
      p3: "Important : en France, il est nécessaire de présenter des garanties pour louer (garant avec revenus ou assurance locative Visale). Cela peut être un obstacle initial pour les étrangers sans historique dans le pays."
    },
    alimentacion: {
      title: "Alimentation",
      p1: "Manger en France peut être économique si vous cuisinez à la maison et profitez des supermarchés. Des chaînes comme Lidl, Aldi, Super U et Leclerc ont des prix très accessibles.",
      list: [
        "Supermarché (semaine pour une personne) : 50-80 €",
        "Menu du jour au restaurant : 10-15 €",
        "Café ou croissant : 2-4 €",
        "Budget mensuel alimentaire en cuisinant à la maison : 200-300 €"
      ]
    },
    transporte: {
      title: "Transport",
      p1: "Les transports en commun en France sont excellents et relativement économiques. Les grandes villes disposent de métros, tramways et bus bien intégrés.",
      list: [
        "Abonnement mensuel à Lyon (TCL) : ~75 € (avec des réductions selon les revenus)",
        "Abonnement mensuel à Paris (Navigo) : ~86 €",
        "Vélo en libre-service (Vélo'v à Lyon) : 1,65 €/mois avec abonnement annuel",
        "Train interurbain (SNCF) : variable, mieux vaut acheter à l'avance"
      ],
      p2: "Si vous avez votre propre véhicule, ajoutez l'assurance (100-150 €/mois), le carburant et l'entretien."
    },
    servicios: {
      title: "Services et téléphonie",
      list: [
        "Facture d'eau, d'électricité et de gaz : 80-150 €/mois (inclus dans de nombreuses colocations)",
        "Internet fibre optique : 15-30 €/mois",
        "Forfait mobile données illimitées : 10-20 €/mois (Free Mobile, Bouygues, SFR)"
      ]
    },
    salud: {
      title: "Santé",
      p1: "Une fois affilié à la Sécurité Sociale, la couverture médicale est très large. Les consultations médicales coûtent entre 26 et 30 €, avec un remboursement de 70 % par le système. Pour couvrir le reste, la plupart souscrivent une mutuelle à partir de 20-50 €/mois.",
      p2: "Pendant les 3 premiers mois avant de pouvoir accéder à la sécurité sociale, il est fondamental d'avoir une assurance voyage internationale valide."
    },
    presupuesto: {
      title: "Budget mensuel estimé",
      p1: "Un résumé indicatif pour une personne vivant hors de Paris :",
      list: [
        "Loyer (chambre en colocation) : 500 €",
        "Alimentation : 250 €",
        "Transport : 80 €",
        "Téléphonie et internet : 25 €",
        "Loisirs et sorties : 100 €",
        "Dépenses diverses (vêtements, hygiène, imprévus) : 100 €"
      ],
      conclusion: "Total estimé : entre 1 050 et 1 200 € par mois pour une vie raisonnable hors de Paris. À Paris, ajoutez entre 300 et 500 € de plus."
    },
    ahorros: {
      title: "Combien dois-je avoir économisé avant de partir ?",
      p1: "La recommandation générale est d'avoir entre 2 000 et 3 000 € disponibles à l'arrivée, pour couvrir les deux premiers mois avant de recevoir le premier salaire et pour le dépôt de garantie du loyer (généralement 1 mois de loyer)."
    },
    asesoria: {
      title: "Vous avez des doutes sur la façon de financer votre arrivée en France ?",
      p1: "Notre équipe est prête à vous conseiller. Contactez-nous sur alleefrance.com."
    }
  }
};

const blogIndexUpdate = {
  es: {
    title: "Cuánto cuesta vivir en Francia: presupuesto real para latinoamericanos en 2026",
    excerpt: "Una de las preguntas más frecuentes que recibimos es: '¿Cuánto dinero necesito para vivir en Francia?' La respuesta depende de la ciudad, tu estilo de vida y tu situación migratoria.",
    date: "14 Junio 2026",
    readTime: "8 min",
    image: "/cuanto-cuesta-vivir-en-francia.webp",
    category: "Vida en Francia",
    slug: "cuanto-cuesta-vivir-en-francia"
  },
  en: {
    title: "How much it costs to live in France: real budget for Latin Americans in 2026",
    excerpt: "One of the most frequently asked questions we receive is: 'How much money do I need to live in France?' The answer depends on the city, your lifestyle, and your immigration status.",
    date: "14 June 2026",
    readTime: "8 min",
    image: "/cuanto-cuesta-vivir-en-francia.webp",
    category: "Life in France",
    slug: "cuanto-cuesta-vivir-en-francia"
  },
  fr: {
    title: "Combien coûte la vie en France : budget réel pour les Latino-Américains en 2026",
    excerpt: "L'une des questions les plus fréquentes que nous recevons est : 'De combien d'argent ai-je besoin pour vivre en France ?' La réponse dépend de la ville, de votre style de vie et de votre situation migratoire.",
    date: "14 Juin 2026",
    readTime: "8 min",
    image: "/cuanto-cuesta-vivir-en-francia.webp",
    category: "Vie en France",
    slug: "cuanto-cuesta-vivir-en-francia"
  }
};

const categoryMap = {
  es: { from: "Idioma y Cultura", to: "Vida en Francia" },
  en: { from: "Language & Culture", to: "Life in France" },
  fr: { from: "Langue et Culture", to: "Vie en France" }
};

const locales = ['es', 'en', 'fr'];
for (const locale of locales) {
  const filePath = path.join(process.cwd(), 'messages', `${locale}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Rename category in categories list
  if (data.Blog && data.Blog.index && data.Blog.index.categories) {
    const idx = data.Blog.index.categories.indexOf(categoryMap[locale].from);
    if (idx !== -1) {
      data.Blog.index.categories[idx] = categoryMap[locale].to;
    }
  }

  // Rename category in existing posts
  if (data.Blog && data.Blog.index && data.Blog.index.posts) {
    data.Blog.index.posts.forEach(post => {
      if (post.category === categoryMap[locale].from) {
        post.category = categoryMap[locale].to;
      }
    });
  }

  // Add the new post metadata
  if (data.Blog && data.Blog.index && data.Blog.index.posts) {
    if (!data.Blog.index.posts.find(p => p.slug === blogIndexUpdate[locale].slug)) {
      data.Blog.index.posts.unshift(blogIndexUpdate[locale]);
    }
  }

  // Add the new post content
  if (!data.BlogPosts) {
    data.BlogPosts = {};
  }
  data.BlogPosts["cuanto-cuesta-vivir-en-francia"] = newPost[locale];

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${locale}.json`);
}
