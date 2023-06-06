const { ethers } = require("hardhat");

const myAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockTime",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const myContractAddress = "0xd9E33145f1eDe3105bDc089FEe395E020178e7A5";

async function main() {
  //Get Contact Instance
  const contract  = ethers.getContractAt(myAbi, myContractAddress);

  //Get Current TimeStamp
  const currentTimestamp = (await ethers.provider.getBlock("latest")).timestamp;

  console.log("Current Timestamp:", currentTimestamp);

  // Advance the time by 1 hour (3600 seconds)
  const advanceTime = await ethers.provider.send("evm_increaseTime", [3600]);
  console.log("advanceTime:", advanceTime);

  // Mine a new block to confirm the timestamp change
  const mineNewBlock = await ethers.provider.send("evm_mine");
  console.log("mineNewBlock:", mineNewBlock);

  // Get the updated block timestamp
  const updatedTimestamp = (await ethers.provider.getBlock("latest")).timestamp;
  console.log(`Updated timestamp: ${updatedTimestamp}`);

  const result = await contract.myFunction(updatedTimestamp);
  console.log("Result ->", result);


}

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

async function main2(){
    const lock = await ethers.getContractAt("Lock", "0xd9E33145f1eDe3105bDc089FEe395E020178e7A5");

    // Increase time by 1 hour
    await ethers.provider.send("evm_increaseTime", [3600]);
    
    // Mine a new block to apply the increased time
    await ethers.provider.send("evm_mine");
    
    // Call the `unlock` function on the contract
    const tx = await lock.unlock();
    console.log(`Transaction sent: ${tx.hash}`);
    
    // Wait for the transaction to be mined and get the transaction receipt
    const receipt = await tx.wait();
    
    // Check if the transaction was successful
    if (receipt.status === 1) {
      console.log("Transaction successful!");
    } else {
      console.log("Transaction failed!");
    }
}
main2()