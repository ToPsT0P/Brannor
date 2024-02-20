import React, { useState } from "react";
import imgNothing from "../../public/addressImg.png"
import LeftSidePanelProf from "../../components/LeftSidePanelProf/LeftSidePanelProf";
import CompanyCreate from "../../components/CompanyCreate/CompanyCreate";
const CompanyPage = () => {


    const [addedCompany, setAddedCompany] = useState("")
    const [isModal, setIsModal] = useState(false)

    const makingModal = () => {

        setIsModal(!isModal)
        const divForModal = document.getElementById("isModalDiv")
        if(isModal){
            divForModal.classList.add("activeModal")
        }
        else{
            divForModal.classList.remove("activeModal")
        }

    }

    return(
        <div id="isModalDiv" className="activeModal profilePage_Wrapper">
                {isModal && <CompanyCreate setIsModal = {setIsModal}/>}
            <LeftSidePanelProf/>
            <div className="profileDelivery_Wrapper">
                <h1>Добавить компанию</h1>
                <div className="profileDelivery_addressList">
                    <img src={imgNothing} alt="" />
                    <h1>Компаний пока нет</h1>
                    <div className="profileDelivery_addressList_textNbutton">
                        <p>Сохраните реквизиты организации для быстрого выбора при оформлении заказа</p>
                        <button onClick={() => setIsModal(true)}>Добавить компанию</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyPage