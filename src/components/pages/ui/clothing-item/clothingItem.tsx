import { FC } from "react";
import { IProduct } from "../../../../types/productInterface";
import styles from "./clothingItem.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Price from "../price/Price";

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
        <Price price={clothing.price}></Price>
      </div>
    </div>
  );
};

export default ClothingItem;
