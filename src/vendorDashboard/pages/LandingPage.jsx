import React,{useState} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'

const LandingPage = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showFirm, setShowFirm] = useState(false)
    const [showProduct, setShowProduct] = useState(false)



  const showLoginHandler =() => {
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
  }


  const showRegisterHandler =() => {
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
  }

  const showFirmrHandler =() => {
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(true)
    setShowProduct(false)
  }


  const showProductHandler =() => {
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(true)
  }




  return (
    <>
        <section className='landingSection'>
            <NavBar showLoginHandler = {showLoginHandler} showRegisterHandler = {showRegisterHandler}/>
            <div className="collectionSection">
            <SideBar showFirmrHandler = {showFirmrHandler} showProductHandler = {showProductHandler} />
            
            {showLogin && <Login /> }
            {showRegister && <Register />}
            {showFirm && <AddFirm />}
            {showProduct && <AddProduct />}
            </div>
        </section>
    </>
  )
}

export default LandingPage