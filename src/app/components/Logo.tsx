import Image from "next/image";
import * as React from "react";

export const Logo = () => {
    return (
        <div className="cursor-pointer">
            <Image src="/logo.svg" alt="logo" width={100} height={50}/>
        </div>
    );
};