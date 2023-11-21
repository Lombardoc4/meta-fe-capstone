import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import { Main } from "./components/Main"





export const Layout = () => {
  return (
    <>
      <Nav/>
      <Main>
        <Outlet/>
      </Main>
      <Footer/>
    </>
  )
}
