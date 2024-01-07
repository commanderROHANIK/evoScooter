import { MouseEventHandler } from "react";

export interface AddPopupProps {
    isOpen: boolean;
    closeModal: () => void;
}

export interface EditVehicleProps extends AddPopupProps {
    vehicle: VehicleData;
}

export interface EditUserProps extends AddPopupProps{
    user: UserData;
}

export interface EditSiteProps extends AddPopupProps{
    site: SiteData;
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
    Rentable: number;
    Address: string;
}

export interface VehicleProps {
    Vehicles: Array<VehicleData>;
}

export interface RentVehicleProps {
    Email: string
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