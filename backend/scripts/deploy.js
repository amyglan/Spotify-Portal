const main = async () => {
    const [owner] = await hre.ethers.getSigners();
    const accountBalance = await owner.getBalance();

    console.log("Contract deployed by: ", owner.address);
    console.log("Account balance: ", accountBalance.toString());

    const spotiyContractFactory = await hre.ethers.getContractFactory("SpotifyPortal");
    const spotifyContract = await spotiyContractFactory.deploy();
    await spotifyContract.deployed();

    
    console.log("Contract is deployed to: ", spotifyContract.address);
    
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();