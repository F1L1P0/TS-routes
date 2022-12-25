import {NavLink} from "react-router-dom"

export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <ul>
                    <li><NavLink to="./" className={({isActive})=> (isActive ? "link linkIsActive" : "link linkNotActive")}>Home</NavLink></li>
                    <li><NavLink to="./about" className={({isActive})=> (isActive ? "link linkIsActive" : "link linkNotActive")}>About</NavLink></li>
                    <li><NavLink to="./contacts" className={({isActive})=> (isActive ? "link linkIsActive" : "link linkNotActive")}>Contacts</NavLink></li>
                    <li><NavLink to="./products" className={({isActive})=> (isActive ? "link linkIsActive" : "link linkNotActive")}>Products</NavLink></li>
                </ul>
            </div>
        </>
    )
}