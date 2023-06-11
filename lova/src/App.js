import logo from './logo.svg';
import { Layout } from './components/Layout/Layout';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
           <section id="sectionOne" className="section">
        <h1 className="sectionTitles" id="sectionOneTitle">Setting a new standard for promises.</h1>
        <p className="sectionOneSmallText">We believe in a revolution within the DeFi space, and for that 
        trustworthy tools are needed to engage a trustless world of finance. 
        (THIS PAGE IS A UI EXAMPLE AND <b>NOT</b> THE FINAL DAPP)
        </p>
        </section>
        <section id="sectionTwo" className="section">
            <h1 className="sectionTitles" id="sectionTwoTitle">How to</h1>
            <article className="guideWrapper"> 
            <div className="card">
            <h1 className="guideWrapperTitle ">Step One:</h1>
            <p className="sectionOneSmallText guideWrapperSmallText">
                To get started with the LOVA dApp, you first need to have Metamask installed and logged in. Once you have that set up, simply visit the LOVA dApp website and connect your Metamask wallet to the platform.
            </p>
            </div>

            <div className="card">
            <h1 className="guideWrapperTitle">Step Two:</h1>
            <p className="sectionOneSmallText guideWrapperSmallText">
            Creating a promise on the LOVA dApp is easy. 
            Simply click on the "Create" button and follow the steps.
            First, you'll need to enter a title for your promise and deposit the desired amount of ETH. 
            After that, you'll be given a unique ID for your promise which you'll need to share with the other participant.
            </p>
            </div>
            
            <div className="card">
            <h1 className="guideWrapperTitle ">Step Three:</h1>
            <p className="sectionOneSmallText guideWrapperSmallText">
            In order for a promise to be completed, the other participant must accept it within 10 minutes. 
            Once both participants have accepted the promise, they'll both need to sign it in order to confirm their commitment. 
            Once both participants have signed the promise, the funds will be released to the initial depositor.
            </p>
            </div>
            </article>
        </section>
    </>
  
    );
}

export default App;
