import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <h2 className=" absolute text-lg text-blue-500 font-bold top-6 left-80">
          Building.RS
        </h2>
        <NavLink to="/"></NavLink>

        <Bars />
        <NavMenu>
          <NavLink to="/Home" className="font-black ">
            Home
          </NavLink>
          <NavLink to="/about" className="font-black">
            About us
          </NavLink>
          <NavLink to="/Services" className="font-black">
            Properties
          </NavLink>
          <NavLink to="/Agent" className="font-black">
            Agent
          </NavLink>
          <NavLink to="/Contact" className="font-black">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/getStarted">Get Started</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
