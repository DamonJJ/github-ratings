import Card from './Card'
import './CardsStyles.scss'

const Cards = ({ information, errorMessage }) => {
  return (
    <section className="cards">
      {information.message ? (
        <div>{errorMessage}</div>
      ) : (
        information.map((info, index, information) => {
          const hasMostStars = index === 0
          const hasLeastStars = index === information.length -1
          return <Card data={info} mostStars={hasMostStars} leastStars={hasLeastStars} />
        })
      )}
    </section>
  )
}

export default Cards
