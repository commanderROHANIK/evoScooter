import { RentData } from "@/types";
import { useState } from "react";
import ShowRent from "./ShowRent";

export default function RentCard(Rental: RentData) {
    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <div
            key={Rental.UserEmail + Rental.VehicleId}
            className="bg-white bg-opacity-80 my-6 text-black rounded-xl h-16 flex items-center justify-between px-4 cursor-pointer hover:bg-gray-100"
            onClick={() => setIsEditOpen(true)}
        >
            <ShowRent isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)} rent={Rental} />
            <p>{Rental.UserEmail}</p>
        </div>
    );
}