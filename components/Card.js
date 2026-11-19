import styles from "./Card.module.css";

export default function Card({ repo }) {
  return (
    <div className={styles.card}>
      <h3>{repo.name}</h3>
      <p>{repo.description || "Sem descrição."}</p>
      <p className={styles.info}>
        {repo.language || "—"} | ⭐ {repo.stargazers_count}
      </p>
      <a href={repo.html_url} target="_blank">
        Ver no GitHub
      </a>
    </div>
  );
}

