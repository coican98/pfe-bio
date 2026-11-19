import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Meu Portfólio",
  description: "Currículo e portfólio feito com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer>© 2026 - Nathan Lima</footer>
      </body>
    </html>
  );
}

