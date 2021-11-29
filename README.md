### contract transfer and web3 transfer demo

- how to use

```shell
cd testGateway

npm install

node ./scripts/deployContract.js
# Find and COPY contract Address and new Account like this 
# new Account is 0xa4099083EF3bbfB5d9F9e5F9E32698b77842b04c
# Deployed contract Address: 	 0x90c768f1F0dfc13B2008Aa6DB48b7f9f6B58fad1
# WRITE contract Address and receiverAccount in ./scripts/test.js like this
# const contract = "0x90c768f1F0dfc13B2008Aa6DB48b7f9f6B58fad1"
# const receiverAddress = "0x26bFE3db558aF81a1E28ECcE1B2E8618cc6B56C0";
node ./scripts/test.js 
```

- i don't know why has this error

```shell
 Error: Transaction has been reverted by the EVM:
{
  "blockHash": "0x53cbab8a5bd04eae3c316b467eaafdf75fedc945aaa6b657d0a49e60a39fe047",
  "blockNumber": 1438,
  "contractAddress": "0x0000000000000000000000000000000000000000",
  "cumulativeGasUsed": null,
  "from": "0x701cb6938d81284c15f9b5de33ba47ac89858cbc",
  "gasUsed": 9859,
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "status": false,
  "to": "0x90c768f1f0dfc13b2008aa6db48b7f9f6b58fad1",
  "transactionHash": "0x02420c8553bbbea46a10d401604189f58946e08b206cc385e4f4fb8a8d55689c",
  "transactionIndex": 0,
  "events": {}
}
/data/treasureNet/treasureswap/testGateway/node_modules/solc/soljson.js:1
null;var Module=typeof Module!=="undefined"?Module:{};var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram="./this.program";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=false;ENVIRONMENT_IS_WEB=typeof window==="object";ENVIRONMENT_IS_WORKER=typeof importScripts==="function";ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof process.versions==="object"&&typeof process.versions.node==="string";ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;var nodeFS;var nodePath;if(ENVIRONMENT_IS_NODE){

RuntimeError: abort(Error: Transaction has been reverted by the EVM:
{
  "blockHash": "0x53cbab8a5bd04eae3c316b467eaafdf75fedc945aaa6b657d0a49e60a39fe047",
  "blockNumber": 1438,
  "contractAddress": "0x0000000000000000000000000000000000000000",
  "cumulativeGasUsed": null,
  "from": "0x701cb6938d81284c15f9b5de33ba47ac89858cbc",
  "gasUsed": 9859,
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "status": false,
  "to": "0x90c768f1f0dfc13b2008aa6db48b7f9f6b58fad1",
  "transactionHash": "0x02420c8553bbbea46a10d401604189f58946e08b206cc385e4f4fb8a8d55689c",
  "transactionIndex": 0,
  "events": {}
}). Build with -s ASSERTIONS=1 for more info.
    at process.abort (/data/treasureNet/treasureswap/testGateway/node_modules/solc/soljson.js:1:13012)
    at process.emit (events.js:198:13)
    at emitPromiseRejectionWarnings (internal/process/promises.js:140:18)
    at process._tickCallback (internal/process/next_tick.js:69:34)
```