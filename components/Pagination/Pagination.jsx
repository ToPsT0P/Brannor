const Pagination = ({setUserPage}) => {


    return(
        <div className="goodsPaage_pagination">
                   <button onClick={() => {setUserPage(1)}}>1</button>
                   <button onClick={() => {setUserPage(2)}}>2</button>
                   <button onClick={() => {setUserPage(3)}}>3</button>
                   <button onClick={() => {setUserPage(4)}}>4</button>
                   <button onClick={() => {setUserPage(5)}}>5</button>
                   <button onClick={() => {setUserPage(6)}}>6</button>
                   <button onClick={() => {setUserPage(7)}}>7</button>
                   <button onClick={() => {setUserPage(8)}}>8</button>
                   <button onClick={() => {setUserPage(9)}}>9</button>
                   <input type="text" minLength={1} maxLength={7} onChange={(e) => setUserPage(e.target.value)} placeholder="Введите номер страницы" />
                </div>
    )
}

export default Pagination