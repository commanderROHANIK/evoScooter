pragma solidity ^0.8.9;

contract Factory {
    address payable[] public Users;
    address payable[] public Vehicles;

    function CreateUser(string memory name, bool isFMUser) public {
        address newUser = address(new User(msg.sender, name, isFMUser));
        Users.push(payable(newUser));
    }

    function CreateVehicle(string memory id, string memory name, string memory chargerType, bool isOpenForRide) public {
        address newVehicle = address(new Vehicle(id, name, chargerType, isOpenForRide));
        Vehicles.push(payable(newVehicle));
    }

    function GetUsers() public view returns (address payable[] memory) {
        return Users;
    }

    function GetVehicles() public view returns (address payable[] memory) {
        return Vehicles;
    }
}

contract User {
    
    address public Id;
    string public Name;
    bool public IsFMUser;

    constructor (address id, string memory name, bool isFMUser) {
        Id = id;
        Name = name;
        IsFMUser = isFMUser;
    }

    function getSummary() public view returns (address, string memory, bool) {
        return (
            Id,
            Name,
            IsFMUser
        );
    }
}

contract Vehicle {
    
    string public Id;
    string public Name;
    string public ChargerType;
    bool public IsOpenForRide;

    constructor (string memory id, string memory name, string memory chargerType, bool isOpenForRide) {
        Id = id;
        Name = name;
        ChargerType = chargerType;
        IsOpenForRide = isOpenForRide;
    }

    function getSummary() public view returns (string memory, string memory, string memory, bool) {
        return (
            Id,
            Name,
            ChargerType,
            IsOpenForRide
        );
    }
}