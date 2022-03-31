import { Link, routes } from '@redwoodjs/router'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Ruggable's Finest Github Search!</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default DashboardLayout