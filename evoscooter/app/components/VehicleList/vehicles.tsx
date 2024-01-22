"use client";

import { useState } from "react";
import AddVehicle from "./AddVehicle";
import CustomButton from "../common/CustomButton";
import { VehicleData, VehicleProps } from "@/types";
import VehicleCard from "./VehicleCard";

interface TestProps {
    AllVehicles: VehicleData[];
    IsAdmin: boolean;
    Email: string;
}

export default function Vehicles({ AllVehicles, IsAdmin, Email }: TestProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            {IsAdmin && (
                <div className="flex">
                    <p className="text-lg font-medium leading-6 text-gray-900 py-2 px-4 rounded text-white px-12">Vehicles</p>
                    <CustomButton
                        title='Add'
                        containerStyles='justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ml-4'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        handleClick={() => setIsOpen(true)}>
                    </CustomButton>
                </div>
            )}

            <AddVehicle isOpen={isOpen} closeModal={() => setIsOpen(false)} />
            {
                AllVehicles.map((vehicle: VehicleData) => {
                    return (
                        <VehicleCard vehicle={vehicle} isAdmin={IsAdmin} email={Email}/>
                    )
                })
            }
        </div>
    );
}


