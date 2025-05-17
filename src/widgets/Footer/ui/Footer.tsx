import styles from './Footer.module.scss';
import { instagram } from '@shared/assets/icons/';
import { SOCIAL_LINKS } from '@shared/config/constants';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo_block}>
        <h1 className={styles.logo}>This is logo</h1>
        <p className={styles.copyright}>© 2025 Все права защищены</p>
      </div>

      <div className={styles.soc_media}>
        <div className={styles.icons}>
          <a href={SOCIAL_LINKS.instagram} target="_blank">
            <img className={styles.icon} src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
