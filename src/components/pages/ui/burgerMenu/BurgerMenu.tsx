import { FC } from "react";
import styles from "./BurgerMenu.module.scss";
import { Link } from "react-router-dom";

const BurgerMenu: FC = () => {
  return (
    <section className={styles.menu}>
      <div>Logo Here</div>
      <input
        id={styles.checkBox}
        value="menu-toggle"
        className={styles.toggle}
        type="checkbox"
      />
      <label className={styles.container} htmlFor="menu-toggle">
        <div className={styles.button}></div>
      </label>
      <ul className={styles.list}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/cart" className={styles.link}>
          Cart
        </Link>
      </ul>
    </section>
  );
};

export default BurgerMenu;
