"use client"
import * as React from "react";

import './globals.css'

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "../components/NavBar.jsx"

// flex  flex-col items-center justify-between p-24
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <NextUIProvider>
          <main className="">
            <NavBar/>
            <div className="flex  flex-col items-center p-16">
            {children}
            </div>
          </main>
          
        </NextUIProvider>
      </body>
    </html>
  )
}
