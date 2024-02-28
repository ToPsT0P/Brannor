import React, { useState } from "react";
import pngCart from "../../public/pngCart.png"
import Plate from "./Plate";


const PlacingOrderPlate = ({dataArray}) => {

    return(

        <div className="PlacingOrdersPlate">
                    <h2>Детали Заказа</h2>
                    <div className="PlacingOrdersPlate_wrapper">
                            {dataArray.map((item, i) => {return (
                                <Plate item={item}/>
                                
                            )})}

    

                    </div>

                    <button className="OrderCompleteButton">Оформить заказ</button>

                </div>
    )
}

export default PlacingOrderPlate