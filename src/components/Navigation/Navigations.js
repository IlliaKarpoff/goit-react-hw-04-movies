import { NavLink } from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import s from './Navigations.module.css';

export default function Navigations() {
  return (
    <nav className={s.nav}>
      <NavLink className={s.link} activeClassName={s.activeLink} to="/" exact>
        <ImHome />
      </NavLink>
      <NavLink className={s.link} activeClassName={s.activeLink} to="/movies">
        SearchMovie
      </NavLink>
    </nav>
  );
}
