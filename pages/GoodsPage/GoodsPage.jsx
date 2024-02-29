import React, { useEffect, useState } from "react";
import GoodsItem from "../../components/GoodsItem/GoodsItem";

const GoodsPage = ({allDataArray, setAllDataArray}) => {

  const [userPage, setUserPage] = useState()
  const [userLimit, setUserLimit] = useState()
  const urlAllData = new URL('https://65c4ab97dae2304e92e312f4.mockapi.io/goods')
  urlAllData.searchParams.append('page', 1);
  let quantityI 
  urlAllData.searchParams.append('limit', (quantityI = 2 * (window.innerWidth - window.innerWidth % 333) / 333))

  useEffect(() => {
      
      fetch(urlAllData, {
          method: 'GET',
          headers: {'content-type':'application/json'},
      }).then((res) => {return res.json()})
      .then((json) => {setAllDataArray(json)})
      
    }, [])

    return(
        <>
            <div className="goodsPage_wrapper">
                <h1>Вся продукция</h1>
                <div className="goodsPage_itemlist">
                    {allDataArray.map((item, i) => {
                        return <GoodsItem item={item}/>
                    })}
                </div>
                <div className="goodsPaage_pagination">
                   <button>1</button>
                   <button>2</button>
                   <button>3</button>
                   <button>4</button>
                   <button>5</button>
                   <button>6</button>
                   <button>7</button>
                   <button>8</button>
                   <button>9</button>
                   <input type="text" />
                </div>
            </div>
        </>
    )
}

export default GoodsPage