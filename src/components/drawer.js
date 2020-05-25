import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"

const ResponsiveMenu = styled.ul`
  align-items: center;
  background: white;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 1px 0 0 #e6ecf8;
  display: flex;
  flex-direction: column;
  height: calc(40vh - 6rem);
  justify-content: space-evenly;
  left: 0;
  list-style: none;
  margin: ${props => (props.isOpen ? "0 auto" : "-2500px")};
  position: absolute;
  top: 5rem;
  transition: margin 0.5s;
  width: 100vw;
  z-index: 2;
  @media (min-width: 768px) {
    display: none;
  }
`

const ResponsiveItem = styled.li`
  text-align: center;
  width: 100vw;
  &:hover {
    color: #0bd8a2;
    cursor: pointer;
  }
`

const MenuItemButton = styled.button`
  background: transparent;
  border: solid 2px #0bd8a2;
  border-radius: 0.25rem;
  color: #0bd8a2;
  padding: 0.5rem;
  &:hover {
    background: #0bd8a2;
    color: white;
    cursor: pointer;
  }
`

const Divider = styled.div`
  background: #eee;
  height: 1px;
  margin: 0 auto;
  width: 90vw;
`

const Drawer = ({ isOpen }) => (
  <ResponsiveMenu isOpen={isOpen}>
    <Link
      to="/about"
      style={{
        color: `black`,
        textDecoration: `none`,
      }}
    >
      <ResponsiveItem>About</ResponsiveItem>
    </Link>
    <Divider />
    <Link
      to="/contact"
      style={{
        color: `black`,
        textDecoration: `none`,
      }}
    >
      <ResponsiveItem>
        <MenuItemButton>Contact</MenuItemButton>
      </ResponsiveItem>
    </Link>
  </ResponsiveMenu>
)

export default Drawer
