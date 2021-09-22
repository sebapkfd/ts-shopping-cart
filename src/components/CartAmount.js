import { useSelector } from "react-redux"

const CartAmount = () => {
    const amount = useSelector(state => state.cart.reduce((acc, cv) => {
        if (state.length === 0) {
            return 0
        }
        return acc + cv.amount
    }, 0))

    return (
        <p>{(amount > 10) ? '10+' : amount}</p>
    )

}

export default CartAmount;