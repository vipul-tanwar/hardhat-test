require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    buildbear: {
      url: "https://rpc.dev.buildbear.io/productive-beru-whitesun-lars-969868b0",
    },
  },
};
