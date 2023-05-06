import PageLayOut from "./pageLayOut";


import {Login} from "./Login";
import {useContext} from "react";
import {UserContext} from "./UserContext";


const Home = () => {
const {user , setUser} = useContext(UserContext)
    return (<PageLayOut hShow={true}>
        <div className="msg-container">
            <h1 className="Home">Home</h1>
            <h4>{user}</h4>
            <button onClick={()=>setUser("hamidreza sadr")}>Change</button>
        </div>
    </PageLayOut>)
}
export default Home;