const PersonalDataOrder = () => {

    return(
    
    <>
    <div>
                <h3>Личные данные</h3>
                <div className="personalDataInputs">
                    <div>
                        <label htmlFor="">Имя</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">E-mail</label>
                        <input type="text" />
                    </div>
                    <div>
                            <label htmlFor="">Номер телефона</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className="inputMoreData">
                <input type="text" />
            </div>
    </>
    
    )
}

export default PersonalDataOrder