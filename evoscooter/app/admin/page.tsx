import Header from "../commonComponents/header";
import { getVehicles } from "./actions";
import Sites from "./components/sites";
import Users from "./components/users";
import Vehicles from "./components/vehicles";


export default async function AdminPage() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
            <Header />
            <Vehicles Vehicles={await getVehicles()}/>
            <Users />
            <Sites />
            Admin page
        </div>
    );
}