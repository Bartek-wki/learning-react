import styles from './NavBar.module.scss';
import NavLinks from '../NavLinks/NavLinks';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.iconWrapper}>
        <Link to="/" className={styles.icon + ' fa fa-tasks'}></Link>
      </div>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          <NavLinks href="/" page='Home' />
          <NavLinks href="/favorite" page='Favorite' />
          <NavLinks href="/about" page='About' />
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;