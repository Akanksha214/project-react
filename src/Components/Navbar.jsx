import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate()
    const navigateregister=()=>{

        navigate('/register-data')
    }
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1"></span>
                {/* <form class="d-flex">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <button onClick={navigateregister}>Back to Register</button>

            </div>
        </nav>
    );
}

export default Navbar;
