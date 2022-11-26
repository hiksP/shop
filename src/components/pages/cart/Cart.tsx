import { FC } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Button from "../ui/Button/Button";
import CartElement from "../ui/cartElement/CartElement";
import Layout from "../ui/layout/Layout";
import styles from "./Cart.module.scss";

const Cart: FC = () => {
  const { items } = useTypedSelector((state) => state.cart);

  const { removeFromCart } = useActions();

  return (
    <Layout title="Cart">
      <ul className={styles.cart}>
        {items.length ? (
          items.map((product) => {
            return (
              <CartElement
                key={product.id}
                onDelete={removeFromCart}
                product={product}
              ></CartElement>
            );
          })
        ) : (
          <p>Корзина пуста!</p>
        )}
      </ul>
      <Button>Checkout</Button>
    </Layout>
  );
};

export default Cart;
