import './globals.css';

export const metadata = {
  title: 'Bio - Nome do Aluno',
  description: 'Página de bio para apresentação acadêmica',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
