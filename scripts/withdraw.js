// 0x5FbDB2315678afecb367f032d93F642f64180aa30aa3

async function main() {
    const LockContract = await ethers.getContractFactory("Lock");
    const lockContract = await LockContract.attach("0x992B6fB26175A7585DDF5B25Dea070aE4023238F");
    const withdrawTx = await lockContract.withdraw();
    console.log("withdrawTx:", withdrawTx.hash); 

    const receipt = await withdrawTx.wait();
    console.log("receipt:", receipt);

}
main()