import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation: FC = () => {
  return (
    <section className={styles.menu}>
      <nav className={styles.nav}>
        <li className={styles.list}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/cart" className={styles.link}>
            Cart
          </Link>
        </li>
      </nav>
    </section>
  );
};

export default Navigation;
