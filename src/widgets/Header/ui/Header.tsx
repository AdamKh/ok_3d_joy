import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>This is logo</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="home">Главная</Link>
          </li>
          <li>
            <Link to="portfolio">Наши работы</Link>
          </li>
          <li>
            <Link to="services">Услуги</Link>
          </li>
          <li>
            <Link to="contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
