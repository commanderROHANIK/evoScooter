"use client";

import { useState } from "react";
import CustomButton from "../common/CustomButton";
import { RentProps } from "@/types";
import AddRent from "./AddRent";
import RentCard from "./RentCard";

export default function Rents(RentsToApprove: RentProps) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
            <div className="flex">
                <p className="text-lg font-medium leading-6 text-gray-900 py-2 px-0 rounded text-white px-12">Rentals</p>
                <CustomButton
                    title='Add'
                    containerStyles='justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ml-4'
                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                    handleClick={() => setIsOpen(true)}>
                </CustomButton>
            </div>
            <AddRent isOpen={isOpen} closeModal={() => setIsOpen(false)} />
            {
                RentsToApprove.Rentals.map((rental) => {
                    return (
                        <RentCard UserEmail={rental.UserEmail} VehicleId={rental.VehicleId} StartTime={rental.StartTime} EndTime={rental.EndTime} State={rental.State}  />
                    )
                })
            }
        </div>
    );
}