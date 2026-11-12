import type { Locale } from "@/i18n/routing";

export type Testimonial = {
  /** Reviewer name as shown on the Google profile. */
  name: string;
  /** Approximate review month (YYYY-MM). Google only publishes relative dates, so no day is stored. */
  date: string;
  /** Verbatim review text per language. Paragraphs are separated by a blank line. */
  quote: Record<Locale, string>;
};

/**
 * Google reviews of Allée France Lyon, newest first. The Spanish text is the original, untouched
 * (including its spelling); en and fr are faithful translations. Reviews ending in "…" are
 * truncated on Google and published exactly as visible there.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ricardo Rodríguez",
    date: "2026-11",
    quote: {
      es: "Excelente servicio,Jio es un capo. Se encargó de todo y logró los resultados esperados antes del plazo. Totalmente recomendado. …",
      en: "Excellent service, Jio is a pro. He took care of everything and achieved the expected results ahead of schedule. Totally recommended. …",
      fr: "Excellent service, Jio est un as. Il s'est occupé de tout et a obtenu les résultats attendus avant le délai prévu. Je le recommande totalement. …"
    }
  },
  {
    name: "Fabio Espínola",
    date: "2026-10",
    quote: {
      es: "Excelente servicio! Jio nos acompañó en todo momento y nos aclaró todas las dudas respecto a nuestro trámite, 100% recomendable!!",
      en: "Excellent service! Jio was with us every step of the way and cleared up all our questions about our application. 100% recommended!!",
      fr: "Excellent service ! Jio nous a accompagnés à chaque instant et a répondu à toutes nos questions sur notre démarche. Recommandé à 100 % !!"
    }
  },
  {
    name: "Agustina Lara",
    date: "2026-10",
    quote: {
      es: "Excelente el trabajo y atención de Jio. Hice con el todo el trámite de la visa para mi trabajo de nounou y el se encargo de hablar con mi jefa y despejar siempre todas las dudas. Lo recomiendo al 100% Excelente, estoy muy feliz con el resultado y el trabajo. Gracias!",
      en: "Jio's work and service were excellent. I did the whole visa process for my nanny (nounou) job with him, and he took care of talking to my employer and always cleared up every question. I recommend him 100%. Excellent, I'm very happy with the result and the work. Thank you!",
      fr: "Excellent travail et excellent accompagnement de Jio. J'ai fait avec lui toute la démarche de visa pour mon travail de nounou, et il s'est chargé de parler avec ma patronne et de toujours répondre à toutes mes questions. Je le recommande à 100 %. Excellent, je suis très contente du résultat et du travail. Merci !"
    }
  },
  {
    name: "Camila Barros",
    date: "2026-10",
    quote: {
      es: "Lo recomiendo completamente. Mucha comunicación y aclaración de dudas en todo momento. Me acompaño durante todo el proceso de manera magnífica.",
      en: "I fully recommend him. Lots of communication and questions answered at all times. He supported me throughout the whole process wonderfully.",
      fr: "Je le recommande pleinement. Beaucoup de communication et des réponses à mes questions à tout moment. Il m'a accompagnée tout au long du processus de manière remarquable."
    }
  },
  {
    name: "Catalina Miranda",
    date: "2026-10",
    quote: {
      es: "Recomendadisima!! Jio me ayudó a conseguir mi cambio de estatus de visado de VVT a SALARIE, todo fue muy expedito y profesional si o si recomiendo esta empresa …",
      en: "Highly recommended!! Jio helped me change my visa status from VVT to SALARIÉ. Everything was very quick and professional, I definitely recommend this company …",
      fr: "Super recommandé !! Jio m'a aidée à obtenir mon changement de statut de visa de VVT à SALARIÉ, tout a été très rapide et professionnel, je recommande sans hésiter cette entreprise …"
    }
  },
  {
    name: "Hernan Canche",
    date: "2026-10",
    quote: {
      es: "Muy buena atención y acompañamiento, me ayudó a realizar mi renovación de titre de sejour y salió todo correcto, recomendado 😁",
      en: "Very good service and support. He helped me renew my titre de séjour and everything went well. Recommended 😁",
      fr: "Très bon accueil et bon accompagnement, il m'a aidé à renouveler mon titre de séjour et tout s'est bien passé, recommandé 😁"
    }
  },
  {
    name: "Juliana Tuma",
    date: "2026-10",
    quote: {
      es: "Súper recomendado. Jio tiene mucho conocimiento sobre cada parte de los distintos procesos, y sobre todo mucha paciencia para responder todas las dudas que van surgiendo. Si tienen la oportunidad de tener su asesoramiento, no lo duden, es excelente!",
      en: "Highly recommended. Jio knows every part of the different processes very well and, above all, has a lot of patience to answer every question that comes up. If you have the chance to get his advice, don't hesitate, he's excellent!",
      fr: "Super recommandé. Jio connaît très bien chaque étape des différentes démarches et, surtout, il a beaucoup de patience pour répondre à toutes les questions qui se posent. Si vous avez l'occasion de bénéficier de ses conseils, n'hésitez pas, il est excellent !"
    }
  },
  {
    name: "Gaston Lopez",
    date: "2026-10",
    quote: {
      es: "Muy recomendable! Hicimos los trámites mi pareja y yo con esta empresa para la visa salarie y todo a la perfección! Desde Argentina, muchas gracias !",
      en: "Highly recommended! My partner and I did our salarié visa paperwork with this company and everything went perfectly! From Argentina, thank you very much!",
      fr: "Très recommandable ! Nous avons fait, en couple, nos démarches pour le visa salarié avec cette entreprise et tout s'est parfaitement passé ! Depuis l'Argentine, merci beaucoup !"
    }
  },
  {
    name: "Maria Candia",
    date: "2026-10",
    quote: {
      es: "Buena experiencia con Jio, resuelve las dudas, buena gestión. Lo recomiendo!",
      en: "Good experience with Jio. He answers questions and handles things well. I recommend him!",
      fr: "Bonne expérience avec Jio, il répond aux questions, bonne gestion du dossier. Je le recommande !"
    }
  },
  {
    name: "Dahi Pena",
    date: "2026-10",
    quote: {
      es: "Excelente experiencia. Súper agradecida con Jio por todo el acompañamiento durante mi proceso. Me ayudó a obtener la autorización de trabajo y el turno en el consulado de manera rápida, además de aclarar todas mis dudas y estar siempre disponible. Muy profesional, atento y eficiente. ¡Lo recomiendo totalmente!",
      en: "Excellent experience. Very grateful to Jio for all the support throughout my process. He helped me get the work authorization and the consulate appointment quickly, as well as clearing up all my questions and always being available. Very professional, attentive and efficient. I totally recommend him!",
      fr: "Excellente expérience. Très reconnaissante envers Jio pour tout l'accompagnement pendant ma démarche. Il m'a aidée à obtenir l'autorisation de travail et le rendez-vous au consulat rapidement, en plus de répondre à toutes mes questions et d'être toujours disponible. Très professionnel, attentionné et efficace. Je le recommande vivement !"
    }
  },
  {
    name: "Cata Cerimele",
    date: "2026-08",
    quote: {
      es: "Queremos agradecer especialmente a Jio por toda la ayuda y el acompañamiento durante nuestro trámite del titre de séjour. Desde el primer momento fue muy amable, profesional y siempre estuvo dispuesto a responder nuestras dudas con paciencia y claridad.\n\nGracias a su asesoramiento, todo el proceso fue mucho más sencillo y nos sentimos acompañados en cada etapa. Estamos muy agradecidos por su dedicación, compromiso y excelente atención. Sin dudas, lo recomendamos a cualquier persona que necesite ayuda con los trámites administrativos en Francia.",
      en: "We especially want to thank Jio for all the help and support during our titre de séjour application. From the very first moment he was very kind and professional, and he was always willing to answer our questions with patience and clarity.\n\nThanks to his advice, the whole process was much simpler and we felt supported at every stage. We are very grateful for his dedication, commitment and excellent service. We definitely recommend him to anyone who needs help with administrative procedures in France.",
      fr: "Nous tenons à remercier tout particulièrement Jio pour toute son aide et son accompagnement pendant notre démarche de titre de séjour. Dès le premier instant, il a été très aimable, professionnel, et toujours disposé à répondre à nos questions avec patience et clarté.\n\nGrâce à ses conseils, tout le processus a été beaucoup plus simple et nous nous sommes sentis accompagnés à chaque étape. Nous lui sommes très reconnaissants pour son dévouement, son engagement et son excellent accompagnement. Sans hésiter, nous le recommandons à toute personne ayant besoin d'aide pour ses démarches administratives en France."
    }
  },
  {
    name: "Susila Soto",
    date: "2026-08",
    quote: {
      es: "Muy agradecidos y complacidos con el servicio, Jio nuestro asesor siempre estuvo atento de manera oportuna y profesional, nos orientó en cada paso .Obtuvimos la visa de mi hijo muy rápido y sin dificultades. Recomendamos ampliamente su servicio",
      en: "Very grateful and pleased with the service. Jio, our advisor, was always attentive in a timely and professional way and guided us at every step. We got my son's visa very quickly and without any difficulties. We highly recommend his service.",
      fr: "Très reconnaissants et satisfaits du service. Jio, notre conseiller, a toujours été attentif, réactif et professionnel, et nous a orientés à chaque étape. Nous avons obtenu le visa de mon fils très rapidement et sans difficulté. Nous recommandons vivement son service."
    }
  },
  {
    name: "Milena Varela Hernandez",
    date: "2026-07",
    quote: {
      es: "Excelente servicio, asesoramiento, te guían en todo el proceso, te realizan el proceso de manera fructífera. Agradezco mucho por todo el apoyo para sacar un visado y todo el asesoramiento. Tienen mucho conocimiento sobre los procesos",
      en: "Excellent service and advice. They guide you through the whole process and carry it out successfully. I'm very grateful for all the support in getting a visa and for all the advice. They know the processes very well.",
      fr: "Excellent service et excellents conseils, ils vous guident tout au long du processus et le mènent à bien. Je les remercie beaucoup pour tout le soutien pour obtenir un visa et pour tous les conseils. Ils connaissent très bien les démarches."
    }
  }
];
