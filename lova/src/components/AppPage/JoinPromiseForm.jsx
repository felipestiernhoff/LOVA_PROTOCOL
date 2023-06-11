import joinIcon from '../../assets/joinIcon.webp'

export const JoinPromiseForm = () => {

    return (
        <>
        <summary className="menuTitles fontTitle">
        <img className="interfaceIcon" id="joinSymbol" src={joinIcon}></img>Join</summary>

        <form id="joinSmartPromiseInterface" className="bottomInterface">

        <input type="text" id="promiseID" className="inputStyling" placeholder="ID of active Promise"></input>
        <p className="interfaceTxt" id="joinPromiseSearchOutput">Promise Details Will Be Displayed here</p>
        <button id="joinPromiseBtn" className="interfaceBtns" type="button"><p id="joinP">Search Promise</p></button>

        </form>
        </>
    )
}