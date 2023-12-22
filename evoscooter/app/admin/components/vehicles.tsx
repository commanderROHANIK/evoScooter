"use client";

import { useState } from "react";
// import { getVehicles } from "../actions";
import AddVehicle from "./AddVehicle";
import CustomButton from "./CustomButton";
import { VehicleData, VehicleProps } from "@/types";


export default function Vehicles(AllVehicles: VehicleProps) {
    // const vehicles = await getVehicles();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <h2>Vehicles</h2>
            <CustomButton
                title='Add'
                containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                textStyles='text-white text-[14px] leading-[17px] font-bold'
                handleClick={() => setIsOpen(true)}>
            </CustomButton>
            <AddVehicle isOpen={isOpen} closeModal={() => setIsOpen(false)} />
            {
                AllVehicles.Vehicles.map((vehicle: VehicleData) => {
                    return (
                        <div
                            key={vehicle.Id}
                            className="bg-white m-5 text-black rounded-xl h-16">
                            <p>{vehicle.Type}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}