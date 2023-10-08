import web3 from "../ethereum/web3";
import Vehicle from '../ethereum/build/Vehicle.json';

export default (address) => {
    return new web3.eth.Contract(
        Vehicle.abi,
        address
    );
};