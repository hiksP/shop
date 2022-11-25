import { FC } from "react";
import Layout from "../ui/layout/Layout";
import { ProductService } from "../../../services/ProductService";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../ui/loader/Loader";
import Button from "../ui/Button/Button";
import NotFoundPage from "../notFoundPage/NotFoundPage";
import Gallery from "./gallery/Gallery";
import styles from "./Product.module.scss";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import Price from "../ui/price/Price";

const Product: FC = () => {
  const params = useParams();

  const id = params.id;

  const { data: clothing, isLoading } = useQuery(["clothing", id], () =>
    ProductService.getProductById(id || "")
  );

  const { items } = useTypedSelector((state) => state.cart);

  const { removeFromCart, addToCart } = useActions();

  const isProductInCart = items.some((item) => item.id === Number(id));

  if (!clothing) {
    return <NotFoundPage title="Нет такого товара!"></NotFoundPage>;
  }

  // test
  const images = [
    "http://konfeksiyonv2.kurumsal.shop/uploads/urunler/large/tirt_2.jpg",
    "http://img.giglio.com/images/prodZoom/B08813.001_3.jpg",
  ];

  return (
    <Layout>
      {isLoading && <Loader></Loader>}
      <Gallery images={images}></Gallery>
      <h1 className={styles.name}>{clothing.name}</h1>
      <Price price={clothing.price}></Price>
      <Button
        onClick={() =>
          isProductInCart ? removeFromCart(Number(id)) : addToCart(clothing)
        }
      >
        {isProductInCart ? "This product already in the cart" : "Add to cart"}
      </Button>
    </Layout>
  );
};

export default Product;
