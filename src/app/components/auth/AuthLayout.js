"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Navbar";


export default function AuthLayout({ children }) {
    const pathname = usePathname();

    const hideNavbar = pathname === "/login" || pathname === "/signup" 
    || pathname === "/forget-password"  || pathname==="/reset-password" || pathname===""
    ;

    return (
        <>
            {!hideNavbar && <Navbar />}
            {children}
        </>
    );
}
