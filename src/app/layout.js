import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/site-content";
// Importa tu proveedor de idioma (ajusta la ruta si es necesario)
import { LanguageProvider } from "@/context/LanguageContext"; 

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif" 
});

export const metadata = {
  title: siteContent.brand.name,
  description: siteContent.hero.subtitle,
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {/* El Provider debe envolver a children para que useLanguage() no sea undefined */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}