import Header from "../commonComponents/header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getVehicles } from "./actions";


export default async function Login() {
    const vehicles = await getVehicles();
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
            <Header />
            {
                vehicles.map((vehicle) => {
                    return (
                        <div
                            key={vehicle.id}
                            className="bg-white m-5 text-black rounded-xl h-16">
                            <p>{vehicle.Type}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
