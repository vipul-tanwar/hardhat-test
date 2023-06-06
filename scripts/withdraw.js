// 0x5FbDB2315678afecb367f032d93F642f64180aa30aa3
// 0x74Bb4b87dB264F5F10D386a5005970fDcF431a4C
// 0xc58fb06C85e1abB4c6a1cF223F9b15b5C8108491

async function main() {
    const LockContract = await ethers.getContractFactory("Lock");
    const lockContract = await LockContract.attach("0xE533425D0962BAcE0292595D61Bff4Fe8A9aC299");
    
    // Increase time 
    // await ethers.provider.send("evm_increaseTime", [146500]);

    // await ethers.provider.send("evm_mine");

    const withdrawTx = await lockContract.withdraw();
    console.log("withdrawTx:", withdrawTx.hash); 

    const receipt = await withdrawTx.wait();
    console.log("receipt:", receipt);

}
main()