"use client";

import { RentVehicleProps, VehicleData } from "@/types";
import RentVehicleCard from "./RentVehicleCard";

export default function Vehicles(AllVehicles: RentVehicleProps) {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex">
                <p className="text-lg font-medium leading-6 text-gray-900 py-2 px-4 rounded text-white px-12">Vehicles</p>
            </div>
            {
                AllVehicles.Vehicles.map((vehicle: VehicleData) => {
                    return (
                        <RentVehicleCard vehicle={vehicle} email={AllVehicles.Email} />
                    )
                })
            }
        </div>
    );
}


