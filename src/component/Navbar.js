import { useState } from "react";

// import { close, logo1, menu, search, signin } from "../assets";
import { close } from "../assets";
import { menu } from "../assets";
import { logo1 } from "../assets";
import { search } from "../assets";
import { signin } from "../assets";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";
import styles from "../Style";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(true);

    return (
        <nav className="w-full flex justify-between items-center navbar">
            <NavLink to={"/"}><img id="logo" src={logo1} alt="hoobank" className="w-[150px] h-[100px] " /></NavLink>

            <div className={`ml-2 mr-2 py-1.5 px-4 font-poppins font-medium text-[14px] text-primary bg-blue-gradient rounded-[15px] outline-none w-[300px] h-[32px]`}>
                <img src={search} alt="" className={`w-[20px] mr-2 inline-block`} />
                <input type='text' placeholder='search' className="bg-transparent placeholder-gray-900 placeholder-opacity-100" ></input>
            </div>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} mr-10`}
                        onClick={() => setActive(nav.title)}
                    >
                        {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
                        <NavLink to={`/${nav.id}`}>{nav.title}</NavLink>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />

                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`${styles.flexCenter} w-[40px] h-[40px] rounded-full bg-blue-gradient p-[6.5px] cursor-pointer ml-2`}>
                {/* <img src={signin} alt="go" /> */}
                <NavLink to={"/signup"}><img id="signup" src={signin} alt="go" /></NavLink>
            </div>
        </nav>
    );
};

export default Navbar;