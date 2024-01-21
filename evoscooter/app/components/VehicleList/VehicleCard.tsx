import { VehicleData } from "@/types";
import { removeVehicle } from "../../admin/actions";
import ShowVehicle from "./ShowVehicle";
import { useState } from "react";
import RentVehicleDetailsCard from "./RentVehicleDetailsCard";

interface VehicleCardProps {
    vehicle: VehicleData;
    isAdmin: boolean;
}

export default function VehicleCard({ vehicle, isAdmin }: VehicleCardProps) {
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
            className={vehicle.Rentable === 0 ? "bg-zinc-300 m-5 text-black rounded-xl h-16" : "bg-white m-5 text-black rounded-xl h-16"}
            onClick={handleCardClick}
        >
            {!isAdmin && (
                <RentVehicleDetailsCard isOpen={isOpen} closeModal={() => setIsOpen(false)} vehicle={vehicle} email={""} />
            )}
            {isAdmin && (
                <ShowVehicle isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)} vehicle={vehicle} />
            )}
            <p className="text-black">{vehicle.Type}</p>
            {isAdmin && (
                <button
                    className="bg-black text-lg text-white rounded-md hover:bg-black hover:text-green-200 transition duration-300 ease-in-out px-4"
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
