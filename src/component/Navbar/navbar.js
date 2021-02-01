import React, { useState } from "react";
import { Nav, NavLink, Logo, Menu, Bar, Icon, AbsoluteLogo } from "./navStyle";
import logo from "../../styles/logo360.png";
import reduxSaga from "redux-saga";
/**/
const Navlink = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <Nav>
        <Bar onClick={handleClick}>
          <Icon className={click ? "fa fa-times fa-2x" : "fa fa-bars fa-2x"} />
        </Bar>
        <AbsoluteLogo src={logo} />
        <Menu click={click}>
          <NavLink exact to="#">
            HER
          </NavLink>
          <NavLink exact to="#">
            HIM
          </NavLink>
          <NavLink exact to="#">
            THE WEDDING
          </NavLink>
        </Menu>
        <Logo src={logo} />
        <Menu click={click}>
          <NavLink exact to="#">
            VENDORS
          </NavLink>
          <NavLink
            exact
            to="/gallery"
            onClick={() => {
              setClick(!click);
            }}
          >
            GALLERY
          </NavLink>
          <NavLink exact to="#">
            IDEAS&MORE
          </NavLink>
        </Menu>
      </Nav>
    </div>
  );
};
export default Navlink;
