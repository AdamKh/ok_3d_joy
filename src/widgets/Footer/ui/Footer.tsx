import styles from './Footer.module.scss';
import { instagram } from '@shared/assets/icons/';
import { SOCIAL_LINKS } from '@shared/config/constants';

function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>This is logo</h1>
      <div className={styles.contacts}>
        <a href={SOCIAL_LINKS.instagram} target="_blank">
          <img className={styles.icon} src={instagram} alt="instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
