import React, { useState } from "react";

var exp ='/^[a-zA-Z0-9!@#$%^&*]{6,16}$/' ; 
function Signuppage() {
  
const data1={
    username:'',
    email:'',
    password:'',
    confirmpassword:''
}
const [data,setdata] = useState(data1)  

const handledata =e=>{
    setdata({
        ...data,
        [e.target.name]:e.target.value
    })
}

const handlesubmit =e=>{
    e.preventDefault()
    if(data.username.length<5){
        alert('Username should have atleast 5 characters')
    }
    else if(data.password !== data.confirmpassword){
        alert('Passwords are not matching')
    }
    else{
        console.log(data)
    }
}
  return (
    <div>
        <form>
            <input type="text" name="username" placeholder="username" value={data.data1} onChange={handledata}/><br/><br/>
            {data.username ===''? <p style={{color:'red'}}>Username required</p>:null}
            <input type="email" name="email" placeholder="email" value={data.data1} onChange={handledata}/><br/><br/>
            {data.email ===''? <p style={{color:'red'}}>email required</p>:null}
            <input type="password" name="password" placeholder="password" value={data.data1} onChange={handledata}/><br/><br/>
            {((data.password ==='') &&(data.password !==exp))? <p style={{color:'red'}}>Password required and Enter proper</p>:null}
            <input type="password" name="confirmpassword" placeholder="confirm password" value={data.data1} onChange={handledata}/><br/><br/>
            {data.confirmpassword ===''? <p style={{color:'red'}}>Confirm password required</p>:null}
        </form>
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Signuppage