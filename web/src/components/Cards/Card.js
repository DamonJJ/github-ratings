import './CardsStyles.scss'

const Card = ({ data, mostStars, leastStars }) => {
  return (
    <div className="card" key={data.id}>
      <div className="card-container" key={data.id}>
        {mostStars && <h1 className='most-stars'>*Highest Stars*</h1>}
        {leastStars && <h1 className='least-stars'>*Least Stars*</h1>}
        {Object.entries(data).map(([key, value]) => {
          return (
            <>
              <h2 className="card-label">{key}:</h2>
              <p className="card-description">{value}</p>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Card
