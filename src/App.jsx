import { useEffect, useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar/Navbar'
import MainPage from '../pages/MainPage/MainPage.jsx'
import ProfilePage from '../pages/ProfilePage/ProfilePage.jsx'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound/PageNotFound.jsx'
import Userfront, { LoginForm, SignupForm } from '@userfront/toolkit'
import DeliverPage from '../pages/DeliveryPage/DeliveryPage.jsx'
import YourOrder from '../pages/YourOrder/YourOrder.jsx'
import CompanyPage from '../pages/CompanyPage/CompanyPage.jsx'
import CartPage from '../pages/CartPage/CartPage.jsx'
import PlacingOrder from '../pages/PlacingOrder/PlacingOrder.jsx'
import GoodsPage from '../pages/GoodsPage/GoodsPage'

function App() {

  Userfront.init("9ny6vgyb");

  const [dataArray, setDataArray] = useState([])

  useEffect(() => {
    fetch('https://65c4ab97dae2304e92e312f4.mockapi.io/wonnaBuyGoods')
    .then((res) => {return res.json()})
    .then((json) => {setDataArray(json)})

  }, [])

  function LoginPage(){
    return(
      <div style={{display:"grid",alignContent:"center", alignItems:"center", justifyContent:"center", marginTop:"40px"}}>
        <LoginForm/>
        <h3 style={{marginLeft:"15px", color:"white", marginTop:"20px", cursor:"pointer"}} onClick={() => window.location.assign("/registration")}>кликните, чтобы зарегистрироваться</h3>
      </div>
    )
  }

  function RequireAuth({ children }) {
    let location = useLocation();
    if (!Userfront.tokens.accessToken) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  return children
}

  function RegPage(){
    return(
      <div style={{marginTop:"40px"}}>
        <SignupForm/>
      </div>
    )
  }
  
  return (

      <div className='wrapper'>
        <div className='nav'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/profile/" element={<RequireAuth><ProfilePage/></RequireAuth>}>

          </Route>
          <Route path="/profile/delivery" element={<RequireAuth><DeliverPage/></RequireAuth>}  />
          <Route path="/profile/cart" element={<RequireAuth><CartPage dataArray={dataArray} setDataArray={setDataArray}/></RequireAuth>}  />
          <Route path="/profile/yourOrder" element={<RequireAuth><YourOrder/></RequireAuth>}  />
          <Route path="/profile/addCompany" element={<RequireAuth><CompanyPage/></RequireAuth>}  />
          <Route path="/profile/PlacingOrder" element={<RequireAuth><PlacingOrder dataArray={dataArray} setDataArray={setDataArray}/></RequireAuth>}  />
          <Route path='/goods' element={<GoodsPage/>}></Route>
          
          <Route path="/" element={<MainPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="registration" element={<RegPage/>}/>

        </Routes>
      </div>
      
  
  )
}

export default App
