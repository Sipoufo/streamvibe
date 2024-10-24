import React, {useState} from "react";
import {BarsBottomRight, BellWithBorderColor, Search, XMark} from "../constants/icons";

/**
 * @author SIPOUFO Yvan
 *
 * Header / navigation bar
 * @return {JSX.Element}
 * @constructor
 */
const Header = () => {
    const [activeMenu, setActiveMenu] = useState("home");
    const [activeSmallMenu, setActiveSmallMenu] = useState(false);

    return (
        <>
            <div className="h-24 lg:h-28 flex flex-row px-4 lg:px-20 xl:px-32 py-8 justify-between items-center">
                {/* Logo normal size */}
                <img
                    src={process.env.PUBLIC_URL + "/assets/logos/logo.png"}
                    className="hidden xl:block h-full object-contain"
                    alt='logo'/>
                {/* Logo medium size */}
                <img
                    src={process.env.PUBLIC_URL + "/assets/logos/logo-medium.png"}
                    className="hidden lg:block xl:hidden h-full object-contain"
                    alt='logo'/>
                {/* Logo small size */}
                <img
                    src={process.env.PUBLIC_URL + "/assets/logos/logo-small.png"}
                    className="lg:hidden h-full object-contain"
                    alt='logo'/>

                {/* Navigation bar */}
                <ul className="hidden md:flex bg-black-06 flex-row gap-2 lg:gap-4 items-center p-2 border-4 border-black-12 rounded-xl text-sm lg:text-base text-absolute-white">
                    <a href="/" className={`${activeMenu === "home" && "bg-black-10"} px-6 py-3 `}
                       onClick={() => setActiveMenu("home")}>
                        Home
                    </a>
                    <a href="/" className={`${activeMenu === "movies and shows" && "bg-black-10"} px-6 py-3`}
                       onClick={() => setActiveMenu("movies and shows")}>
                        Movies & Shows
                    </a>
                    <a href="/" className={`${activeMenu === "support" && "bg-black-10"} px-6 py-3`}
                       onClick={() => setActiveMenu("support")}>
                        Support
                    </a>
                    <a href="/" className={`${activeMenu === "subscriptions" && "bg-black-10"} px-6 py-3`}
                       onClick={() => setActiveMenu("subscriptions")}>
                        Subscriptions
                    </a>
                </ul>

                {/* Icons */}
                <div className="hidden md:flex flex-row gap-4 items-center">
                    {/* Search */}
                    <button>
                        <Search/>
                    </button>
                    {/* Bell */}
                    <button>
                        <BellWithBorderColor/>
                    </button>
                </div>

                {/* Small menu button */}
                <button className="md:hidden bg-black-10 px-4 py-5 border-3 border-black-15 rounded-md" onClick={() => setActiveSmallMenu(true)}>
                    <BarsBottomRight/>
                </button>
            </div>

            {/* Small menu */}
            <div className={`${activeSmallMenu ? "block" : "hidden"} md:hidden absolute h-screen w-screen bg-black-06 border-4 border-black-12 rounded-xl text-sm text-absolute-white py-4`}>
                <div className="mx-4 flex flex-row justify-between items-center">
                    {/* Logo small size */}
                    <img
                        src={process.env.PUBLIC_URL + "/assets/logos/logo-small.png"}
                        className="lg:hidden h-12 w-28 object-contain"
                        alt='logo'/>
                    {/* Close menu */}
                    <button className="md:hidden bg-black-10 px-4 py-5 border-3 border-black-15 rounded-md" onClick={() => setActiveSmallMenu(false)}>
                        <XMark/>
                    </button>
                </div>
                <ul className="flex flex-col mt-4">
                    <a href="/" className={`${activeMenu === "home" && "bg-black-10"} p-6`}
                       onClick={() => setActiveMenu("home")}>
                        Home
                    </a>
                    <hr className="w-full border-2 border-black-12"/>
                    <a href="/" className={`${activeMenu === "movies and shows" && "bg-black-10"} p-6`}
                       onClick={() => setActiveMenu("movies and shows")}>
                        Movies & Shows
                    </a>
                    <hr className="w-full border-2 border-black-12"/>
                    <a href="/" className={`${activeMenu === "support" && "bg-black-10"} p-6`}
                       onClick={() => setActiveMenu("support")}>
                        Support
                    </a>
                    <hr className="w-full border-2 border-black-12"/>
                    <a href="/" className={`${activeMenu === "subscriptions" && "bg-black-10"} p-6`}
                       onClick={() => setActiveMenu("subscriptions")}>
                        Subscriptions
                    </a>
                    <hr className="w-full border-2 border-black-12"/>
                </ul>
            </div>
        </>
    );
}

export default Header;