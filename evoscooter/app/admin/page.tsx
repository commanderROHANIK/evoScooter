import { getServerSession } from "next-auth";
import Header from "../components/common/header";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DataManager from "./dataManager";
import { getRentals, getSites, getUsers, getVehicles } from "./actions";

export default async function AdminPage() {
    const session = await getServerSession(authOptions);
    
    if (!session)
        redirect("/login");
        
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
            <Header />
            <DataManager rentals={await getRentals()} vehicles={await getVehicles()} users={await getUsers()} sites={await getSites()}/>
        </div>
    );
}