import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <h1>This is logo</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Наши работы</a>
          </li>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
