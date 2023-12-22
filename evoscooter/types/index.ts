import { MouseEventHandler } from "react";

export interface AddVehicleProps {
    isOpen: boolean;
    closeModal: () => void;
}

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface VehicleData {
    Id: number;
    Type: string;
    Rentable: boolean;
    Address: string;
}

export interface VehicleProps {
    Vehicles: Array<VehicleData>;
}