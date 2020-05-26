import { Link } from "gatsby"
import React, { useState } from "react"

import styled from "styled-components"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import Drawer from "./drawer"

import LogoImage from "../images/black_logo.png"

const Container = styled.div`
  align-items: center;
  background: white;
  display: flex;
  height: 5rem;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 1.45rem;
  max-width: 60rem;
  padding: 1.45rem 1.0875rem;
  padding-top: 2rem;
  width: 100%;
`

const Menu = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  width: 16rem;
  @media (min-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: space-around;
  }
`

const MenuItem = styled.li`
  font-size: 0.875rem;
  margin: 0;
  text-decoration: none;
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
  transition: padding 0.3s;
  &:hover {
    background: #0bd8a2;
    color: white;
    cursor: pointer;
    padding: 0.5rem 1rem;
  }
`

const ResponsiveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: block;
  z-index: 3;
  @media (min-width: 768px) {
    display: none;
  }
`

const Header = () => {
  // responsive navbar status
  const [navbarStatus, setNavbarStatus] = useState(false)

  return (
    <Container>
      <Link
        to="/"
        style={{
          color: `#141c3a`,
          textDecoration: `none`,
        }}
      >
        <img
          style={{ margin: 0, zIndex: 3 }}
          src={LogoImage}
          width="150px"
          loading="lazy"
        />
      </Link>
      <Menu>
        <Link
          to="/about"
          style={{
            color: `#141c3a`,
            textDecoration: `none`,
          }}
        >
          <MenuItem>About me</MenuItem>
        </Link>
        <Link
          to="/contact"
          style={{
            color: `#141c3a`,
            textDecoration: `none`,
          }}
        >
          <MenuItem>
            <MenuItemButton>Get in Touch</MenuItemButton>
          </MenuItem>
        </Link>
      </Menu>

      <ResponsiveButton onClick={() => setNavbarStatus(!navbarStatus)}>
        {navbarStatus ? <AiOutlineClose /> : <AiOutlineMenu />}
      </ResponsiveButton>

      <Drawer isOpen={navbarStatus} />
    </Container>
  )
}

export default Header
