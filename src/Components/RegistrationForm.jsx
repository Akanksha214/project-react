import React, { useState } from 'react';
import '../Components/style.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const RegistrationForm = () => {
  const navigate=useNavigate()



  const [form, setForm] = useState()

  
  console.log("sssss",form)

  const handleInputchange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      
    })
  };

  const handleSubmit = (e) => {
    console.log("datttt",form);
     e.preventDefault();
    axios 
    .post("http://localhost:4001/api/users/add",form)
    .then((response)=>{
      console.log("res......",response)

      if(response?.data){
        console.log("record insert");
        navigate('/show-data')
        setForm({});
      }
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
            <input type="text" className='form-control' name="firstName" size="15" onChange={(e) => handleInputchange(e)} />
            <label> Middlename: </label>
            <input type="text" className='form-control' name="middleName" size="15" onChange={(e) => handleInputchange(e)} />
            <label> Lastname: </label>
            <input type="text" className='form-control' name="lastName" size="15" onChange={(e)=>handleInputchange(e)} />
            <label> Phone: </label>
            <input type="text" className='form-control' name="phone" size="10" onChange={(e)=>handleInputchange(e)} />
            <label>  Email: </label>
            <input type="email" id="email" className='form-control' name="email" onChange={(e)=>handleInputchange(e)} />
            <label> Address: </label>
            <textarea cols="80" className='form-control' name="address" rows="5" onChange={(e)=>handleInputchange(e)} />
            <input type="button" style={{ float: "right" }} className='btn btn-primary' value="Submit" onClick={(e) => {
              handleSubmit(e)
            }} />
          </form>
        </div>
      </div>

      <div className="col-md-4"></div>
    </div>



  );
};

export default RegistrationForm;

