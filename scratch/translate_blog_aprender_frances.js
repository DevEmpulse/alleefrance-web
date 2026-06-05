import fs from 'fs';
import path from 'path';

const translations = {
  es: {
    BlogPosts: {
      "aprender-frances-recursos": {
        hero: {
          title: "Aprender Francés: Recursos y Métodos",
          subtitle: "Un plan accionable para llegar al nivel que exigen las visas francesas, aunque partas desde cero.",
          category: "Idioma y Cultura"
        },
        pillarsTitle: "Los 3 pilares para progresar",
        pillars: [
          {
            title: "Input diario",
            detail: "Podcast de RFI Journal en français facile + 20 minutos de lectura graduada (News in Slow French, Frantastique)."
          },
          {
            title: "Producción guiada",
            detail: "2 clases semanales (online o presencial) centradas en conversación y corrección de pronunciación."
          },
          {
            title: "Evaluación mensual",
            detail: "Simulacros DELF/TCF para medir progreso y ajustar el plan antes de la fecha de examen."
          }
        ],
        pillarsConclusion: "La constancia es más importante que la cantidad. 45 minutos diarios bien enfocados superan a sesiones largas pero irregulares. Usa un calendario compartido para registrar horas de estudio y detectar semanas flojas.",
        resourcesTitle: "Recursos recomendados en 2024",
        resources: [
          {
            name: "Alliance Française online",
            note: "Aulas en vivo + feedback escrito. Ideal para pasar de A2 a B1."
          },
          {
            name: "Italki / Preply",
            note: "Profes personalizados desde 12 € la hora. Elige nativos especializados en visas o estudios."
          },
          {
            name: "Anki + decks B1",
            note: "Tarjetas con pronunciación para incorporar vocabulario profesional."
          },
          {
            name: "TV5 Monde Apprendre",
            note: "Videos cortos con ejercicios autocorregibles."
          },
          {
            name: "Meetup conversacional",
            note: "Practicá en tu ciudad con nativos que viven en Argentina."
          }
        ],
        resourcesConclusion: "Complementá los materiales digitales con inmersión real: cambiá el idioma del celular, seguí cuentas francesas en redes y buscá tandems lingüísticos. La exposición constante acelera la comprensión auditiva.",
        studyPlanTitle: "Plan de estudio de 9 meses",
        studyPlan: [
          { phase: "Meses 1-2", focus: "Consolidá la base gramatical A2. 30 minutos diarios de app + 2 clases grupales." },
          { phase: "Meses 3-5", focus: "Saltá a B1: escritura semanal de correos y simulacros orales grabados." },
          { phase: "Meses 6-7", focus: "Preparación DELF: ejercicios cronometrados y feedback correctivo individual." },
          { phase: "Meses 8-9", focus: "Profundizá vocabulario profesional y arma un portfolio de proyectos/ensayos en francés." }
        ],
        examsTitle: "Preparación para exámenes oficiales",
        exams: [
          "Elige el examen según tu objetivo: DELF B1/B2 para visas, TCF IRN para naturalización, TEF Canadá para migración.",
          "Practica con cronómetro. Las pruebas orales duran 10-15 minutos, así que entrená respuestas concisas.",
          "Grabate respondiendo temas típicos y analizá muletillas o errores de pronunciación.",
          "Simulá la parte escrita en computadora si vas a rendir TCF SO, o a mano para DELF."
        ]
      }
    }
  },
  en: {
    BlogPosts: {
      "aprender-frances-recursos": {
        hero: {
          title: "Learn French: Resources and Methods",
          subtitle: "An actionable plan to reach the level required by French visas, even if you start from scratch.",
          category: "Language and Culture"
        },
        pillarsTitle: "The 3 pillars to progress",
        pillars: [
          {
            title: "Daily Input",
            detail: "RFI Journal en français facile podcast + 20 minutes of graded reading (News in Slow French, Frantastique)."
          },
          {
            title: "Guided production",
            detail: "2 weekly classes (online or in person) focused on conversation and pronunciation correction."
          },
          {
            title: "Monthly evaluation",
            detail: "DELF/TCF mocks to measure progress and adjust the plan before the exam date."
          }
        ],
        pillarsConclusion: "Consistency is more important than quantity. 45 well-focused daily minutes beat long but irregular sessions. Use a shared calendar to log study hours and detect slow weeks.",
        resourcesTitle: "Recommended resources in 2024",
        resources: [
          {
            name: "Alliance Française online",
            note: "Live classes + written feedback. Ideal for going from A2 to B1."
          },
          {
            name: "Italki / Preply",
            note: "Personalized teachers from 12 € an hour. Choose natives specialized in visas or studies."
          },
          {
            name: "Anki + B1 decks",
            note: "Flashcards with pronunciation to build professional vocabulary."
          },
          {
            name: "TV5 Monde Apprendre",
            note: "Short videos with self-correcting exercises."
          },
          {
            name: "Conversational Meetup",
            note: "Practice in your city with natives living in your country."
          }
        ],
        resourcesConclusion: "Complement digital materials with real immersion: change your phone's language, follow French accounts on social media, and look for language tandems. Constant exposure accelerates listening comprehension.",
        studyPlanTitle: "9-month study plan",
        studyPlan: [
          { phase: "Months 1-2", focus: "Consolidate A2 grammatical base. 30 daily minutes of app + 2 group classes." },
          { phase: "Months 3-5", focus: "Jump to B1: weekly email writing and recorded oral mocks." },
          { phase: "Months 6-7", focus: "DELF preparation: timed exercises and individual corrective feedback." },
          { phase: "Months 8-9", focus: "Deepen professional vocabulary and build a portfolio of projects/essays in French." }
        ],
        examsTitle: "Preparation for official exams",
        exams: [
          "Choose the exam according to your goal: DELF B1/B2 for visas, TCF IRN for naturalization, TEF Canada for migration.",
          "Practice with a stopwatch. Oral tests last 10-15 minutes, so train concise answers.",
          "Record yourself answering typical topics and analyze filler words or pronunciation errors.",
          "Simulate the written part on a computer if you take TCF SO, or by hand for DELF."
        ]
      }
    }
  },
  fr: {
    BlogPosts: {
      "aprender-frances-recursos": {
        hero: {
          title: "Apprendre le français : Ressources et Méthodes",
          subtitle: "Un plan d'action pour atteindre le niveau requis par les visas français, même si vous partez de zéro.",
          category: "Langue et Culture"
        },
        pillarsTitle: "Les 3 piliers pour progresser",
        pillars: [
          {
            title: "Saisie quotidienne",
            detail: "Podcast RFI Journal en français facile + 20 minutes de lecture graduée (News in Slow French, Frantastique)."
          },
          {
            title: "Production guidée",
            detail: "2 cours hebdomadaires (en ligne ou en présentiel) axés sur la conversation et la correction de la prononciation."
          },
          {
            title: "Évaluation mensuelle",
            detail: "Simulations DELF/TCF pour mesurer les progrès et ajuster le plan avant la date de l'examen."
          }
        ],
        pillarsConclusion: "La régularité est plus importante que la quantité. 45 minutes quotidiennes bien ciblées valent mieux que des sessions longues mais irrégulières. Utilisez un calendrier partagé pour consigner les heures d'étude et détecter les semaines creuses.",
        resourcesTitle: "Ressources recommandées en 2024",
        resources: [
          {
            name: "Alliance Française en ligne",
            note: "Cours en direct + retours écrits. Idéal pour passer de A2 à B1."
          },
          {
            name: "Italki / Preply",
            note: "Professeurs personnalisés à partir de 12 € de l'heure. Choisissez des natifs spécialisés dans les visas ou les études."
          },
          {
            name: "Anki + decks B1",
            note: "Cartes flash avec prononciation pour acquérir du vocabulaire professionnel."
          },
          {
            name: "TV5 Monde Apprendre",
            note: "Vidéos courtes avec exercices autocorrectifs."
          },
          {
            name: "Rencontres conversationnelles",
            note: "Pratiquez dans votre ville avec des natifs."
          }
        ],
        resourcesConclusion: "Complétez le matériel numérique par une véritable immersion : changez la langue de votre téléphone, suivez des comptes français sur les réseaux sociaux et cherchez des tandems linguistiques. Une exposition constante accélère la compréhension orale.",
        studyPlanTitle: "Plan d'étude de 9 mois",
        studyPlan: [
          { phase: "Mois 1-2", focus: "Consolider la base grammaticale A2. 30 minutes d'application quotidiennes + 2 cours en groupe." },
          { phase: "Mois 3-5", focus: "Passer au B1 : rédaction hebdomadaire d'e-mails et simulations orales enregistrées." },
          { phase: "Mois 6-7", focus: "Préparation au DELF : exercices chronométrés et retours correctifs individuels." },
          { phase: "Mois 8-9", focus: "Approfondir le vocabulaire professionnel et constituer un portfolio de projets/essais en français." }
        ],
        examsTitle: "Préparation aux examens officiels",
        exams: [
          "Choisissez l'examen en fonction de votre objectif : DELF B1/B2 pour les visas, TCF IRN pour la naturalisation, TEF Canada pour l'immigration.",
          "Pratiquez avec un chronomètre. Les épreuves orales durent 10 à 15 minutes, alors entraînez-vous à faire des réponses concises.",
          "Enregistrez-vous en répondant à des sujets typiques et analysez vos tics de langage ou vos erreurs de prononciation.",
          "Simulez la partie écrite sur ordinateur si vous passez le TCF SO, ou à la main pour le DELF."
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
  data.BlogPosts["aprender-frances-recursos"] = translations[locale].BlogPosts["aprender-frances-recursos"];
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${locale}.json with Aprender Frances blog post`);
}
