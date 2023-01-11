let contentWrapper = document.getElementById("contentWrapper");

const walletConnectBtn = document.createElement("button");
walletConnectBtn.innerText = "Connect Wallet";
contentWrapper.appendChild(walletConnectBtn);

const provider = new ethers.providers.Web3Provider(window.ethereum);

let signer;

async function connectMetamask() {
	await provider.send("eth_requestAccounts", []);
	signer = provider.getSigner();
	smartPromiseContract.connect(signer);
  }

walletConnectBtn.addEventListener ("click", () => {
	connectMetamask();
});

const smartPromiseAddress = "0xccec26e3640a0F70808F78118863d045669e271D";

const smartPromiseAbi = [
	"function createSmartPromise(string memory _promiseTitle) public payable",
	"function joinPromise(uint _promiseUID) public payable",
	"function endSmartPromise(uint _promiseUID) public payable"];

const smartPromiseContract = new ethers.Contract(smartPromiseAddress, smartPromiseAbi, provider);

const smartContractInteraction = document.createElement("form");


let titleInput = document.createElement("input")
let valueInput = document.createElement("input")
let createPromiseBtn = document.createElement("button")
let uidInput = document.createElement("input")
let joinPromiseValue = document.createElement("input")
let joinPromiseBtn = document.createElement("button")
let endPromiseUidValue = document.createElement("input")
let endPromiseBtn = document.createElement("button")


titleInput.id = "titleInput";
valueInput.id = "valueInput";
createPromiseBtn.id = "createPromiseBtn";
uidInput.id = "uidInput";
joinPromiseValue.id = "joinPromiseValue"
joinPromiseBtn.id = "joinPromiseBtn";
endPromiseUidValue.id = "endPromiseUidValue";
endPromiseBtn.id = "endPromiseBtn";


titleInput.placeholder = "Title for promise";
valueInput.placeholder = "ETH amount";
uidInput.placeholder = "Promise ID";
joinPromiseValue.placeholder = "ETH amount (join)";
endPromiseUidValue.placeholder = "ID of promise you want to end";

createPromiseBtn.innerText = "Create SmartPromise";
joinPromiseBtn.innerText = "Join";
endPromiseBtn.innerText = "End Current Promise";
contentWrapper.append(titleInput, valueInput, createPromiseBtn, uidInput, joinPromiseValue, joinPromiseBtn, endPromiseUidValue, endPromiseBtn);

async function createSmartPromiseJS () {
	await connectMetamask();
	let smartPromiseTitle = titleInput.value;
	let smartPromiseValue = valueInput.value;
	const payableValue = {value: ethers.utils.parseEther(smartPromiseValue)}
	const txResponse = await smartPromiseContract.connect(signer).createSmartPromise(smartPromiseTitle,payableValue);
	await txResponse.wait()
  }
createPromiseBtn.addEventListener("click", () => {
	createSmartPromiseJS();
});


async function joinPromiseJS () {
	await connectMetamask();
	let uidInputValue = uidInput.value;
	let joinValue = joinPromiseValue.value;
	const payableValue = {value: ethers.utils.parseEther(joinValue)}
	const txResponse = await smartPromiseContract.connect(signer).joinPromise(uidInputValue,payableValue);
	await txResponse.wait()
}

joinPromiseBtn.addEventListener("click", () => {
	joinPromiseJS();
});

async function endPromiseJS () {
	await connectMetamask();
	let endValueID = endPromiseUidValue.value;
	const payableValue = {value: ethers.utils.parseEther("0")};
	const txResponse = await smartPromiseContract.connect(signer).endSmartPromise(endValueID,payableValue);
	await txResponse.wait()
}
endPromiseBtn.addEventListener("click", () => {
	endPromiseJS();
});