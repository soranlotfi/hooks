import PageLayOut from "./pageLayOut";


import {Login} from "./Login";
import {useContext} from "react";



const Home = () => {
    return (<PageLayOut hShow={true}>
        <div className="msg-container">
            <h1 className="Home">Home</h1>

        </div>
    </PageLayOut>)
}
export default Home;