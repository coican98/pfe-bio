export default function Home() {
  return (
    <main className="container">
      <section className="card">
        <img
          className="avatar"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
          alt="Foto de perfil"
        />

        <h1>Nome do Aluno</h1>
        <p className="subtitle">Estudante de Engenharia / Faculdade</p>

        <div className="links">
          <a href="https://github.com/coican98" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/nslima" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:seuemail@faculdade.edu.br">E-mail</a>
        </div>

        <p className="about">
          Sou estudante de tecnologia, apaixonado por desenvolvimento, aprendizado e
          projetos que fazem diferença na comunidade acadêmica.
        </p>
      </section>
    </main>
  );
}
