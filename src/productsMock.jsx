//para otherservices
const lista = (
  <ul
    style={{
      display: "flex",
      marginBottom: "10px",
      position: "relative",
      left: "-40px",
      textAlign: "start",
      flexDirection: "column",
    }}
  >
    <li>-Mudanza a todo el pais</li>
    <br></br>
    <li>-Mudanzas nocturnas</li>
    <br></br>
    <li>-Translado de objetos frágiles</li>
    <br></br>
    <li>-Translado de pianos y objetos pesados</li>
    <br></br>
    <li>-Traslado de plantas y elementos de jardinería.</li>
    <br></br>
    <li>-Mudanzas express.</li>
  </ul>
);

export let services = [
  {
    id: 1,
    title: "Diferentes tipos de vehiculos",
    description: "Para diferentes tipos de carga",
    img: "https://res.cloudinary.com/difrhbjlk/image/upload/v1685159881/117644612_2764971140456276_1983210277574305112_n.jpg_v8x4gg.jpg",
  },
  {
    id: 2,
    title: "Ascenso y Descenso de Muebles",
    description: "Con soga o tirantes",
    img: "https://res.cloudinary.com/difrhbjlk/image/upload/v1685157339/mudanzas-altura-subir-muebles-balcon-bajar-terraza_37gjxmy_3_aozmpu.jpg",
  },
  {
    id: 3,
    title: "Traslado de objetos pesados",
    description: "Muebles de gran tamaño, pianos y demás",
    img: "https://res.cloudinary.com/difrhbjlk/image/upload/v1685157550/Mudanzas-Como-hacer-la-mudanza-de-un-piano-1_cfwgsw.jpg",
  },
  {
    id: 4,
    title: "Servicio de Embalaje",
    description: "Para la proteccion de sus pertenencias",
    img: "https://res.cloudinary.com/difrhbjlk/image/upload/v1685157681/Diseno_sin_titulo_4_480x480_jwgkem.png",
  },
  {
    id: 5,
    title: "Armado y Desarmado de Muebles",
    description: "en casos especiales y con costo extra",
    img: "https://res.cloudinary.com/difrhbjlk/image/upload/v1685157840/7_ap83o0.jpg",
  },
  {
    id: 6,
    title: "Servicio de Canastos",
    description: "Por si lo necesita",
    img: "https://res.cloudinary.com/difrhbjlk/image/upload/v1685158075/D_NQ_NP_887855-MLM51374447614_092022-O_za3yjy.webp",
  },
];
let detailMercedes = (
  <div style={{ textAlign: "start" }}>
    <li>
      <strong>Capacidad:</strong> 3.500Kg
    </li>
    <li>
      <strong>Alto:</strong> 2 Mts
    </li>
    <li>
      <strong>Largo:</strong> 4,90 Mts
    </li>
    <li>
      <strong>Ancho:</strong> 2 Mts
    </li>
  </div>
);
let detailGrosspal = (
  <div style={{ textAlign: "start" }}>
    <li>Capacidad: 3.500Kg</li>
    <li>Alto: 2 Mts</li>
    <li>Largo: 4,90 Mts</li>
    <li>Ancho: 2 Mts</li>
  </div>
);
let detailRodeo = (
  <div style={{ textAlign: "start" }}>
    <li>Capacidad: 3.000Kg</li>
    <li>alto: 2x80</li>
    <li>peso: 3000KG</li>
  </div>
);
let detailRodeo2 = (
  <div style={{ textAlign: "start" }}>
    <li>Capacidad: 3.000Kg</li>
    <li>alto: 2x80</li>
    <li>peso: 3000KG</li>
  </div>
);

