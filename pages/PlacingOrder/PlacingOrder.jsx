import React from "react";
import PlacingOrdersCards from "../../components/PlacingOrdersCards/PlacingOrdersCards";
import PlacingOrdersPayments from "../../components/PlacingIrdersPayment/PlacingOrdersPayments";
import PlacingOrderPlate from "../PlacingOrderPlate/PlacingOrderPlate";
const PlacingOrder = ({dataArray, setDataArray}) => {

    return(
        <>
        <div className="PlacingOrder_wrapper">
            <h1>Оформление заказа</h1>
            <hr />
                <PlacingOrdersCards/>
                <PlacingOrderPlate dataArray={dataArray}/>
            <h3>Способ оплаты</h3>
            <div className="PlacingOrdersPayment">
                <PlacingOrdersPayments/>
            </div>

        </div>
        </>
    )
}

export default PlacingOrder