import { FC, PropsWithChildren } from "react";
import Navigation from "../Navigation/Navigation";

import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({
  children,
  title,
}) => {
  return (
    <div className={styles.layout}>
      <Navigation></Navigation>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};

export default Layout;
