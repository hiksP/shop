import { FC } from "react";
import Layout from "../ui/layout/Layout";
import { ProductService } from "../../../services/ProductService";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../ui/loader/Loader";
import Button from "../ui/Button/Button";

const Product: FC = () => {
  const params = useParams();

  const { data: clothing, isLoading } = useQuery(["clothing", params.id], () =>
    ProductService.getProductById(params.id || "")
  );

  return (
    <Layout>
      {isLoading && <Loader></Loader>}
      {clothing?.name}
      <Button>Add to cart</Button>
    </Layout>
  );
};

export default Product;
