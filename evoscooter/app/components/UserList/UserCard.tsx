import { UserData } from "@/types";
import { useState } from "react";
import ShowUser from "./ShowUser";
import { removeUser } from "../../admin/actions";

export default function UserCard(User: UserData) {
    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <div
            key={User.Email}
            className="bg-white bg-opacity-80 my-6 text-black rounded-xl h-16 flex items-center justify-between px-4 cursor-pointer hover:bg-gray-100"
            onClick={() => setIsEditOpen(true)}
        >
            <ShowUser isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)} user={User} />
            <p>{User.Name}</p>
            <button
                className="bg-red-600 text-white text-sm rounded-md px-2 py-1"
                onClick={() =>
                    removeUser(User.Email).then(() => console.log("done")).catch((error) => console.log(error))
                }
            >Remove</button>
        </div>
    );
}