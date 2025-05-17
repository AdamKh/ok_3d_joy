import { Link } from 'react-router-dom';
// import styles from './NavLinks.module.scss';

interface NavLinksProps {
  styles?: { [key: string]: string };
}

const NavLinks: React.FC<NavLinksProps> = ({ styles = {} }) => {
  return (
    <ul className={styles.navLinks}>
      <li className={styles.navLink}>
        <Link to="home">Главная</Link>
      </li>
      <li className={styles.navLink}>
        <Link to="portfolio">Наши работы</Link>
      </li>
      <li className={styles.navLink}>
        <Link to="services">Услуги</Link>
      </li>
      <li className={styles.navLink}>
        <Link to="contacts">Контакты</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
