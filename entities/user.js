import web3 from "../ethereum/web3";
import User from '../ethereum/build/User.json';

export default (address) => {
    return new web3.eth.Contract(
        User.abi,
        address
    );
};