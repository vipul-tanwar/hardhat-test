require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    buildbear: {
      url: "https://rpc.dev.buildbear.io/Deaf_Dooku_a573962d",
    }
  },
};
