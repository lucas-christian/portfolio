import { createContext } from "react";

export type NavbarContextType = { mainId: number; handleNavigate: (index: number) => void; };


export const NavbarContext = createContext<NavbarContextType>({
  mainId: 0,
  handleNavigate: () => undefined
});