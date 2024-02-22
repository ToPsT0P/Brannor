import React from "react";
import PlacingOrdersCards from "../../components/PlacingOrdersCards/PlacingOrdersCards";

const PlacingOrder = () => {

    return(
        <>
        <div className="PlacingOrder_wrapper">
            <h1>Оформление заказа</h1>
            <hr />
            <PlacingOrdersCards/>
            <h3>Способ оплаты</h3>
            <div className="PlacingOrdersPayment">
                <div style={{marginRight:"10px"}}>
                    <h4>Картой на сайте</h4>
                </div>
                <div>
                    <h4>Наличными при получении</h4>
                </div>
                <div style={{marginRight:"10px"}}>
                    <h4>Наложенный платеж</h4>
                </div>
                <div>
                    <h4>Безналичная оплата</h4>
                </div>
            </div>

        </div>
        </>
    )
}

export default PlacingOrder