"use client";

import { VehicleData } from "@/types";
import { useState } from "react";
import RentVehicleDetailsCard from "./RentVehicleDetailsCard";

export default function RentVehicleCard(vehicle: VehicleData) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            key={vehicle.Id}
            className="bg-white m-5 text-black rounded-xl h-16"
            onClick={() => setIsOpen(true)}
        >
            <RentVehicleDetailsCard isOpen={isOpen} closeModal={() => setIsOpen(false)} vehicle={vehicle} />
            <p>{vehicle.Type}</p>
        </div>
    );
}