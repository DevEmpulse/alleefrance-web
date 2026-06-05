import fs from 'fs';
import path from 'path';

const translations = {
  es: {
    BlogPosts: {
      "esim-guia-latinoamericanos-francia": {
        hero: {
          title: "¿Qué es una eSIM y por qué es tan útil hoy en día?",
          subtitle: "La guía que todo latinoamericano debería leer antes de aterrizar en Francia.",
          category: "Conectividad y Tecnología",
          date: "2 Junio 2026",
          readTime: "8 min de lectura"
        },
        intro: "Una eSIM (embedded SIM) es una tarjeta SIM digital integrada directamente en el chip del teléfono, que permite activar un plan de datos o llamadas sin necesidad de insertar una tarjeta física. Se activa en minutos mediante un código QR, puede almacenar varios perfiles de operador simultáneamente, y es especialmente útil para viajeros, trabajadores internacionales e inmigrantes porque permite tener conectividad activa desde el momento en que aterrizas en un nuevo país, sin filas, sin esperas y sin depender de una tienda de telefonía.",
        section1: {
          title: "De la tarjeta física al chip invisible",
          p1: "Durante años, llegar a un nuevo país significaba buscar una tienda de teléfonos, pedir una SIM local y esperar que el proceso no tardara demasiado. Un ritual lento y frustrante, especialmente cuando uno acaba de bajarse de un vuelo largo y lo único que quiere es avisar que llegó bien.",
          p2: "La eSIM elimina todo ese proceso. Al estar integrada en el hardware del teléfono, no hay nada que insertar ni intercambiar. Se escanea un código QR, se siguen unos pasos en los ajustes del dispositivo, y en minutos el teléfono ya tiene señal local. Esta tecnología ya viene de serie en la mayoría de los teléfonos lanzados desde 2020."
        },
        section2: {
          title: "¿Cómo funciona exactamente?",
          p1: "Cuando se contrata un plan con un operador compatible, este envía un perfil digital que se instala directamente en el chip del teléfono. Ese perfil contiene toda la información necesaria para conectarse a la red: número, acceso a datos e identificación del usuario.",
          p2: "Lo más valioso es que un mismo teléfono puede tener varios perfiles de eSIM instalados al mismo tiempo, aunque normalmente solo uno activo. Esto significa que se puede conservar el número del país de origen y usar un número francés en paralelo, sin tener que elegir entre uno u otro. Para alguien en proceso migratorio, esa es una ventaja muy concreta."
        },
        ventajasTitle: "Las ventajas clave",
        ventajas: [
          { icon: "⚡", title: "Activación instantánea", detail: "Código QR y listo, sin ir a ninguna tienda." },
          { icon: "📱", title: "Doble perfil", detail: "Número de origen y número francés en el mismo teléfono." },
          { icon: "🌍", title: "Cobertura global", detail: "Plataformas como Airalo o Holafly cubren Francia desde tu país." },
          { icon: "🔒", title: "Sin riesgo de pérdida", detail: "Es digital: no se rompe, no se extravía, no se daña." }
        ],
        section3: {
          title: "¿Por qué la eSIM es clave para quien llega a Francia?",
          p1: "Si vienes a Francia con algún visado, o simplemente como turista, tener una eSIM te va a facilitar mucho tu estadía en Francia, pues ya habrás resuelto uno de los principales problemas que experimentamos todos, sin importar en donde nos encontremos: la conectividad.",
          p2: "Con una eSIM contratada antes de viajar, el teléfono llega a Francia con conexión activa. Y si se prefiere esperar, el proceso de activación se puede hacer desde el wifi del aeropuerto antes de pasar por aduana. Sin depender de que haya una tienda abierta, sin entender contratos en francés el primer día, sin perder tiempo."
        },
        compTitle: "¿Qué compañías ofrecen eSIM en Francia?",
        operadoresFrancesesTitle: "Operadores franceses clásicos",
        operadoresFranceses: [
          { name: "Orange", detail: "Excelente cobertura nacional, pero suele ser más costoso." },
          { name: "Bouygues Telecom", detail: "Buena cobertura y planes competitivos." },
          { name: "Free Mobile", detail: "Muy popular entre estudiantes y trabajadores extranjeros por sus precios bajos." },
          { name: "SFR", detail: "Cobertura sólida en grandes ciudades y zonas rurales." }
        ],
        operadoresLowCostTitle: "Operadores low cost muy usados por inmigrantes",
        operadoresLowCost: [
          { name: "Lebara", detail: "Muy utilizada por latinoamericanos por sus llamadas internacionales económicas." },
          { name: "Lycamobile", detail: "Popular para llamadas al extranjero y activación rápida." },
          { name: "Syma Mobile", detail: "Planes baratos y fáciles de contratar sin demasiados requisitos." }
        ],
        esimInternacionalesTitle: "eSIM internacionales para llegar ya conectado",
        esimInternacionales: [
          { name: "Airalo", detail: "Muy práctica para activar datos antes del viaje." },
          { name: "Holafly", detail: "Datos ilimitados en muchos planes y soporte en español." }
        ],
        section4: {
          title: "¿Mi teléfono es compatible?",
          p1: "La mayoría de los iPhones desde el modelo XS (2018) son compatibles. En Android, marcas como Samsung, Google Pixel, Motorola y Xiaomi tienen modelos compatibles desde hace varios años, aunque no todos los modelos de cada marca la incluyen.",
          p2: "Para verificarlo, basta con ir a los ajustes del teléfono, buscar la sección SIM y revisar si aparece la opción de agregar un plan digital. Si está ahí, el teléfono es compatible. Un detalle a tener en cuenta: algunos teléfonos comprados con bloqueo de operador pueden no aceptar eSIM externas hasta que se desbloqueen, así que conviene confirmarlo antes de viajar."
        },
        section5: {
          title: "Lo que hay que tener claro antes de contratar",
          p1: "No todas las eSIM son iguales. Hay opciones que ofrecen solo datos, y otras que incluyen número de teléfono local, llamadas y datos. Para trámites en Francia, donde muchos formularios oficiales piden un número francés, conviene optar por la segunda opción, aunque el coste sea algo mayor.",
          p2: "La eSIM es la solución ideal para los primeros días o semanas, mientras se estabilizan los trámites y se tiene una dirección fija. Una vez instalado, lo más conveniente suele ser migrar a un forfait mensual con un operador local, que ofrece mejores condiciones para un uso continuo a largo plazo."
        }
      }
    }
  },
  en: {
    BlogPosts: {
      "esim-guia-latinoamericanos-francia": {
        hero: {
          title: "What is an eSIM and why is it so useful today?",
          subtitle: "The guide every Latin American should read before landing in France.",
          category: "Connectivity and Technology",
          date: "June 2, 2026",
          readTime: "8 min read"
        },
        intro: "An eSIM (embedded SIM) is a digital SIM card embedded directly into the phone's chip, which allows you to activate a data or call plan without the need to insert a physical card. It is activated in minutes using a QR code, can store several operator profiles simultaneously, and is especially useful for travelers, international workers, and immigrants because it allows you to have active connectivity from the moment you land in a new country, without queues, without waiting, and without depending on a phone store.",
        section1: {
          title: "From the physical card to the invisible chip",
          p1: "For years, arriving in a new country meant looking for a phone store, asking for a local SIM, and hoping the process wouldn't take too long. A slow and frustrating ritual, especially when you've just gotten off a long flight and all you want is to let people know you arrived safely.",
          p2: "The eSIM eliminates all that process. Being integrated into the phone's hardware, there is nothing to insert or swap. You scan a QR code, follow a few steps in the device settings, and in minutes the phone already has a local signal. This technology comes standard in most phones released since 2020."
        },
        section2: {
          title: "How exactly does it work?",
          p1: "When you sign up for a plan with a compatible operator, they send a digital profile that is installed directly on the phone's chip. That profile contains all the information needed to connect to the network: number, data access, and user identification.",
          p2: "The most valuable thing is that the same phone can have several eSIM profiles installed at the same time, although usually only one is active. This means that you can keep your home country number and use a French number in parallel, without having to choose between one or the other. For someone in the migration process, that is a very concrete advantage."
        },
        ventajasTitle: "Key advantages",
        ventajas: [
          { icon: "⚡", title: "Instant activation", detail: "QR code and you're set, without going to any store." },
          { icon: "📱", title: "Double profile", detail: "Home number and French number on the same phone." },
          { icon: "🌍", title: "Global coverage", detail: "Platforms like Airalo or Holafly cover France from your country." },
          { icon: "🔒", title: "No risk of loss", detail: "It's digital: it doesn't break, it doesn't get lost, it doesn't get damaged." }
        ],
        section3: {
          title: "Why is the eSIM key for those arriving in France?",
          p1: "If you come to France with a visa, or simply as a tourist, having an eSIM will make your stay in France much easier, since you will have solved one of the main problems we all experience, no matter where we are: connectivity.",
          p2: "With an eSIM contracted before traveling, the phone arrives in France with an active connection. And if you prefer to wait, the activation process can be done from the airport wifi before going through customs. Without depending on an open store, without understanding contracts in French on the first day, without wasting time."
        },
        compTitle: "Which companies offer eSIM in France?",
        operadoresFrancesesTitle: "Classic French operators",
        operadoresFranceses: [
          { name: "Orange", detail: "Excellent national coverage, but usually more expensive." },
          { name: "Bouygues Telecom", detail: "Good coverage and competitive plans." },
          { name: "Free Mobile", detail: "Very popular among students and foreign workers for its low prices." },
          { name: "SFR", detail: "Solid coverage in large cities and rural areas." }
        ],
        operadoresLowCostTitle: "Low-cost operators widely used by immigrants",
        operadoresLowCost: [
          { name: "Lebara", detail: "Widely used by Latin Americans for its cheap international calls." },
          { name: "Lycamobile", detail: "Popular for calls abroad and quick activation." },
          { name: "Syma Mobile", detail: "Cheap and easy-to-contract plans without too many requirements." }
        ],
        esimInternacionalesTitle: "International eSIMs to arrive already connected",
        esimInternacionales: [
          { name: "Airalo", detail: "Very practical to activate data before the trip." },
          { name: "Holafly", detail: "Unlimited data in many plans and support in Spanish." }
        ],
        section4: {
          title: "Is my phone compatible?",
          p1: "Most iPhones since the XS model (2018) are compatible. On Android, brands like Samsung, Google Pixel, Motorola, and Xiaomi have had compatible models for several years, although not all models of each brand include it.",
          p2: "To verify it, simply go to the phone settings, look for the SIM section, and check if the option to add a digital plan appears. If it's there, the phone is compatible. One detail to keep in mind: some phones purchased with operator locks may not accept external eSIMs until they are unlocked, so it's a good idea to confirm this before traveling."
        },
        section5: {
          title: "What you need to know before contracting",
          p1: "Not all eSIMs are equal. There are options that offer only data, and others that include a local phone number, calls, and data. For procedures in France, where many official forms ask for a French number, it is advisable to opt for the second option, even if the cost is somewhat higher.",
          p2: "The eSIM is the ideal solution for the first few days or weeks, while procedures stabilize and a fixed address is established. Once installed, it is usually most convenient to migrate to a monthly package with a local operator, which offers better conditions for long-term continuous use."
        }
      }
    }
  },
  fr: {
    BlogPosts: {
      "esim-guia-latinoamericanos-francia": {
        hero: {
          title: "Qu'est-ce qu'une eSIM et pourquoi est-ce si utile aujourd'hui ?",
          subtitle: "Le guide que tout Latino-Américain devrait lire avant d'atterrir en France.",
          category: "Connectivité et Technologie",
          date: "2 Juin 2026",
          readTime: "8 min de lecture"
        },
        intro: "Une eSIM (embedded SIM) est une carte SIM numérique intégrée directement dans la puce du téléphone, qui permet d'activer un forfait de données ou d'appels sans avoir besoin d'insérer une carte physique. Elle s'active en quelques minutes via un code QR, peut stocker plusieurs profils d'opérateurs simultanément et est particulièrement utile pour les voyageurs, les travailleurs internationaux et les immigrants car elle permet d'avoir une connectivité active dès l'atterrissage dans un nouveau pays, sans files d'attente, sans attendre et sans dépendre d'un magasin de téléphonie.",
        section1: {
          title: "De la carte physique à la puce invisible",
          p1: "Pendant des années, arriver dans un nouveau pays signifiait chercher un magasin de téléphonie, demander une carte SIM locale et espérer que le processus ne prendrait pas trop de temps. Un rituel lent et frustrant, surtout quand on vient de descendre d'un long vol et qu'on veut juste prévenir qu'on est bien arrivé.",
          p2: "L'eSIM élimine tout ce processus. Étant intégrée au matériel du téléphone, il n'y a rien à insérer ni à échanger. Vous scannez un code QR, suivez quelques étapes dans les paramètres de l'appareil, et en quelques minutes, le téléphone a déjà un signal local. Cette technologie est livrée en standard sur la plupart des téléphones sortis depuis 2020."
        },
        section2: {
          title: "Comment ça marche exactement ?",
          p1: "Lors de la souscription d'un forfait auprès d'un opérateur compatible, ce dernier envoie un profil numérique qui s'installe directement sur la puce du téléphone. Ce profil contient toutes les informations nécessaires pour se connecter au réseau : numéro, accès aux données et identification de l'utilisateur.",
          p2: "Le plus précieux est qu'un même téléphone peut avoir plusieurs profils eSIM installés en même temps, bien qu'un seul soit généralement actif. Cela signifie que vous pouvez conserver votre numéro d'origine et utiliser un numéro français en parallèle, sans avoir à choisir entre l'un ou l'autre. Pour une personne en processus de migration, c'est un avantage très concret."
        },
        ventajasTitle: "Les avantages clés",
        ventajas: [
          { icon: "⚡", title: "Activation instantanée", detail: "Code QR et c'est parti, sans aller dans aucun magasin." },
          { icon: "📱", title: "Double profil", detail: "Numéro d'origine et numéro français sur le même téléphone." },
          { icon: "🌍", title: "Couverture mondiale", detail: "Des plateformes comme Airalo ou Holafly couvrent la France depuis votre pays." },
          { icon: "🔒", title: "Aucun risque de perte", detail: "C'est numérique : ça ne se casse pas, ça ne se perd pas, ça ne s'abîme pas." }
        ],
        section3: {
          title: "Pourquoi l'eSIM est-elle essentielle pour ceux qui arrivent en France ?",
          p1: "Si vous venez en France avec un visa, ou simplement en tant que touriste, avoir une eSIM facilitera grandement votre séjour en France, car vous aurez résolu l'un des principaux problèmes que nous rencontrons tous, peu importe où nous sommes : la connectivité.",
          p2: "Avec une eSIM souscrite avant le voyage, le téléphone arrive en France avec une connexion active. Et si vous préférez attendre, le processus d'activation peut se faire depuis le wifi de l'aéroport avant de passer la douane. Sans dépendre d'un magasin ouvert, sans comprendre les contrats en français le premier jour, sans perdre de temps."
        },
        compTitle: "Quelles entreprises proposent des eSIM en France ?",
        operadoresFrancesesTitle: "Opérateurs français classiques",
        operadoresFranceses: [
          { name: "Orange", detail: "Excellente couverture nationale, mais généralement plus cher." },
          { name: "Bouygues Telecom", detail: "Bonne couverture et forfaits compétitifs." },
          { name: "Free Mobile", detail: "Très populaire parmi les étudiants et les travailleurs étrangers pour ses prix bas." },
          { name: "SFR", detail: "Couverture solide dans les grandes villes et les zones rurales." }
        ],
        operadoresLowCostTitle: "Opérateurs low-cost très utilisés par les immigrés",
        operadoresLowCost: [
          { name: "Lebara", detail: "Très utilisé par les Latino-Américains pour ses appels internationaux bon marché." },
          { name: "Lycamobile", detail: "Populaire pour les appels à l'étranger et une activation rapide." },
          { name: "Syma Mobile", detail: "Des forfaits pas chers et faciles à souscrire sans trop d'exigences." }
        ],
        esimInternacionalesTitle: "eSIM internationales pour arriver déjà connecté",
        esimInternacionales: [
          { name: "Airalo", detail: "Très pratique pour activer les données avant le voyage." },
          { name: "Holafly", detail: "Données illimitées dans de nombreux forfaits et assistance en espagnol." }
        ],
        section4: {
          title: "Mon téléphone est-il compatible ?",
          p1: "La plupart des iPhones depuis le modèle XS (2018) sont compatibles. Sur Android, des marques comme Samsung, Google Pixel, Motorola et Xiaomi ont des modèles compatibles depuis plusieurs années, bien que tous les modèles de chaque marque ne l'incluent pas.",
          p2: "Pour le vérifier, il suffit d'aller dans les paramètres du téléphone, de chercher la section SIM et de vérifier si l'option d'ajouter un forfait numérique apparaît. Si elle est là, le téléphone est compatible. Un détail à garder à l'esprit : certains téléphones achetés avec des blocages d'opérateur peuvent ne pas accepter les eSIM externes jusqu'à ce qu'ils soient débloqués, il convient donc de le confirmer avant de voyager."
        },
        section5: {
          title: "Ce qu'il faut savoir avant de souscrire",
          p1: "Toutes les eSIM ne se valent pas. Il existe des options qui offrent uniquement des données, et d'autres qui incluent un numéro de téléphone local, des appels et des données. Pour les démarches en France, où de nombreux formulaires officiels demandent un numéro français, il est conseillé d'opter pour la deuxième option, même si le coût est un peu plus élevé.",
          p2: "L'eSIM est la solution idéale pour les premiers jours ou semaines, pendant que les démarches se stabilisent et qu'une adresse fixe est établie. Une fois installé, il est généralement plus pratique de migrer vers un forfait mensuel avec un opérateur local, qui offre de meilleures conditions pour une utilisation continue à long terme."
        }
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
  data.BlogPosts["esim-guia-latinoamericanos-francia"] = translations[locale].BlogPosts["esim-guia-latinoamericanos-francia"];
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${locale}.json with eSIM blog post`);
}
