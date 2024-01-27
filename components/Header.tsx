"use client"

import Container from "./Container";
import Link from "next/link";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose, FaComments, FaUserAlt, FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
    const [menuActive, setMenuActive] = useState(true)

    function menuOpen() {
        if(menuActive === true) {
            setMenuActive(false)
            return
        }

        setMenuActive(true)
    }
    return ( 
        <header className="bg-slate-700">
            <Container>
                <div className="h-11 w-full">
                    <nav className="flex gap-3 items-center h-full">

                        {
                            menuActive === true ? 
                                <GiHamburgerMenu size={20} className="cursor-pointer flex sm:hidden" onClick={menuOpen}/>
                                :
                                <div className="flex gap-3">
                                    <FaWindowClose size={20} className="cursor-pointer flex sm:hidden" onClick={menuOpen}/>
                                    <Link className="sm:hidden flex gap-2 hover:opacity-75 transition durations-300" href={'/'}><FaSearch size={20}/>Seach</Link>
                                    <Link className="sm:hidden flex gap-2 hover:opacity-75 transition durations-300" href={'/'}><FaComments size={20}/>Coments</Link>
                                    <Link className="sm:hidden flex gap-2 hover:opacity-75 transition durations-300" href={'/'}><IoMdNotifications size={20}/>Notifications</Link>
                                    <Link className="sm:hidden flex gap-2 hover:opacity-75 transition durations-300" href={'/'}><FaUserAlt size={20}/>User</Link>
                                </div>
                        }


                        <Link className="hidden sm:flex gap-2 hover:opacity-75 transition durations-300" href={'/'}><FaSearch size={20}/>Seach</Link>
                        <Link className="hidden sm:flex gap-2 hover:opacity-75 transition durations-300" href={'/'}><FaComments size={20}/>Coments</Link>
                        <Link className="hidden sm:flex gap-2 hover:opacity-75 transition durations-300" href={'/'}><IoMdNotifications size={20}/>Notifications</Link>
                        <Link className="hidden sm:flex gap-2 hover:opacity-75 transition durations-300" href={'/'}><FaUserAlt size={20}/>User</Link>
                    </nav>
                </div>
            </Container>
        </header>
     );
}
 
export default Header;