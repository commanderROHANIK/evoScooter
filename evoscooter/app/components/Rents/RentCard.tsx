import { RentData } from "@/types";
import { useState } from "react";
import ShowRent from "./ShowRent";

export default function SiteCard(Rental: RentData) {
    const [isEditOpen, setIsEditOpen] = useState(false);
    
    return (
        <div
            key={Rental.UserEmail + Rental.VehicleId}
            className="bg-white m-5 text-black rounded-xl h-16"
            onClick={() => setIsEditOpen(true)}
        >
            <ShowRent isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)} rent={Rental} />
            <p>{Rental.UserEmail}</p>
            <button
                className="bg-red-600 text-lg text-black rounded-md"
            >Remove</button>
        </div>
    );
}