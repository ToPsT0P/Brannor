import React, { useState } from "react";
import "./profilePage.css"
import Userfront from "@userfront/toolkit/react";
import validateEmail from "./masks.js"
import validatePhone from "./phoneMask.js";
import LeftSidePanelProf from "../../components/LeftSidePanelProf/LeftSidePanelProf.jsx";


const ProfilePage = () => {


    const [changingData, setChangingData] = useState(false)
    const [nameSaving, setNameSaving] = useState("")
    const [lastNameSaving, setLastNameSaving] = useState("")
    const [phoneNumberSaving, setPhoneNumberSaving] = useState("")
    const [emailSaving, setEmailSaving] = useState("")
    const [passwordSaving, setPasswordSaving] = useState("")
    const [tryPasswordSaving, setTryPasswordSaving] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")

    Userfront.init("9ny6vgyb")

    const savingUserData = () => {
        if(nameSaving && phoneNumberSaving && validateEmail(emailSaving) == true && validatePhone(phoneNumberSaving) == true){
            setEmail(emailSaving)
            setLastName(lastNameSaving)
            setPhoneNumber(phoneNumberSaving)
            setName(nameSaving)
            if(passwordSaving && passwordSaving == tryPasswordSaving && passwordSaving){
                setChangingData(false)
            }
        }
    }

    return(
        <div className="profilePage_Wrapper">
           <LeftSidePanelProf/>
            <div className="profilePage_cells">
                <h1>Профиль</h1>
                {changingData == false && <>
                <div className="profilePage_cell_upper_default">
                    <a onClick={() => setChangingData(true)}>Изменить</a>
                    <h2>Личные данные</h2>
                    <div className="personalData_cell">
                        <div style={{color:"#FFFFFFB2"}}>
                            <p>Имя</p>
                            <p>Фамилия</p>
                        </div>
                        <div style={{marginLeft:"-190px", color:"white"}}>
                            <p>{name}</p>
                            <p>{lastName}</p>
                        </div>
                    </div>

                </div>
                <div className="profilePage_cell_upper_default">
                    <a onClick={() => setChangingData(true)}>Изменить</a>
                    <h2>Контактный телефон</h2>
                    <p>{phoneNumber}</p>
                </div>
                <div className="profilePage_cell_lower_default">
                    <a onClick={() => setChangingData(true)}>Изменить</a>
                    <h2>Почта</h2>
                    <p>{email}</p>
                </div>
                <div className="profilePage_cell_lower_default">
                    <a onClick={() => setChangingData(true)}>Изменить</a>
                    <h2>Пароль</h2>
                    <p>******</p>
                </div>
                </>
                }
                {changingData == true && <>
                    <div className="profilePage_cell_upper_active">
                        <h2>Личные данные</h2>
                        <div className="input_box_lastName">
                            <label>Фамилия</label>
                            <input value={lastNameSaving} maxLength={15} onChange={(e) => setLastNameSaving(e.target.value)} type="text" />   
                        </div>
                        <div className="input_box_firstName">
                            <label>Имя*</label>
                            <input value={nameSaving} maxLength={15} onChange={(e) => setNameSaving(e.target.value)} type="text" />
                        </div>

                        <button onClick={() => savingUserData()}>Сохранить</button>
                        <a onClick={() => setChangingData(false)}> Отменить</a>
                    </div>
                    <div className="profilePage_cell_upper_active">
                        <div className="second_cell_password">
                            <h2 style={{marginLeft:"45px"}}>Пароль</h2>
                            <label style={{width:"112px"}}>Новый пароль</label>
                            <input value={passwordSaving} type="text" onChange={(e) => setPasswordSaving(e.target.value)}/>
                        </div>
                        <div className="second_cell_password">
                            <label style={{width:"163px"}}>Подтвердите пароль</label>
                            <input value={tryPasswordSaving} type="text" onChange={(e) => setTryPasswordSaving(e.target.value)} />
                        </div>
                        <button onClick={() => savingUserData()}>Сохранить</button>
                        <a onClick={() => setChangingData(false)}> Отменить</a>
                    </div>
                    <div className="profilePage_cell_lower_active">
                        <h2>Почта</h2>
                        <label>E-mail*</label>
                        <input type="text" value={emailSaving} onChange={(e) => setEmailSaving(e.target.value)}/><br />
                        <button onClick={() => savingUserData()}>Сохранить</button>
                        <a onClick={() => setChangingData(false)}> Отменить</a>
                    </div>
                    <div className="profilePage_cell_lower_active">
                        <h2>Контактный телефон</h2>
                        <label style={{width:"67px"}}>Телефон*</label>
                        <input value={phoneNumberSaving} type="text" id="phone" placeholder="+7(000)000-00-00" onChange={(e) => setPhoneNumberSaving(e.target.value)} /><br />
                        <button onClick={() => savingUserData()}>Сохранить</button>
                        <a onClick={() => setChangingData(false)}> Отменить</a>                       
                    </div>
                </>}
            </div>

        </div>
    )
}

export default ProfilePage