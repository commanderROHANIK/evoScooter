import { updateRentState } from "@/app/admin/actions";
import { EditRentProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ShowSite = ({ isOpen, closeModal, rent }: EditRentProps) => {
    const startTime = new Date(rent.StartTime).toLocaleDateString();
    const endTime = new Date(rent.EndTime).toLocaleDateString();
    let state = rent.State === "Pending";
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
                                    <p>Requesting use: {rent.UserEmail}</p>
                                    <p>State: {rent.State}</p>
                                    <p>Vehicle: {rent.VehicleId}</p>
                                    <p>Start time: {startTime}</p>
                                    <p>End time: {endTime}</p>
                                    {state && (<span>
                                        <button
                                            className="bg-green-600 text-lg text-white rounded-md w-full p-1"
                                            onClick={async () => await updateRentState(rent, "Approved")}
                                        >Approve</button>
                                        
                                        <button 
                                            className="bg-red-600 text-lg text-white rounded-md w-full mt-4 p-1" 
                                            onClick={async () => await updateRentState(rent, "Declined")}
                                        >Decline</button>
                                    </span>)}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default ShowSite;