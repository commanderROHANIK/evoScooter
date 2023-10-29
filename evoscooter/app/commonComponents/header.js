"use client"

import Image from 'next/image';
import logo from '../../public/evoLogo.png';
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const navigateToHomePage = () => {
        router.push("/home")
    }
    const navigateToAdminPage = () => {
        router.push("/admin")
    }
    /*
    <div className="header rounded-xl bg-black">
            <Image
                className="h-12 w-auto m-5"
                src={logo}
                alt="evosoft Logo"
            />
            <div>
                <button
                    onClick={navigateToAdminPage}>
                    Admin page
                </button>
            </div>
        </div>

          <a href="https://flowbite.com/" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
    */

    return (
        <nav class="bg-black rounded-xl">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Image
                className="h-12 w-auto"
                src={logo}
                alt="evosoft Logo"
            />
              
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">
                            <button
                                onClick={navigateToHomePage}>
                                Home
                            </button>
                        </li>
                        <li class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">
                            <button
                                onClick={navigateToAdminPage}>
                                Admin page
                            </button>
                        </li>
                        <li class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">
                            Services
                        </li>
                        <li class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">
                            Pricing
                        </li>
                        <li class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent">
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}