import React from "react";
import PlacingOrdersCards from "../../components/PlacingOrdersCards/PlacingOrdersCards";
import PlacingOrdersPayments from "../../components/PlacingIrdersPayment/PlacingOrdersPayments";
import pngCart from "../../public/pngCart.png"
const PlacingOrder = () => {

    return(
        <>
        <div className="PlacingOrder_wrapper">
            <h1>Оформление заказа</h1>
            <hr />
                <PlacingOrdersCards/>


                
                <div className="PlacingOrdersPlate">
                    <h2>Детали Заказа</h2>
                    <div className="PlacingOrdersPlate_wrapper">
                        <div className="PlacingOrdersPlate_topSide">
                            <img src={pngCart} alt=""/>
                            <div className="PlacingOrdersPlate_text">
                                <p className="PlacingOrdersPlate_text_name">Передные диски для honda civic</p>
                                <p>1</p>
                                <p>233333P</p>

                            </div>
                        </div>

                        <div>
                            ЦЕНЫ
                        </div>
    

                    </div>


                </div>
            <h3>Способ оплаты</h3>
            <div className="PlacingOrdersPayment">
                <PlacingOrdersPayments/>
            </div>

        </div>
        </>
    )
}

export default PlacingOrder