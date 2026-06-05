import fs from 'fs';
import path from 'path';

const translations = {
  es: {
    PrivacyPolicy: {
      title: "Política de Privacidad",
      intro: "Allée France Lyon opera alleefrance.com (en adelante, “el Sitio”). Respetamos tu privacidad y nos comprometemos a protegerla a través del cumplimiento de esta política.",
      sections: {
        "1": {
          title: "1. Información que recopilamos y usamos",
          p1: "A través del Sitio recibimos y almacenamos la información que ingresás en formularios, solicitudes, consultas y mensajes de contacto. Esto puede incluir datos que identifican a los usuarios, como nombre, domicilio, correo electrónico, nacionalidad, edad, género y datos demográficos.",
          p2: "Cuando visitás el Sitio, también recopilamos información del dispositivo, como dirección IP, tipo de navegador, zona horaria, cookies instaladas y páginas visitadas. A esta información la llamaremos “la Información”.",
          p3: "Utilizamos “la Información” para detectar riesgos y prevenir fraudes (en particular, tu dirección IP), y para mejorar la experiencia de navegación, el contenido y nuestras campañas.",
          purposesTitle: "Finalidades principales:",
          purposes: [
            "Procesar y gestionar solicitudes de asesoría migratoria, visas y trámites administrativos en Francia.",
            "Personalizar la experiencia del usuario y ofrecer contenidos relevantes.",
            "Comunicarnos sobre consultas, turnos, documentación y actualizaciones de servicios.",
            "Mejorar nuestros servicios y desarrollar nuevas soluciones.",
            "Cumplir con obligaciones legales y regulatorias aplicables.",
            "Enviar comunicaciones generales y de marketing, como newsletters y novedades del Sitio."
          ],
          p4: "No consideraremos como información recopilada por el Sitio a la información obtenida fuera de línea o a través de otros medios, salvo que se mencione expresamente en esta política.",
          p5: "Si haces clic en un enlace y abandonás el Sitio, no somos responsables por las prácticas de privacidad de terceros. Recomendamos revisar las políticas de esos sitios.",
          p6: "Si no estás de acuerdo con nuestras prácticas, puedes optar por no utilizar el Sitio. Al acceder o utilizar el Sitio, aceptás esta política."
        },
        "2": {
          title: "2. Cookies",
          p1: "El Sitio utiliza cookies para recopilar información y mejorar la navegación. Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envía una. Ten en cuenta que algunas partes del Sitio podrían no funcionar correctamente si desactivás las cookies."
        },
        "3": {
          title: "3. Compartir tu información personal",
          p1: "La información que recopilamos puede compartirse con terceros de acuerdo con lo descrito en esta política:",
          list: [
            "Proveedores de servicios que nos asisten con hosting, analítica, mensajería y soporte técnico, bajo nuestras instrucciones.",
            "Autoridades administrativas o judiciales que requieran información conforme a la normativa aplicable.",
            "Prevención de fraude, protección de derechos y seguridad de nuestros usuarios y del Sitio."
          ]
        },
        "4": {
          title: "4. Seguridad",
          p1: "Implementamos medidas razonables de seguridad para proteger tus datos personales y reducir riesgos de pérdida, acceso no autorizado o divulgación. Sin embargo, ningún método de transmisión o almacenamiento es completamente seguro, por lo que no podemos garantizar seguridad absoluta."
        },
        "5": {
          title: "5. Cambios en esta política",
          p1: "Podemos actualizar esta política en cualquier momento. Los cambios tendrán efecto inmediato una vez publicados en el Sitio. Te recomendamos revisar periódicamente esta página."
        },
        "6": {
          title: "6. Contacto",
          p1: "Si quieres acceder, rectificar o eliminar información personal o realizar consultas sobre esta política, escribenos a "
        }
      }
    },
    TermsAndConditions: {
      title: "Términos y Condiciones",
      intro: "Bienvenido a Allée France. Al acceder y utilizar este sitio web, aceptas cumplir con los siguientes términos y condiciones de uso.",
      sections: {
        "1": {
          title: "1. Servicios ofrecidos",
          p1: "Allée France proporciona servicios de asesoría migratoria, asistencia en trámites de visas, y apoyo para la integración en Francia. La información proporcionada en este sitio es de carácter general y no constituye asesoramiento legal vinculante."
        },
        "2": {
          title: "2. Responsabilidad del usuario",
          p1: "El usuario se compromete a proporcionar información veraz y precisa al utilizar nuestros servicios o completar formularios. Allée France no se responsabiliza por retrasos o rechazos en trámites debidos a información incorrecta o incompleta proporcionada por el usuario."
        },
        "3": {
          title: "3. Propiedad Intelectual",
          p1: "Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, es propiedad de Allée France y está protegido por las leyes de propiedad intelectual. Queda prohibida su reproducción sin autorización."
        },
        "4": {
          title: "4. Modificaciones de los servicios y precios",
          p1: "Nos reservamos el derecho de modificar o discontinuar cualquier servicio sin previo aviso. Los precios de nuestros servicios están sujetos a cambios sin notificación previa."
        }
      }
    }
  },
  en: {
    PrivacyPolicy: {
      title: "Privacy Policy",
      intro: "Allée France Lyon operates alleefrance.com (hereinafter, “the Site”). We respect your privacy and are committed to protecting it through compliance with this policy.",
      sections: {
        "1": {
          title: "1. Information we collect and use",
          p1: "Through the Site we receive and store the information you enter in forms, applications, inquiries, and contact messages. This may include data that identifies users, such as name, address, email, nationality, age, gender, and demographic data.",
          p2: "When you visit the Site, we also collect device information, such as IP address, browser type, time zone, installed cookies, and visited pages. We will refer to this information as “the Information”.",
          p3: "We use “the Information” to detect risks and prevent fraud (particularly your IP address), and to improve the browsing experience, content, and our campaigns.",
          purposesTitle: "Main purposes:",
          purposes: [
            "Process and manage requests for immigration advice, visas, and administrative procedures in France.",
            "Personalize the user experience and offer relevant content.",
            "Communicate about inquiries, appointments, documentation, and service updates.",
            "Improve our services and develop new solutions.",
            "Comply with applicable legal and regulatory obligations.",
            "Send general and marketing communications, such as newsletters and Site news."
          ],
          p4: "We will not consider information obtained offline or through other means as information collected by the Site, unless expressly mentioned in this policy.",
          p5: "If you click on a link and leave the Site, we are not responsible for the privacy practices of third parties. We recommend reviewing the policies of those sites.",
          p6: "If you do not agree with our practices, you may choose not to use the Site. By accessing or using the Site, you accept this policy."
        },
        "2": {
          title: "2. Cookies",
          p1: "The Site uses cookies to collect information and improve navigation. You can configure your browser to reject all cookies or to notify you when one is sent. Keep in mind that some parts of the Site may not function properly if you disable cookies."
        },
        "3": {
          title: "3. Sharing your personal information",
          p1: "The information we collect may be shared with third parties as described in this policy:",
          list: [
            "Service providers who assist us with hosting, analytics, messaging, and technical support, under our instructions.",
            "Administrative or judicial authorities requiring information under applicable regulations.",
            "Fraud prevention, protection of rights, and security of our users and the Site."
          ]
        },
        "4": {
          title: "4. Security",
          p1: "We implement reasonable security measures to protect your personal data and reduce risks of loss, unauthorized access, or disclosure. However, no method of transmission or storage is completely secure, so we cannot guarantee absolute security."
        },
        "5": {
          title: "5. Changes to this policy",
          p1: "We may update this policy at any time. Changes will take effect immediately upon posting on the Site. We recommend reviewing this page periodically."
        },
        "6": {
          title: "6. Contact",
          p1: "If you wish to access, rectify, or delete personal information or make inquiries about this policy, write to us at "
        }
      }
    },
    TermsAndConditions: {
      title: "Terms and Conditions",
      intro: "Welcome to Allée France. By accessing and using this website, you agree to comply with the following terms and conditions of use.",
      sections: {
        "1": {
          title: "1. Services offered",
          p1: "Allée France provides immigration consulting services, assistance with visa procedures, and support for integration in France. The information provided on this site is for general purposes and does not constitute binding legal advice."
        },
        "2": {
          title: "2. User responsibility",
          p1: "The user agrees to provide truthful and accurate information when using our services or filling out forms. Allée France is not responsible for delays or rejections in procedures due to incorrect or incomplete information provided by the user."
        },
        "3": {
          title: "3. Intellectual Property",
          p1: "All content on this website, including texts, graphics, logos, images, and software, is the property of Allée France and is protected by intellectual property laws. Reproduction without authorization is prohibited."
        },
        "4": {
          title: "4. Modifications of services and prices",
          p1: "We reserve the right to modify or discontinue any service without prior notice. The prices of our services are subject to change without prior notice."
        }
      }
    }
  },
  fr: {
    PrivacyPolicy: {
      title: "Politique de Confidentialité",
      intro: "Allée France Lyon exploite alleefrance.com (ci-après, « le Site »). Nous respectons votre vie privée et nous nous engageons à la protéger en nous conformant à cette politique.",
      sections: {
        "1": {
          title: "1. Informations que nous collectons et utilisons",
          p1: "À travers le Site, nous recevons et stockons les informations que vous saisissez dans les formulaires, candidatures, demandes de renseignements et messages de contact. Cela peut inclure des données qui identifient les utilisateurs, telles que le nom, l'adresse, l'e-mail, la nationalité, l'âge, le sexe et les données démographiques.",
          p2: "Lorsque vous visitez le Site, nous collectons également des informations sur l'appareil, telles que l'adresse IP, le type de navigateur, le fuseau horaire, les cookies installés et les pages visitées. Nous appellerons ces informations « les Informations ».",
          p3: "Nous utilisons « les Informations » pour détecter les risques et prévenir la fraude (en particulier votre adresse IP), et pour améliorer l'expérience de navigation, le contenu et nos campagnes.",
          purposesTitle: "Finalités principales :",
          purposes: [
            "Traiter et gérer les demandes de conseils en immigration, de visas et de démarches administratives en France.",
            "Personnaliser l'expérience utilisateur et proposer un contenu pertinent.",
            "Communiquer sur les demandes de renseignements, les rendez-vous, les documents et les mises à jour des services.",
            "Améliorer nos services et développer de nouvelles solutions.",
            "Se conformer aux obligations légales et réglementaires applicables.",
            "Envoyer des communications générales et marketing, telles que des newsletters et des actualités du Site."
          ],
          p4: "Nous ne considérerons pas les informations obtenues hors ligne ou par d'autres moyens comme des informations collectées par le Site, sauf mention expresse dans la présente politique.",
          p5: "Si vous cliquez sur un lien et quittez le Site, nous ne sommes pas responsables des pratiques de confidentialité des tiers. Nous vous recommandons de consulter les politiques de ces sites.",
          p6: "Si vous n'êtes pas d'accord avec nos pratiques, vous pouvez choisir de ne pas utiliser le Site. En accédant ou en utilisant le Site, vous acceptez cette politique."
        },
        "2": {
          title: "2. Cookies",
          p1: "Le Site utilise des cookies pour collecter des informations et améliorer la navigation. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour vous avertir lorsqu'un cookie est envoyé. Gardez à l'esprit que certaines parties du Site peuvent ne pas fonctionner correctement si vous désactivez les cookies."
        },
        "3": {
          title: "3. Partage de vos informations personnelles",
          p1: "Les informations que nous collectons peuvent être partagées avec des tiers comme décrit dans cette politique :",
          list: [
            "Les prestataires de services qui nous assistent pour l'hébergement, l'analyse, la messagerie et le support technique, selon nos instructions.",
            "Les autorités administratives ou judiciaires exigeant des informations en vertu de la réglementation applicable.",
            "Prévention de la fraude, protection des droits et sécurité de nos utilisateurs et du Site."
          ]
        },
        "4": {
          title: "4. Sécurité",
          p1: "Nous mettons en œuvre des mesures de sécurité raisonnables pour protéger vos données personnelles et réduire les risques de perte, d'accès non autorisé ou de divulgation. Cependant, aucune méthode de transmission ou de stockage n'est totalement sécurisée, nous ne pouvons donc pas garantir une sécurité absolue."
        },
        "5": {
          title: "5. Modifications de cette politique",
          p1: "Nous pouvons mettre à jour cette politique à tout moment. Les modifications prendront effet immédiatement après leur publication sur le Site. Nous vous recommandons de consulter cette page périodiquement."
        },
        "6": {
          title: "6. Contact",
          p1: "Si vous souhaitez accéder, rectifier ou supprimer des informations personnelles ou poser des questions sur cette politique, écrivez-nous à "
        }
      }
    },
    TermsAndConditions: {
      title: "Conditions Générales",
      intro: "Bienvenue sur Allée France. En accédant et en utilisant ce site Web, vous acceptez de vous conformer aux conditions d'utilisation suivantes.",
      sections: {
        "1": {
          title: "1. Services proposés",
          p1: "Allée France propose des services de conseil en immigration, d'assistance aux démarches de visas et d'accompagnement à l'intégration en France. Les informations fournies sur ce site sont d'ordre général et ne constituent pas un avis juridique contraignant."
        },
        "2": {
          title: "2. Responsabilité de l'utilisateur",
          p1: "L'utilisateur s'engage à fournir des informations véridiques et exactes lors de l'utilisation de nos services ou du remplissage de formulaires. Allée France n'est pas responsable des retards ou des rejets dans les procédures dus à des informations incorrectes ou incomplètes fournies par l'utilisateur."
        },
        "3": {
          title: "3. Propriété Intellectuelle",
          p1: "Tout le contenu de ce site Web, y compris les textes, graphiques, logos, images et logiciels, est la propriété d'Allée France et est protégé par les lois sur la propriété intellectuelle. Toute reproduction sans autorisation est interdite."
        },
        "4": {
          title: "4. Modifications des services et des prix",
          p1: "Nous nous réservons le droit de modifier ou d'interrompre tout service sans préavis. Les prix de nos services sont sujets à changement sans préavis."
        }
      }
    }
  }
};

const locales = ['es', 'en', 'fr'];
for (const locale of locales) {
  const filePath = path.join(process.cwd(), 'messages', `${locale}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  data.PrivacyPolicy = translations[locale].PrivacyPolicy;
  data.TermsAndConditions = translations[locale].TermsAndConditions;
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${locale}.json with Legal pages translations`);
}
