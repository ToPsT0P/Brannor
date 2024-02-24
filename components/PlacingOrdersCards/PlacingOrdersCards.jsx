import React from "react";

const PlacingOrdersCards = () => {

    return(
            <>
                <h3>Способ получения</h3><br/>
                <div className="placingOrder_rowingCards">
                    <div className="placingOrder_mainBlock">
                        <div className="placingOrder_deliveryType activeDeliveryCard">
                            <h5>Доставка Курьером по Москве</h5>
                            <p>Бесплатно / до 3 дней</p>
                        </div>
                        <div className="placingOrder_deliveryType">
                            <h5>Доставка ТК СДЭК</h5>
                            <p>от 500 ₽ / до 2 дней  </p>
                        </div>
                        <div style={{marginTop:"14px"}} className="placingOrder_deliveryType">
                            <h5>Доставка ТК ПЭК</h5>
                            <p>от 350 ₽ / до 6 дней  </p>
                        </div>
                        <div style={{marginTop:"14px"}} className="placingOrder_deliveryType">
                            <h5>Другие ТК</h5>
                            <p>500 ₽ / до 6 дней  </p>
                        </div>
                    </div>
                    <div className="placingOrder_deliveryType fullheight">
                        <h5>Самовывоз</h5>
                        <p>Бесплатно / до 3 дней</p>
                    </div>

                </div>
        </> 
    )
}

export default PlacingOrdersCards