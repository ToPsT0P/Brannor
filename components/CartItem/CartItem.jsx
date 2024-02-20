import React from "react";
import itemPng from "../../public/pngCart.png"

const CartItem = ({item}) => {

    return(
        <>
            <div className="cartItem">
                        <img src={`../../public/${item.imageURL}`} alt="" />
                        <h3 className="cartNaming">{item.name}</h3>
                        <div>
                            <button className="cartNamingButton">-</button>
                            <p>1</p>
                            <button className="cartNamingButton">+</button>
                        </div>
                        <h3 className="cartPrice">{item.price}Р</h3>
                        <a href=""></a>
                    </div>
        </>
    )
}

export default CartItem