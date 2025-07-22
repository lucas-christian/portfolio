"use client";
import { Fragment } from "react"
import { NavbarBottom } from "./NavbarBottom"
import { NavbarTop } from "./NavbarTop"
import { NavbarPages } from "./NavbarPages"
import { NavbarRightIcons } from "./NavbarRightIcons"
import styles from "./styles.module.css"
import { PageTitle } from "./PageTitle"
import { usePathname } from "next/navigation";


export const Navbar = () => {
  const pathname = usePathname();
  return (
    <Fragment>
      <NavbarPages />
      <h1 className={styles.title}>Dev Luch</h1>
      <PageTitle pathname={pathname} />
      <NavbarRightIcons />
      <NavbarTop />
      <NavbarBottom />
    </Fragment>
  )
}