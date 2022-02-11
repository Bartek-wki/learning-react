import styles from './NavLinks.module.scss';
import { Link, NavLink } from 'react-router-dom';


const NavLinks = ({ href, page }) => {
  return (
    <li className={styles.links}>
      <NavLink className={({ isActive }) => isActive && styles.linkActive} to={href}>{page}</NavLink>
    </li>
  )
}

export default NavLinks
