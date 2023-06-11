import React from 'react';

export function HeaderHome() {
  return (
    <header id="header">
      <figure id="homeBtn"> 
        <img src="imgs/logoTransparentBackground.webp" id="homeBtnImg" alt="Home"></img>
      </figure>
      <button id="dappLaunchBtn">Launch dApp</button>
    </header>
  );
}

export function HeaderApp() {
  const handleConnect = () => {
    // Add your connect to wallet functionality here
  };

  return (
    <header id="header">
      <figure id="homeBtn">
        <img src="imgs/logoTransparentBackground.webp" id="homeBtnImg" alt="Home"></img>
      </figure>
      <button id="connectWalletBtn" onClick={handleConnect}>Connect Wallet</button>
    </header>
  );
}