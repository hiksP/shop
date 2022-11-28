import { FC, useEffect } from "react";
import { ProductService } from "../../services/ProductService";
import styles from "./Home.module.scss";
import { useQuery } from "@tanstack/react-query";
import ClothingItem from "./ui/clothing-item/ClothingItem";
import Layout from "./ui/layout/Layout";
import Loader from "./ui/loader/Loader";
import { AuthService } from "../../services/AuthService";

const Home: FC = () => {
  const {
    data: clothing,
    error,
    isLoading,
  } = useQuery(["clothing"], () => ProductService.getProducts());

  return (
    <Layout title={"Shop the collection"}>
      <div className={styles.bg}>
        {isLoading ? (
          <Loader></Loader>
        ) : clothing?.length ? (
          clothing.map((clothing) => (
            <ClothingItem clothing={clothing} key={clothing.id} />
          ))
        ) : (
          <div>No products</div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
