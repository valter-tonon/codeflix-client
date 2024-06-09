import * as React from "react";

export default function NavLinks() {
    return <nav>
        <ul className="hidden md:flex md:space-x-3">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">TV Shows</a>
            <a href="#" className="text-white">Movies</a>
            <a href="#" className="text-white">Latest</a>
        </ul>
    </nav>;
}
