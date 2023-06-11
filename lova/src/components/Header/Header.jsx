import React from 'react';
import { Link } from 'react-router-dom';
import {connectWallet} from '../../services/Services'
import logo from '../../assets/logoTransparentBackground.webp'

export function HeaderHome() {

  return (
    <>
    <Link to="/">
      <figure id="homeBtn"> 
        <img src="" id="homeBtnImg" alt="Home"></img>
      </figure>
      </Link>
      <Link to="/dapp">
      <button id="dappLaunchBtn">Launch dApp</button>
      </Link>
    </>
  );
}

export function HeaderApp() {
  const handleConnect = () => {
    // Add your connect to wallet functionality here
  };

  return (
   <>
   <Link to='/'>
      <figure id="homeBtn">
        <img src={logo} id="homeBtnImg" alt="Home"></img>
      </figure>
      </Link>
      <button id="connectWalletBtn" onClick={handleConnect}>Connect Wallet</button>
    </>
  );
}