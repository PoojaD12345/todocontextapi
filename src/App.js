
import { useContext } from 'react';
import './App.css';
import Todos from './components/Todos';
import { Autherizedcontext } from './context/Autherizedcontext';

function App() {
  const {isAutherized,login,logout}=useContext(Autherizedcontext)
  return (
    <div className="App">
      
        <button onClick={()=>{
          if(isAutherized)logout();
          else login("R","Z")
        }}>{isAutherized ? "logout":"login"}</button>
      {isAutherized && <Todos/>}
     
    </div>
  );
}

export default App;
