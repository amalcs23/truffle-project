var Web3 = require('web3');
require("dotenv").config();
const getWeb3 = require ("./getWeb3");

const MyContract = require('../build/contracts/HelloWorld.json');
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_API_KEY));
const init1 = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[networkId];


    const helloWorld = new web3.eth.Contract(MyContract.abi, deployedNetwork && deployedNetwork.address,);

    const response = await helloWorld.methods.get().call();

    console.log(response);

}
init1();

