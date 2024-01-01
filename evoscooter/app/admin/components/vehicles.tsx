"use client";

import { useState } from "react";
import AddVehicle from "./AddVehicle";
import CustomButton from "./CustomButton";
import { VehicleData, VehicleProps } from "@/types";
import ShowVehicle from "./ShowVehicle";
import { removeVehicle } from "../actions";


export default function Vehicles(AllVehicles: VehicleProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex">
                <p className="text-lg font-medium leading-6 text-gray-900 py-2 px-4 rounded text-white px-12">Vehicles</p>
                <CustomButton
                    title='Add'
                    containerStyles='justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ml-4'
                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                    handleClick={() => setIsOpen(true)}>
                </CustomButton>
            </div>
            <AddVehicle isOpen={isOpen} closeModal={() => setIsOpen(false)} />
            {
                AllVehicles.Vehicles.map((vehicle: VehicleData) => {
                    const [isEditOpen, setIsEditOpen] = useState(false);
                    return (
                        <div
                            key={vehicle.Id}
                            className="bg-white m-5 text-black rounded-xl h-16"
                        >
                            <p>{vehicle.Type}</p>
                            <button
                                className="bg-red-600 text-lg text-black rounded-md"
                                onClick={() =>
                                    removeVehicle(vehicle.Type).then(() => console.log("done")).catch((error) => console.log(error))
                                }
                            >Remove</button>
                        </div>
                    )
                })
            }
        </div>
    );
}
//removeVehicle(vehicle.Id).then(() => console.log("done")).catch((error) => console.log(error));

//<ShowVehicle isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)} vehicle={vehicle}/>
