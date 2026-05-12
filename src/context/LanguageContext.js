"use client";
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  es: {
    nav: { 
      services: "Servicios", 
      destinations: "Destinos", 
      book: "RESERVAR" 
    },
    hero: { 
      title: "Explora El Salvador", 
      accent: "con Confianza",
      sub: "Rutas personalizadas, gastronomía Kosher y acompañamiento especializado en las comunidades judías de El Salvador.",
      btn: "COMENZAR AVENTURA",
      modal: {
        title: "¡Shalom! Bienvenidos",
        who: "Somos especialistas en conectar a viajeros con la herencia y belleza de El Salvador, garantizando los más altos estándares de observancia y seguridad.",
        contactTitle: "Hablemos de tu próximo viaje",
        whatsapp: "Escríbenos por WhatsApp",
        email: "Enviar un correo"
      }
    },
    services: {
      title: "Hospitalidad con Propósito",
      list: [
        { 
          title: "Logística Completa", 
          desc: "Traslados privados desde el aeropuerto y transporte con chofer a disposición para moverte con total seguridad." 
        },
        { 
          title: "Gastronomía Kosher", 
          desc: "Experiencias de preparación y disfrute de comida típica salvadoreña con ingredientes 100% Kosher." 
        },
        { 
          title: "Hospedaje de Red", 
          desc: "Alojamientos curados en montañas, playas y ciudad, adaptados a tus necesidades y observancia." 
        },
        { 
          title: "Comunidad y Fe", 
          desc: "Acompañamiento a sinagogas y diversas comunidades judías ortodoxas presentes en el país." 
        }
      ]
    },
    destinations: {
      title: "Destinos Destacados",
      subtitle: "Mosaicos de Nuestra Tierra",
      items: [
        { 
          name: "Suchitoto", 
          tag: "HISTORIA",
          description: "La capital cultural de El Salvador. Pasea por sus calles empedradas y descubre la arquitectura colonial preservada, con una vista espectacular al Lago Suchitlán y una atmósfera de paz inigualable."
        },
        { 
          name: "El Tunco", 
          tag: "SURF",
          description: "El corazón de Surf City. Famoso mundialmente por sus olas perfectas, atardeceres de ensueño y una vibrante vida turística que combina la aventura con el descanso frente al Océano Pacífico."
        },
        { 
          name: "Ataco", 
          tag: "CULTURA",
          description: "Un pintoresco pueblo en la Ruta de las Flores. Sus murales coloridos, el clima fresco de montaña y el aroma del mejor café salvadoreño lo convierten en un destino mágico y lleno de vida."
        },
        { 
          name: "Santa Ana", 
          tag: "AVENTURA",
          description: "Tierra de volcanes y majestuosidad. Desde su imponente Catedral gótica hasta la cima del Volcán de Santa Ana, este destino ofrece una mezcla perfecta de patrimonio histórico y desafíos naturales."
        },
        { 
          name: "Conchagua", 
          tag: "AVENTURA",
          description: "El Mirador Espíritu de la Montaña, ubicado en la cima del Volcán de Conchagua, es famoso por ofrecer una de las vistas panorámicas más espectaculares del Golfo de Fonseca, abarcando islas de El Salvador, Honduras y Nicaragua. Un destino ideal para el ecoturismo y el senderismo."
        },
        { 
          name: "SurfCity", 
          tag: "AVENTURA",
          description: "Surf City en La Libertad, El Salvador, es un destino de clase mundial que combina olas de clase mundial, infraestructura moderna y una vibrante cultura playera. Destaca por sus playas icónicas (El Tunco, El Zonte), alta oferta gastronómica en el malecón, y el parque de aventuras Walter Thilo Deininger, ideal para surf, trekking, avistamiento de aves y vida nocturna."
        },
        { 
          name: "La Puerta del Diablo", 
          tag: "AVENTURA",
          description: "El Parque Natural Puerta del Diablo, situado en Planes de Renderos, Panchimalco (a 12 km de San Salvador), es un mirador icónico de formaciones rocosas imponentes con impresionantes vistas de 360°. Ofrece clima fresco, senderismo, rappel, canopy y una vista panorámica del Volcán de San Salvador, el Lago de Ilopango y el Océano Pacifico."
        }
      ]
    }
  },
  en: {
    nav: { 
      services: "Services", 
      destinations: "Destinations", 
      book: "BOOK NOW" 
    },
    hero: { 
      title: "Explore El Salvador", 
      accent: "with Confidence",
      sub: "Customized routes, Kosher gastronomy, and specialized guidance within the Jewish communities of El Salvador.",
      btn: "START ADVENTURE",
      modal: {
        title: "Shalom! Welcome",
        who: "We specialize in connecting travelers with the heritage and beauty of El Salvador, ensuring the highest standards of observance and safety.",
        contactTitle: "Let's plan your next trip",
        whatsapp: "Message us on WhatsApp",
        email: "Send an Email"
      }
    },
    services: {
      title: "Hospitality with Purpose",
      list: [
        { 
          title: "Full Logistics", 
          desc: "Private airport transfers and chauffeured transportation available for safe and secure travel." 
        },
        { 
          title: "Kosher Gastronomy", 
          desc: "Experiences in preparing and enjoying typical Salvadoran food with 100% Kosher ingredients." 
        },
        { 
          title: "Network Lodging", 
          desc: "Curated accommodations in mountains, beaches, and the city, tailored to your needs and observance." 
        },
        { 
          title: "Community & Faith", 
          desc: "Guidance to synagogues and various orthodox Jewish communities present in the country." 
        }
      ]
    },
    destinations: {
      title: "Featured Destinations",
      subtitle: "Mosaics of Our Land",
      items: [
        { 
          name: "Suchitoto", 
          tag: "HISTORY",
          description: "The cultural capital of El Salvador. Walk through its cobblestone streets and discover preserved colonial architecture, with a spectacular view of Lake Suchitlán and an atmosphere of unparalleled peace."
        },
        { 
          name: "El Tunco", 
          tag: "SURF",
          description: "The heart of Surf City. World-famous for its perfect waves, dreamlike sunsets, and a vibrant tourist life that combines adventure with relaxation in front of the Pacific Ocean."
        },
        { 
          name: "Ataco", 
          tag: "CULTURE",
          description: "A picturesque town on the Flowers Route. Its colorful murals, cool mountain climate, and the aroma of the best Salvadoran coffee make it a magical destination full of life."
        },
        { 
          name: "Santa Ana", 
          tag: "ADVENTURE",
          description: "Land of volcanoes and majesty. From its imposing Gothic Cathedral to the summit of the Santa Ana Volcano, this destination offers a perfect blend of historical heritage and natural challenges."
        },
        { 
          name: "Conchagua", 
          tag: "ADVENTURE",
          description: "The Espíritu de la Montaña viewpoint, located atop the Conchagua Volcano, is renowned for offering spectacular panoramic views of the Gulf of Fonseca, encompassing islands of El Salvador, Honduras, and Nicaragua. An ideal destination for ecotourism and hiking."
        },
        { 
          name: "SurfCity", 
          tag: "ADVENTURE",
          description: "Surf City in La Libertad, El Salvador, is a world-class destination that combines world-class waves, modern infrastructure, and a vibrant beach culture. It boasts iconic beaches (El Tunco, El Zonte), a wide variety of restaurants along the boardwalk, and the Walter Thilo Deininger Adventure Park, ideal for surfing, trekking, birdwatching, and nightlife."
        },
        { 
          name: "La Puerta del Diablo", 
          tag: "ADVENTURE",
          description: "The Puerta del Diablo Natural Park, located in Planes de Renderos, Panchimalco (12 km from San Salvador), is an iconic viewpoint with imposing rock formations and breathtaking 360° views. It offers a cool climate, hiking, rappelling, canopy tours, and panoramic views of the San Salvador Volcano, Lake Ilopango, and the Pacific Ocean."
        }
      ]
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
};