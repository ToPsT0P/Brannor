const GoodsItem = ({item}) => {

    return(
        <div className="goodsPage_item">
            <div className="goodsPage_itemImg">
                <img src={`../../public/${item.imageURL}`} alt=""/>
            </div>
            <div className="goodsPage_itemText">
                <h3>{item.name}</h3>
                <div>
                    <h2>{item.price}Р</h2>
                </div>
            </div>
            <button className="goodsPage_button">В корзину</button>
        </div>
    )
}


export default GoodsItem