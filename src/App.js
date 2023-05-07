import {Routes,Route,BrowserRouter} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Bye from "./pages/Bye";
import UseMem from "./pages/usemem";
import Reducer from "./pages/Reducer";


function App() {

  return (

              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/bye" element={<Bye/>}/>
                      <Route path="/mem" element={<UseMem/>}/>
                      <Route path="/reducer" element={<Reducer/>}/>
                      {/*<Route path="/redCon" element={<RedCon/>}/>*/}
                  </Routes>
              </BrowserRouter>


  );
}

export default App;
