import styles from './styles.module.css';
import personalInfo from '../../assets/images/menu/personalInfo.svg';
import settings from '../../assets/images/menu/settings.svg';
import notifications from '../../assets/images/menu/notifications.svg';
import documents from '../../assets/images/menu/article.svg';
import resources from '../../assets/images/menu/resourses.svg';
import logout from '../../assets/images/menu/logout.svg';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/actions';

export default function Menu({
  isMenuOpen,
  setOpenGetOut,
}: {
  isMenuOpen: boolean;
  setOpenGetOut: (openGetOut: boolean) => void;
}) {
  const navigate = useNavigate();
  const { openPopup } = useActions();

  return (
    <ul className={`${styles.menu} ${isMenuOpen ? styles.menu_active : ''}`}>
      <nav className={styles.menu__nav}>
        <li
          className={styles.menu__item}
          onClick={() => navigate('edit-profile-info')}
        >
          <img src={personalInfo} alt="" />
          <span className={styles.menu__text}>Личная информация</span>
        </li>
        <li className={styles.menu__item}
        onClick={() => navigate('settings')}
        >
          <img src={settings} alt="" />
          <span className={styles.menu__text}>Настройки аккаунта</span>
        </li>
        <li className={styles.menu__item}>
          <img src={notifications} alt="" />
          <span className={styles.menu__text}>Уведомления</span>
        </li>
        <li onClick={() => navigate('/documents')} className={styles.menu__item}>
          <img src={documents} alt="" />
          <span className={styles.menu__text}>Документы</span>
        </li>
        <li className={styles.menu__item} onClick={() => navigate('/resources')}>
          <img src={resources} alt="" />
          <span className={styles.menu__text}>Ресурсы</span>
        </li>
      </nav>
      <li
        className={styles.menu__item}
        onClick={() => {
          setOpenGetOut(true);
          openPopup();
        }}
      >
        <img src={logout} alt="" />
        <span className={styles.menu__text}>Выйти из аккаунта</span>
      </li>
    </ul>
  );
}
