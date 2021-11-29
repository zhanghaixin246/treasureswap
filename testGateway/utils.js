/**
 *@desc
 *@author ChrisChiu
 *@date 2021/8/28
 */


const path = require("path");
const solc = require("solc");
const fs = require("fs");

module.exports = {
    createConfiguration: function () {
        return {
            language: "Solidity",
            settings: {
                outputSelection: {
                    // return everything
                    "*": {
                        "*": ["*"]
                    }
                }
            }
        };
    },
    compileSources: function (config) {
        try {
            return JSON.parse(solc.compile(JSON.stringify(config)));
        } catch (e) {
            console.log(e);
        }
    },
    printCompileErrors: function (compiledSources) {
        if (!compiledSources) {
            console.error("No compiled output for contract");
        } else if (compiledSources.errors) {
            // something went wrong.
            compiledSources.errors.map(error =>
                console.error(error.formattedMessage)
            );
        }
    },
    getCounterContractData: function (compiledSource, name) {
        if (compiledSource) {
            try {
                contractData = compiledSource.contracts[name + ".sol"][name];
                fs.writeFileSync(`abi_${name}.json`,JSON.stringify(contractData.abi));
                return {
                    abi: contractData.abi,
                    bytecode: contractData.evm.bytecode.object
                };
            } catch (err) {
                console.error("could not retrieve contract data", err)
            }
        }
    }
};