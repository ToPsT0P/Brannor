import React from "react";

const CompanyCreate = ({setIsModal}) => {


    return(
        <div className="fullwidthBGC" onClick={(e) => setIsModal(false)}>
                    <div className="profileCompany_Modal" onClick={(e) => e.stopPropagation()}>
                        <h2>Новая Компания</h2>
                        <label>название</label>
                        <input className="fullWidthInput" type="text" />                   
                        <label>компания</label>
                        <input className="fullWidthInput"  type="text" />
                        <div className="profileCompany_ModalHalf">
                            <div>
                                <label>ИНН</label>
                                <input type="text" />

                            </div>
                            <div style={{marginLeft:"15px"}}>
                                <label>КПП</label>
                                <input type="text" />
                            </div>
                        </div>

                        <label htmlFor="">Юридические адреса</label>
                        <input className="fullWidthInput" type="text" />
                        <div className="profileCompany_ModalHalf">
                            <div>
                                <label htmlFor="">Наименования банка</label>
                                <input type="text" />
                            </div>
                            <div style={{marginLeft:"15px"}}>
                                <label htmlFor="">БИК</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="profileCompany_ModalThird">
                            <div>
                                <label htmlFor="">Расчётный счёт</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Кор. Счёт</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">E-mail</label>
                                <input type="text" />
                            </div>
                        </div>
                        <button>Добавить адрес</button>
                    </div>

                </div>
    )
}

export default CompanyCreate