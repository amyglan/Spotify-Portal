const main = async () => {
    const [owner, randomPerson, randomPerson1, randomPerson2] = await hre.ethers.getSigners();
    const spotiyContractFactory = await hre.ethers.getContractFactory("SpotifyPortal");
    const spotifyContract = await spotiyContractFactory.deploy();
    await spotifyContract.deployed();

    
    console.log("Contract is deployed to: ", spotifyContract.address);
    console.log("Contract deployed by: ", owner.address);

    let requestedSongCount;
    let requestedSongTxn;
    let requestPerPerson;

    requestedSongTxn = await spotifyContract.requestSong();
    requestedSongTxn = await spotifyContract.connect(randomPerson).requestSong();
    requestedSongTxn = await spotifyContract.connect(randomPerson1).requestSong();
    requestedSongTxn = await spotifyContract.connect(randomPerson2).requestSong();
    requestedSongTxn = await spotifyContract.connect(randomPerson).requestSong();
    await requestedSongTxn.wait();

    requestPerPerson = await spotifyContract.getRequestPerPerson();
    requestedSongCount = await spotifyContract.getTotalRequestedSongs();
    
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