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

const Product: FC = () => {
  const params = useParams();

  const { data: clothing, isLoading } = useQuery(["clothing", params.id], () =>
    ProductService.getProductById(params.id || "")
  );

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
      <p className={styles.price}>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(clothing.price)}
      </p>
      <Button>Add to cart</Button>
    </Layout>
  );
};

export default Product;
