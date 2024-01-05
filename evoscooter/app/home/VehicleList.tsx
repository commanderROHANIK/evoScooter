"use client";

import { VehicleData, VehicleProps } from "@/types";
import { useState } from "react";
import RentVehicleCard from "./RentVehicleCard";

export default function Vehicles(AllVehicles: VehicleProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex">
                <p className="text-lg font-medium leading-6 text-gray-900 py-2 px-4 rounded text-white px-12">Vehicles</p>
            </div>
            {
                AllVehicles.Vehicles.map((vehicle: VehicleData) => {
                    return (
                        <RentVehicleCard Id={vehicle.Id} Type={vehicle.Type} Rentable={vehicle.Rentable} Address={vehicle.Address} />
                    )
                })
            }
        </div>
    );
}

