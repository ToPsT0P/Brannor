import React from "react";
import png from "../../public/123qwe.png"

const FirstSlide = () => {

    return(
        <div className="main_firstSlide">
        <div className="leftSide_slide">
            <h1><span style={{color: "red"}}>Brannor</span>  – продукт новой эпохи</h1>
            
            <p className="leftSide_text">
            Лучшие фрикционные материалы для тормозных колодок и дисков, 
            основанные на самых передовых стандартах современной 
            автомобильной промышленности. 
            <br />
                <span style={{fontSize: "18px"}}>Цены, Качество, Доставка... </span><br />
                Такого вы не найдете нигде
            </p>
            <button className="buttonAboutCompany" style={{marginLeft:"7vh"}}>Узнать больше о компании</button>
        </div>
        <div className="rightSide_slide">
            <img src={png}/>
        </div>
    </div>
    )
}

export default FirstSlide