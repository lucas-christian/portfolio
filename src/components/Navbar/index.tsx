"use client";
import { Fragment } from "react"
import { NavbarBottom } from "./NavbarBottom"
import { NavbarTop } from "./NavbarTop"
import { NavbarPages } from "./NavbarPages"
import { NavbarRightIcons } from "./NavbarRightIcons"
import styles from "./styles.module.css"
import { PageTitle } from "./PageTitle"
import { usePathname } from "next/navigation";
import { Text } from "../Text";


export const Navbar = () => {
  const pathname = usePathname();
  return (
    <Fragment>
      <NavbarPages />
      <Text className={styles.title} size="xl" family="audiowide" asChild><h1>Dev Luch</h1></Text>
      <PageTitle pathname={pathname} />
      <NavbarRightIcons />
      <NavbarTop />
      <NavbarBottom />
    </Fragment>
  )
}