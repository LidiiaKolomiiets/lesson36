import { PayloadAction } from "../../node_modules/@reduxjs/toolkit/dist/createAction"

export function isValid(newProd: Product, action: PayloadAction<Product>) {
    const pattern = /^[a-zA-Zа-яА-ЯёЁ]+$/
    if (newProd.number <= 1000 && pattern.test(newProd.name)) {
        return action
    }
    else if (!pattern.test(newProd.name)) {
        alert("Введіть коректні дані в поле Caption")
    }
    else {
        alert("Введіть коректні дані в поле Amount(число не більше 1000)")
    }
}

export interface Product {
    number: number;
    name: string;
    id: string;
    isPurchased: boolean;
}