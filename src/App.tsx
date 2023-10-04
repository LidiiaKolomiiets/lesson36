import React from "react";
import Products from './components/Product';
import AddProduct from "./components/AddProduct";

const App: React.FC = () => {
  return (
    <div>
      <AddProduct />
      <Products />
    </div>
  );
};

export default App;
