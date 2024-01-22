import Header from "../components/common/header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getVehicles } from "./actions";
import Vehicles from "../components/VehicleList/vehicles";


export default async function Login() {
    const session = await getServerSession(authOptions);
    const vehicles = await getVehicles();

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
            <Header />
            <Vehicles AllVehicles={vehicles} IsAdmin={false} Email={session.user?.email!}/>
        </div>
    )
}
