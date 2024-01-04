import { UserData } from "@/types";
import { useState } from "react";
import ShowUser from "./ShowUser";
import { removeUser } from "../../actions";

export default function UserCard(User: UserData) {
    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <div
            key={User.Email}
            className="bg-white m-5 text-black rounded-xl h-16"
            onClick={() => setIsEditOpen(true)}
        >
            <ShowUser isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)} user={User} />
            <p>{User.Name}</p>
            <button
                className="bg-red-600 text-lg text-black rounded-md"
                onClick={() =>
                    removeUser(User.Email).then(() => console.log("done")).catch((error) => console.log(error))
                }
            >Remove</button>
        </div>
    );
}