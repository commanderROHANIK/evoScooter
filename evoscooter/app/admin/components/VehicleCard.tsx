import { VehicleData } from "@/types";
import { removeVehicle } from "../actions";
import ShowVehicle from "./ShowVehicle";
import { useState } from "react";

export default function VehicleCard(vehicle: VehicleData) {
    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <div
            key={vehicle.Id}
            className="bg-white m-5 text-black rounded-xl h-16"
            onClick={() => setIsEditOpen(true)}
        >
            <ShowVehicle isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)} vehicle={vehicle} />
            <p>{vehicle.Type}</p>
            <button
                className="bg-red-600 text-lg text-black rounded-md"
                onClick={() =>
                    removeVehicle(vehicle.Type).then(() => console.log("done")).catch((error) => console.log(error))
                }
            >Remove</button>
        </div>
    );
}