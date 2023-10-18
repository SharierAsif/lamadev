import React from 'react'
import MenuData from './MenuData'
import {
    Link,
    NavbarMenuItem,
  } from "@nextui-org/react";

const ToggoleMenu = () => {
  return (
    <div>
      {MenuData.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === MenuData.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item.item}
            </Link>
          </NavbarMenuItem>
        ))}
    </div>
  )
}

export default ToggoleMenu
