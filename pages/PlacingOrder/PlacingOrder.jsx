import React, { useEffect, useState } from "react";
import PlacingOrdersCards from "../../components/PlacingOrdersCards/PlacingOrdersCards";
import PlacingOrdersPayments from "../../components/PlacingIrdersPayment/PlacingOrdersPayments";
import PlacingOrderPlate from "../PlacingOrderPlate/PlacingOrderPlate";
import PersonalDataOrder from "../../components/PersonalDataOrder/PersonalDataOrder";
const PlacingOrder = ({}) => {

    const [dataArray, setDataArray] = useState([])

    useEffect(() => {
        fetch('https://65c4ab97dae2304e92e312f4.mockapi.io/wonnaBuyGoods')
        .then((res) => {return res.json()})
        .then((json) => {setDataArray(json)})
    
      }, [])
    
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
            <PersonalDataOrder/>

        </div>
        </>
    )
}

export default PlacingOrder