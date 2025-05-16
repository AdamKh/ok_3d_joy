import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>This is logo</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="Home">Главная</Link>
          </li>
          <li>
            <Link to="Portfolio">Наши работы</Link>
          </li>
          <li>
            <Link to="Services">Услуги</Link>
          </li>
          <li>
            <Link to="Contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
