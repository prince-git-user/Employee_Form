import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import "./Form.css"
export const ShowEmployee=()=>{
const  [data,setData]=useState([]);
useEffect(()=>{
getuser();

},[])

const getuser=async()=>{
   const response=await fetch("http://localhost:8080/employee");
   const result=await response.json();
   console.log(result);
   setData(result)
}
    return (
        <>
        <div className="title"> <h1 >List of Existing Employee</h1></div>
        <div className="show-div" >
            
           
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile number</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Hobby</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map(e=>{
                        return(
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.mobile}</td>
                                <td>{e.dob}</td>
                                <td>{e.gender}</td>
                                <td>{e.hobbie}</td>
                                <td>{"Delete"}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}