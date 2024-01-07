import Header from "../commonComponents/header";
import { getRentals, getSites, getUsers, getVehicles } from "./actions";
import Rents from "./components/Rents/rents";
import Sites from "./components/SiteList/sites";
import Users from "./components/UserList/users";
import Vehicles from "./components/VehicleList/vehicles";


export default async function AdminPage() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
            <Header />
            <Rents Rentals={await getRentals()}/>
            <Vehicles Vehicles={await getVehicles()}/>
            <Users Users={await getUsers()}/>
            <Sites Sites={await getSites()}/>
        </div>
    );
}