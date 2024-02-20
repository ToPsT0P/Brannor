import React from "react";
import orderImg from "../../public/NoOneOrder.png"
import LeftSidePanelProf from "../../components/LeftSidePanelProf/LeftSidePanelProf";

const YourOrder = () => {

    return(
        <>
        <div className="profilePage_Wrapper">
            <LeftSidePanelProf/>
            <div className="profilePageOrders_Wrapper">
                <h1>Заказы</h1>
                <div className="profilePage_Orders">
                    <img src={orderImg} alt="" />
                    <h2>Заказов не найдено</h2>
                </div>

            </div>
        </div>
        </>
    )
}

export default YourOrder