export const siteContent = {
  brand: {
    name: "El Salvador Jewish Tours",
    logo: "/logo.svg", // Asegúrate de que esté en public/
    slogan: "Tu herencia, nuestra guía.",
  },
  
  // Datos de contacto
  contact: {
    whatsapp: "https://wa.me/50300000000", // Reemplaza con el número real del cliente
    instagram: "https://instagram.com/elsalvadorjewishtours",
    email: "info@elsalvadorjewishtours.com",
  },

  // Sección Principal (Hero)
  hero: {
    title: "Explora El Salvador con Confianza",
    subtitle: "Rutas personalizadas, gastronomía Kosher y acompañamiento especializado en las comunidades judías de El Salvador.",
    cta: "COMENZAR AVENTURA",
  },

  // Los 4 Pilares (Basado en lo que me contaste)
  services: [
    {
      title: "Logística Completa",
      description: "Traslados desde el aeropuerto y transporte privado con chofer a disposición para moverte libremente.",
      icon: "Car", // Nombre del icono en Lucide
    },
    {
      title: "Gastronomía Kosher",
      description: "Experiencia de preparar y disfrutar comida típica salvadoreña con ingredientes 100% Kosher.",
      icon: "UtensilsCrossed",
    },
    {
      title: "Hospedaje de Red",
      description: "Alojamiento curado en montañas, playas y ciudad, adaptado a tus necesidades y gustos.",
      icon: "Hotel",
    },
    {
      title: "Comunidad y Fe",
      description: "Acompañamiento a sinagogas y diversas comunidades judías ortodoxas en el país.",
      icon: "Compass",
    }
  ],

  // Destinos para la Galería
  destinations: {
    title: "Destinos Destacados",
    items: [
      { 
        name: "Playas del Pacífico", 
        desc: "Surf y descanso en hoteles de primer nivel." 
      },
      { 
        name: "Ruta de las Flores", 
        desc: "Pueblos coloniales, montañas y clima fresco." 
      },
      { 
        name: "San Salvador Histórico", 
        desc: "Centro histórico, sinagogas y vida urbana." 
      }
    ]
  }
};