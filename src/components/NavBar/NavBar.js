import styles from './NavBar.module.scss';
import NavLinks from '../NavLinks/NavLinks';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.iconWrapper}>
        <a href="/" className={styles.icon + ' fa fa-tasks'}>
        </a>
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