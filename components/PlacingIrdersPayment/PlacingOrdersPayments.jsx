const PlacingOrdersPayments = () => {

    const choosingMethod = (props) => {
        let newEl = document.getElementById(props)
        if(newEl.classList.contains("activeDeliCard")){
            newEl.classList.remove("activeDeliCard")
            newEl.classList.add("notActiveDeliCard")
            
        }else{
            newEl.classList.add("activeDeliCard")
            newEl.classList.remove("notActiveDeliCard")


        }
    }

    return(
        
        <>
            <div className="notActiveDeliCard"  id="cardSite" style={{marginRight:"10px"}} onClick={(e) => {choosingMethod(e.currentTarget.id)}}>
                <h4>Картой на сайте</h4>
            </div>
            <div className="notActiveDeliCard"  id="whentaking" onClick={(e) => {choosingMethod(e.currentTarget.id)}}>
                <h4>Наличными при получении</h4>
            </div>
            <div className="notActiveDeliCard"  id="money" onClick={(e) => {choosingMethod(e.currentTarget.id)}} style={{marginRight:"10px"}}>
                <h4>Наложенный платеж</h4>
            </div>
            <div className="notActiveDeliCard" id="card" onClick={(e) => {choosingMethod(e.currentTarget.id)}}>
                <h4>Безналичная оплата</h4>
            </div>
        </>
    

    )
}

export default PlacingOrdersPayments