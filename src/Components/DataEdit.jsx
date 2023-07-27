import React, { useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { useState } from "react";

const DataEdit = (props) => {
    const {state}=useLocation();
    console.log("ssssssssss",state)
    const navigate=useNavigate()

    const[payload,setPayload]=useState();
    // const[editdata,setEditData]=useState();

    useEffect(() => {
        axios
            .post("http://localhost:4001/api/users/getbyId",state)
            .then((response) => {
                console.log("res.....", response?.data)
                setPayload(response?.data?.data)
                console.log("aaa......",response?.data?.data)
            })
    }, [])


    const handleInputchange=(e)=>{

        console.log("name.....",e.target.name)
        console.log("value...",e.target.value)

        setPayload({
            ...payload,
            [e.target.name]:e.target.value
            
            
        })
        

  }


    const handleSubmit=(e)=>{
        axios
        .post("http://localhost:4001/api/users/update",payload)
        .then((response) => {
            console.log("res.....", response?.data)
            setPayload(response?.data?.data)
            // console.log("aaa......",response?.data?.data)
            navigate('/show-data')
        })
         }

    return (

        <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4">
                <h1>Registration form</h1>
                <div className='form-container'>
                    <form>
                        <label> Firstname </label>
                        <input type="text" className='form-control' name="firstName" size="15"  onChange={(e) => handleInputchange(e)} value={payload?.firstName} />
                        <label> Middlename: </label>
                        <input type="text" className='form-control' name="middleName" size="15" value={payload?.middleName} onChange={(e) => handleInputchange(e)} />
                        <label> Lastname: </label>
                        <input type="text" className='form-control' name="lastName" size="15" value={payload?.lastName} onChange={(e) => handleInputchange(e)} />
                        <label> Phone: </label>
                        <input type="text" className='form-control' name="phone" size="10" value={payload?.phone} onChange={(e) => handleInputchange(e)} />
                        <label>  Email: </label>
                        <input type="email" id="email" className='form-control' name="email" value={payload?.email} onChange={(e) => handleInputchange(e)} />
                        <label> Address: </label>
                        <textarea cols="80" className='form-control' name="address" value={payload?.address} rows="5" onChange={(e) => handleInputchange(e)} />
                        <input type="button" style={{ float: "right" }} className='btn btn-primary' value="Submit" onClick={(e) => {
                            handleSubmit(e)
                        }} />
                    </form>
                </div>
            </div>

            <div className="col-md-4"></div>
        </div>



    )



}
export default DataEdit;