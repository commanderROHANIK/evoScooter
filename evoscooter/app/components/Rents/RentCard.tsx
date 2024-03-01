import { RentData } from "@/types";
import { useState } from "react";
import ShowRent from "./ShowRent";

export default function SiteCard(Rental: RentData) {
    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <div
            key={Rental.UserEmail + Rental.VehicleId}
            className="bg-white bg-opacity-80 my-6 text-black rounded-xl h-16 flex items-center justify-between px-4 cursor-pointer hover:bg-gray-100"
            onClick={() => setIsEditOpen(true)}
        >
            <ShowRent isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)} rent={Rental} />
            <p>{Rental.UserEmail}</p>
            <button
                className="bg-red-600 text-white text-sm rounded-md px-2 py-1"
            >Remove</button>
        </div>
    );
}