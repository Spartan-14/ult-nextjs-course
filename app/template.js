"use client";
import "./globals.css";
import {useEffect} from "react";

export default function RootLayout({children}) {
    useEffect(() => {
        console.log(`user has visited a page.`)
    }, [])
    return <div>{children}</div>
}
