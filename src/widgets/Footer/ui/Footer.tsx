import styles from './Footer.module.scss';
import { instagram } from '@shared/assets/icons/';
import { SOCIAL_LINKS } from '@shared/config/constants';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h1>This is logo</h1>
      <div className={styles.soc_media}>
        <p>Наши соц сети:</p>
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
