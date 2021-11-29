/**
 *@desc
 *@author ChrisChiu
 *@date 2021/8/28
 */

const Web3 = require("web3");
const utils = require("../utils");
const fs = require("fs");
const path = require("path");

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

let newAccount;

async function getCurrentAccount() {
    const currentAccounts = await web3.eth.getAccounts();
    console.log("Unlocked account address: \t", currentAccounts[0]);


    const receiverBalance = await web3.eth.getBalance(currentAccounts[0]);
    console.dir(`currentAccounts[0] have:${receiverBalance}` );

    return currentAccounts[0];
}

async function createAccount() {
    newAccount = await web3.eth.accounts.create();

    // const receiverBalance = await web3.eth.getBalance(newAccount);
    // console.dir(`newAccount have:${receiverBalance}` );
    return newAccount.address;
}

async function deployContract(contractData, sender, args = []) {
    const testContract = new web3.eth.Contract(contractData.abi);
    return testContract
        .deploy({
            arguments: args,
            data: "0x" + contractData.bytecode
        })
        .send({
            from: sender,
            gas: 20000000,
            gasPrice: 1
        })
        .then(function (contractInstance) {
            console.log(
                "Deployed contract Address: \t",
                contractInstance.options.address
            );
            // console.dir(contractInstance)
            return contractInstance;
        })
        .catch(function (err) {
            // Contract failed to deploy
            console.error(err);
            process.exit();
        });
}

async function run() {
    // Compile contract
    console.log("Compiling contract code...");
    const config = utils.createConfiguration();
    config.sources = {
        "testContract.sol": {
            content: fs.readFileSync(
                path.resolve(__dirname, "..", "..", "contract", "testContract.sol"),
                "utf8"
            )
        }
    };
    const compiled = utils.compileSources(config);
    utils.printCompileErrors(compiled);
    contractData = utils.getCounterContractData(compiled, "testContract");
    if (contractData == undefined) {
        console.log("could not retrieve compiled contract data");
        process.exit();
    }

    // Deploy and interact with accounts on node
    const sender = await getCurrentAccount();
    console.log("Deploying contract...");
    const newAccount = await createAccount();
    console.log(`new Account is ${newAccount}`);
    const contract = await deployContract(contractData, sender);

    const receiverBalance = await web3.eth.getBalance(sender);
    console.dir(`currentAccounts[0] have:${receiverBalance}` );
    // console.log(contract);


}

run()