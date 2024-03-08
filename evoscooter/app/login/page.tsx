"use client"

import Link from "next/link"
import {signIn} from "next-auth/react"

export default function Login() {

  const handleLogin = () => {
    signIn("azure-ad", {callbackUrl: "http://localhost:3000/home"});
  }

  return (
    <div className="h-screen flex items-center">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white rounded-xl" >
        <div className="m-6">
          <button
            type="button"
            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            onClick={handleLogin}
          >
            Sign in
          </button>
        </div>
        <div className="m-6">
          <Link
            href="/registration"
            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            Registrate
          </Link>
        </div>
      </div>
    </div>
  )
}
