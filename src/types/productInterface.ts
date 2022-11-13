export interface IProductResponse {
  count: number;
  rows: IProduct[];
}

export interface IProduct {
  brandId: number;
  createdAt: Date;
  id: number;
  img: string;
  name: string;
  price: number;
  rating: number;
  typeId: number;
  updatedAt: Date;
}
