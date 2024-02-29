import React, { useState } from "react";
import choosedIMG from "../../public/choosedIMG.png"

const PlacingOrdersCards = () => {

    const [choosed, setChoosed] = useState()

    const choosingMethod = (props) => {
        let newEl = document.getElementById(props)
        setChoosed(props)
        if(newEl.classList.contains("activeDeliveryCard")){
            newEl.classList.remove("activeDeliveryCard")
            
        }else{
            newEl.classList.add("activeDeliveryCard")

        }
    }
    return(
            <>
                <h3>Способ получения</h3><br/>
                <div className="placingOrder_rowingCards">
                    <div className="placingOrder_mainBlock">
                        <div id="carry" className="placingOrder_deliveryType" onClick={(e) => {choosingMethod(e.currentTarget.id)}}>
                            <div className="placingOrder_deliveryType_in">
                                <h5>Доставка Курьером по Москве</h5>
                                <img src={choosedIMG} alt=""/>
                            </div>
                            <p>Бесплатно / до 3 дней</p>
                        </div>
                        <div id="SDEK" className="placingOrder_deliveryType" onClick={(e) => {choosingMethod(e.currentTarget.id)}}>
                            <div className="placingOrder_deliveryType_in">
                                <h5>Доставка ТК СДЭК</h5>
                                <img src={choosedIMG} alt=""/>
                            </div>
                            <p>от 500 ₽ / до 2 дней  </p>
                        </div>
                        <div id="TKPEK" style={{marginTop:"14px"}} className="placingOrder_deliveryType" onClick={(e) => {choosingMethod(e.currentTarget.id)}}>
                            <div className="placingOrder_deliveryType_in">
                                <h5>Доставка ТК ПЭК</h5>
                                <img src={choosedIMG} alt=""/>
                            </div>
                            <p>от 350 ₽ / до 6 дней  </p>
                        </div>
                        <div id="other" style={{marginTop:"14px"}} className="placingOrder_deliveryType" onClick={(e) => {choosingMethod(e.currentTarget.id)}}>
                            <div className="placingOrder_deliveryType_in">
                                <h5>Другие ТК</h5>
                                <img src={choosedIMG} alt=""/>
                            </div>
                            <p>500 ₽ / до 6 дней  </p>
                        </div>
                    </div>
                    <div id="myself" className="placingOrder_deliveryType fullheight" onClick={(e) => {choosingMethod(e.currentTarget.id)}}>
                        <div className="placingOrder_deliveryType_in">
                            <h5>Самовывоз</h5>
                            <img src={choosedIMG} alt=""/>
                        </div>
                        <p>Бесплатно / до 3 дней</p>
                    </div>

                </div>
        </> 
    )
}

export default PlacingOrdersCards