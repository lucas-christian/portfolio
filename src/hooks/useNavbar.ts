import { NavbarContext } from "@context/NavbarContext/NavbarContext";
import { useContext } from "react";

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) throw new Error("useNavbar must be used within NavbarProvider");
  return context;
}