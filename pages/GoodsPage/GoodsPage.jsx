import React, { useEffect } from "react";
import GoodsItem from "../../components/GoodsItem/GoodsItem";

const GoodsPage = ({allDataArray, setUserLimit, setUserPage, userLimit}) => {

    const makingWidth = () => {
        let windowWidth = window.innerWidth
        let remainder = windowWidth % 333
        const quantityItems = (windowWidth - remainder) / 333;
        return quantityItems
    }

    setUserLimit(makingWidth);

    setInterval(() => {
        console.log(allDataArray)
    }, 1000);
    return(
        <>
            <div className="goodsPage_wrapper">
                <h1>Вся продукция</h1>
                <div className="goodsPage_itemlist">
                    {allDataArray.map((i, item) => {
                        <GoodsItem/>
                    })}
                </div>
            </div>
        </>
    )
}

export default GoodsPage