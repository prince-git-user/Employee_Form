import { useState } from "react"
import axios from 'axios'
import "./Form.css"
export const AddEmployee=()=>{
    const [formdata,SetFormdata]=useState({})

    const handlechange=(e)=>{
     
        const {name,value}=e.target;
        SetFormdata({...formdata,[name]:value})
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post("  http://localhost:8080/employee",formdata);
        alert("One Employee have been added add more")
        window.location.reload()

    }
    return (
        <div className="form-div">
            <h1>Employee Form</h1>
        <form onSubmit={handlesubmit}>
           <div className="child-div">
            Name : <input onChange={handlechange} type="text" placeholder="Enter Full Name" name="name"></input>
           </div>
           <div className="child-div">
            Email : <input onChange={handlechange} type="email" placeholder="Enter email" name="email"></input>
           </div>
           <div className="child-div">
            Phone : <input onChange={handlechange} type="number" placeholder="10 Digit Mobile number" name="mobile"></input>
           </div>
           <div className="child-div">

            Gender : <input onChange={handlechange} type="radio" name="gender" value="Male"/> Male
               <input onChange={handlechange} type="radio" name="gender" value="Female"/> Female
           </div>
           <div className="child-div">
            DOB : <input onChange={handlechange} type="date" name="dob" />
           </div>
           <div className="child-div">
            Hobbies : <input onChange={handlechange} type="checkbox" name="hobbie" value="Sports"  /> 
                      <label >Sports</label>
                      <input onChange={handlechange} type="checkbox" name="hobbie" value="music"  /> 
                      <label >Music</label>
                      <input onChange={handlechange} type="checkbox" name="hobbie" value="reading"  /> 
                      <label >Reading</label>
           </div>
           <div className="child-div">
            <input type="submit" value="Submit" />
           </div>
        </form>
        
        </div>
    )
}