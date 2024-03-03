type VehicleData = {
    id: string;
    type: string;
    rentable: string;
    siteAddress: number;
};

type UserData = {
    email: string;
    name: string;
    licenseNumber: string;
    type: string;
    password: string;
    siteAddress: string;
};

export { VehicleData, UserData };