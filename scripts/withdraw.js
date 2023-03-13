// 0x5FbDB2315678afecb367f032d93F642f64180aa30aa3

async function main() {
    const LockContract = await ethers.getContractFactory("Lock");
    const lockContract = await LockContract.attach("0xEd54586A2A5B826195839be78D6D7fB64177FA5B");
    const withdrawTx = await lockContract.withdraw();
    console.log("withdrawTx:", withdrawTx.hash); 

    const receipt = await withdrawTx.wait();
    console.log("receipt:", receipt);

}

main()