import { RepoCard } from "../../components/RepoCard";

import { data } from "../../data";
import { GithubHeader } from "../../components/GithubHeader";

const Github: React.FC = (): JSX.Element => {
  return(
    <article className="github">
      <section className="github__wrapper">
				<GithubHeader />

        <article className="github__content">
          {data.repos.map(repo => (
            <RepoCard
              key={repo.id}
              title={repo.title}
              repo={repo.repo}
              online={repo.online}
              description={repo.description}
              technologies={repo.technologies}
            />
          ))}
        </article>
      </section>

      <a target="_blank" rel="noreferrer" href={data.reposUrl} className="github__cta">
        See All
      </a>
    </article>
  )
}

export { Github }