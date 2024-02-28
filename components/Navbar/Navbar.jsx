import React, { useState } from "react";
import "./NavbarStyle.css"
import searchPNG from "../../public/Vector.png"
import framePng from "../../public/frame.png"
import Userfront, { LogoutButton } from "@userfront/toolkit";
import userPng from "../../public/userPng.png"
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'


const Navbar = () => {
      

    return(
        <>         
         <div className="mainField">
            <img src={framePng} alt="" onClick={() => window.location.assign("/")} className="logo"  style={{marginRight: "25px"}}/>
            <div className="inputDiv">
                <input type="text" placeholder="Введите название товара..." />
                <img src={searchPNG} alt="" />
            </div>
            <a href="">Компания</a>
            <a onClick={() => window.location.assign("/goods")}>Продукция</a>
            <a href="">Поддержка</a>
            <a href="">Где купить</a>
            {!Userfront.tokens.accessToken &&  <button className="buttonLogin" onClick={() => window.location.assign("/login")}>Вход</button>}
            {Userfront.tokens.accessToken && <img className="userPngStyle" onClick={() => window.location.assign("/profile")} src={userPng}/>}
        
        </div>
        
        </>
    )
}

export default Navbar