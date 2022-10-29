import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to='/'
          >
            Home Page
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to='/task'
          >
            Task
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
