import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/reducer";
import { isValid} from "./isValid";
import { Product } from "../reducers/reducer"

// Оголосіть інтерфейс для пропсів компонента
interface AddProductFormProps {
  // Додайте ваші пропси тут, якщо потрібно
}

const AddProductForm: React.FC<AddProductFormProps> = (props) => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState<string>('');
  const [newNumber, setNewNumber] = useState<string>('');

  const addNewProduct = () => {
    const newProd: Product = {
      name: newProduct,
      number: +newNumber,
      id: 'id' + Date.now(),
      isPurchased: false
    }
    if (isValid(newProd, addProduct(newProd))) {
      dispatch(addProduct(newProd))
      setNewProduct('');
      setNewNumber('');
    }
  }

  return (
    <div className="block">
      <label htmlFor="caption">Caption</label>
      <input id="caption" value={newProduct} onChange={(e) => setNewProduct(e.target.value)}></input>
      <label htmlFor="amount">Amount</label>
      <input type="number" id="amount" value={newNumber} onChange={(e) => setNewNumber(e.target.value)}></input>
      <button onClick={addNewProduct}>Add</button>
    </div>
  );
}

export default AddProductForm;
