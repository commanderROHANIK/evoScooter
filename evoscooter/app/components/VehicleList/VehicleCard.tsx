import { VehicleData } from "@/types";
import { removeVehicle } from "../../admin/actions";
import ShowVehicle from "./ShowVehicle";
import { useState } from "react";
import RentVehicleDetailsCard from "./RentVehicleDetailsCard";

interface VehicleCardProps {
    vehicle: VehicleData;
    isAdmin: boolean;
    email: string;
}

export default function VehicleCard({ vehicle, isAdmin, email }: VehicleCardProps) {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleCardClick = () => {
        if (isAdmin) {
            setIsEditOpen(true);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <div
            key={vehicle.Id}
            className={vehicle.Rentable === 0 ? "bg-zinc-300 bg-opacity-80 my-6 text-black rounded-xl h-16 flex items-center justify-between px-4 cursor-pointer" : "bg-white bg-opacity-80 my-6 text-black rounded-xl h-16 flex items-center justify-between px-4 cursor-pointer"}
            onClick={handleCardClick}
        >
            {!isAdmin && (
                <RentVehicleDetailsCard isOpen={isOpen} closeModal={() => setIsOpen(false)} vehicle={vehicle} email={email} />
            )}
            {isAdmin && (
                <ShowVehicle isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)} vehicle={vehicle} />
            )}
            <p className="text-black">{vehicle.Type}</p>
            {isAdmin && (
                <button
                    className="bg-red-600 text-white text-sm rounded-md px-2 py-1"
                    onClick={() =>
                        removeVehicle(vehicle.Type)
                            .then(() => console.log("done"))
                            .catch((error) => console.log(error))
                    }
                >
                    Remove
                </button>
            )}
        </div>
    );
}
