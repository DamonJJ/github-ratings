import { useState } from 'react'
import { MetaTags } from '@redwoodjs/web'
import SearchBar from 'src/components/SearchBar/SearchBar'
import Cards from '../../components/Cards/Cards'
import './HomePageStyles.scss'

const HomePage = () => {
  const [userRepos, setUserRepos] = useState([])

  const onSubmit = (data) => {
    fetch(`https://api.github.com/orgs/${data.user}/repos`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        const isValidArray = Array.isArray(json)
        const data = isValidArray ? json : [json]

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

  const hasAvailableRepos =
    userRepos.length > 0 && userRepos[0].message === undefined

  const repoNotAvailable = userRepos.length === 0

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <SearchBar onSubmit={onSubmit} name={'user'} placeholder={"Search Github Username"} validation={true} />

      {hasAvailableRepos ? (
        <Cards
          data={userRepos}
          errorMessage={"Looks like that's a private repo!"}
        />
      ) : repoNotAvailable ? (
        <div className="black-repos">Hey Search Those Repos!</div>
      ) : (
        <div className="black-repos">
          Sorry Bud That Repo is Private or Does Not Exist!
        </div>
      )}
    </>
  )
}

export default HomePage
