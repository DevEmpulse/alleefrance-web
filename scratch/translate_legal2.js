import fs from 'fs';
import path from 'path';

const translations = {
  es: {
    TermsAndConditions: {
      title: "Términos y Condiciones",
      intro: "Bienvenido/a a Allée France Lyon. Al acceder y utilizar alleefrance.com (en adelante, “el Sitio”), aceptás estos términos y condiciones de uso.",
      sections: {
        "1": {
          title: "1. Aceptación de los términos",
          p1: "El uso del Sitio implica la aceptación plena y sin reservas de estos términos. Si no estás de acuerdo con alguna condición, por favor no utilices el Sitio.",
          p2: "Toda la información recabada a través del Sitio será tratada conforme a nuestra Política de Privacidad."
        },
        "2": {
          title: "2. Información proporcionada por Allée France",
          p1: "Allée France Lyon brinda información y orientación sobre procesos migratorios, visas y trámites administrativos en Francia. El contenido del Sitio se basa en fuentes que consideramos confiables y en experiencias verificadas, pero no garantizamos su exactitud, integridad o actualización permanente.",
          p2: "La información publicada tiene fines informativos y no constituye asesoramiento legal vinculante. Cada trámite puede variar según la nacionalidad y la situación particular del usuario."
        },
        "3": {
          title: "3. Uso adecuado del Sitio",
          p1: "El usuario se compromete a utilizar el Sitio de forma lícita y respetuosa, sin afectar su funcionamiento ni los derechos de terceros. Está prohibido el uso con fines fraudulentos, la recolección automatizada de datos o cualquier acción que pueda dañar la experiencia de otros usuarios."
        },
        "4": {
          title: "4. Propiedad intelectual",
          p1: "Todos los contenidos del Sitio, incluyendo textos, gráficos, logotipos, imágenes, marcas y software, son propiedad de Allée France Lyon o de terceros que autorizaron su uso. Queda prohibida su reproducción o distribución sin autorización expresa."
        },
        "5": {
          title: "5. Responsabilidades y limitaciones",
          p1: "Allée France Lyon no asume responsabilidad por decisiones tomadas en base a la información publicada. El usuario utiliza el contenido del Sitio bajo su propio riesgo.",
          p2: "No garantizamos la disponibilidad continua del Sitio y podemos modificar, suspender o interrumpir contenidos y servicios sin previo aviso."
        },
        "6": {
          title: "6. Enlaces a terceros",
          p1: "El Sitio puede contener enlaces a sitios de terceros. Allée France Lyon no es responsable por los contenidos, políticas o prácticas de privacidad de esos sitios externos."
        },
        "7": {
          title: "7. Procesos de visado",
          p1: "La postulación, presentación de documentación y obtención de visas es responsabilidad exclusiva del usuario. Aunque brindamos acompañamiento y asesoría, no garantizamos la aprobación o denegación por parte de autoridades competentes."
        },
        "8": {
          title: "8. Cambios en los términos",
          p1: "Allée France Lyon puede modificar estos términos en cualquier momento. La versión vigente será la publicada en el Sitio."
        },
        "9": {
          title: "9. Legislación aplicable",
          p1: "Estos términos se rigen por la legislación vigente en Francia. Cualquier controversia será sometida a los tribunales competentes de Lyon, Francia."
        },
        "10": {
          title: "10. Contacto",
          p1: "Si tienes consultas sobre estos términos, escribenos a "
        }
      }
    }
  },
  en: {
    TermsAndConditions: {
      title: "Terms and Conditions",
      intro: "Welcome to Allée France Lyon. By accessing and using alleefrance.com (hereinafter, “the Site”), you accept these terms and conditions of use.",
      sections: {
        "1": {
          title: "1. Acceptance of terms",
          p1: "Use of the Site implies full and unreserved acceptance of these terms. If you do not agree with any condition, please do not use the Site.",
          p2: "All information collected through the Site will be treated in accordance with our Privacy Policy."
        },
        "2": {
          title: "2. Information provided by Allée France",
          p1: "Allée France Lyon provides information and guidance on immigration processes, visas, and administrative procedures in France. The content of the Site is based on sources we consider reliable and verified experiences, but we do not guarantee its accuracy, completeness, or permanent updating.",
          p2: "The published information is for informational purposes and does not constitute binding legal advice. Each procedure may vary depending on nationality and the user's particular situation."
        },
        "3": {
          title: "3. Proper use of the Site",
          p1: "The user agrees to use the Site in a lawful and respectful manner, without affecting its operation or the rights of third parties. Fraudulent use, automated data collection, or any action that may harm the experience of other users is prohibited."
        },
        "4": {
          title: "4. Intellectual Property",
          p1: "All content on the Site, including texts, graphics, logos, images, trademarks, and software, is the property of Allée France Lyon or third parties who authorized their use. Reproduction or distribution without express authorization is prohibited."
        },
        "5": {
          title: "5. Responsibilities and limitations",
          p1: "Allée France Lyon assumes no responsibility for decisions made based on published information. The user uses the Site's content at their own risk.",
          p2: "We do not guarantee the continuous availability of the Site and may modify, suspend, or interrupt content and services without prior notice."
        },
        "6": {
          title: "6. Links to third parties",
          p1: "The Site may contain links to third-party sites. Allée France Lyon is not responsible for the contents, policies, or privacy practices of those external sites."
        },
        "7": {
          title: "7. Visa processes",
          p1: "The application, submission of documentation, and obtaining of visas are the sole responsibility of the user. Although we provide guidance and advice, we do not guarantee approval or denial by competent authorities."
        },
        "8": {
          title: "8. Changes to terms",
          p1: "Allée France Lyon may modify these terms at any time. The current version will be the one published on the Site."
        },
        "9": {
          title: "9. Applicable legislation",
          p1: "These terms are governed by current French legislation. Any controversy will be submitted to the competent courts of Lyon, France."
        },
        "10": {
          title: "10. Contact",
          p1: "If you have questions about these terms, write to us at "
        }
      }
    }
  },
  fr: {
    TermsAndConditions: {
      title: "Conditions Générales",
      intro: "Bienvenue sur Allée France Lyon. En accédant et en utilisant alleefrance.com (ci-après, « le Site »), vous acceptez ces conditions d'utilisation.",
      sections: {
        "1": {
          title: "1. Acceptation des conditions",
          p1: "L'utilisation du Site implique l'acceptation pleine et sans réserve de ces conditions. Si vous n'êtes pas d'accord avec l'une des conditions, veuillez ne pas utiliser le Site.",
          p2: "Toutes les informations collectées via le Site seront traitées conformément à notre Politique de Confidentialité."
        },
        "2": {
          title: "2. Informations fournies par Allée France",
          p1: "Allée France Lyon fournit des informations et des conseils sur les processus d'immigration, les visas et les démarches administratives en France. Le contenu du Site est basé sur des sources que nous considérons fiables et des expériences vérifiées, mais nous ne garantissons pas son exactitude, son exhaustivité ou sa mise à jour permanente.",
          p2: "Les informations publiées le sont à titre informatif et ne constituent pas un avis juridique contraignant. Chaque procédure peut varier selon la nationalité et la situation particulière de l'utilisateur."
        },
        "3": {
          title: "3. Utilisation appropriée du Site",
          p1: "L'utilisateur s'engage à utiliser le Site de manière légale et respectueuse, sans nuire à son fonctionnement ni aux droits de tiers. L'utilisation frauduleuse, la collecte automatisée de données ou toute action pouvant nuire à l'expérience d'autres utilisateurs sont interdites."
        },
        "4": {
          title: "4. Propriété intellectuelle",
          p1: "Tout le contenu du Site, y compris les textes, graphiques, logos, images, marques et logiciels, est la propriété d'Allée France Lyon ou de tiers ayant autorisé leur utilisation. La reproduction ou distribution sans autorisation expresse est interdite."
        },
        "5": {
          title: "5. Responsabilités et limitations",
          p1: "Allée France Lyon n'assume aucune responsabilité pour les décisions prises sur la base des informations publiées. L'utilisateur utilise le contenu du Site à ses propres risques.",
          p2: "Nous ne garantissons pas la disponibilité continue du Site et pouvons modifier, suspendre ou interrompre le contenu et les services sans préavis."
        },
        "6": {
          title: "6. Liens vers des tiers",
          p1: "Le Site peut contenir des liens vers des sites tiers. Allée France Lyon n'est pas responsable du contenu, des politiques ou des pratiques de confidentialité de ces sites externes."
        },
        "7": {
          title: "7. Processus de visa",
          p1: "La demande, la soumission de documents et l'obtention de visas sont sous l'entière responsabilité de l'utilisateur. Bien que nous fournissions un accompagnement et des conseils, nous ne garantissons pas l'approbation ou le refus par les autorités compétentes."
        },
        "8": {
          title: "8. Modifications des conditions",
          p1: "Allée France Lyon peut modifier ces conditions à tout moment. La version en vigueur sera celle publiée sur le Site."
        },
        "9": {
          title: "9. Législation applicable",
          p1: "Ces conditions sont régies par la législation française en vigueur. Tout litige sera soumis aux tribunaux compétents de Lyon, France."
        },
        "10": {
          title: "10. Contact",
          p1: "Si vous avez des questions concernant ces conditions, écrivez-nous à "
        }
      }
    }
  }
};

const locales = ['es', 'en', 'fr'];
for (const locale of locales) {
  const filePath = path.join(process.cwd(), 'messages', `${locale}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  data.TermsAndConditions = translations[locale].TermsAndConditions;
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${locale}.json with full Terms and Conditions`);
}
