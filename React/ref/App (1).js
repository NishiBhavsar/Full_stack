import './App.css';
import React, { useRef } from "react";
// import Sidebar from "./Components/Button";
// import React, { createRef } from "react";
import ReactDOM from 'react-dom';
import Sidebar from "./Components/Test";

function App() {
    
  const SidebarRef = useRef()
  
  // render(){
    return(
      <>
      <button onClick={() => SidebarRef.current.opensideBar()}>Show SideBar</button>
      <Sidebar ref={SidebarRef}/>
    </>
    )
  // }
}

// function App() {
  //   const buttonRef = useRef(null);

//   const handleClick = () => {
//     console.log(Object.keys(buttonRef.current)); // ['someExposedProperty']
//     console.log("click in index.tsx");
//     buttonRef.current.someExposedProperty();
//   };

//   return (
//     <div>
//       <Button onClick={handleClick} ref={buttonRef} />
//     </div>
//   );
// }

ReactDOM.render(< App />, document.getElementById('root'));
export default App;