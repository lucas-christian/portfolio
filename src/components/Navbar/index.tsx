import { Fragment } from "react"
import { NavbarBottom } from "./NavbarBottom"
import { NavbarTop } from "./NavbarTop"
import { NavbarPages } from "./NavbarPages"
import { NavbarRightIcons } from "./NavbarRightIcons"
import styles from "./styles.module.css"
import { PageTitle } from "./PageTitle"

export const Navbar = () => {
  return (
    <Fragment>
      <NavbarPages />
      <h1 className={styles.title}>Dev Luch</h1>
      <PageTitle />
      <NavbarRightIcons />
      <NavbarTop />
      <NavbarBottom />
    </Fragment>
  )
}