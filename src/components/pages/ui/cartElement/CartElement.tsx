import { ActionCreatorWithPayload } from "@reduxjs/toolkit/dist/createAction";
import { FC, PropsWithChildren } from "react";
import { IProduct } from "../../../../types/productInterface";
import Price from "../price/Price";

import styles from "./CartElement.module.scss";

const CartElement: FC<
  PropsWithChildren<{
    product: IProduct;
    onDelete: ActionCreatorWithPayload<number, "cart/removeFromCart">;
  }>
> = ({ product, onDelete }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <li className={styles.name}>{product.name}</li>
          <Price price={product.price}></Price>
        </div>
        <button onClick={() => onDelete(product.id)}>
          <span className={styles.remove}>Delete</span>
        </button>
      </div>
    </>
  );
};

export default CartElement;
