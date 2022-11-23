import { FC } from "react";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage: FC<{ title: string }> = ({ title }) => {
  return (
    <section className={styles.notFound}>
      <p className={styles.text}>{title}</p>
    </section>
  );
};

export default NotFoundPage;
