import endIcon from '../../assets/endIcon.webp'

export const EndPromiseForm = () => {
    
    return (
    <>
<summary className="menuTitles fontTitle"><img className="interfaceIcon" src={endIcon}></img>End</summary>

<form id="endSmartPromiseInterface" className="bottomInterface">

    <input type="text" id="promiseIDToEnd" className="inputStyling" placeholder="ID to end Promise"></input>
    <div className="interfaceSelectDiv">
        <p className="interfaceTxt">Select desired action</p>
        <select className="interfaceSelect" id="endSelect"> 
            <option value="sign" id="signPromiseOption">Sign Promise</option>
            <option value="end" id="endPromiseOption">End Promise</option>
        </select>
    </div>
    <button id="endPromiseBtn" className="interfaceBtns" type="button"><p id="endP">Sign Promise</p></button>

</form>
    </>
    )
}