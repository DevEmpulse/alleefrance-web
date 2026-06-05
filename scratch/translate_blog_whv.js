import fs from 'fs';
import path from 'path';

const translations = {
  es: {
    BlogPosts: {
      "working-holiday-francia": {
        hero: {
          title: "Working Holiday Francia: Checklist 2024",
          subtitle: "Fechas de apertura, documentos obligatorios y plan financiero para que llegues a Francia con todo resuelto.",
          category: "Working Holiday"
        },
        section1: {
          title: "Cupos y estrategia para conseguir turno",
          p1: "El consulado abre la agenda en dos tandas (marzo y octubre) y se agota en minutos. Crea tu usuario Francia-Visas con antelación, precarga el formulario y ten listo el comprobante del pago de tasa para el mismo día del turno. Usa un email secundario para evitar bloqueos y configurá alertas con nuestro bot de Telegram para enterarte apenas se liberen lugares.",
          p2: "Recordá que la visa Working Holiday es por 12 meses, no renovable, y no permite trabajar con contratos superiores a 6 meses por empleador. Sin embargo, puedes alternar empleos y estudiar hasta 6 meses sin necesidad de otra visa."
        },
        checklistTitle: "Checklist completo antes del turno",
        checklist: [
          "Pasaporte argentino con validez mínima de 12 meses",
          "Certificado de antecedentes penales (con apostilla) emitido hace menos de 3 meses",
          "Seguro médico integral de 12 meses que incluya repatriación",
          "Fondos comprobables de al menos 2.500 €",
          "Boleto de regreso o fondos adicionales para comprarlo",
          "Carta de motivación y CV en francés (sí, los piden)"
        ],
        fundsTitle: "Cómo demostrar fondos",
        funds: [
          "Presentá extractos bancarios de los últimos 3 meses con movimientos claros. Si el dinero lo aporta un familiar, adjuntá carta notarizada, copia del documento y prueba de vínculo. Evitá transferencias grandes un día antes del turno; generan dudas y pueden pedirte explicaciones adicionales.",
          "Muchos participantes combinan ahorros en pesos + compra de euros pocos días antes. Guardá los comprobantes de la casa de cambio para respaldar el origen del dinero."
        ],
        budgetTitle: "Presupuesto sugerido para el primer mes",
        budget: [
          { label: "Alojamiento temporario", amount: "600 €", note: "3 semanas en hostal o residencia mientras buscas colocation" },
          { label: "Garantías y depósitos", amount: "1.200 €", note: "1 mes de depósito + mes adelantado en ciudades grandes" },
          { label: "Transporte + set up", amount: "300 €", note: "Abono Navigo, chip, tarjeta SIM, trámites" },
          { label: "Fondo de emergencia", amount: "400 €", note: "Por si demora el primer sueldo" }
        ],
        landingTitle: "Llegada a Francia: qué hacer en tus primeras semanas",
        landingSteps: [
          { title: "Primeros 7 días", detail: "Tramitá la cuenta bancaria online y comprá la línea telefónica para validar el seguro." },
          { title: "Semana 2", detail: "Busca alojamiento estable (residencias, colocations, foyers) y formalizá el contrato." },
          { title: "Mes 1", detail: "Registrate en la CPAM para la sécurité sociale y activá tu número fiscal si conseguís un empleo." }
        ],
        landingConclusion: "Una vez firmes tu primer contrato, pide al empleador que te dé la attestation Pôle Emploi y activá tu número de seguridad social provisional. Eso te permite acceder a la cobertura médica y cotizar para desempleo."
      }
    }
  },
  en: {
    BlogPosts: {
      "working-holiday-francia": {
        hero: {
          title: "Working Holiday France: Checklist 2024",
          subtitle: "Opening dates, mandatory documents and financial plan so you arrive in France with everything sorted out.",
          category: "Working Holiday"
        },
        section1: {
          title: "Quotas and strategy to get an appointment",
          p1: "The consulate opens the agenda in two batches (March and October) and it sells out in minutes. Create your France-Visas user in advance, preload the form and have your fee payment receipt ready for the same day of the appointment. Use a secondary email to avoid blockages and set up alerts with our Telegram bot to find out as soon as places become available.",
          p2: "Remember that the Working Holiday visa is for 12 months, non-renewable, and does not allow working with contracts longer than 6 months per employer. However, you can alternate jobs and study for up to 6 months without the need for another visa."
        },
        checklistTitle: "Complete checklist before the appointment",
        checklist: [
          "Argentine passport with a minimum validity of 12 months",
          "Criminal record certificate (with apostille) issued less than 3 months ago",
          "Comprehensive 12-month medical insurance including repatriation",
          "Verifiable funds of at least 2,500 €",
          "Return ticket or additional funds to buy it",
          "Motivation letter and CV in French (yes, they ask for them)"
        ],
        fundsTitle: "How to prove funds",
        funds: [
          "Present bank statements for the last 3 months with clear movements. If the money is provided by a relative, attach a notarized letter, a copy of the document and proof of link. Avoid large transfers a day before the appointment; they generate doubts and you may be asked for additional explanations.",
          "Many participants combine savings in local currency + buying euros a few days before. Keep the receipts from the exchange house to support the origin of the money."
        ],
        budgetTitle: "Suggested budget for the first month",
        budget: [
          { label: "Temporary accommodation", amount: "600 €", note: "3 weeks in a hostel or residence while looking for a colocation" },
          { label: "Guarantees and deposits", amount: "1,200 €", note: "1 month deposit + month in advance in big cities" },
          { label: "Transport + set up", amount: "300 €", note: "Navigo pass, chip, SIM card, procedures" },
          { label: "Emergency fund", amount: "400 €", note: "In case the first salary is delayed" }
        ],
        landingTitle: "Arrival in France: what to do in your first weeks",
        landingSteps: [
          { title: "First 7 days", detail: "Process the bank account online and buy the phone line to validate the insurance." },
          { title: "Week 2", detail: "Look for stable accommodation (residences, colocations, foyers) and formalize the contract." },
          { title: "Month 1", detail: "Register with the CPAM for the sécurité sociale and activate your tax number if you get a job." }
        ],
        landingConclusion: "Once you sign your first contract, ask the employer to give you the Pôle Emploi attestation and activate your provisional social security number. This allows you to access medical coverage and contribute to unemployment."
      }
    }
  },
  fr: {
    BlogPosts: {
      "working-holiday-francia": {
        hero: {
          title: "PVT France : Checklist 2024",
          subtitle: "Dates d'ouverture, documents obligatoires et plan financier pour que vous arriviez en France avec tout réglé.",
          category: "Permis Vacances-Travail"
        },
        section1: {
          title: "Quotas et stratégie pour obtenir un rendez-vous",
          p1: "Le consulat ouvre l'agenda en deux lots (mars et octobre) et il s'épuise en quelques minutes. Créez votre utilisateur France-Visas à l'avance, pré-remplissez le formulaire et ayez votre reçu de paiement des frais prêt pour le jour même du rendez-vous. Utilisez un e-mail secondaire pour éviter les blocages et configurez des alertes avec notre bot Telegram pour savoir dès que des places se libèrent.",
          p2: "N'oubliez pas que le visa Vacances-Travail est de 12 mois, non renouvelable, et ne permet pas de travailler avec des contrats de plus de 6 mois par employeur. Cependant, vous pouvez alterner les emplois et étudier jusqu'à 6 mois sans avoir besoin d'un autre visa."
        },
        checklistTitle: "Checklist complète avant le rendez-vous",
        checklist: [
          "Passeport argentin avec une validité minimale de 12 mois",
          "Extrait de casier judiciaire (avec apostille) délivré il y a moins de 3 mois",
          "Assurance médicale complète de 12 mois incluant le rapatriement",
          "Fonds vérifiables d'au moins 2 500 €",
          "Billet de retour ou fonds supplémentaires pour l'acheter",
          "Lettre de motivation et CV en français (oui, ils les demandent)"
        ],
        fundsTitle: "Comment justifier des fonds",
        funds: [
          "Présentez les relevés bancaires des 3 derniers mois avec des mouvements clairs. Si l'argent est fourni par un proche, joignez une lettre notariée, une copie de la pièce d'identité et une preuve de lien. Évitez les gros transferts un jour avant le rendez-vous ; ils suscitent des doutes et on peut vous demander des explications supplémentaires.",
          "De nombreux participants combinent des économies en monnaie locale + l'achat d'euros quelques jours avant. Conservez les reçus du bureau de change pour justifier l'origine de l'argent."
        ],
        budgetTitle: "Budget suggéré pour le premier mois",
        budget: [
          { label: "Hébergement temporaire", amount: "600 €", note: "3 semaines en auberge ou résidence en cherchant une colocation" },
          { label: "Garanties et cautions", amount: "1 200 €", note: "1 mois de caution + mois d'avance dans les grandes villes" },
          { label: "Transport + installation", amount: "300 €", note: "Pass Navigo, puce, carte SIM, démarches" },
          { label: "Fonds d'urgence", amount: "400 €", note: "Au cas où le premier salaire tarde" }
        ],
        landingTitle: "Arrivée en France : que faire lors de vos premières semaines",
        landingSteps: [
          { title: "Les 7 premiers jours", detail: "Traitez le compte bancaire en ligne et achetez la ligne téléphonique pour valider l'assurance." },
          { title: "Semaine 2", detail: "Recherchez un logement stable (résidences, colocations, foyers) et formalisez le contrat." },
          { title: "Mois 1", detail: "Inscrivez-vous à la CPAM pour la sécurité sociale et activez votre numéro fiscal si vous trouvez un emploi." }
        ],
        landingConclusion: "Une fois que vous avez signé votre premier contrat, demandez à l'employeur de vous remettre l'attestation Pôle Emploi et activez votre numéro de sécurité sociale provisoire. Cela vous permet d'accéder à la couverture médicale et de cotiser au chômage."
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
  data.BlogPosts["working-holiday-francia"] = translations[locale].BlogPosts["working-holiday-francia"];
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${locale}.json with Working Holiday blog post`);
}
