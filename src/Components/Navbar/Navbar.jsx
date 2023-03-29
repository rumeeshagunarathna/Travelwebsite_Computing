import React, {useState} from 'react'
import './navbar.css'
//import { Link } from 'react-scroll'

import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'





const Navbar = () => {

      const [active, setActive] = useState('navBar')
      //Function to toggle navbar
      const showNav = () => {
            setActive('navBar activeNavbar')
      }

      //Function to remove navbar
      const removeNavbar = () => {
            setActive('navBar')
      }

      return (
            <section className='navBarSection'>
                  <header className="header flex">
                        <div className="logoDiv">
                              <a href="#" className="logo flex">
                                    <h1><MdOutlineTravelExplore className="icon"/>Travel.</h1>
                              </a>
                        </div>

                        <div className={active}>
                              
                              <ul className="navLists flex">
                                    <li className="navItems">
                                          < a href="/" className="navLink">Home</a>
                                    </li>
                                    <li className="navItems">
                                          <a href="/destinations" className="navLink">Destinations</a>
                                    </li>
                                    <li className="navItems">
                                          <a href="/packages" className="navLink">Packages</a>
                                    </li>
                                   
                                    <li className="navItems">
                                          <a href="#" className="navLink">Transport</a>
                                    </li>
                                    <li className="navItems">
                                          <a href="#" className="navLink">About Us</a>
                                    </li>
                                    <li className="navItems">
                                          <a href="#" className="navLink">Contact</a>
                                    </li>

                                    <bitton className="btn">
                                          <a href="#">Login</a>
                                    </bitton>
                              </ul>
                              
                              <div onClick={removeNavbar} className="closeNavbar">
                                    <AiFillCloseCircle className="icon"/>
                              </div>
                        </div>

                        <div onClick={showNav} className="toggleNavbar">
                             < TbGridDots className="icon"/>
                        </div>
                  </header>

            </section>

      )
}

export default Navbar