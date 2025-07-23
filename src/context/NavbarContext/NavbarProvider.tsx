"use client";

import { useState } from "react";
import { NavbarContext } from "./NavbarContext";
import { icons } from "../../constants/pages";
import { useRouter } from "next/navigation";

export function NavbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mainId, setMainId] = useState(0);
  const router = useRouter();

  const handleNavigate = (index: number) => {
    if (mainId === index) return;
    const totalSteps = (icons.length + mainId - index) % icons.length;

    let count = 0;

    const animate = () => {
      setMainId((prevId) => {
        const currentIndex = icons.findIndex((icon) => icon.id === prevId);
        const nextIndex = (currentIndex - 1 + icons.length) % icons.length;
        return icons[nextIndex].id;
      });

      count++;
      if (count < totalSteps) {
        setTimeout(animate, 200);
      }
    };

    animate();
    router.push(icons.find(icon => icon.id === index)?.page || "/");
  };

  return (
    <NavbarContext.Provider value={{ mainId, handleNavigate }}>
      {children}
    </NavbarContext.Provider>
  );
}