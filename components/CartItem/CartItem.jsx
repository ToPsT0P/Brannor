import React, { useEffect, useState } from "react";
import itemPng from "../../public/pngCart.png"

const CartItem = ({item, setDataArray, dataArray, setCheckbox, checkbox}) => {
    
    const [quantity, setQuantity] = useState(item.quantity)
    

    // const addQuantity = (item) => {
    //     fetch(`https://65c4ab97dae2304e92e312f4.mockapi.io/wonnaBuyGoods/${item.id}`, {
    //     method: 'PUT', // or PATCH
    //     headers: {'content-type':'application/json'},
    //     body: JSON.stringify({quantity: 22})
    //     })

    //     setCheckbox(!checkbox)
    // }

    // const deleteQuantity = (item) => {

    //     fetch(`https://65c4ab97dae2304e92e312f4.mockapi.io/wonnaBuyGoods/${item.id}`, {
    //     method: 'PUT', // or PATCH
    //     headers: {'content-type':'application/json'},
    //     body: JSON.stringify({quantity: quantity})
    //     })

    //     setCheckbox(!checkbox)
    // }


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