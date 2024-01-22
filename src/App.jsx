import { Outlet } from "react-router-dom"
import Header from "./assets/Component/Header"


function App() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
