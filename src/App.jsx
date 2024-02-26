import { useState } from 'react'
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

function App() {

  const [dataArray, setDataArray] = useState()

  Userfront.init("9ny6vgyb");

  function LoginPage(){
    return(
      <div style={{display:"grid",alignContent:"center", alignItems:"center", justifyContent:"center", marginTop:"40px"}}>
        <LoginForm/>
        <h3 style={{marginLeft:"15px", color:"white", marginTop:"20px", cursor:"pointer"}} onClick={() => window.location.assign("/registration")}>кликните, чтобы зарегистрироваться</h3>
      </div>
    )
  }

  setInterval(() => {
    console.log(dataArray)
  }, 1000);

  fetch('https://PROJECT_TOKEN.mockapi.io/users/1/tasks', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        setDataArray(res.json()) 
    }
    // handle error
  }).then(tasks => {
    // Do something with the list of tasks
  }).catch(error => {
    // handle error
  })

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
          <Route path="/profile/cart" element={<RequireAuth><CartPage/></RequireAuth>}  />
          <Route path="/profile/yourOrder" element={<RequireAuth><YourOrder/></RequireAuth>}  />
          <Route path="/profile/addCompany" element={<RequireAuth><CompanyPage/></RequireAuth>}  />
          <Route path="/profile/PlacingOrder" element={<RequireAuth><PlacingOrder/></RequireAuth>}  />

          
          <Route path="/" element={<MainPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="registration" element={<RegPage/>}/>

        </Routes>
      </div>
      
  
  )
}

export default App
