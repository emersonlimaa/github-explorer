import { RepositoryItem } from './RepositoryItem'
import "../styles/repositories.scss"
import { useState, useEffect } from "react"

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList(){
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/emersonlimaa/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios GitHub</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        })}
      </ul>
    </section>
  )
}