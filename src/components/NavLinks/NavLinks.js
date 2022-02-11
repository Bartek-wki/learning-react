import styles from './NavLinks.module.scss';

const NavLinks = ({ href, page }) => {
  return (
    <li className={styles.links}>
      <a href={href}>
        {page}
      </a>
    </li>
  )
}

export default NavLinks
