import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src='https://i.pinimg.com/736x/8a/0f/67/8a0f67aa49792aa4e54757f7260bdc82.jpg'
        alt="Logo do Site de DadosdeCelular"
        className={styles.logo}
      />
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/"> Registrar </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/produtos">celulares</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/Home"> Home </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/alterar"> Alterar </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
