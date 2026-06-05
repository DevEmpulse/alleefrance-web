import fs from 'fs';
import path from 'path';

const translations = {
  es: {
    Blog: {
      index: {
        categories: [
          "Todos",
          "Finanzas",
          "Conectividad",
          "Visas de Trabajo",
          "Working Holiday",
          "Visas de Estudiante",
          "Idioma y Cultura"
        ],
        posts: [
          {
            title: "Bancos físicos vs bancos virtuales en Francia: ¿cuál es la mejor opción para inmigrantes?",
            excerpt: "Wise, Revolut, N26, Qonto o banco tradicional: descubrí cuál se adapta mejor a tu situación migratoria en Francia.",
            date: "2 Junio 2026",
            readTime: "12 min",
            image: "/bancos-france-inmigrantes.webp",
            category: "Finanzas",
            slug: "bancos-fisicos-vs-virtuales-francia"
          },
          {
            title: "¿Qué es una eSIM y por qué es tan útil hoy en día?",
            excerpt: "La guía que todo latinoamericano debería leer antes de aterrizar en Francia. Conectividad activa desde el momento en que aterrizas.",
            date: "2 Junio 2026",
            readTime: "8 min",
            image: "/esim-guide-france.webp",
            category: "Conectividad",
            slug: "esim-guia-latinoamericanos-francia"
          },
          {
            title: "Visa Saisonnier o Salarié: Guía Completa 2026",
            excerpt: "Requisitos, contratos, tiempos y consejos clave para conseguir un permiso Saisonnier o Salarié temporal en Francia sin sobresaltos.",
            date: "15 Enero 2026",
            readTime: "9 min",
            image: "/seasonal-worker-in-french-vineyard.webp",
            category: "Visas de Trabajo",
            slug: "visa-saisonnier-salarie"
          },
          {
            title: "Working Holiday Francia: Checklist para Argentinos 2025",
            excerpt: "Paso a paso para reunir papeles, aplicar a la visa y organizar tus primeros meses en Francia con el programa Working Holiday.",
            date: "10 Enero 2025",
            readTime: "8 min",
            image: "/french-work-visa-documents.webp",
            category: "Working Holiday",
            slug: "working-holiday-francia"
          },
          {
            title: "Visa de Estudiante Francia 2025: Campus France y Consulado",
            excerpt: "Organiza tu calendario desde la búsqueda de programas hasta la llegada a Francia, con checklists y documentos imprescindibles.",
            date: "5 Enero 2025",
            readTime: "10 min",
            image: "/student-studying-in-paris.webp",
            category: "Visas de Estudiante",
            slug: "visa-estudiante-francia"
          },
          {
            title: "Aprender Francés: Recursos y Métodos para Progresar Rápido",
            excerpt: "Estrategias combinadas (apps, maestros, inmersión y exámenes) para llegar al nivel B1/B2 que piden las visas en tiempo récord.",
            date: "2 Enero 2025",
            readTime: "7 min",
            image: "/person-learning-french-language.webp",
            category: "Idioma y Cultura",
            slug: "aprender-frances-recursos"
          }
        ]
      }
    }
  },
  en: {
    Blog: {
      index: {
        categories: [
          "All",
          "Finance",
          "Connectivity",
          "Work Visas",
          "Working Holiday",
          "Student Visas",
          "Language & Culture"
        ],
        posts: [
          {
            title: "Physical vs. Virtual Banks in France: Which is Best for Immigrants?",
            excerpt: "Wise, Revolut, N26, Qonto or traditional bank: discover which one best suits your immigration situation in France.",
            date: "June 2, 2026",
            readTime: "12 min",
            image: "/bancos-france-inmigrantes.webp",
            category: "Finance",
            slug: "bancos-fisicos-vs-virtuales-francia"
          },
          {
            title: "What is an eSIM and why is it so useful today?",
            excerpt: "The guide every Latin American should read before landing in France. Active connectivity from the moment you land.",
            date: "June 2, 2026",
            readTime: "8 min",
            image: "/esim-guide-france.webp",
            category: "Connectivity",
            slug: "esim-guia-latinoamericanos-francia"
          },
          {
            title: "Saisonnier or Salarié Visa: Complete Guide 2026",
            excerpt: "Requirements, contracts, timing, and key tips to get a temporary Saisonnier or Salarié permit in France without a hitch.",
            date: "January 15, 2026",
            readTime: "9 min",
            image: "/seasonal-worker-in-french-vineyard.webp",
            category: "Work Visas",
            slug: "visa-saisonnier-salarie"
          },
          {
            title: "Working Holiday France: Checklist for Argentinians 2025",
            excerpt: "Step by step to gather documents, apply for the visa, and organize your first months in France with the Working Holiday program.",
            date: "January 10, 2025",
            readTime: "8 min",
            image: "/french-work-visa-documents.webp",
            category: "Working Holiday",
            slug: "working-holiday-francia"
          },
          {
            title: "Student Visa France 2025: Campus France and Consulate",
            excerpt: "Organize your calendar from program search to arrival in France, with checklists and essential documents.",
            date: "January 5, 2025",
            readTime: "10 min",
            image: "/student-studying-in-paris.webp",
            category: "Student Visas",
            slug: "visa-estudiante-francia"
          },
          {
            title: "Learn French: Resources and Methods to Progress Fast",
            excerpt: "Combined strategies (apps, teachers, immersion, and exams) to reach the B1/B2 level required by visas in record time.",
            date: "January 2, 2025",
            readTime: "7 min",
            image: "/person-learning-french-language.webp",
            category: "Language & Culture",
            slug: "aprender-frances-recursos"
          }
        ]
      }
    }
  },
  fr: {
    Blog: {
      index: {
        categories: [
          "Tout",
          "Finances",
          "Connectivité",
          "Visas de Travail",
          "Permis Vacances-Travail",
          "Visas Étudiants",
          "Langue et Culture"
        ],
        posts: [
          {
            title: "Banques physiques vs Banques virtuelles en France : Lequel choisir ?",
            excerpt: "Wise, Revolut, N26, Qonto ou banque traditionnelle : découvrez celle qui correspond le mieux à votre situation en France.",
            date: "2 Juin 2026",
            readTime: "12 min",
            image: "/bancos-france-inmigrantes.webp",
            category: "Finances",
            slug: "bancos-fisicos-vs-virtuales-francia"
          },
          {
            title: "Qu'est-ce qu'une eSIM et pourquoi est-ce si utile ?",
            excerpt: "Le guide que tout Latino-Américain devrait lire avant d'arriver en France. Connectivité active dès l'atterrissage.",
            date: "2 Juin 2026",
            readTime: "8 min",
            image: "/esim-guide-france.webp",
            category: "Connectivité",
            slug: "esim-guia-latinoamericanos-francia"
          },
          {
            title: "Visa Saisonnier ou Salarié : Guide Complet 2026",
            excerpt: "Exigences, contrats, délais et conseils clés pour obtenir un permis Saisonnier ou Salarié temporaire en France sans accroc.",
            date: "15 Janvier 2026",
            readTime: "9 min",
            image: "/seasonal-worker-in-french-vineyard.webp",
            category: "Visas de Travail",
            slug: "visa-saisonnier-salarie"
          },
          {
            title: "PVT France : Checklist pour les Argentins 2025",
            excerpt: "Étape par étape pour rassembler les documents, demander le visa et organiser vos premiers mois en France avec le PVT.",
            date: "10 Janvier 2025",
            readTime: "8 min",
            image: "/french-work-visa-documents.webp",
            category: "Permis Vacances-Travail",
            slug: "working-holiday-francia"
          },
          {
            title: "Visa Étudiant France 2025 : Campus France et Consulat",
            excerpt: "Organisez votre calendrier de la recherche de programmes à l'arrivée en France, avec checklists et documents essentiels.",
            date: "5 Janvier 2025",
            readTime: "10 min",
            image: "/student-studying-in-paris.webp",
            category: "Visas Étudiants",
            slug: "visa-estudiante-francia"
          },
          {
            title: "Apprendre le Français : Ressources et Méthodes pour Progresser",
            excerpt: "Stratégies combinées (applications, professeurs, immersion et examens) pour atteindre le niveau B1/B2 requis pour les visas en un temps record.",
            date: "2 Janvier 2025",
            readTime: "7 min",
            image: "/person-learning-french-language.webp",
            category: "Langue et Culture",
            slug: "aprender-frances-recursos"
          }
        ]
      }
    }
  }
};

const locales = ['es', 'en', 'fr'];
for (const locale of locales) {
  const filePath = path.join(process.cwd(), 'messages', `${locale}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  data.Blog = translations[locale].Blog;
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${locale}.json with Blog index`);
}
