import React, { useEffect, useState } from "react";
import { FC } from "react";
import { ProductService } from "../../services/ProductService";

const Home: FC = () => {
  const [Clothing, setClothing] = useState([]);
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

  return <div></div>;
};

export default Home;
