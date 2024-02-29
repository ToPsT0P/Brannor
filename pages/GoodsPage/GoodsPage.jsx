import React, { useEffect, useState } from "react";
import GoodsItem from "../../components/GoodsItem/GoodsItem";
import Pagination from "../../components/Pagination/Pagination";

const GoodsPage = ({allDataArray, setAllDataArray}) => {

  const [userPage, setUserPage] = useState(1)
  const urlAllData = new URL('https://65c4ab97dae2304e92e312f4.mockapi.io/goods')
  urlAllData.searchParams.append('page', userPage || 1);
  let quantityI 
  urlAllData.searchParams.append('limit', (quantityI = 2 * (window.innerWidth - window.innerWidth % 333) / 333))

  useEffect(() => {
      
      fetch(urlAllData, {
          method: 'GET',
          headers: {'content-type':'application/json'},
      }).then((res) => {return res.json()})
      .then((json) => {setAllDataArray(json)})
      
    }, [userPage])

    return(
        <>
            <div className="goodsPage_wrapper">
                <h1>Вся продукция</h1>
                <div className="goodsPage_itemlist">
                    {allDataArray.map((item, i) => {
                        return <GoodsItem item={item}/>
                    })}
                </div>
                <Pagination setUserPage={setUserPage}/>
            </div>
        </>
    )
}

export default GoodsPage