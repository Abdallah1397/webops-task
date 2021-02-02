import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Logo,
  Menu,
  Bar,
  Icon,
  AbsoluteLogo,
  List,
  DropDownItem,
  DropDownList,
  GalleryNavLink
} from "./navStyle";
import logo from "../../styles/logo360.png";
import reduxSaga from "redux-saga";

const Navlink = () => {
  const SubMenu = () => {
    return (
      <DropDownList>
          <DropDownItem>
          <GalleryNavLink
            exact
            to="/"
            onClick={() => {
              setClick(!click);
            }}
          >
            ALL IMAGES
          </GalleryNavLink>
        </DropDownItem>
        <DropDownItem>
          <GalleryNavLink
            exact
            to="/gallery"
            onClick={() => {
              setClick(!click);
            }}
          >
            MORE
          </GalleryNavLink>
        </DropDownItem>

      </DropDownList>
    );
  };
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => setDropDown(!dropDown);

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

          <List onClick={handleDropDown}>
            GALLERY{" "}
            <i className={dropDown ? "fa fa-caret-up" : "fa fa-caret-down"} />
            {dropDown ? <SubMenu /> : ""}
          </List>

          <NavLink exact to="#">
            IDEAS&MORE
          </NavLink>
        </Menu>
      </Nav>
    </div>
  );
};
export default Navlink;
