const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
    const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/";

    const lw3PunksContract = await ethers.getContractFactory("LW3Punks");

    const deployedLW3Contract = await lw3PunksContract.deploy(metadataURL); //0x635ba3d16531c9436AF1895F1E1b568Be463d0D2

    await deployedLW3Contract.deployed();

    console.log( "LW3Punks deployed to: ",deployedLW3Contract.address);

}

main()
    .then(()=> {
        process.exit(0);
    })
    .catch((err)=>{
        console.err(err);
        process.exit(1);
    })