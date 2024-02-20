import React, { useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";
import png1 from "../../public/pngCart.png"

const CartPage = () => {

    const dataArray = [
        {
            imageURL: "rotor.png",
            name: "shit not shit ",
            price: "41000"
        }
    ]
    return(
        <div className="cartPage_wrapper">
            <div className="nameCart">
                <h1>Корзина</h1>
                <hr />
            </div>
            <div className="cartBottomSide">
                <div className="cartList">
                    <CartItem item={dataArray[0]}/>
                    <CartItem item={dataArray[0]}/>
                    <CartItem item={dataArray[0]}/>
                    <CartItem item={dataArray[0]}/>
                    <CartItem item={dataArray[0]}/>
                    <CartItem item={dataArray[0]}/>
                    <CartItem item={dataArray[0]}/>
                    <CartItem item={dataArray[0]}/>
                    <CartItem item={dataArray[0]}/>
                    <CartItem item={dataArray[0]}/>
                </div>
                <div className="cartDetails">
                    <h2>Детали заказа</h2>
                    <div style={{display:"flex", flexWrap:"nowrap"}}>
                        <p style={{width:"59px"}}>Товары</p>
                        <div style={{width:"70%", height:"20px", marginTop:"-7px" , borderBottom:"3px dotted white"}}></div>
                    </div>
                    <div style={{display:"flex", flexWrap:"nowrap"}}>
                        <p style={{width:"59px"}}>скидка</p>
                        <div style={{width:"70%", height:"20px", marginTop:"-7px" , borderBottom:"3px dotted white"}}></div>
                        
                    </div>
                    <div style={{display:"flex", flexWrap:"nowrap"}}>
                        <p style={{width:"59px"}}>промо</p>
                        <div style={{width:"70%", height:"20px", marginTop:"-7px" , borderBottom:"3px dotted white"}}></div>
                    </div>
                    <div style={{display:"flex", flexWrap:"nowrap"}}>
                        <b style={{width:"59px"}}>Итого</b>
                        <div style={{width:"70%", height:"20px", marginTop:"-7px" , borderBottom:"3px dotted white"}}></div>
                    </div>
                    <button>Оформить заказ</button>
                </div>

            </div>
        </div>
    )
}

export default CartPage