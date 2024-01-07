import { EditVehicleProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { rentVehicle } from "../actions";

interface RentVehicleProps extends EditVehicleProps {
    email: string;
}

const RentVehicleDetailsCard = ({ isOpen, closeModal, vehicle, email }: RentVehicleProps) => {
    if (vehicle.Rentable === 0)
        return;

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
                                <Dialog.Panel className='relative text-black w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                                    <form action={rentVehicle} className="flex items-center">
                                        <input id="email" name="email" value={email} type="hidden" />
                                        <input id="vehicle" name="vehicle" value={vehicle.Id} type="hidden" />
                                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white rounded-xl">
                                            <div className="m-6">
                                                <label htmlFor="start" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Start Date
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="start"
                                                        name="start"
                                                        type="datetime-local" // Ez lesz a dátum-idő mező típusa
                                                        required
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                            <div className="m-6">
                                                <label htmlFor="end" className="block text-sm font-medium leading-6 text-gray-900">
                                                    End Date
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="end"
                                                        name="end"
                                                        type="datetime-local" // Ez lesz a második dátum-idő mező típusa
                                                        required
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                            <div className="m-6">
                                                <button
                                                    type="submit"
                                                    className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                                >
                                                    Rent
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

export default RentVehicleDetailsCard;