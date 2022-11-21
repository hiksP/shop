import { FC } from "react";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage: FC = () => {
  return (
    <section className={styles.notFound}>
      <p className={styles.text}>Nothing found</p>
    </section>
  );
};

export default NotFoundPage;
