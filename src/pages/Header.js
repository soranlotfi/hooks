import {Link} from "react-router-dom";

const Header = ()=>{

    return(
        <div className="header">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/bye'>Bye</Link>
            <Link to='/mem'>memo</Link>
            <Link to='/reducer'>reducer</Link>
        </div>
    )
}

export default Header;