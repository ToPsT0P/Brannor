import React from "react";
import textDecorate1 from "../../public/textDecorate1.png"

const ThirdSlide = () => {

    return(
        <div className="thirdSlide">
                <div className="thirdSlide_leftSide">
                    <h2 className="naming" style={{paddingTop: "10px", position:"relative", zIndex: 1000}}>КОЛОДКИ</h2>
                    <p className="thirdSlide_leftSide" style={{position:"relative", zIndex: 1000}}>Колодки Brannor это комфортное и безопасное вождение</p>
                    <button className="buttonAboutCompany btnFix">Подробнее</button>

                    <div className="thirdSlide_descriptionText">
                        
                        <p  className="thirdSlide_descriptionBlock">
                            <img src={textDecorate1} className="thirdSlide_descriptionDecoration" alt="" /><br />
                            Увеличенный срок службы тормозных дисков и колодок</p>
                        <p  className="thirdSlide_descriptionBlock">
                            <img src={textDecorate1} className="thirdSlide_descriptionDecoration" alt="" /><br />
                            Увеличенная эффективность работы тормозных колодок</p>
                        <p  className="thirdSlide_descriptionBlock">
                            <img src={textDecorate1} className="thirdSlide_descriptionDecoration" alt="" /><br />
                            Стабильные характеристики в широком диапазоне температур</p>
                        <p  className="thirdSlide_descriptionBlock">
                            <img src={textDecorate1} className="thirdSlide_descriptionDecoration" alt="" /><br />                                    
                            Увеличение плавности торможения без потери эффективности</p>
                    </div>
                </div>
            </div>
    )
}

export default ThirdSlide