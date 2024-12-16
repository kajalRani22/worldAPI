import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

import { NavLink } from "react-router-dom"

export const Headers = () => {
    const [show, setShow] = useState(false);
    const handleButtonToggle = () => {
return setShow(!show);
    }
    return(

        <header>
            <div className="conatiner">
             <div className="grid navbar-grid">
            <div className="Logo">
               <NavLink to="/">    {/*Hompage ka path */}
               <h1>OM NAMAH SHIVAY</h1>
               </NavLink>
                </div>
                <nav className={show ? "menu-mobile" : "menu-web"}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/about">About</NavLink>   {/* to="/" jo bhi about page pr click krega to about page pr chla jayega.... */}
                        </li>
                        <li>
                        <NavLink to="/country">Country</NavLink>
                        </li>
                        <li>
                        <NavLink to="/contact">Contact</NavLink>
                        </li>
                       
                    </ul>
                </nav>
                <div className="ham-menu">
                    <button onClick={handleButtonToggle}><GiHamburgerMenu /></button>

                </div>
                </div>   
            </div>  
        </header>
    )
      
    
}