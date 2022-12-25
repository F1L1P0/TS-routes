import Navbar from "./Navbar"
import Footer from "./Footer"
import {Outlet} from "react-router-dom"

export default function SharedLayout(){
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}