export let vehicles = [
  {
    id: 1,
    detail: detailMercedes,
    title: "Mercedes 608",
    img: "https://res.cloudinary.com/difrhbjlk/image/upload/v1685232494/279259100_3243066515980067_3203801809954723368_n.jpg_s9qssw.jpg",
    imgMirror:
      "https://res.cloudinary.com/difrhbjlk/image/upload/v1685232585/WhatsApp_Image_2023-05-27_at_21.07.35_ytwzic.jpg",
  },
  {
    id: 2,
    title: "Grosspal",
    detail: detailGrosspal,
    img: "https://res.cloudinary.com/difrhbjlk/image/upload/v1685232782/137265286_2899474923672563_2638232436445263580_n.jpg_lpauli.jpg",
    imgMirror:
      "https://res.cloudinary.com/difrhbjlk/image/upload/v1685319202/122101566_2828425114110878_1717747975436644844_n.jpg_qidecj.jpg",
  },
  {
    id: 3,
    title: "Renault rodeo",
    detail: detailRodeo,
    img: "https://res.cloudinary.com/difrhbjlk/image/upload/v1685296700/86499233_2613632278923497_1960291505608327168_n.jpg_ycplsz.jpg",
    imgMirror:
      "https://res.cloudinary.com/difrhbjlk/image/upload/v1685319411/52551958_2325175134435881_1519747286899359744_n.jpg_tcjo74.jpg",
  },
  {
    id: 4,
    title: "Renault rodeo",
    detail: detailRodeo2,
    img: "https://res.cloudinary.com/difrhbjlk/image/upload/v1685297152/37313540_2169099196710143_153708495747678208_n.jpg_pxizbn.jpg",
    imgMirror:
      "https://res.cloudinary.com/difrhbjlk/image/upload/v1685319557/1622310_1568400996779969_4868039986985934916_o.jpg_m09tkp.jpg",
  },
];

export let otherService = [
  {
    id: 1,
    title: "Más de 10 años de experiencia en el mercado de mudanzas",
    description: `En Fletes Matias llevamos más de 20 años en el mercado de mudanzas, lo que nos ha permitido adquirir una amplia experiencia en el manejo de objetos de todo tipo y en la realización de mudanzas exitosas. En Fletes Matias, estamos comprometidos con la satisfacción de nuestros clientes y nos esforzamos por ofrecer un servicio de calidad y adaptable a las necesidades de cada uno de ellos. Si estás buscando una empresa de mudanzas con amplia experiencia y profesionalismo, no dudes en contactarnos.`,
  },
  {
    id: 2,
    title: "Profesionalismo en cada mudanza",
    description:
      "En Fletes Matias, el profesionalismo es una de nuestras principales prioridades. Nos aseguramos de que todos nuestros empleados estén debidamente capacitados, certificados y comprometidos con la satisfacción del cliente. Nos esforzamos por ofrecer un servicio de alta calidad en cada mudanza. Si estás buscando una empresa de mudanzas que te ofrezca un servicio profesional y de alta calidad, no dudes en contactarnos. ¡Estamos aquí para ayudarte en todo lo que necesites!",
  },
  {
    id: 3,
    title: "Fletes y Mudanzas, seguras y confiables",
    description:
      "En Fletes Matias nos tomamos muy en serio la seguridad de nuestros clientes y de nuestro equipo de trabajo. Ofrecemos materiales de embalaje de alta calidad para proteger los objetos durante el transporte. También nos aseguramos de que todos nuestros empleados estén debidamente uniformados y presentables en todo momento. Además, nos aseguramos de que todos nuestros vehículos de transporte estén debidamente mantenidos y equipados con las necesidades de seguridad.",
  },
  {
    id: 4,
    title: "Mudanzas de calidad a precios justos",
    description:
      "En Fletes Matias, creemos que ofrecer precios justos y competitivos es fundamental para brindar un servicio de mudanzas de calidad a nuestros clientes. Por eso, nos esforzamos por ofrecer precios competitivos en el mercado de mudanzas, sin comprometer la calidad de nuestro servicio. En Fletes Matias, entendemos que cada mudanza es única y que cada cliente tiene necesidades y presupuestos diferentes.",
  },
  {
    id: 5,
    title: "Protección garantizada: nuestro servicio de embalaje",
    description:
      "En Fletes Matias, sabemos que tus objetos son valiosos y merecen ser tratados con el mayor cuidado y protección durante una mudanza. Por eso, ofrecemos un servicio de embalaje profesional que garantiza la protección de tus objetos durante todo el proceso de mudanza. Nos aseguramos de que todos nuestros empleados estén debidamente capacitados en técnicas de embalaje y manejo de objetos. Utilizamos materiales de embalaje de calidad para proteger tus objetos durante el transporte.",
  },
  {
    id: 6,
    title: "Desmontaje y montaje de muebles",
    description:
      "Sabemos que tus muebles son una parte importante de tu hogar y merecen ser tratados con el mayor cuidado y protección durante una mudanza. Por eso, ofrecemos un servicio de desmontaje y montaje que garantiza la protección de tus muebles. Contamos con un equipo de profesionales capacitados en técnicas de desmontaje y montaje de muebles. Nos aseguramos de que tus muebles sean desmontados y montados de manera segura y eficiente antes y después de la mudanza.",
  },
  {
    id: 7,
    title: "Mudanza en barrios cerrados y countries",
    description:
      "Sabemos que las mudanzas en barrios privados pueden ser un desafío debido a las restricciones de acceso y los requisitos de seguridad. Como estamos al tanto ofrecemos un servicio especializado de mudanzas en barrios privados, que garantiza una mudanza sin problemas y sin estrés. Todos nuestros vehículos están equipados con los papeles y permisos necesarios para poder acceder, y nuestros conductores están debidamente capacitados en las normas de seguridad.",
  },
  {
    id: 8,
    title: "Otros servicios extras que ofrecemos",
    description: lista,
  },
];

