import React from "react";
import itemPng from "../../public/pngCart.png"

const CartItem = ({item, setDataArray, dataArray, deleteArrayObj}) => {
    

    const addQuantity = (item) => {
        const newElArray = [...dataArray]
        setDataArray(newElArray, item.quantity++)
    }

    const deleteQuantity = (item) => {
        const newElArray = [...dataArray]
        setDataArray(newElArray, item.quantity--)
    }


    return(
        <>
            <div className="cartItem">
                        <img src={`../../public/${item.imageURL}`} alt="" />
                        <h3 className="cartNaming">{item.name}</h3>
                        <div>
                            <button className="cartNamingButton" onClick={() => deleteQuantity(item)}>-</button>
                            <p>{item.quantity}</p>
                            <button className="cartNamingButton" onClick={() => addQuantity(item)}>+</button>
                        </div>
                        <h3 className="cartPrice">{item.quantity > 0 ? item.price * item.quantity : deleteArrayObj(item)}Р</h3>
                        <a href=""></a>
                    </div>
        </>
    )
}

export default CartItem