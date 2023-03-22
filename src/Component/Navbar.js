import {CiPower} from "react-icons/ci";
import {SiBmcsoftware} from "react-icons/si";
import {GiHamburgerMenu} from "react-icons/gi";
import {ImCross} from "react-icons/im";
import { useState } from "react";
import './Navbar.css';





export default function Navbar() {
    const [show, setShow] = useState(false)
    const handleOption = ()=>{
        setShow(!show)
    }
    return(
        <>
        <div className="Nav">

            <h3><CiPower/> OnClick |</h3>
            <div id={show ? "open" : ""} className="Home">



                <h4>Home</h4>
                <h4>services</h4>
                <h4>contacts</h4>
                <h4>About Us</h4>

                 <h4>Login</h4>
                    <button className="button"> Sign up</button>
                

                <div id="Mobile" className="Mob">

                    {show ?
                    
                <h1 id ="h1" onClick={handleOption}><ImCross/></h1>:
                <h1 id="h2" onClick={handleOption}><GiHamburgerMenu/></h1>
            }
                </div>
            </div>
        </div>
        
        <div className="title">
            <h1 style={{color:"orange"}}>|Totally Free</h1>
            <h1>Let's bring your<br></br> team together<br></br> in OnClick</h1>
           <h1> We help you to manage all of your work<br></br> and daily task in office</h1>         
              <button id="button">Get Started</button>
            <p style={{color:"orange"}}><SiBmcsoftware/>How to use</p>
        </div>

        <div className="Main">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwsqqO1isPAfRaUNnXu8ittY3LCIv93gvdC2DmrXBN7hsRVidI--HSmGUqJBbKw58mVPI&usqp=CAU"/>


        </div>
        
        
        
        
        </>
    )
}