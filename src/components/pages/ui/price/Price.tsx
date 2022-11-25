import { FC, PropsWithChildren } from "react";
import styles from "./Price.module.scss";

const Price: FC<PropsWithChildren<{ price: number }>> = ({ price }) => {
  return (
    <p className={styles.price}>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(price)}
    </p>
  );
};

export default Price;
