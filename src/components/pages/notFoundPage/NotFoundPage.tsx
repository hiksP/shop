import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage: FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <section className={styles.notFound}>
      <p className={styles.title}>{title}</p>
      <Link to="/" className={styles.home}>
        {subtitle || "Главная страница"}
      </Link>
    </section>
  );
};

export default NotFoundPage;
