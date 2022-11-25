import { FC } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Layout from "../ui/layout/Layout";

const Cart: FC = () => {
  const { items } = useTypedSelector((state) => state.cart);

  const { removeFromCart } = useActions();

  return <Layout></Layout>;
};

export default Cart;
