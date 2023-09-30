import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <nav className="px-10 lg:p-14 absolute text-beige text-2xl uppercase w-full flex justify-end lg:justify-between lg:top-0 top-10 left-0">
            <div className="lg:block hidden">
                <ul className="flex gap-12">
                    <li>Shop</li>
                    <li>Collection</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="">
                <span className="hidden">menu</span>
                <span
                    className="lg:hidden cursor-pointer z-[200]"
                    onClick={toggleMenu}
                >
                    <HiOutlineMenuAlt4 size={"20px"} className="text-beige" />
                </span>
                {open && (
                    <ul className="lg:hidden absolute scroll-smooth w-full h-screen text-center z-[19] -top-10 flex flex-col items-center py-56 right-0 bg-lavanda  p-4 space-y-10">
                        <li>Shop</li>
                        <li>Collection</li>
                        <li>About</li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
