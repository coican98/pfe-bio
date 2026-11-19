import Card from "../../components/Card";

const USUARIO = "coican98";
const REPOS_EXIBIR = [
  "muonline-site",
  "banking-api",
  "burh-desafio-backend",
  "BasicMenu",
];

export default async function Projetos() {
  const res = await fetch(
    `https://api.github.com/users/${USUARIO}/repos?sort=updated&per_page=100`,
    { next: { revalidate: 3600 } }
  );
  const todosRepos = res.ok ? await res.json() : [];
  const repos = todosRepos.filter((repo) => REPOS_EXIBIR.includes(repo.name));

  return (
    <div>
      <h1>Projetos Desenvolvidos</h1>
      <p>Lista carregada da API do GitHub.</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {repos.length === 0 && <p>Nenhum projeto encontrado.</p>}
        {repos.map((repo) => (
          <Card key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
