import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./Home";
const RoutesApp = () => {
  return (
      <Routes>
        <Route path="/sai"  element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
  )
}
function App() {
  return (
    <>
      <RoutesApp/>
    </>

  );
}
export default App;
