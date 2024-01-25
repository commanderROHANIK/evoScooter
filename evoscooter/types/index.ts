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

export interface EditRentProps extends AddPopupProps {
    rent: RentData;
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
    Email: string;
}

export interface SiteData {
    Address: string;
}

export interface SiteProps {
    Sites: Array<SiteData>;
}

export interface RentData {
    UserEmail: string;
    VehicleId: string;
    StartTime: string;
    EndTime: string;
    State: string;
}

export interface RentProps {
    Rentals: Array<RentData>;
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