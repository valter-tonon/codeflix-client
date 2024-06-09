"use client"
import * as React from "react";
import {Logo} from "@/app/components/Logo";
import NavLinks from "@/app/components/NaviLinks";
import UserProfile from "@/app/components/UserProfile";
import {useScrolled} from "@/app/hooks/UseScrolled";

export const Header = () => {
    const isScrolled = useScrolled();
    return (
        <header
            className={`${isScrolled ? "bg-black" : "bg-transparent"} fixed top-0 z-50 flex w-full items-center justify-between transition-all p-2 px-4 py-4 lg:px-16 lg:py-6`}>
            <div className="flex space-x-8">
                <Logo/>
                <NavLinks/>
            </div>
            <UserProfile/>
        </header>
    );
};