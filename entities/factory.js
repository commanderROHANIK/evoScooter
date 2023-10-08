import web3 from "../ethereum/web3";
import Factory from '../ethereum/build/Factory.json';

const instance = new web3.eth.Contract(
    Factory.abi,
    '0x8a53Ad86E73904F3c7D8aEE8b7Fd8abEd304DE26'
);

export default instance;