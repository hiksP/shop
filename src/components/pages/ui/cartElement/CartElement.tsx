import { ActionCreatorWithPayload } from "@reduxjs/toolkit/dist/createAction";
import { FC, PropsWithChildren } from "react";
import { IProduct } from "../../../../types/productInterface";

import styles from "./CartElement.module.scss";

const CartElement: FC<
  PropsWithChildren<{
    product: IProduct;
    onDelete: ActionCreatorWithPayload<number, "cart/removeFromCart">;
  }>
> = ({ product, onDelete }) => {
  return (
    <>
      <li className={styles.name}>{product.name}</li>
      <button onClick={() => onDelete(product.id)}>
        <span className={styles.remove}>Delete</span>
      </button>
    </>
  );
};

export default CartElement;
