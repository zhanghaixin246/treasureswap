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
    console.dir(currentAccounts)
    return currentAccounts[0];
}

async function createAccount(){
    newAccount = await web3.eth.accounts.create();
    return newAccount;
}

async function deployContract(contractData, sender) {
    const testContract = new web3.eth.Contract(contractData.abi);
    return testContract
        .deploy({
            arguments: [/*"1.0"*/],
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
            return contractInstance;
        })
        .catch(function (err) {
            // Contract failed to deploy
            console.error(err);
            process.exit();
        });
}

async function sendToken(address,receiver,sender) {

    const contract = new web3.eth.Contract(JSON.parse(fs.readFileSync('abi_testContract.json')), address);
    return contract.methods
        .sendToken(receiver,123456)
        .send({
            from: sender,
            gas: 500000,
            gasPrice: 1,
            value:123456,
        })
        .then(function (res) {
            console.log("哈哈哈哈哈  Add tx finalized in block: \t", res);
            console.dir(res);
            console.dir(res.events.ItemSet);
            return res;
        });
}

async function addTest(address,receiver,sender) {

    const contract = new web3.eth.Contract(JSON.parse(fs.readFileSync('abi_testContract.json')), address);
    return contract.methods
        .add()
        .send({
            from: sender,
            gas: 50000,
            gasPrice: 1
        })
        // .call()
        .then(function (res) {
            console.log("嘿嘿嘿嘿嘿  Add tx finalized in block: \t", res);
            // console.dir(res);
            console.dir(res.events.CounterLoghhhhhhhhhhhhh);
            return res;
        }).
        catch(function (err) {
            // Contract failed to deploy
            console.error(err);
            process.exit();
        });
}

async function testAddress(address,receiver,sender) {

    const contract = new web3.eth.Contract(JSON.parse(fs.readFileSync('abi_testContract.json')), address);
    return contract.methods
        .setAddresses()
        .send({
            from: sender,
            gas: 500000,
            gasPrice: 1
        })
        // .call()
        .then(function (res) {
            console.log("北京 : \t", res);
            // console.dir(res);
            console.dir(res.events.ItemSet1115);
            return res;
        }).
        catch(function (err) {
            // Contract failed to deploy
            console.error(err);
            process.exit();
        });
}


async function updateAddress(address,receiver,sender,addr) {
    const contract = new web3.eth.Contract(JSON.parse(fs.readFileSync('abi_testContract.json')), address);
    return contract.methods
        .updateCA(addr)
        .send({
            from: sender,
            gas: 500000,
            gasPrice: 1
        })
        // .call()
        .then(function (res) {
            console.log("更新合约地址 : \t", res);
            // console.dir(res);
            console.dir(res.events.UpdateContractAddress);
            return res;
        }).
        catch(function (err) {
            // Contract failed to deploy
            console.error(err);
            process.exit();
        });
}
// async function transderToContract(address,receiver,sender) {
//
//     const contract = new web3.eth.Contract(JSON.parse(fs.readFileSync('abi_testContract.json')), address);
//
//
//     // contract.methods.transfer(to, '1000000000000000000').send({
//     //     from: from
//     // }, function(error, transactionHash){
//     //     if (!error) {
//     //         console.log("交易hash：", transactionHash)
//     //     } else {
//     //         console.log(error)
//     //     }
//     // }).then(function (receipt) {//监听后续的交易情况
//     //     console.log(receipt)
//     //     console.log("交易状态：", receipt.status)
//     // });
//     return contract.methods
//         .transderToContract(3000)
//         .send({
//             value:30000,
//             from: sender,
//             gas: 500000,
//             gasPrice: 1
//         })
//         .then(function (res) {
//             console.log("1Add tx finalized in block: \t", res);
//             return res;
//         });
// }


// async function getBalanceOfContract(address,receiver,sender) {
//
//     const contract = new web3.eth.Contract(JSON.parse(fs.readFileSync('abi_testContract.json')), address);
//     return contract.methods
//         .getBalanceOfContract()
//         .call()
//         .then(function (res) {
//             console.log("2Add tx finalized in block: \t", res,123);
//             return res;
//         });
// }
async function getBalance(address,receiver){
    const contract = new web3.eth.Contract(JSON.parse(fs.readFileSync('abi_testContract.json')), address);
    return contract.methods
        .getBalance(receiver)
        .call()
        .then(function (res) {
            console.log("Add tx finalized in block: \t", res);
            return res;
        })
        .catch(function (err) {
            // Contract failed to deploy
            console.error(err);
            process.exit();
        });
}


async function run() {

    // Deploy and interact with accounts on node
    const sender = await getCurrentAccount();
    //const sender = "eth1wqwtdyudsy5yc90ekh0r8wj84jyctr9ueyhpdu"
    /*console.log("Deploying contract...");*/
    //const contract = await deployContract(contractData, sender);
    //console.log(contract);
    const receiverAddress = "0x0cAD13a32310D5DA088533deEBa4626057Bdf59c";
    const contract = "0x6AF610e19Ffa1214f5b618327ea29EF9C6DC1D36";
    const addr = "0x07FFb05B82d2FF07a6dC388D0ABE27C44985c1E9";
    0x31A89C9B005bd3a15d0a3d9Eb028D114bFf61A24
    //await web3.eth.sendTransaction({from:sender,to:receiverAddress,value:1000000000,gas:50000,gasPrice:1})


    console.log("bbb")
    console.dir(await getBalance(contract,receiverAddress));
    const receiverBalance1 = await web3.eth.getBalance(receiverAddress);
    console.dir(`receiver have:${receiverBalance1}` );
    const senderBalance1 = await web3.eth.getBalance(sender);
    console.dir(`sender have:${senderBalance1}` );


    // await sendToken(contract,receiverAddress,sender);
    // await addTest(contract,receiverAddress,sender);
    await testAddress(contract,receiverAddress,sender);
    await updateAddress(contract,receiverAddress,sender,addr);

    // await  transderToContract(contract,receiverAddress,sender);
    // await  getBalanceOfContract(contract,receiverAddress,sender);



    console.log("aaa")
    console.dir(await getBalance(contract,receiverAddress));
    const receiverBalance = await web3.eth.getBalance(receiverAddress);
    console.dir(`receiver have:${receiverBalance}` );
    const senderBalance = await web3.eth.getBalance(sender);
    console.dir(`sender have:${senderBalance}` );
    // await web3.eth.sendTransaction({from:sender,to:receiverAddress,value:10000000,gas:50000,gasPrice:1})
}

run()
