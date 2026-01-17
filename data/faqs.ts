import type { FAQItem } from "@/components/faq-section";

export const ALL_FAQS: FAQItem[] = [
  // --- PREGUNTAS GENERALES / SERVICIOS ---
  {
    question: "¿Cuánto tarda una autorización de trabajo?",
    answer:
      "El promedio va de 8 a 12 semanas, dependiendo del puesto, de la prefectura y de la carga de trabajo del Ministère de l’Intérieur. Podés acortar demoras enviando el expediente completo desde el inicio y respondiendo rápido a los pedidos de información.",
    category: ["Trámites", "General"],
  },
  {
    question: "¿Qué cubre el seguro VVT?",
    answer:
      "Incluye gastos médicos de urgencia en Francia y la UE, repatriación sanitaria, responsabilidad civil y asistencia 24/7. También ofrece cobertura en caso de hospitalización o accidente durante el viaje, requisitos indispensables para el visado.",
    category: ["Seguros", "General"],
  },
  {
    question: "¿Qué documentos pide el Titre de séjour (estudiante/salarié)?",
    answer:
      "Pasaporte vigente, visa de larga estadía o VLS-TS, acta de nacimiento traducida, comprobante de domicilio, seguro médico, medios económicos, contrato o certificado de estudios y, si aplica, los últimos recibos de salario o constancia de inscripción.",
    category: ["Trámites", "General"],
  },
  {
    question: "¿Cómo es la asesoría y qué recibo al final?",
    answer:
      "Coordinamos una videollamada de 60 minutos, respondemos tus preguntas y al finalizar te enviamos un resumen escrito con los pasos concretos que debés seguir.",
    category: ["Asesoría", "General"],
  },

  // --- WORKING HOLIDAY: GENERAL ---
  {
    question: "¿Qué es la visa Working Holiday para Francia?",
    answer:
      "La visa Working Holiday es un permiso de larga estadía que permite a jóvenes extranjeros residir legalmente en Francia por un período máximo de 12 meses. Durante ese tiempo, el titular puede trabajar de forma temporal para financiar su estancia y vivir una experiencia cultural. No se trata de una visa laboral clásica ni de estudios, sino de un programa de intercambio con condiciones específicas.",
    category: ["WH: General"],
  },
  {
    question: "¿Quiénes pueden solicitar la visa Working Holiday?",
    answer:
      "Pueden solicitarla los ciudadanos de países que tengan un acuerdo bilateral vigente con Francia. Además, es obligatorio cumplir con requisitos de edad, fondos económicos, seguro de viaje y antecedentes migratorios. Cada nacionalidad tiene condiciones particulares que deben revisarse antes de iniciar el trámite.",
    category: ["WH: General", "Trámites"],
  },
  {
    question: "¿Cuál es el límite de edad para aplicar?",
    answer:
      "En la mayoría de los casos, el rango de edad es de 18 a 30 años inclusive al momento de la solicitud. Sin embargo, algunos convenios permiten aplicar hasta los 35 años, dependiendo del país de origen. El cálculo de la edad y el momento exacto de la solicitud es clave para evitar rechazos.",
    category: ["WH: General", "Trámites"],
  },
  {
    question: "¿Cuánto tiempo dura la visa Working Holiday?",
    answer:
      "La duración máxima es de 12 meses, contados desde la fecha de entrada a Francia. Esta visa no es renovable ni prorrogable, por lo que es importante planificar con anticipación qué hacer al finalizar el período autorizado.",
    category: ["WH: General"],
  },
  {
    question: "¿Necesito una oferta de trabajo para solicitarla?",
    answer:
      "No. La Working Holiday se solicita sin contrato laboral previo. La idea del programa es permitir que el solicitante busque trabajo una vez en Francia, generalmente en empleos temporales o estacionales.",
    category: ["WH: General", "Trabajo"],
  },
  {
    question: "¿Cuánto dinero debo demostrar para la solicitud?",
    answer:
      "El consulado exige demostrar fondos suficientes para cubrir los primeros meses en Francia. El monto suele variar entre 2.500 y 3.000 euros, además de un pasaje de regreso o fondos adicionales para adquirirlo. La forma de presentar esta prueba económica es un punto sensible del expediente.",
    category: ["WH: General", "Trámites"],
  },
  {
    question: "¿Es obligatorio contratar un seguro de viaje?",
    answer:
      "Sí. El seguro es un requisito indispensable. Debe cubrir toda la duración de la visa e incluir atención médica, hospitalización y repatriación sanitaria. Un seguro incompleto o con fechas incorrectas puede provocar la negativa de la visa.",
    category: ["WH: General", "Seguros"],
  },
  {
    question: "¿Puedo estudiar con una visa Working Holiday?",
    answer:
      "Sí, pero únicamente cursos de corta duración, como clases de idioma u otras formaciones no titulantes. Esta visa no permite inscribirse en estudios universitarios ni programas largos que requieran una visa de estudiante.",
    category: ["WH: General", "Estudios"],
  },
  {
    question: "¿Puedo trabajar a tiempo completo en Francia?",
    answer:
      "Sí, es posible trabajar a tiempo completo, siempre que se trate de empleos temporales y respetando la legislación laboral francesa. No obstante, esta visa no está pensada para un empleo estable o de larga duración.",
    category: ["WH: General", "Trabajo"],
  },
  {
    question: "¿Puedo cambiar de empleador durante mi estadía?",
    answer:
      "Sí. El titular de una Working Holiday puede cambiar de empleador tantas veces como lo desee, ya que la visa no está vinculada a una empresa específica.",
    category: ["WH: General", "Trabajo"],
  },
  {
    question: "¿Puedo viajar por Europa con esta visa?",
    answer:
      "Sí. Al contar con una visa de larga estadía emitida por Francia, es posible circular por el espacio Schengen por períodos cortos, respetando las normas de movilidad establecidas.",
    category: ["WH: General"],
  },
  {
    question: "¿La visa Working Holiday se puede extender?",
    answer:
      "No. Una vez finalizados los 12 meses, la visa expira automáticamente. Para permanecer en Francia, es necesario cambiar de estatus migratorio si se cumplen los requisitos legales.",
    category: ["WH: General", "Trámites"],
  },
  {
    question: "¿Es posible cambiar a otro tipo de visa desde Francia?",
    answer:
      "En algunos casos sí, por ejemplo hacia una visa de estudiante o salarié. Sin embargo, esto depende del perfil del solicitante, del tipo de contrato obtenido y de la normativa vigente en ese momento.",
    category: ["WH: General", "Trámites"],
  },
  {
    question: "¿Puedo aplicar más de una vez a la Working Holiday?",
    answer:
      "No. La Working Holiday solo puede solicitarse una vez por país. No es posible repetir el programa en Francia si ya se ha obtenido anteriormente.",
    category: ["WH: General"],
  },
  {
    question:
      "¿Por qué es recomendable hacer el trámite con asesoría migratoria?",
    answer:
      "Porque cada expediente es distinto y los errores en documentación, plazos o seguros pueden derivar en demoras o rechazos. Una asesoría especializada permite preparar el dossier de forma correcta, anticipar riesgos y evaluar opciones futuras una vez en Francia.",
    category: ["WH: General", "Asesoría"],
  },

  // --- WORKING HOLIDAY: ARGENTINA ---
  {
    question:
      "¿Los argentinos tienen cupo anual para la Working Holiday Francia?",
    answer:
      "No. A diferencia de otros países, Francia no establece un cupo anual limitado para ciudadanos argentinos. Esto significa que se puede solicitar durante todo el año, siempre que se cumplan los requisitos.",
    category: ["WH: Argentina", "Trámites"],
  },
  {
    question: "¿Desde dónde debe tramitarse la visa si soy argentino?",
    answer:
      "La solicitud debe realizarse obligatoriamente desde Argentina, antes de viajar. No es posible aplicar estando en Francia ni desde un tercer país.",
    category: ["WH: Argentina", "Trámites"],
  },
  {
    question:
      "¿Qué consulado francés corresponde según mi domicilio en Argentina?",
    answer:
      "El consulado asignado depende del lugar de residencia declarado en Argentina. Presentar la solicitud en un consulado que no corresponda puede generar demoras o rechazo.",
    category: ["WH: Argentina", "Trámites"],
  },
  {
    question:
      "¿El pasaporte argentino debe tener una vigencia mínima específica?",
    answer:
      "Sí. El pasaporte debe estar vigente durante toda la estadía prevista y contar con páginas libres suficientes para la visa y los sellos migratorios.",
    category: ["WH: Argentina", "Documentación"],
  },
  {
    question: "¿Es obligatorio presentar pasaje comprado o solo reserva?",
    answer:
      "Generalmente se acepta pasaje comprado o fondos suficientes para adquirirlo. El criterio puede variar según el consulado, por lo que es clave presentar la documentación correctamente.",
    category: ["WH: Argentina", "Trámites"],
  },
  {
    question: "¿Qué tipo de seguro médico aceptan para argentinos?",
    answer:
      "El seguro debe cubrir toda la duración de la visa, incluir hospitalización, atención médica y repatriación sanitaria. Seguros incompletos o con fechas incorrectas suelen ser motivo de observaciones.",
    category: ["WH: Argentina", "Seguros"],
  },
  {
    question:
      "¿Puedo solicitar la Working Holiday si ya tuve otra visa francesa?",
    answer:
      "Sí, siempre que no hayas tenido previamente una Working Holiday Francia. Haber tenido visa de turista, estudiante u otra categoría no impide la solicitud.",
    category: ["WH: Argentina", "Trámites"],
  },
  {
    question: "¿Qué errores frecuentes cometen los argentinos al aplicar?",
    answer:
      "Los más comunes son: presentar seguros que no cubren 12 meses, fondos insuficientes o mal justificados, fechas inconsistentes entre documentos y cartas de motivación genéricas.",
    category: ["WH: Argentina", "Errores Frecuentes"],
  },
  {
    question: "¿La carta de motivación es obligatoria para argentinos?",
    answer:
      "Sí. Es un documento clave en el expediente. Debe explicar el proyecto personal, la intención del viaje y el respeto por las condiciones del programa.",
    category: ["WH: Argentina", "Documentación"],
  },
  {
    question:
      "¿Puedo ingresar a Francia antes de la fecha de inicio de la visa?",
    answer:
      "No. La entrada a Francia debe realizarse a partir de la fecha de inicio indicada en la visa. Ingresar antes puede generar problemas migratorios.",
    category: ["WH: Argentina", "Trámites"],
  },
  {
    question: "¿Es posible cambiar de empleador durante la estadía?",
    answer:
      "Sí. La Working Holiday permite trabajar con distintos empleadores, siempre dentro de contratos temporales y respetando la legislación laboral francesa.",
    category: ["WH: Argentina", "Trabajo"],
  },
  {
    question: "¿Qué pasa si no consigo trabajo inmediatamente al llegar?",
    answer:
      "No existe obligación de trabajar de forma inmediata. Por eso es fundamental contar con fondos suficientes y un plan realista para los primeros meses.",
    category: ["WH: Argentina", "Trabajo"],
  },
  {
    question:
      "¿La Working Holiday permite acceder a la seguridad social francesa?",
    answer:
      "El acceso depende del tipo de contrato y la duración del empleo. En muchos casos, el seguro privado sigue siendo obligatorio durante toda la estadía.",
    category: ["WH: Argentina", "Seguros", "Trabajo"],
  },
  {
    question: "¿Puedo solicitar una visa salarié si encuentro un empleador?",
    answer:
      "Es posible en ciertos casos, pero no es automático. El empleador debe iniciar el trámite y cumplir requisitos específicos ante la administración francesa.",
    category: ["WH: Argentina", "Trabajo", "Trámites"],
  },
  {
    question: "¿Por qué es importante una asesoría antes de aplicar?",
    answer:
      "Porque un expediente mal armado puede generar rechazos, retrasos o gastos innecesarios. La asesoría permite validar documentos, fechas, seguros y estrategia migratoria desde el inicio.",
    category: ["WH: Argentina", "Asesoría"],
  },

  // --- WORKING HOLIDAY: CHILE ---
  {
    question: "¿Cuántos cupos hay para chilenos cada año?",
    answer:
      "Para ciudadanos chilenos, la visa Working Holiday en Francia se limita a 400 cupos anuales. Esto significa que una vez que se agotan, no se aceptan nuevas solicitudes hasta que se abra el próximo ciclo del año siguiente.",
    category: ["WH: Chile", "Trámites"],
  },
  {
    question: "¿Cuándo se abren las postulaciones para chilenos?",
    answer:
      "La Embajada de Francia anuncia la apertura de postulaciones (normalmente a inicios de año) y los 400 cupos se habilitan en esa etapa. Es importante estar atento porque, una vez agotados, no se reciben más solicitudes hasta el próximo periodo.",
    category: ["WH: Chile", "Trámites"],
  },
  {
    question: "¿Desde dónde debo presentar mi solicitud si soy chileno?",
    answer:
      "Los chilenos deben presentar la solicitud desde Chile en el consulado francés competente (generalmente en Santiago). No se recibe la solicitud desde fuera del país ni desde otro territorio.",
    category: ["WH: Chile", "Trámites"],
  },
  {
    question: "¿Qué requisito específico tiene el seguro para chilenos?",
    answer:
      "El seguro debe cubrir toda la duración de la visa (12 meses) con cobertura médica, hospitalaria y repatriación. Muchas personas fallan en este punto porque la póliza no coincide exactamente con las fechas del visado o no cumple con las condiciones mínimas exigidas.",
    category: ["WH: Chile", "Seguros"],
  },
  {
    question: "¿Es difícil conseguir cita en el consulado?",
    answer:
      "Uno de los problemas frecuentes que reportan quienes intentan aplicar es la disponibilidad limitada de citas. Muchas personas quedan fuera por no poder reservar turno antes de que se agoten.",
    category: ["WH: Chile", "Trámites"],
  },
  {
    question: "¿Qué pasa si los cupos ya se agotaron?",
    answer:
      "Si los 400 cupos se completan, la Embajada no atiende consultas por teléfono ni por email sobre disponibilidad, y hay que esperar a la apertura del próximo ciclo para postular.",
    category: ["WH: Chile", "Trámites"],
  },
  {
    question: "¿Debo demostrar fondos para vivir y pasaje?",
    answer:
      "Sí. Los chilenos deben acreditar solvencia económica para cubrir gastos iniciales en Francia, y también demostrar fondos suficientes para adquirir el pasaje de regreso u opciones equivalentes según la normativa vigente.",
    category: ["WH: Chile", "Trámites"],
  },
  {
    question:
      "¿Qué errores comunes cometen los chilenos al presentar documentos?",
    answer:
      "Errores frecuentes incluyen: formularios incompletos o impresos como “borrador”, seguro con fechas incorrectas, pasaporte con vigencia insuficiente y no presentar respaldo adecuado de fondos económicos.",
    category: ["WH: Chile", "Errores Frecuentes"],
  },
  {
    question: "¿Es obligatorio presentar certificado médico?",
    answer:
      "Sí. Los chilenos deben presentar un certificado médico de buena salud emitido por un profesional habilitado. Este documento es un requisito formal para demostrar que están aptos para trabajar.",
    category: ["WH: Chile", "Documentación"],
  },
  {
    question: "¿El pasaporte chileno tiene requisitos específicos?",
    answer:
      "El pasaporte debe tener validez por al menos 12 meses más desde la fecha de entrada prevista a Francia, y contar con al menos dos páginas en blanco para formalidades.",
    category: ["WH: Chile", "Documentación"],
  },
  {
    question: "¿Puedo postular si ya tuve Working Holiday antes?",
    answer:
      "No. Si ya obtuviste una visa Working Holiday para Francia en el pasado, no podrás volver a postular bajo este programa.",
    category: ["WH: Chile", "Trámites"],
  },
  {
    question: "¿Debo presentar reserva de alojamiento?",
    answer:
      "Sí. Para chilenos suele ser necesario demostrar un lugar donde se quedarán al menos los primeros días (hostel, hotel, o carta de invitación con documentos del anfitrión).",
    category: ["WH: Chile", "Documentación"],
  },
  {
    question: "¿Hay un costo para la visa?",
    answer:
      "Sí. La Working Holiday para chilenos tiene un costo de 99 euros, pagado al momento de presentar la solicitud en el consulado.",
    category: ["WH: Chile", "Trámites"],
  },
  {
    question: "¿Puedo trabajar legalmente apenas llego?",
    answer:
      "Sí, la visa permite trabajar desde que ingresas al país, pero la búsqueda de empleo es por cuenta propia una vez estés en Francia.",
    category: ["WH: Chile", "Trabajo"],
  },
  {
    question: "¿Saber francés aumenta mis posibilidades?",
    answer:
      "Aunque no es un requisito obligatorio para postular, muchos chilenos reportan que tener conocimientos básicos (o más) de francés facilita mucho la búsqueda de empleo y la integración una vez allá.",
    category: ["WH: Chile", "Trabajo"],
  },

  // --- SAISONNIER: GENERAL ---
  {
    question: "¿Qué es la visa saisonnier en Francia?",
    answer:
      "La visa saisonnier es una visa de trabajo temporal destinada a personas extranjeras que han sido contratadas para realizar actividades estacionales en Francia (hotelería, turismo, agricultura, esquí). Permite trabajar legalmente durante un período limitado vinculado al contrato.",
    category: ["Saisonnier: General"],
  },
  {
    question: "¿Necesito tener un contrato antes de solicitar la visa?",
    answer:
      "Sí. La visa saisonnier no se puede solicitar sin un contrato de trabajo previo. El empleador francés debe ofrecer un contrato estacional y realizar los trámites ante la autoridad laboral francesa.",
    category: ["Saisonnier: General", "Trabajo", "Trámites"],
  },
  {
    question: "¿Quién inicia el trámite: el trabajador o el empleador?",
    answer:
      "El proceso comienza en Francia con el empleador, quien debe solicitar la autorización de trabajo. Una vez aprobada, el trabajador puede presentar su solicitud de visa en el consulado francés de su país de residencia.",
    category: ["Saisonnier: General", "Trámites"],
  },
  {
    question: "¿Cuánto tiempo dura la visa saisonnier?",
    answer:
      "Generalmente se otorga por hasta 6 meses dentro de un período de 12 meses. No es una visa permanente ni permite residir de forma continua durante todo el año.",
    category: ["Saisonnier: General"],
  },
  {
    question: "¿Puedo cambiar de empleador con esta visa?",
    answer:
      "No. La visa saisonnier está ligada al empleador y al contrato específico que fue aprobado. Cambiar de empleador sin una nueva autorización puede generar problemas migratorios.",
    category: ["Saisonnier: General", "Trabajo"],
  },
  {
    question: "¿La visa saisonnier permite trabajar en cualquier sector?",
    answer:
      "No. Solo permite trabajar en el sector y puesto indicados en el contrato aprobado (hoteles, restaurantes, esquí, vendimia, agricultura).",
    category: ["Saisonnier: General", "Trabajo"],
  },
  {
    question: "¿Es obligatorio contratar un seguro de salud?",
    answer:
      "Sí. Es obligatorio presentar un seguro médico internacional que cubra toda la duración de la estadía (médica, hospitalización y repatriación).",
    category: ["Saisonnier: General", "Seguros"],
  },
  {
    question: "¿Puedo llevar a mi familia con una visa saisonnier?",
    answer:
      "No. La visa saisonnier no permite la reunificación familiar. Está pensada exclusivamente para una estadía temporal de trabajo.",
    category: ["Saisonnier: General"],
  },
  {
    question: "¿Puedo renovar la visa saisonnier?",
    answer:
      "La visa puede solicitarse nuevamente en futuras temporadas si se obtiene un nuevo contrato, pero no se renueva automáticamente.",
    category: ["Saisonnier: General", "Trámites"],
  },
  {
    question:
      "¿La visa saisonnier permite cambiar a otro tipo de visa en Francia?",
    answer:
      "En principio no está pensada para cambios de estatus. En casos muy específicos podría evaluarse, pero no es lo habitual.",
    category: ["Saisonnier: General", "Trámites"],
  },
  {
    question: "¿Qué pasa si mi contrato termina antes de lo previsto?",
    answer:
      "Si el contrato finaliza anticipadamente, la situación migratoria debe revisarse cuidadosamente. Permanecer en Francia sin actividad laboral válida puede generar irregularidades.",
    category: ["Saisonnier: General", "Trabajo"],
  },
  {
    question: "¿Cuáles son los errores más comunes al solicitar esta visa?",
    answer:
      "Contratos incompletos, falta de autorización laboral válida, seguro médico incorrecto y fechas inconsistentes.",
    category: ["Saisonnier: General", "Errores Frecuentes"],
  },
  {
    question:
      "¿Es una visa adecuada si quiero quedarme a largo plazo en Francia?",
    answer:
      "No. Es una visa temporal. Si el objetivo es establecerse a largo plazo, existen otros tipos de visas que deben evaluarse.",
    category: ["Saisonnier: General"],
  },
  {
    question: "¿Puedo solicitar la visa desde cualquier país?",
    answer:
      "La solicitud debe presentarse en el consulado francés correspondiente al país de residencia legal del solicitante.",
    category: ["Saisonnier: General", "Trámites"],
  },
  {
    question: "¿Por qué es recomendable recibir asesoría antes de solicitarla?",
    answer:
      "Porque es una visa con requisitos estrictos y dependencia directa del empleador. Una asesoría permite verificar el contrato, seguro y viabilidad del proyecto para evitar rechazos.",
    category: ["Saisonnier: General", "Asesoría"],
  },

  // --- SAISONNIER: ARGENTINA ---
  {
    question:
      "¿Por qué el consulado francés en Argentina revisa tanto la solvencia personal?",
    answer:
      "Porque buscan asegurarse de que el solicitante pueda mantenerse económicamente durante las primeras semanas sin depender exclusivamente del salario del empleador, evitando situaciones de vulnerabilidad.",
    category: ["Saisonnier: Argentina", "Trámites"],
  },
  {
    question:
      "¿Qué impacto tienen las estadías previas como turista en Europa?",
    answer:
      "Las estadías repetidas o prolongadas pueden generar dudas. El consulado evalúa si el nuevo proyecto laboral es coherente con el historial migratorio y si se han respetado los límites anteriores.",
    category: ["Saisonnier: Argentina", "Trámites"],
  },
  {
    question:
      "¿Cómo evalúa el consulado argentino la experiencia laboral previa?",
    answer:
      "Buscan coherencia entre el perfil del solicitante y el puesto ofrecido. Si no existe relación entre la experiencia previa y el trabajo estacional, el expediente se analiza con mayor detenimiento.",
    category: ["Saisonnier: Argentina", "Trabajo"],
  },
  {
    question:
      "¿Qué sucede si el empleador no respeta el convenio colectivo francés?",
    answer:
      "El contrato puede ser considerado inválido. Francia controla que salario y condiciones respeten el convenio del sector.",
    category: ["Saisonnier: Argentina", "Trabajo"],
  },
  {
    question:
      "¿Por qué algunos argentinos reciben pedidos adicionales de documentos?",
    answer:
      "Porque el consulado detecta inconsistencias o información insuficiente. No es un rechazo, sino un pedido de aclaración para continuar el proceso.",
    category: ["Saisonnier: Argentina", "Trámites"],
  },
  {
    question:
      "¿Es posible que el consulado dude del carácter estacional del puesto?",
    answer:
      "Sí. Si el puesto parece permanente o continuo, puede ser rechazado aunque sea por tiempo limitado.",
    category: ["Saisonnier: Argentina", "Trabajo"],
  },
  {
    question: "¿Qué importancia tiene la traducción de documentos?",
    answer:
      "Es crucial. El consulado espera documentos claros y legibles. Una mala traducción puede ralentizar el análisis o generar confusión.",
    category: ["Saisonnier: Argentina", "Documentación"],
  },
  {
    question: "¿Cómo afecta un rechazo previo de visa?",
    answer:
      "Obliga a justificar mejor la nueva solicitud, demostrando que los motivos del rechazo anterior fueron corregidos.",
    category: ["Saisonnier: Argentina", "Trámites"],
  },
  {
    question: "¿Qué pasa si el contrato incluye alojamiento?",
    answer:
      "Debe estar claramente especificado en el contrato. Promesas verbales no son válidas y generan dudas.",
    category: ["Saisonnier: Argentina", "Trabajo"],
  },
  {
    question: "¿El consulado revisa la duración exacta del contrato?",
    answer:
      "Sí. La duración debe ser coherente con el carácter estacional del empleo.",
    category: ["Saisonnier: Argentina", "Trabajo"],
  },
  {
    question: "¿Qué ocurre si el empleador cambia de razón social?",
    answer:
      "Puede invalidar la autorización inicial y requerir reiniciar parte del trámite.",
    category: ["Saisonnier: Argentina", "Trámites"],
  },
  {
    question: "¿La visa permite trabajar horas extra?",
    answer: "Solo dentro del marco legal francés y si el convenio lo permite.",
    category: ["Saisonnier: Argentina", "Trabajo"],
  },
  {
    question:
      "¿Qué pasa si el solicitante llega antes de la fecha del contrato?",
    answer:
      "Puede tener problemas al ingresar, ya que la visa está vinculada al período laboral específico.",
    category: ["Saisonnier: Argentina", "Trámites"],
  },
  {
    question: "¿Por qué algunos expedientes se consideran “de riesgo”?",
    answer:
      "Por combinar historial migratorio complejo, contratos poco claros, falta de respaldo económico o incoherencias documentales.",
    category: ["Saisonnier: Argentina", "Errores Frecuentes"],
  },
  {
    question: "¿Qué diferencia un expediente sólido de uno frágil?",
    answer:
      "La coherencia total entre documentos, contrato y proyecto migratorio.",
    category: ["Saisonnier: Argentina", "Trámites"],
  },

  // --- SAISONNIER: CHILE ---
  {
    question:
      "¿Por qué el consulado francés en Chile es tan estricto con la coherencia del expediente?",
    answer:
      "Porque evalúa el proyecto migratorio como un todo (contrato, fechas, seguro, plan). Cualquier incoherencia puede interpretarse como riesgo de permanencia irregular.",
    category: ["Saisonnier: Chile", "Trámites"],
  },
  {
    question:
      "¿Qué revisa Francia del empleador cuando el trabajador es chileno?",
    answer:
      "Que el empleador tenga necesidad real y estacional, y cumpla la normativa. Si el empleador no tiene experiencia con extranjeros, el control es mayor.",
    category: ["Saisonnier: Chile", "Trabajo"],
  },
  {
    question:
      "¿Qué impacto tiene presentar un contrato con fechas “flexibles”?",
    answer:
      "Genera desconfianza. El consulado chileno exige precisión en las fechas. Contratos ambiguos derivan en correcciones o demoras.",
    category: ["Saisonnier: Chile", "Trabajo"],
  },
  {
    question:
      "¿Por qué el seguro es una de las principales causas de observaciones?",
    answer:
      "Porque muchos presentan seguros válidos en otros países pero que no cumplen los criterios específicos franceses (coberturas y fechas exactas).",
    category: ["Saisonnier: Chile", "Seguros"],
  },
  {
    question: "¿Cómo influye haber trabajado antes en Europa?",
    answer:
      "Se analiza el respeto a visados previos. Una historia migratoria “cargada” genera más controles.",
    category: ["Saisonnier: Chile", "Trámites"],
  },
  {
    question: "¿Qué pasa si el contrato no menciona alojamiento?",
    answer:
      "Si no lo menciona, el solicitante debe demostrar alojamiento legal por su cuenta. La falta de claridad aquí suele dejar solicitudes incompletas.",
    category: ["Saisonnier: Chile", "Documentación"],
  },
  {
    question: "¿Por qué a veces piden documentos adicionales a último momento?",
    answer:
      "Porque detectan incoherencias durante el análisis. Es una señal de que el expediente necesita refuerzo, no necesariamente un rechazo.",
    category: ["Saisonnier: Chile", "Trámites"],
  },
  {
    question: "¿Influye no tener experiencia previa en el sector?",
    answer:
      "Sí. Si no hay experiencia, se espera al menos una explicación lógica del perfil (estudios o motivación clara).",
    category: ["Saisonnier: Chile", "Trabajo"],
  },
  {
    question:
      "¿Qué ocurre si el empleador ya tuvo problemas con visados antes?",
    answer:
      "El consulado analizará con cautela los nuevos contratos de ese empleador, aunque el solicitante cumpla todo.",
    category: ["Saisonnier: Chile", "Trabajo"],
  },
  {
    question: "¿La visa saisonnier permite cambiar de empleador en Francia?",
    answer: "No libremente. Está vinculada a un empleador específico.",
    category: ["Saisonnier: Chile", "Trabajo"],
  },
  {
    question: "¿Por qué revisan tanto los antecedentes migratorios?",
    answer:
      "Para verificar el respeto de normas anteriores. Excesos de estadía o trabajos no declarados previos son banderas rojas.",
    category: ["Saisonnier: Chile", "Trámites"],
  },
  {
    question: "¿Es común que pidan aclaraciones sobre el proyecto personal?",
    answer:
      "Sí. Quieren entender la lógica del viaje: por qué ese trabajo, en ese lugar y momento.",
    category: ["Saisonnier: Chile", "Trámites"],
  },
  {
    question: "¿Qué pasa si el contrato parece “demasiado corto”?",
    answer:
      "Puede generar dudas sobre la viabilidad económica del proyecto (si vale la pena el viaje).",
    category: ["Saisonnier: Chile", "Trabajo"],
  },
  {
    question: "¿Por qué algunos expedientes chilenos tardan más que otros?",
    answer:
      "Depende de la claridad del contrato y la reputación del sector/empleador.",
    category: ["Saisonnier: Chile", "Trámites"],
  },
  {
    question: "¿Qué diferencia un expediente chileno bien armado de uno débil?",
    answer:
      "La coherencia total. Si contrato, seguro y perfil encajan sin contradicciones, el expediente avanza rápido.",
    category: ["Saisonnier: Chile", "Trámites"],
  },
];

export const getFaqsByCategories = (categories: string[]) => {
  const categorySet = new Set(categories);
  return ALL_FAQS.filter((faq) =>
    faq.category.some((category) => categorySet.has(category))
  );
};
