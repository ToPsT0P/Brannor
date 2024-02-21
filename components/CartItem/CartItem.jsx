import React from "react";
import itemPng from "../../public/pngCart.png"

const CartItem = ({item, changeData}) => {
    

    return(
        <>
            <div className="cartItem">
                        <img src={`../../public/${item.imageURL}`} alt="" />
                        <h3 className="cartNaming">{item.name}</h3>
                        <div>
                            <button className="cartNamingButton">-</button>
                            <p>{item.howmuch}</p>
                            <button className="cartNamingButton" onClick={() => changeDataS.howmuch++}>+</button>
                        </div>
                        <h3 className="cartPrice">{item.price}Р</h3>
                        <a href=""></a>
                    </div>
        </>
    )
}

export default CartItem