import { VehicleData } from "@/types";
import { removeVehicle } from "../../admin/actions";
import ShowVehicle from "./ShowVehicle";
import { useState } from "react";

export default function VehicleCard(vehicle: VehicleData) {
    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <div
            key={vehicle.Id}
            className="bg-green-200 m-5 text-black rounded-xl h-16 hover:bg-green-300 transition duration-300 ease-in-out px-4"
            onClick={() => setIsEditOpen(true)}
        >
            <ShowVehicle isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)} vehicle={vehicle} />
            <p className="text-black">{vehicle.Type}</p>
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
        </div>


    );
}