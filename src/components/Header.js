import { Link } from "react-router-dom"
import logo from "../../utils/images/logo.png"
import { SlArrowDown } from 'react-icons/sl'
import doctor from "../../utils/images/doctor.svg"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-con">
                <img src={logo}></img>
            </div>
            <div className="nav-con">
                <ul>
                    <Link className="aboutUs">
                        About Us<span className="arrow"><SlArrowDown /></span>
                        <div className="aboutUs-con">
                            <div className="aboutUsBox">
                                <img src={doctor} />
                                <p>Dr. B. Ramesh</p>
                            </div>
                            <div className="aboutUsBox">
                                <img src={doctor} />
                                <p>Dr. B. Ramesh</p>
                            </div>
                        </div>
                    </Link>
                    <li>Specialities<span className="arrow"><SlArrowDown /></span></li>
                    <li>Care Services<span className="arrow"><SlArrowDown /></span></li>
                    <li>Value Adds<span className="arrow"><SlArrowDown /></span></li>
                    <li>Locations<span className="arrow"><SlArrowDown /></span></li>
                    <li>Resources<span className="arrow"><SlArrowDown /></span></li>
                </ul>
            </div>
            <div className="contact-con">
                <button className="touch-btn">Get in touch</button>
                <button className="call-btn">Call 1800 208 2559</button>
            </div>
            <div className="box">
                <div className="smallLine"></div>
                <div className="middleLine"></div>
                <div className="smallLine"></div>
            </div>
        </div>
    )
}

export default Header