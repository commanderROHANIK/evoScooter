"use client";

import { useState } from "react";
import CustomButton from "../../../commonComponents/CustomButton";
import { UserProps } from "@/types";
import AddUser from "./AddUser";
import UserCard from "./UserCard";

export default function Users(AllUsers: UserProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex">
                <p className="text-lg font-medium leading-6 text-gray-900 py-2 px-4 rounded text-white px-12">Users</p>
                <CustomButton
                    title='Add'
                    containerStyles='justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ml-4'
                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                    handleClick={() => setIsOpen(true)}>
                </CustomButton>
            </div>
            <AddUser isOpen={isOpen} closeModal={() => setIsOpen(false)} />
            {
                AllUsers.Users.map((user) => {
                    return (
                        <UserCard Email={user.Email} Name={user.Name} LicenseNumber={user.LicenseNumber} Type={user.Type} SiteAddress={user.SiteAddress} />
                    );
                })
            }
        </div>
    );
}