import { Link } from 'react-router-dom';
import type { Dispatch, SetStateAction } from 'react';
import styles from '../ui/Header.module.scss';

interface NavLinksProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ setOpen }) => {
  const handleClick = () => {
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <ul className={styles.navLinks}>
      <li className={styles.navLink}>
        <Link to="home" onClick={handleClick}>
          Главная
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link to="portfolio" onClick={handleClick}>
          Наши работы
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link to="services" onClick={handleClick}>
          Услуги
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link to="contacts" onClick={handleClick}>
          Контакты
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
