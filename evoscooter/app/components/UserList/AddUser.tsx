import { AddPopupProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { handleAddUserSubmit } from "../../admin/actions";

const AddUser = ({ isOpen, closeModal }: AddPopupProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-out duration-300'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                                    <form action={handleAddUserSubmit} className="h-screen flex items-center">
                                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white rounded-xl">
                                            <div className="m-6">
                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Email
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="text"
                                                        required
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>
                                            <div className="m-6">
                                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        required
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>
                                            <div className="m-6">
                                                <label htmlFor="licenseNumber" className="block text-sm font-medium leading-6 text-gray-900">
                                                    License number
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="licenseNumber"
                                                        name="licenseNumber"
                                                        type="text"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>
                                            <div className="m-6">
                                                <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Type
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="type"
                                                        name="type"
                                                        type="text"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>
                                            <div className="m-6">
                                                <label htmlFor="sites" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Site
                                                </label>
                                                <select
                                                    name="sites"
                                                    id="sites"
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
                                                    <option value="Budapest">Budapest</option>
                                                    <option value="Miskolc">Miskolc</option>
                                                    <option value="Szeged">Szeged</option>
                                                </select>
                                            </div>
                                            <div className="m-6">
                                                <button
                                                    type="submit"
                                                    className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default AddUser;