import './CardsStyles.scss'

const Cards = ({data, errorMessage}) => {
  return (
    <section className="cards">
      {data.message ? (
        <div className="black-repos">{errorMessage}</div>
      ) : (
        data.map((repo) => {
          return (
            <div className="card" key={repo.id}>
              <div className="card-container" key={repo.id}>
                <div>Stars: {repo.stargazers_count}</div>
                <div>Clone: {repo.clone_url}</div>
                <div>Forks: {repo.forks}</div>
                <div>Visibility: {repo.visibility}</div>
              </div>
            </div>
          )
        })
      )}
    </section>
  )
}

export default Cards
