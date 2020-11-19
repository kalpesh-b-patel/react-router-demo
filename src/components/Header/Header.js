import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='nav__brand'>
          <span>KP</span>
        </div>

        <ul className='nav__items'>
          <li>
            <NavLink exact to='/' className='nav-item' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='nav-item' activeClassName='active'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/users' className='nav-item' activeClassName='active'>
              Persons
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/loadable'
              className='nav-item'
              activeClassName='active'
            >
              Loadable
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
