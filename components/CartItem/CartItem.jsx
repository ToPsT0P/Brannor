import React, { useEffect, useState } from "react";
import itemPng from "../../public/pngCart.png"

const CartItem = ({item, setFlag, flag, key}) => {

    const [userQuantity, setUserQuantity] = useState(() => item.quantity)

    const addingGoodsToServer = () => {
        setUserQuantity(userQuantity + 1)
        fetch(`https://65c4ab97dae2304e92e312f4.mockapi.io/wonnaBuyGoods/${item.id}`, {
            method: 'PUT', // or PATCH
            headers: {'content-type':'application/json'},
            body: JSON.stringify({quantity: userQuantity + 1})})
    }


    const deleteGoodsFromServer = (props) => {
        setUserQuantity(userQuantity - 1)
        if(userQuantity - 1 <= 0) {
            setFlag(!flag)
            fetch(`https://65c4ab97dae2304e92e312f4.mockapi.io/wonnaBuyGoods/${props.id}`, {
                method: 'DELETE',

            })

        }
        fetch(`https://65c4ab97dae2304e92e312f4.mockapi.io/wonnaBuyGoods/${props.id}`, {
            method: 'PUT', // or PATCH
            headers: {'content-type':'application/json'},
            body: JSON.stringify({quantity: userQuantity - 1})})
    }


    return(
        <>
            <div className="cartItem" id={key}>
                        <img src={`../../public/${item.imageURL}`} alt="" />
                        <h3 className="cartNaming">{item.name}</h3>
                        <div>
                            <button className="cartNamingButton" onClick={() => {deleteGoodsFromServer(item)}}>-</button>
                            <p>{userQuantity}</p>
                            <button className="cartNamingButton" onClick={() => {addingGoodsToServer()}}>+</button>
                        </div>
                        <h3 className="cartPrice">{userQuantity > 0 && item.price * userQuantity}Р</h3>
                        
                    </div>
        </>
    )
}

export default CartItem