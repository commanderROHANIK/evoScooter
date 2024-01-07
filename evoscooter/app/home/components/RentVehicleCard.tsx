"use client";

import { VehicleData } from "@/types";
import { useState } from "react";
import RentVehicleDetailsCard from "./RentVehicleDetailsCard";

export default function RentVehicleCard({ vehicle, email }: { vehicle: VehicleData, email: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            key={vehicle.Id}
            className={vehicle.Rentable === 0 ? "bg-zinc-300 m-5 text-black rounded-xl h-16" : "bg-white m-5 text-black rounded-xl h-16"}
            onClick={() => setIsOpen(true)}
        >
            <RentVehicleDetailsCard isOpen={isOpen} closeModal={() => setIsOpen(false)} vehicle={vehicle} email={email}/>
            <p>{vehicle.Type}</p>
        </div>
    );
}