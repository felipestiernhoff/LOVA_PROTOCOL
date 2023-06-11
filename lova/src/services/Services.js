import web3 from 'web3'

//Realized that ether.js is needed and now web3, will make integration later.

export const Services = () => {

////CONFIG SHIT/////

// const smartPromiseAddress = "0xBFB0F5eff414ed83Ff7A55D5647DF12E28b1E948";
// const network = "goerli"
// const apiKey = "839f70b5cbfc4b13a4f4ba5a1f24423a"
// const provider = new ethers.providers.InfuraProvider(network, apiKey);
// const smartPromiseContract = new ethers.Contract(smartPromiseAddress, smartPromiseAbi, provider);
// let signer; 
////CONFIG OVER/////


    
async function connectWallet() {
    // if (typeof window.ethereum !== "undefined") {
    //     await window.ethereum.request({
    //         method: "eth_requestAccounts",
    //     });
    //     checkConnection();
    //     signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();
    //     smartPromiseContract.connect(signer);
    //     const successfulPromiseUID = document.getElementById("successfulPromiseUID");
    //     listenToEvent(successfulPromiseUID);
    //     return true;
    // } else {
    //     alert("No metamask wallet detected");
    //     return false;
    // };
}

}