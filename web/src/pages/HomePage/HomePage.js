import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import './HomePageStyles.scss'

const HomePage = () => {
  const [userRepos, setUserRepos] = useState([])

  const onSubmit = (data) => {
    fetch(`https://api.github.com/orgs/${data.user}/repos`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        const data = json

        const sortedReposByStars = data.sort((a, b) =>
          a.stargazers_count < b.stargazers_count
            ? 1
            : a.stargazers_count === b.stargazers_count
            ? a.size < b.size
              ? 1
              : -1
            : -1
        )

        setUserRepos(sortedReposByStars)
      })
  }
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
