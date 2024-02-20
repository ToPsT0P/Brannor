import LeftSidePanelProf from "../../components/LeftSidePanelProf/LeftSidePanelProf"
import addressImg from "../../public/addressImg.png"

const DeliverPage = () => {
    

    return(
        <>
        <div className="profilePage_Wrapper">
            <LeftSidePanelProf/>
            <div className="profileDelivery_Wrapper">
                <h1>Адрес доставки</h1>
                <div className="profileDelivery_addressList">
                    <img src={addressImg} alt="" />
                    <h1>Список адресов пуст</h1>
                    <div className="profileDelivery_addressList_textNbutton">
                        <p>Сохраните ваш адрес для быстрого оформления заказа</p>
                        <button>Добавить адрес</button>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DeliverPage