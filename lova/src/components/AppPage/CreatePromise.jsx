import createIcon from '../../assets/createIcon.webp'

export const CreatePromise = () => {
    return (
        <>
        <summary className="menuTitles fontTitle" ><img className="interfaceIcon" src={createIcon}></img>Create</summary>
        <form id="createSmartPromiseInterface" className="bottomInterface">

        <input type="text" id="promiseTitle" name="promiseTitle" className="inputStyling" placeholder="Title for your promise"></input>
        <input type="number" id="promiseCollateral" name="promiseCollateral" className="inputStyling" placeholder="Promise collateral" step="0.000000000000000001"></input>
   
        <button id="createPromiseBtn" className="interfaceBtns" type="button">Create Promise </button>
         <p id="successfulPromiseUID"  className="sectionOneSmallText"> </p>
         <p id="countdownTimer" class="sectionOneSmallText"> </p>

</form>

        </>
    )
}