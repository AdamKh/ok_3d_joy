import { NavLinks } from '../components/';
import { useState } from 'react';
import styles from './Header.module.scss';

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`${styles.burger} ${open ? styles.active : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`${styles.mobileNav} ${open ? styles.active : ''}`}>
        <NavLinks setOpen={setOpen} />
      </nav>
    </>
  );
};

export default BurgerMenu;
