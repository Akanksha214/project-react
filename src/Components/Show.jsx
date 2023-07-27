import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Show = () => {

    const [data, setData] = useState();
    const navigate = useNavigate()



    useEffect(() => {
        axios
            .post("http://localhost:4001/api/users/get")
            .then((response) => {
                console.log("res.....", response?.data)

                setData(response?.data?.data)

            })
    }, [])

    // const navigateregister=()=>{

    //     navigate('/register-data')
    // }

    const handleSubmit = (id) => {
        
        navigate('/edit-data',{state:{id:id}})
        console.log("iddddddd.......",id)

     

    }

    return (

       
        <table className="table">
                    {/* <button onClick={navigateregister}>Home</button> */}

            <thead>
                <tr>
                    <th >Firstname </th>
                    <th > Middlename</th>
                    <th >Lastname</th>

                    <th >Phone</th>
                    <th >Address</th>
                    <th >Email</th>
                    <th >action</th>

                </tr>
            </thead>
            <tbody>

                {

                    data?.length > 0 && data?.map((e) => {
                        return <tr>
                            <td>{e?.firstName}</td>
                            <td> {e?.middleName}</td>
                            <td> {e?.lastName}</td>

                            <td> {e?.phone}</td>
                            <td>{e?.address} </td>
                            <td> {e?.email}</td>


                            <td>
                                <button
                                    type="submit"
                                    value="Submit"

                                    onClick={() => {
                                        handleSubmit(e?.id)

                                    }}
                                >

                                    Edit
                                </button>

                            </td>
                        </tr>
                    })
                }
            </tbody>  </table>
    )



}
export default Show;
