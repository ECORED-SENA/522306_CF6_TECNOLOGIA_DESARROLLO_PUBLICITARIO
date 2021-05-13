export default {
  global: {
    componenteFormativo: 'Plan de Endomarketing',
    descripcionCurso:
      '“El marketing, llevado al interior de la empresa, marketing de adentro hacia más adentro de la organización”, de esta forma se podría definir el endomarketing; sin embargo, en el presente componente, se ahondará desde el punto de vista de la comunicación interna, tratando de enfocarse en las relaciones que pueden existir entre los diferentes actores de una empresa.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Endomarketing',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La comunicación interna',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué es la comunicación interna?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Los públicos internos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Mensajes en la comunicación interna',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Rutas de la información interna',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Errores y obstáculos de la comunicación interna',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan de comunicación interna',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Medios para la comunicación interna',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      //{
      //  nombreRuta: 'complementario',
      //  icono: 'far fa-folder-open',
      //  titulo: 'Material complementario',
      //},
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Astrid Lili Puerta',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario de Buga',
        regional: 'Regional valle',
      },
      {
        nombre: 'Javier Enrique Santana',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Michael Andrés Cortés Caro',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Mauricio Jiménez Fajardo',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Manuel Alejandro Garzón Cárdenas',
        cargo: 'Experto temático',
        centro: 'Deutsche Gesellschaft für',
        regional: 'Internationale Zusammenarbeit (GIZ)',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Rodríguez',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Castelló, A. Pino, C. (2019). De la Publicidad a la Comunicación Persuasiva. Esic Editorial. ',
    },
    {
      referencia:
        'Cuenca, J. y Verazzi, L. (2018). Guía Fundamental de la Comunicación Interna. Editorial UOC.',
    },
    {
      referencia:
        'Davara, A. M. (1992). Estrategias de Comunicación en Marketing. Edit. DOSSAT S.A.',
    },
    {
      referencia:
        'Gan, F. y Triginé, J. (2012). Comunicación Interna. Ediciones Díaz de Santos.',
    },
    {
      referencia:
        'Téllez, J. C. (2017). ¿Qué es eso llamado “Endomarketing”? Revista Semana.',
      link:
        'https://www.dinero.com/opinion/columnistas/articulo/que-es-eso-llamado-endomarketing-por-juan-sanclemente/243285',
    },
    {
      referencia:
        'Timoteo, A. J. (2013). Manejo de la Comunicación Organizacional. Ediciones Díaz de Santos.',
    },
    {
      referencia: 'Vila, F. (2013). Comunicación Estratégica. Editorial UOC.',
    },
  ],
  glosario: [
    {
      termino: 'Afiche (poster)',
      significado:
        'Es un tipo de aviso que comunica acerca de un evento futuro y que por lo general tiene un tamaño considerable y un concepto creativo para que sea apreciado por el público objetivo.',
    },
    {
      termino: 'Banner',
      significado:
        'Elemento con una imagen o animaciones que se ubica en sitios web, en la mayoría de los casos es con publicidad.',
    },
    {
      termino: 'Comunicación integral',
      significado:
        'Abarca todo el proceso de comunicación externa (clientes, proveedores, instituciones, etc.) e interna (trabajadores y colaboradores).',
    },
    {
      termino: 'Comunicado de prensa',
      significado:
        'Informe que reúne los datos fundamentales sobre un hecho noticiable de actualidad y que se envía a los medios de comunicación con el fin de que estos difundan la información.',
    },
    {
      termino: 'Folleto (brochure)',
      significado:
        'Elemento impreso de una o pocas hojas que sirve como instrumento divulgativo o publicitario.',
    },
    {
      termino: 'Relaciones públicas',
      significado:
        'Técnica de comunicación que evalúa las actitudes de los diferentes públicos, identifica las políticas y los procedimientos de una organización y ejecuta programas de comunicación dirigidos a públicos tanto internos como externos.',
    },
    {
      termino: 'Revista',
      significado:
        'Publicación ilustrada que se entrega en forma periódica, sobre uno o varios temas y con un público definido.',
    },
    {
      termino: 'Sitio web',
      significado:
        'Agrupación de varias páginas web relacionadas entre sí, a las cuales se ingresa desde un mismo dominio y están ligadas a una misma URL.que se representa según su altura y su anchura y no su profundidad.',
    },
  ],
  complementario: [
    {
      texto: 'Texto ejemplo”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
}
