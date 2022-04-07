import './App.css';
import React, { useRef } from "react";
// import ReactDOM from 'react-dom';
import Sidebar from "./Components/Demo";

function App() {
  const SidebarRef = useRef()
    return(
      <>
        <button onClick={() => SidebarRef.current.opensideBar()}>Show SideBar</button>
        <Sidebar ref={SidebarRef}/>
      </>
    )
}
export default App;