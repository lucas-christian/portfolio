import { Fragment } from "react"
import { NavbarBottom } from "./NavbarBottom"
import { NavbarTop } from "./NavbarTop"
import { NavbarPages } from "./NavbarPages"

export const Navbar = () => {
  return (
    <Fragment>
      <NavbarPages />
      <NavbarTop />
      <NavbarBottom />
    </Fragment>
  )
}