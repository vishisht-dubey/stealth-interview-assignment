import React from "react";
import left from "../public/arrow-left.svg";
import Image from "next/image";
export default function Navbar() {
	return (
		<div className="flex flex-row justify-between mb-2 h-[56px] bg-white">
			<div className="flex flex-row ml-2">
				<Image src={left} alt="left" />
			</div>
			<div className="flex flex-col justify-center w-full items-center">
				<p className="text-[14px] text-[#403C3C]">Checkout</p>
				<p className="text-[10px] text-[#9E9EA8]">Popeyes | JP Nagar</p>
			</div>
		</div>
	);
}
