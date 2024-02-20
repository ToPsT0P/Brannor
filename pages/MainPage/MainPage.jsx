import React, { useState } from "react";
import "./mainPageCSS.css"
import Carousel from "../../components/Carousel/Carousel";
import ThirdSlide from "../../components/Slides/ThirdSlide";
import SecondSlide from "../../components/Slides/SecondSlide";
import FirstSlide from "../../components/Slides/FirstSlide";

const MainPage = () => {
    
    return(
    <>
        <div className="wrapper">
            <FirstSlide/>
            <SecondSlide/>
            <ThirdSlide/>
        </div>


    </>
    )
}

export default MainPage