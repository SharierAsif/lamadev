import React from "react";
import MenuData from "./MenuData";
import { NavbarItem, Link } from "@nextui-org/react";

const MenuButtons = () => {
  return (
    <>
      {MenuData.map((item) => (
        <NavbarItem key={item.id}>
          <Link color="foreground" href={item.links}>
            {item.item}
          </Link>
        </NavbarItem>
      ))}
    </>
  );
};

export default MenuButtons;
