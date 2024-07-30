// import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.css';
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function ContentPage() {

  return (
    <section className={styles.section}>
      <div className={styles.mainPage}>Контент</div>
      <Navbar />
    </section>
  );
}
