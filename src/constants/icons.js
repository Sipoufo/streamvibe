import React from "react";
import {HiBars3BottomRight, HiBell, HiOutlineBell, HiOutlineMagnifyingGlass, HiXMark} from "react-icons/hi2";

/**
 * @author SIPOUFO Yvan
 */

/* Bell icon with background color */
export const BellWithBg = () => {
    return <HiBell className="text-2xl text-absolute-white" />
}

/* Bell icon with border color */
export const BellWithBorderColor = () => {
    return <HiOutlineBell className="text-2xl text-absolute-white" />
}

/* Search icon */
export const Search = () => {
    return <HiOutlineMagnifyingGlass className="text-2xl text-absolute-white" />
}

/* Bars icon with bottom right bars */
export const BarsBottomRight = () => {
    return <HiBars3BottomRight className="text-2xl text-absolute-white" />
}

/* X icon with bottom right bars */
export const XMark= () => {
    return <HiXMark className="text-2xl text-absolute-white" />
}
