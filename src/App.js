import {Routes,Route,BrowserRouter} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Bye from "./pages/Bye";
import {UserContext} from "./pages/UserContext";
import {useState} from "react";
import UseMem from "./pages/usemem";
import Reducer from "./pages/useReducer";


function App() {
const [user , setUser] = useState("hello from use State Context")

  return (
      <UserContext.Provider value={{user,setUser}}>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/bye" element={<Bye/>}/>
                      <Route path="/mem" element={<UseMem/>}/>
                      <Route path="/reducer" element={<Reducer/>}/>
                  </Routes>
              </BrowserRouter>
      </UserContext.Provider>

  );
}

export default App;
