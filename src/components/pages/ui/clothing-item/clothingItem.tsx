import { FC } from "react";
import { IProduct } from "../../../../types/productInterface";
import styles from "./clothingItem.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const ClothingItem: FC<{ clothing: IProduct }> = ({ clothing }) => {
  return (
    <div className={styles.container}>
      <Link to={`/product/${clothing.id}`}>
        <img
          src={axios.defaults.baseURL + "/" + clothing.img}
          className={styles.image}
        />
      </Link>
      <div className={styles.info}>
        <h2 className={styles.title}>{clothing.name}</h2>
        <p className={styles.description}></p>
        <p className={styles.price}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(clothing.price)}
        </p>
      </div>
    </div>
  );
};

export default ClothingItem;
