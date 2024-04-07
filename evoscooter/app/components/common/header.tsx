"use client"

import Image from 'next/image';
import logo from '../../../public/evoLogo.png';
import { useRouter } from "next/navigation";
import { signOut } from 'next-auth/react';

export default function Header() {
    const router = useRouter();
    const navigateToHomePage = () => {
        router.push("/home")
    }
    const navigateToAdminPage = () => {
        router.push("/admin")
    }
    const navigateToProfilePage = () => {
        router.push("/profile")
    }

    return (
        <nav className="bg-black rounded-xl">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Image
                className="h-12 w-auto"
                src={logo}
                alt="evosoft Logo"
            />
              
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">
                            <button
                                onClick={navigateToHomePage}>
                                Home
                            </button>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">
                            <button
                                onClick={navigateToAdminPage}>
                                Admin page
                            </button>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">
                            <button
                                onClick={navigateToProfilePage}>
                                Profile
                            </button>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">
                            <span
                                onClick={() => signOut({callbackUrl: "/"})}>
                                Logout
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}