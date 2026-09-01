export default function Home() {
  return (
    <main className="container">
      <section className="card">
        <img
          className="avatar"
          src="https://th.bing.com/th/id/OIP.6aX8JU7EvD1lIrKdSg3tJgAAAA?w=108&h=108&c=1&bgcl=260b43&r=0&o=7&dpr=1.3&pid=ImgRC&rm=3"
          alt="Foto de perfil"
        />

        <h1>Nathan Lima</h1>
        <p className="subtitle">Desenvolvedor Fullstack PHP</p>
        <p className='subtitle'>Estudante de Sistemas para Internet</p>

        <div className="links">
          <a href="https://github.com/coican98" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/nslima" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:nathan.000000861202@unicap.br">E-mail</a>
        </div>

        <p className="about">
          Mais de 10 anos de experiência com TI, atuando atualmente como Desenvolvedor Fullstack PHP com foco em Laravel e MySQL.
        </p>
      </section>
    </main>
  );
}
