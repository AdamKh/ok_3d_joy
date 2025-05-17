import styles from './Header.module.scss';
import NavLinks from '../components/NavLinks.tsx';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>This is logo</h1>
      <nav className={styles.nav}>
        <NavLinks styles={styles} />
      </nav>
    </header>
  );
};

export default Header;
