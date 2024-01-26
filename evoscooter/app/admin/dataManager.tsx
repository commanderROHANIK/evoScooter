"use client";

import { RentProps, SiteProps, UserProps, VehicleData } from "@/types";
import Rents from "../components/Rents/rents";
import Sites from "../components/SiteList/sites";
import Users from "../components/UserList/users";
import Vehicles from "../components/VehicleList/vehicles";
import { useState } from "react";

interface DataManageProps {
    rentals: RentProps;
    vehicles: VehicleData[];
    users: UserProps;
    sites: SiteProps;
}

export default function DataManager({ rentals, vehicles, users, sites }: DataManageProps) {
    const [cardId, setCardId] = useState(1);

    return (
        <div
            className="mt-6">
            <button
                onClick={() => setCardId(1)}
                className='justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ml-4'>
                Rentals</button>
            <button
                onClick={() => setCardId(2)}
                className='justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ml-4'>
                Vehicles</button>
            <button
                onClick={() => setCardId(3)}
                className='justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ml-4'>
                Users</button>
            <button
                onClick={() => setCardId(4)}
                className='justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ml-4'>
                Sites</button>

            {cardId === 1 && (
                <Rents Rentals={rentals} />
            )}

            {cardId === 2 && (
                <Vehicles AllVehicles={vehicles} IsAdmin={true} Email="" />
            )}

            {cardId === 3 && (
                <Users Users={users} />
            )}

            {cardId === 4 && (
                <Sites Sites={sites} />
            )}
        </div>
    );
}