export let question = [
  {
    id: 1,
    ask: `¿Cuánto tiempo antes debo reservar la mudanza?`,
    answer: `Recomendamos reservar con al menos 1-2 semanas de anticipación para asegurar disponibilidad.`,
  },
  {
    id: 2,
    ask: `¿Desmontan y montan muebles?`,
    answer: `Sí, ofrecemos servicio de desmontaje y montaje de muebles para facilitar el traslado.`,
  },
  {
    id: 3,
    ask: `¿Cuánto cuesta una mudanza?`,
    answer: `El costo varía según la distancia, cantidad de objetos y servicios adicionales. Te proporcionaremos un presupuesto personalizado.`,
  },
  {
    id: 4,
    ask: `¿Pueden transportar vehículos?`,
    answer: `Sí, ofrecemos transporte de autos, motos y bicicletas.`,
  },
  {
    id: 5,
    ask: `¿Pueden trasladar plantas y mascotas?`,
    answer: `Sí, ofrecemos transporte seguro y cómodo para tus plantas y animales de compañía.`,
  },
  {
    id: 6,
    ask: `¿Qué medidas toman para proteger mis objetos?`,
    answer: `Utilizamos materiales de embalaje de calidad y técnicas de carga y descarga seguras para proteger tus pertenencias.`,
  },
  {
    id: 7,
    ask: `¿Cuánto tiempo tarda una mudanza?`,
    answer: `El tiempo varía según la distancia y la cantidad de objetos. Te proporcionaremos una estimación al planificar la mudanza.`,
  },
  {
    id: 8,
    ask: `¿Puedo cancelar o cambiar la fecha de mi mudanza?`,
    answer: `Sí, pero es posible que se apliquen cargos por cancelación o cambios de última hora.`,
  },
  {
    id: 9,
    ask: `¿Qué tipo de vehículos utilizan para las mudanzas?`,
    answer: `Utilizamos camiones y furgonetas de diferentes tamaños, según las necesidades de tu mudanza.`,
  },
  {
    id: 10,
    ask: `¿Pueden realizar mudanzas en fines de semana y feriados?`,
    answer: `Sí, ofrecemos servicio de mudanzas en fines de semana y feriados, aunque puede haber cargos adicionales.`,
  },
  {
    id: 11,
    ask: `¿Pueden proporcionar cajas y materiales de embalaje?`,
    answer: `Sí, ofrecemos cajas y materiales de embalaje para facilitar la preparación de tus objetos.`,
  },
  {
    id: 12,
    ask: `¿Pueden realizar mudanzas de último momento?`,
    answer: `Sí, ofrecemos servicio de mudanzas express, pero la disponibilidad puede ser limitada.`,
  },
  {
    id: 13,
    ask: `¿Pueden trasladar objetos pesados como pianos?`,
    answer: `Sí, contamos con equipo y personal especializado para trasladar objetos pesados y delicados.`,
  },
  {
    id: 14,
    ask: `¿Pueden realizar mudanzas comerciales y de oficinas?`,
    answer: `Sí, ofrecemos servicios de mudanzas para oficinas, comercios y otros establecimientos.`,
  },
  {
    id: 15,
    ask: `¿Pueden deshacerse de objetos que ya no necesito?`,
    answer: `Sí, ofrecemos servicio de gestión de residuos y reciclaje de objetos y materiales.`,
  },
  {
    id: 16,
    ask: `¿Pueden realizar mudanzas nocturnas?`,
    answer: `Sí, realizamos mudanzas fuera del horario comercial para mayor comodidad.`,
  },
  {
    id: 17,
    ask: `¿Cuál es la mejor época del año para realizar una mudanza?`,
    answer: `La mejor época para mudarse suele ser durante la primavera y el otoño, cuando hay menos demanda y las condiciones climáticas son más favorables.`,
  },
  {
    id: 18,
    ask: `¿Pueden realizar mudanzas en días de lluvia o nieve?`,
    answer: `Sí, realizamos mudanzas en condiciones climáticas adversas, pero tomamos precauciones adicionales para proteger tus objetos.`,
  },
  {
    id: 19,
    ask: `¿Pueden realizar mudanzas de objetos voluminosos como jacuzzis o equipos de gimnasio?`,
    answer: `Sí, contamos con equipo y personal especializado para trasladar objetos voluminosos y pesados.`,
  },
  {
    id: 20,
    ask: `¿Pueden realizar mudanzas de laboratorios, bibliotecas o centros de datos?`,
    answer: `Sí, ofrecemos servicios especializados para mudanzas de laboratorios, bibliotecas y centros de datos.`,
  },
  {
    id: 21,
    ask: `¿Pueden proporcionar un presupuesto sin compromiso?`,
    answer: `Sí, ofrecemos presupuestos sin compromiso para que puedas evaluar nuestras tarifas y servicios.`,
  },
  {
    id: 22,
    ask: `¿Qué métodos de pago aceptan?`,
    answer: `Aceptamos diferentes métodos de pago, como tarjetas de crédito, transferencias bancarias y efectivo.`,
  },
  {
    id: 23,
    ask: `¿Pueden realizar mudanzas en edificios sin ascensor?`,
    answer: `Sí, realizamos mudanzas en edificios sin ascensor, pero es posible que se apliquen cargos adicionales.`,
  },
  {
    id: 24,
    ask: `¿Pueden ayudarme a desempacar y organizar mis objetos en mi nuevo hogar?`,
    answer: `Sí, ofrecemos servicio de desempaque y organización para ayudarte a instalarte en tu nueva vivienda.`,
  },
  {
    id: 25,
    ask: `¿Pueden transportar muebles desarmados y volverlos a armar en el destino?`,
    answer: `Sí, ofrecemos servicio de desarmado, transporte y rearmado de muebles para facilitar las mudanzas.`,
  },
  {
    id: 26,
    ask: `¿Pueden entregar mis cajas y muebles en diferentes direcciones?`,
    answer: `Sí, ofrecemos servicio de almacenamiento de muebles y objetos por meses o el tiempo que necesites.`,
  },
  {
    id: 27,
    ask: `¿Pueden llevar cajas de cartón?`,
    answer: `Sí, transportamos cajas de cartón y otros materiales de embalaje. Recomendamos que las cajas estén bien cerradas y rotuladas.`,
  },
  {
    id: 28,
    ask: `¿Pueden llevar muebles envueltos en plástico burbuja?`,
    answer: `Sí, aceptamos muebles y objetos envueltos en plástico burbuja u otros materiales de protección. Solicitamos que los embalajes estén bien sujetos para evitar que se desprendan durante la carga y el transporte.`,
  },
  {
    id: 29,
    ask: `¿Pueden llevar muebles de vidrio?`,
    answer: `Sí, transportamos muebles y objetos de vidrio con el embalaje y las precauciones necesarias para evitar daños.`,
  },
  {
    id: 30,
    ask: `¿Pueden llevar objetos de arte y antigüedades?`,
    answer: `Sí, transportamos objetos de arte y antigüedades con el cuidado y embalaje adecuado para garantizar su protección.`,
  },
];
