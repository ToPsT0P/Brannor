import pngCart from "../../public/pngCart.png"



const Plate = ({item}) => {
    return(

        <div>    
            <div className="PlacingOrdersPlate_topSide">
                <img src={`../../public/${item.imageURL}`}alt=""/>
                    <div className="PlacingOrdersPlate_text">
                    <p className="PlacingOrdersPlate_text_name">{item.name}</p>
                    <p>{item.quantity}</p>
                    <p>{`${item.price}Р`}</p>
                </div>
            </div>
            <hr className="borderItems"/>
        </div>    
    )
}

export default Plate