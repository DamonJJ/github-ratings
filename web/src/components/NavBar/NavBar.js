import { Link, routes } from '@redwoodjs/router'
import './NavBarStyles.scss'

const NavBar = ({title}) => {
  return (
    <header className='header'>
      <h1>
        <Link to={routes.home()}>{title}</Link>
      </h1>
    </header>
  )
}

export default NavBar
