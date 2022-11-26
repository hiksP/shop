import { FC } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import NotFoundPage from "../notFoundPage/NotFoundPage";
import Button from "../ui/Button/Button";
import CartElement from "../ui/cartElement/CartElement";
import Layout from "../ui/layout/Layout";
import styles from "./Cart.module.scss";

const Cart: FC = () => {
  const { items } = useTypedSelector((state) => state.cart);

  const { removeFromCart } = useActions();

  return (
    <Layout>
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
          <NotFoundPage
            title="Корзина пуста"
            subtitle="Может быть добавим что-то в корзину?"
          ></NotFoundPage>
        )}
      </ul>
      <Button>Checkout</Button>
    </Layout>
  );
};

export default Cart;
