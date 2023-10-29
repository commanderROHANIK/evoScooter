'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Login() {

  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [site, setSite] = useState('');

  const submit = async () => {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
        site
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (data.resp == 200) {
      router.push("/login");
    }
    console.log(data);
  }

  return (
    <div className="h-screen flex items-center">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white rounded-xl">
        <div className="m-6">
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              id="name"
              name="name"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="m-6">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              id="email"
              name="email"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="m-6">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="m-6">
          <div className="flex items-center justify-between">
            <label htmlFor="passwordAgain" className="block text-sm font-medium leading-6 text-gray-900">
              Password again
            </label>
          </div>
          <div className="mt-2">
            <input
              id="passwordAgain"
              name="passwordAgain"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="m-6">
          <div className="flex items-center justify-between">
            <label htmlFor="site" className="block text-sm font-medium leading-6 text-gray-900">
              Site
            </label>
          </div>
          <div className="mt-2">
            <select
              value={site}
              onChange={e => setSite(e.target.value)}
              name="sites"
              id="sites"
              form="carform"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option value="budapest">Budapest</option>
              <option value="miskolc">Miskolc</option>
              <option value="szeged">Szeged</option>
            </select>
          </div>
        </div>

        <div className="m-6">
          <button
            type="button"
            onClick={submit}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Registrate
          </button>
        </div>
      </div>
    </div>
  )
}
