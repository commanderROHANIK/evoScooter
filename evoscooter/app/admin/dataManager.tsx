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
    const [cardId, setCardId] = useState(0);

    return (
        <div>
            <button onClick={() => setCardId(1)}>Rentals</button>
            <button onClick={() => setCardId(2)}>Vehicles</button>
            <button onClick={() => setCardId(3)}>Users</button>
            <button onClick={() => setCardId(4)}>Sites</button>

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