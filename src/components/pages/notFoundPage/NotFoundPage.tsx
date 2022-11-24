import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage: FC<{ title: string }> = ({ title }) => {
  return (
    <section className={styles.notFound}>
      <p className={styles.title}>{title}</p>
      <Link to="/" className={styles.home}>
        Главная страница
      </Link>
    </section>
  );
};

export default NotFoundPage;
