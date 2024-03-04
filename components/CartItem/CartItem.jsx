import React, { useEffect, useState } from "react";
import itemPng from "../../public/pngCart.png"

const CartItem = ({item, setDataArray, dataArray}) => {
    
    const [quantity, setQuantity] = useState(item.quantity)



    return(
        <>
            <div className="cartItem">
                        <img src={`../../public/${item.imageURL}`} alt="" />
                        <h3 className="cartNaming">{item.name}</h3>
                        <div>
                            <button className="cartNamingButton" onClick={() => setQuantity(quantity - 1)}>-</button>
                            <p>{quantity}</p>
                            <button className="cartNamingButton" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <h3 className="cartPrice">{quantity > 0 && item.price * quantity}Р</h3>
                        
                    </div>
        </>
    )
}

export default CartItem