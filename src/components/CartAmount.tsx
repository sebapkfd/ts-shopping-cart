import React from "react";
import { useSelector } from "react-redux";

const CartAmount = () => {
    const amount = useSelector((state: any) => state.cart.reduce((acc: any, cv: any) => (state.length === 0) ? 0 : acc + cv.amount, 0))

    return (
        <p>{(amount > 10) ? '10+' : amount}</p>
    )
}

export default CartAmount;