import React from "react";
import pngCart from "../../public/pngCart.png"


const PlacingOrderPlate = ({arrayItems}) => {

    return(

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
    )
}

export default PlacingOrderPlate