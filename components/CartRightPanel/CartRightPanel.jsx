const CartRightPanel = ({dataArray, promoAnswer}) => {

    return(

        <>
            <h2>Детали заказа</h2>
                    <div className="orderDetailsAll">
                        <p>Товары</p>
                        <div className="dottedLine"></div>
                        <div className="orderDetailsCounters" >
                            <p>{dataArray.length}</p>
                        </div>
                    </div>
                    <div className="orderDetailsAll">
                        <p>скидка</p>
                        <div className="dottedLine"></div>
                        <div className="orderDetailsCounters">
                           0₽ 
                        </div>
                    </div>
                    <div className="orderDetailsAll">
                        <p>промо</p>
                        <div className="dottedLine"></div>
                        <div className="orderDetailsCounters">
                            {promoAnswer ? <p>500₽</p> : <p>0₽</p>  } 
                        </div>
                    </div>
                    <div className="orderDetailsAll">
                        <b>Итого</b>
                        <div className="dottedLine"></div>
                        <div className="orderDetailsCounters">
                            1232₽ 
                        </div>
                    </div>
                    <button onClick={() => {window.location.assign("/profile/PlacingOrder")}}>Оформить заказ</button>

        </>
    )
}

export default CartRightPanel