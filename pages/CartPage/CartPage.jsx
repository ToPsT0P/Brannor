import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import cartList_inputIMG from "../../public/CartList_inputIMG.png"

const CartPage = () => {

    const promo = ["123qwe","asdqwe"]
    const [userPromo, setUserPromo] = useState("")
    const [promoAnswer, setPromoAnswer] = useState(false)
    const [dataArray, setDataArray] = useState([
        {
            id: 1,
            imageURL: "rotor.png",
            name: "shit not shit ",
            price: "41000",
            quantity: 1,
        },
        {
            id: 1,
            imageURL: "rotor.png",
            name: "shit not shit ",
            price: "41000",
            quantity: 1,
        },
        {
            id: 2,
            imageURL: "addressImg.png",
            name: "some shit ", 
            price: "2222",
            quantity: 2,
        }

    ])

    const checkPromo = () => {
        let i = 0
        while(i < promo.length){
            if(userPromo == promo[i]){
                setPromoAnswer(true)
                return true
            }
            else{
                i++
            }
        }

    }
    
    const deleteArrayObj = (props) => {
        setDataArray(dataArray.filter(p => p !== props))
    }

    return(
        <div className="cartPage_wrapper">
            <div className="nameCart">
                <h1>Корзина</h1>
                <hr />
            </div>
            <div className="cartBottomSide">
                <div className="cartList">
                    {dataArray.map((item, i) => {return (
                    <CartItem key={i} 
                     item={item} 
                     setDataArray = {setDataArray} 
                     dataArray={dataArray} 
                     deleteArrayObj={deleteArrayObj}/>)})}
                     {dataArray.length == 0 && <h2>Товаров в корзине нет</h2>}

                    <div className="cartList_input">
                        <input placeholder="Введите промокод" onChange={(e) => {setUserPromo(e.target.value)}}/>
                        <img src={cartList_inputIMG} alt="" onClick={() => {checkPromo()}}/>
                    </div>
                </div>
                <div className="cartDetails">
                    <h2>Детали заказа</h2>
                    <div className="orderDetailsAll">
                        <p>Товары</p>
                        <div className="dottedLine"></div>
                        <div className="orderDetailsCounters" >
                            <p>{dataArray.length}</p>
                        </div>
                    </div>
                    <div className="orderDetailsAll">
                        <p>скидка</p>
                        <div className="dottedLine"></div>
                        <div className="orderDetailsCounters">
                           0₽ 
                        </div>
                    </div>
                    <div className="orderDetailsAll">
                        <p>промо</p>
                        <div className="dottedLine"></div>
                        <div className="orderDetailsCounters">
                            {promoAnswer ? <p>500₽</p> : <p>0₽</p>  } 
                        </div>
                    </div>
                    <div className="orderDetailsAll">
                        <b>Итого</b>
                        <div className="dottedLine"></div>
                        <div className="orderDetailsCounters">
                            1232₽ 
                        </div>
                    </div>
                    <button onClick={() => {window.location.assign("/profile/PlacingOrder")}}>Оформить заказ</button>
                </div>

            </div>
        </div>
    )
}

export default CartPage