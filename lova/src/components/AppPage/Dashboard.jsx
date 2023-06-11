import { CreatePromise } from "./CreatePromise"
import { EndPromiseForm } from "./EndPromise"
import { JoinPromiseForm } from "./JoinPromiseForm"


export const Dashboard = () => {


    return (
        <>
        <section id="interfaceSection">
            <details id="createPromiseInterface"><CreatePromise /></details>
            <details id="joinPromiseInterface"><JoinPromiseForm /></details>
            <details id="endPromiseInterface"><EndPromiseForm /></details>
        </section>
        


        </>
    )
}