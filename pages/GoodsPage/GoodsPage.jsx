import React from "react";
import GoodsItem from "../../components/GoodsItem/GoodsItem";

const GoodsPage = () => {

    return(
        <>
            <div className="goodsPage_wrapper">
                <h1>Вся продукция</h1>
                <div className="goodsPage_itemlist">
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                </div>
            </div>
        </>
    )
}

export default GoodsPage