import { FC } from "react";
import { IProduct } from "../../../../types/productInterface";

const ClothingItem: FC<{ clothing: IProduct }> = ({ clothing }) => {
  return <div>{clothing.name}</div>;
};

export default ClothingItem;
