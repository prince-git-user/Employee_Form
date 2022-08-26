
import { useState } from 'react';
import './App.css';
import { AddEmployee } from './Components/AddEmployee';
import { ShowEmployee } from './Components/ShowEmployee';

function App() {

  const [toggle,setToggle]=useState(true);
  const handlestate=()=>{
    setToggle(!toggle)
  }
    //background-color: #4CAF50; /* Green */
  // border: none;
  // color: white;
  // padding: 15px 32px;
  // text-align: center;
  // text-decoration: none;
  // display: inline-block;
  // font-size: 16px;
   
      if(toggle){
        return (
          <div className='App' >
          <button style={{backgroundColor:"#4CAF50",border:"none",color:"white",
          padding:"15px 32px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"16px"}} onClick={handlestate}>Show Existing Employee</button>
          <AddEmployee/>

          </div>
        )
      }
      else{
        return (
          <div className='App'>
       <button style={{backgroundColor:" #008CBA",border:"none",color:"white",
          padding:"15px 32px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"16px"}} onClick={handlestate}>Add New  Employee</button>
        <ShowEmployee/>
          </div>
        )
        
      }
      
      
      
      
      
   

}

export default App;
