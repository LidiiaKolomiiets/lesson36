import React from "react";
import { useSelector } from "react-redux";
import ProductEntry from "./ProductEntry";
import './productStyle.css';
import { Product } from "../reducers/reducer";

const Products: React.FC = () => {
  const products = useSelector((state: { products: Product[] }) => state.products);

  return (
    <table className="table">
        {products.map(product => (
          <ProductEntry key={product.id} {...product} />
        ))}
    </table>
  );
};

export default Products;
