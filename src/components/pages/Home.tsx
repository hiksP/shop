import React, { useEffect, useState } from "react";
import { FC } from "react";
import { ProductService } from "../../services/ProductService";
import { IProduct } from "../../types/productInterface";
import styles from "./Home.module.scss";

const Home: FC = () => {
  const [clothing, setClothing] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const products = await ProductService.getProducts();
        setClothing(products);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, []);

  return (
    <div className={styles.bg}>
      {isLoading ? (
        <div className="text-blue-400 text-2xl">Loading..</div>
      ) : clothing.length ? (
        clothing.map((clothing) => <div key={clothing.id}>{clothing.name}</div>)
      ) : (
        <div>No products</div>
      )}
    </div>
  );
};

export default Home;
