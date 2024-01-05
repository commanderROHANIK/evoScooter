import Header from "../commonComponents/header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getVehicles } from "./actions";
import RentVehicleCard from "./components/RentVehicleCard";
import { VehicleData } from "@/types";
import Vehicles from "./components/VehicleList";


export default async function Login() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
            <Header />
            <Vehicles Vehicles={await getVehicles()} />
        </div>
    )
}
