import { MouseEventHandler } from "react";

export interface AddVehicleProps {
    isOpen: boolean;
    closeModal: () => void;
}

export interface AddUserProps {
    isOpen: boolean;
    closeModal: () => void;
}

export interface EditVehicleProps {
    isOpen: boolean;
    closeModal: () => void;
    vehicle: VehicleData;
}

export interface AddSiteProps {
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

export interface SiteData {
    Address: string;
}

export interface SiteProps {
    Sites: Array<SiteData>;
}

export interface UserData {
    Email: string;
    Name: string;
    LicenseNumber: string;
    Type: string;
    SiteAddress: string;
}

export interface UserProps {
    Users: Array<UserData>;
}