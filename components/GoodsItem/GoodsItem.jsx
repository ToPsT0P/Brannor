const GoodsItem = ({item, addingToBought}) => {

    const addingGoods = ({item}) => {

        addingToBought(item)
        let el = document.getElementById(`${item.name}id`)
        el.classList.add("activeCart")
    }
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
            <button id={`${item.name}id`} className="goodsPage_button" onClick={() => {addingGoods(item)}}>В корзину</button>
        </div>
    )
}


export default GoodsItem