import fs from 'fs';
import path from 'path';

const translations = {
  es: {
    BlogPosts: {
      "visa-estudiante-francia": {
        hero: {
          title: "Visa de Estudiante: Pasos y Calendario",
          subtitle: "Desglosamos el proceso desde la búsqueda de programas hasta la validación de tu VLS-TS Étudiant en Francia.",
          category: "Visas de Estudiante"
        },
        roadmapTitle: "Roadmap: de la candidatura a la visa",
        milestones: [
          {
            title: "Selección de programa",
            detail: "Investigá 5/6 formaciones compatibles con tu perfil y verificá si exigen CampusArt, Parcoursup o candidatura directa."
          },
          {
            title: "Campus France",
            detail: "Cargá el dossier, pagá la tasa y preparate para la entrevista. Lleva traducciones oficiales y justificá tu plan de financiamiento."
          },
          {
            title: "Consulado",
            detail: "Reune originales + copias, seguro, alojamiento y carta de aceptación. El pasaporte demora entre 7 y 15 días hábiles tras el turno."
          }
        ],
        roadmapConclusion: "Recomendamos iniciar la búsqueda con 9 meses de anticipación. Muchas escuelas privadas responden en 2 semanas, pero las universidades públicas y las formaciones selectivas (Sciences Po, BTS, másters especializados) pueden tardar 2/3 meses.",
        campusTitle: "Cómo preparar el dossier de Campus France",
        campusP1: 'Subí diplomas, analíticos y traducciones juradas en PDF. En el apartado "Motivación" explicá por qué elegiste Francia, cuáles son tus objetivos profesionales y cómo vas a financiarte. La entrevista suele durar 15 minutos: llevan tu CV y proyecto impreso, te hacen preguntas en francés y comprueban que entendés el plan académico.',
        campusP2: "Después de la entrevista, Campus France envía el aval directamente al consulado. Recién entonces puedes pedir turno para la visa; por eso es clave no dejar la entrevista para último momento.",
        docsTitle: "Documentación para el consulado",
        docs: [
          "Carta de aceptación definitiva o attestation de pré-inscription",
          "Certificado de idioma (DELF B2, TCF, IELTS) según la formación",
          "CV académico actualizado + proyecto de estudios",
          "Seguro médico de viaje (luego activarás la sécurité sociale)",
          "Justificante de alojamiento mínimo por 3 meses",
          "Medios económicos: 7.380 € al año como referencia"
        ],
        fundingTitle: "Opciones de financiamiento aceptadas",
        funding: [
          { label: "Cuenta propia", note: "Extractos bancarios con saldo ≥ 615 € por mes de estadía" },
          { label: "Sponsor familiar", note: "Carta de compromiso, copia DNI y prueba de ingresos mensuales estables" },
          { label: "Beca/contrato", note: "Constancia oficial que detalle montos, duración y si cubre alojamiento/comidas" }
        ],
        fundingConclusion: "Si combinas ahorro propio + sponsor, aclará los montos que aporta cada uno y adjuntá una tabla resumen. Cuanta más claridad, menos pedidos de información extra recibirás.",
        arrivalTitle: "Después de llegar a Francia",
        arrivalSteps: [
          "Validá la VLS-TS en ANEF dentro de los 3 primeros meses.",
          "Inscríbete en la sécurité sociale (étudiants internationaux) y elige una mutuelle.",
          "Abre tu cuenta bancaria y pide la ayuda al alquiler (APL) si corresponde.",
          "Si tu visa permite trabajar, registrá el contrato en la plataforma adecuada y monitoreá tus horas."
        ]
      }
    }
  },
  en: {
    BlogPosts: {
      "visa-estudiante-francia": {
        hero: {
          title: "Student Visa: Steps and Calendar",
          subtitle: "We break down the process from program search to the validation of your VLS-TS Étudiant in France.",
          category: "Student Visas"
        },
        roadmapTitle: "Roadmap: from application to visa",
        milestones: [
          {
            title: "Program selection",
            detail: "Research 5/6 programs compatible with your profile and check if they require CampusArt, Parcoursup or direct application."
          },
          {
            title: "Campus France",
            detail: "Upload the dossier, pay the fee and prepare for the interview. Bring official translations and justify your financing plan."
          },
          {
            title: "Consulate",
            detail: "Gather originals + copies, insurance, accommodation and acceptance letter. The passport takes between 7 and 15 working days after the appointment."
          }
        ],
        roadmapConclusion: "We recommend starting the search 9 months in advance. Many private schools respond in 2 weeks, but public universities and selective programs (Sciences Po, BTS, specialized masters) can take 2/3 months.",
        campusTitle: "How to prepare the Campus France dossier",
        campusP1: 'Upload diplomas, transcripts and sworn translations in PDF. In the "Motivation" section explain why you chose France, what your professional goals are and how you will finance yourself. The interview usually lasts 15 minutes: bring your printed CV and project, they ask you questions in French and check that you understand the academic plan.',
        campusP2: "After the interview, Campus France sends the endorsement directly to the consulate. Only then can you book an appointment for the visa; that's why it is key not to leave the interview for the last minute.",
        docsTitle: "Documentation for the consulate",
        docs: [
          "Final acceptance letter or attestation de pré-inscription",
          "Language certificate (DELF B2, TCF, IELTS) depending on the program",
          "Updated academic CV + study project",
          "Travel medical insurance (later you will activate the sécurité sociale)",
          "Proof of accommodation for at least 3 months",
          "Financial means: 7,380 € per year as a reference"
        ],
        fundingTitle: "Accepted financing options",
        funding: [
          { label: "Own account", note: "Bank statements with balance ≥ 615 € per month of stay" },
          { label: "Family sponsor", note: "Commitment letter, copy of ID and proof of stable monthly income" },
          { label: "Scholarship/contract", note: "Official certificate detailing amounts, duration and whether it covers accommodation/meals" }
        ],
        fundingConclusion: "If you combine your own savings + sponsor, clarify the amounts provided by each and attach a summary table. The more clarity, the fewer requests for extra information you will receive.",
        arrivalTitle: "After arriving in France",
        arrivalSteps: [
          "Validate the VLS-TS on ANEF within the first 3 months.",
          "Register with the sécurité sociale (international students) and choose a mutuelle.",
          "Open your bank account and ask for housing assistance (APL) if applicable.",
          "If your visa allows working, register the contract on the appropriate platform and monitor your hours."
        ]
      }
    }
  },
  fr: {
    BlogPosts: {
      "visa-estudiante-francia": {
        hero: {
          title: "Visa Étudiant : Étapes et Calendrier",
          subtitle: "Nous détaillons le processus, de la recherche de programmes à la validation de votre VLS-TS Étudiant en France.",
          category: "Visas Étudiants"
        },
        roadmapTitle: "Feuille de route : de la candidature au visa",
        milestones: [
          {
            title: "Sélection du programme",
            detail: "Recherchez 5/6 formations compatibles avec votre profil et vérifiez si elles nécessitent CampusArt, Parcoursup ou une candidature directe."
          },
          {
            title: "Campus France",
            detail: "Téléchargez le dossier, payez les frais et préparez l'entretien. Apportez des traductions officielles et justifiez votre plan de financement."
          },
          {
            title: "Consulat",
            detail: "Rassemblez les originaux + copies, assurance, logement et lettre d'acceptation. Le passeport prend entre 7 et 15 jours ouvrables après le rendez-vous."
          }
        ],
        roadmapConclusion: "Nous recommandons de commencer la recherche 9 mois à l'avance. De nombreuses écoles privées répondent en 2 semaines, mais les universités publiques et les formations sélectives (Sciences Po, BTS, masters spécialisés) peuvent prendre 2 à 3 mois.",
        campusTitle: "Comment préparer le dossier Campus France",
        campusP1: 'Téléchargez les diplômes, les relevés de notes et les traductions assermentées en PDF. Dans la section "Motivation", expliquez pourquoi vous avez choisi la France, quels sont vos objectifs professionnels et comment vous allez vous financer. L\'entretien dure généralement 15 minutes : apportez votre CV imprimé et votre projet, ils vous posent des questions en français et vérifient que vous comprenez le plan académique.',
        campusP2: "Après l'entretien, Campus France envoie l'aval directement au consulat. Ce n'est qu'alors que vous pourrez prendre rendez-vous pour le visa ; c'est pourquoi il est essentiel de ne pas laisser l'entretien à la dernière minute.",
        docsTitle: "Documentation pour le consulat",
        docs: [
          "Lettre d'acceptation définitive ou attestation de pré-inscription",
          "Certificat de langue (DELF B2, TCF, IELTS) selon la formation",
          "CV académique mis à jour + projet d'études",
          "Assurance médicale de voyage (vous activerez ensuite la sécurité sociale)",
          "Justificatif de domicile d'au moins 3 mois",
          "Moyens financiers : 7 380 € par an à titre de référence"
        ],
        fundingTitle: "Options de financement acceptées",
        funding: [
          { label: "Compte personnel", note: "Relevés bancaires avec solde ≥ 615 € par mois de séjour" },
          { label: "Sponsor familial", note: "Lettre d'engagement, copie de la carte d'identité et preuve de revenus mensuels stables" },
          { label: "Bourse/contrat", note: "Certificat officiel détaillant les montants, la durée et s'il couvre l'hébergement/les repas" }
        ],
        fundingConclusion: "Si vous combinez vos propres économies + un sponsor, clarifiez les montants fournis par chacun et joignez un tableau récapitulatif. Plus il y a de clarté, moins vous recevrez de demandes d'informations supplémentaires.",
        arrivalTitle: "Après votre arrivée en France",
        arrivalSteps: [
          "Validez le VLS-TS sur l'ANEF dans les 3 premiers mois.",
          "Inscrivez-vous à la sécurité sociale (étudiants internationaux) et choisissez une mutuelle.",
          "Ouvrez votre compte bancaire et demandez l'aide au logement (APL) si applicable.",
          "Si votre visa vous permet de travailler, enregistrez le contrat sur la plateforme appropriée et surveillez vos heures."
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
  data.BlogPosts["visa-estudiante-francia"] = translations[locale].BlogPosts["visa-estudiante-francia"];
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${locale}.json with Student Visa blog post`);
}
