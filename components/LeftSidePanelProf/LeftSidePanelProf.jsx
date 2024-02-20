import Userfront from "@userfront/toolkit"
import { Link } from "react-router-dom"
import DeliverPage from "../../pages/DeliveryPage/DeliveryPage"

const LeftSidePanelProf = () => {


    return(
        <>
         <div className="profilePage_leftPanel">
                <Link to={'/profile/'}><p>Профиль</p></Link>
                <Link to={'/profile/delivery/'}><p style={{marginTop:"-15px"}}>Адрес доставки</p></Link>
                <Link to={'/profile/yourOrder'}><p style={{marginTop:"-15px"}}>Заказы</p></Link>
                <Link to={'/profile/addCompany'}><p style={{marginTop:"-15px"}}>Добавить компанию</p></Link>
                <Link to={'/profile/cart'}><p style={{marginTop:"-15px"}}>Корзина</p></Link><hr style={{width:"90%", marginLeft:"15px", marginTop:"40px"}} />
                <p onClick={ Userfront.logout}>Выйти</p>
            </div>
        </>
    )
}

export default LeftSidePanelProf