import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Olá, eu sou o Nathan Lima 👋</h1>
      <h2>Desenvolvedor de Software com foco em Back-end</h2>
      <p>
        Trabalho com PHP e Laravel, criando e mantendo sistemas, APIs REST e
        integrações entre sistemas. Atualmente estou estudando Java, Spring Boot
        e React na faculdade. Este site é o meu currículo e portfólio.
      </p>
      <Link href="/projetos" className="botao">Ver projetos</Link>
      <a href="https://github.com/coican98" target="_blank" className="botao">GitHub</a>
      <a href="https://www.linkedin.com/in/nslima/" target="_blank" className="botao">LinkedIn</a>
    </div>
  );
}
