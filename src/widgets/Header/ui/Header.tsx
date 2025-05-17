import styles from './Header.module.scss';
import { NavLinks } from '../components/';
import BurgerMenu from './BurgerMenu.tsx';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>This is logo</h1>
      <nav className={styles.nav}>
        <NavLinks />
      </nav>

      <BurgerMenu />
    </header>
  );
};

export default Header;
