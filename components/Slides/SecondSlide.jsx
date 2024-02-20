import React from "react";
import rotorsPng from "../../public/rotor.png"

const SecondSlide = () => {

    return(

        <div className="main_secondSlide">
                <div className="leftSideSecond_slide">
                    <h2 className="naming">ТОВАРЫ</h2>
                    <p className="secondSlide_text">Диски и колодки Brannor это высокотехнологичный и максимально эффективный продукт</p>


                    <div className="fieldOfRedText">

                        <div className="secondSlide_redTxt"  style={{marginTop:"30px"}}>
                            стабильные характеристики в широком диапазоне температур
                        </div>
                        <div className="secondSlide_redTxt">
                            увеличинная эффективность работы
                        </div>
                        <div className="secondSlide_redTxt">
                            Невероятная надежность
                        </div>
                        <div  className="secondSlide_redTxt">
                        увеличение плавности торможения без потери эффективности
                        </div>
                        <div className="secondSlide_redTxt">
                            увеличенный срок службы
                        </div>
                    </div>
                </div>
                <div className="rightSideSecond_Slide">
                    <img src={rotorsPng} alt="" />
                </div>
            </div>
    )
}

export default SecondSlide