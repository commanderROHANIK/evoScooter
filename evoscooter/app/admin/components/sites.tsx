"use client";

import { useState } from "react";
import CustomButton from "./CustomButton";
import { SiteProps } from "@/types";
import AddSite from "./AddSite";

export default function Sites(AllSites: SiteProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex">
                <p className="text-lg font-medium leading-6 text-gray-900 py-2 px-4 rounded text-white px-12">Sites</p>
                <CustomButton
                    title='Add'
                    containerStyles='justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ml-4'
                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                    handleClick={() => setIsOpen(true)}>
                </CustomButton>
            </div>
            <AddSite isOpen={isOpen} closeModal={() => setIsOpen(false)} />
            {
                AllSites.Sites.map((site) => {
                    return (
                        <div
                            key={site.Address}
                            className="bg-white m-5 text-black rounded-xl h-16">
                            <p>{site.Address}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}