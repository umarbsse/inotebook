import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom'

export default function Login() {
    const host = "http://localhost:5000"
    const [credentials, seCredentials] = useState({email: "",password:""})
    let navigate  = useNavigate ();
    const handleSubmit = async (e) =>{
        e.preventDefault();
       // console.log("form submit")


        //API CALL
        const response = await fetch(`${host}/api/auth/login/`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0NzlkMTZlZWM5ZTMwNjViNDhlMzg2In0sImlhdCI6MTcxNTk3MjE2Nn0.NEDKQnzbmBLmFwRtPw6ARIKJxMerrdFUEBgpuNWet3s",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password}), // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json)
        if(json.success===true){
            // Save the auth token and redirect
            localStorage.setItem('token',json.authToken);
            navigate("/");

        }else{
            alert("invalid crdentials");
        }
    }
    const onChange = (e) =>{
        seCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={credentials.email} name="email" placeholder="email@example.com" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={credentials.password} name='password' placeholder="Password" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}
