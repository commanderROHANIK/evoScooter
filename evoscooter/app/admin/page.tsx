import { getServerSession } from "next-auth";
import Header from "../components/common/header";
import { getRentals, getSites, getUsers, getVehicles } from "./actions";
import Rents from "../components/Rents/rents";
import Sites from "../components/SiteList/sites";
import Users from "../components/UserList/users";
import Vehicles from "../components/VehicleList/vehicles";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function AdminPage() {
    const session = await getServerSession(authOptions);
    
    if (!session) {
        redirect("/login");
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
            <Header />
            <Rents Rentals={await getRentals()}/>
            <Vehicles AllVehicles={await getVehicles()} IsAdmin={true}/>
            <Users Users={await getUsers()}/>
            <Sites Sites={await getSites()}/>
        </div>
    );
}