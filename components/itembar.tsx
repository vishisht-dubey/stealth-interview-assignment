"use client"
import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function Itembar(props:any) {
    const [count,setCount] = useState(0);
	return (
		<div className="m-3 flex flex-row justify-between items-center bg-white border-2  rounded-[10px] h-[100px]">
			<div>
				<Image
					className="m-[10px]"
					src={props.img}
					alt="food image"
					height={80}
					width={80}
				/>
			</div>
			<div className="w-[80%] flex flex-col mt-2 mb-2">
				<div>
					<p className="text-[#403C3C]">{props.name}</p>
					<p className="text-[#9E9EA8]">{props.cal}</p>
				</div>
                <div className="flex flex-row justify-between items-center">
                <div>
					<p className="text-[#403C3C]">{props.price}</p>
				</div>
                <div className="flex flex-row justify-between items-center gap-2 w-[88px] h-[28px] border-2 border-orange-400 rounded-md m-3">
                    <p className="ml-2 cursor-pointer font-bold text-orange-400" onClick={()=>{setCount(count+1)}}>+</p>
                    {count}
                    <p className="mr-2 cursor-pointer font-bold text-orange-400" onClick={()=>{setCount(count-1)}}>-</p>
                </div>
                </div>
			</div>
		</div>
	);
}
