import { FC } from "react";
import { IProduct } from "../../../../types/productInterface";
import styles from "./clothingItem.module.scss";
import axios from "axios";

const ClothingItem: FC<{ clothing: IProduct }> = ({ clothing }) => {
  return (
    <div className={styles.container}>
      <img
        src={axios.defaults.baseURL + "/" + clothing.img}
        className={styles.image}
      ></img>
      <div className={styles.info}>
        <h2 className={styles.title}>{clothing.name}</h2>
        <p className={styles.description}></p>
        <p className={styles.price}>{clothing.price}</p>
      </div>
    </div>
  );
};

export default ClothingItem;
