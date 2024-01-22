import { Outlet } from "react-router-dom"
import Header from "./assets/Component/Header"
import Footer from "./assets/Component/Footer"


function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
