import { Fragment } from "react"
import { NavbarBottom } from "./NavbarBottom"
import { NavbarTop } from "./NavbarTop"

export const Navbar = () => {
  return (
    <Fragment>
      <NavbarTop />
      <NavbarBottom />
    </Fragment>
  )
}