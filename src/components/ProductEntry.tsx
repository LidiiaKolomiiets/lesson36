import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProduct, editProduct } from "../reducers/reducer";
import deleteIcon from './images/delete.png';
import editIcon from './images/edit.png';

import { isValid } from "./isValid";

interface ProductEntryProps {
  id: string;
  name: string;
  number: number;
}

const ProductEntry: React.FC<ProductEntryProps> = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = React.useState<string>(name);
  const [editedNumber, setEditedNumber] = React.useState<number>(number);
  const [isPurchased, setIsPurchased] = useState(false);

  const removeCurrentProduct = () => {
    dispatch(removeProduct({ id }));
  };

  const saveEditedProduct = () => {
    const editedProd = {
      id,
      name: editedName,
      number: editedNumber,
      isPurchased,
    }
    if (isValid(editedProd, editProduct(editedProd))) {
      setIsEditing(false);
      dispatch(editProduct(editedProd));
    }
  };

  return (
    <tbody>
      {isEditing ? (
        <tr>
          <td>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              value={editedNumber.toString()} 
              onChange={(e) => setEditedNumber(parseInt(e.target.value, 10))} 
            />
          </td>
          <td>
            <button onClick={saveEditedProduct}>Save</button>
          </td>
        </tr>
      ) : (
        <tr>
          <td className={`table-item ${isPurchased ? 'purchased' : ''}`}>{name}</td>
          <td className={`table-item ${isPurchased ? 'purchased' : ''}`}>{number}</td>
          <td className="table-item">
            <button onClick={() => setIsEditing(true)}>
              <img className="edit-icon" src={editIcon} alt="Edit" />
            </button>
          </td>
          <td className="table-item">
            <button onClick={removeCurrentProduct}>
              <img className="delete-icon" src={deleteIcon} alt="Delete" />
            </button>
          </td>
          <td className="table-item">
            <input
              type="checkbox"
              checked={isPurchased}
              onChange={() => setIsPurchased(!isPurchased)}
            />
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default ProductEntry;
