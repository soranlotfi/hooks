import Header from "./Header";
const pageLayOut = ({children , hShow})=>{
    return(
        <>
            {hShow?<Header/> :null}
            {children}
        </>
    )
}
export default pageLayOut;