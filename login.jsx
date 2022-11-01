import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";


const Loginform=()=>{
     const initialvalue={username:"",email:"",password:""}
     const [formvalue,setdate]=useState([initialvalue])
    const [formerror,setformerror]=useState({})
     const [issubmit,setisubmit]=useState(false)

  
     const handle=(e)=>
     {

                     const {name,value}=e.target
                     setdate({...formvalue,[name]:value})
                     console.log(formvalue)
                     setformerror(validate(formvalue))
                     setisubmit(true)

     } 


const submit=(e)=>{
   e.preventDefault()
}

   
  useEffect(()=>{
   console.log(formvalue)

    if(Object.keys(formerror).length=== 0 && issubmit)
    {
    }
   
    },[formvalue])
  
  


const validate=(value)=>{
   const errorr={}
   const regx='^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
   if(!value.username)
   {
      errorr.username='username is required'
   }
if(!value.password)
   {
      errorr.password='username is password'
   }
if(!value.email)
   {
      errorr.email='username is email'
   }
   return errorr
} 


   return(
      <>
   {Object.keys(formerror).length===0&&issubmit?(<div className="uims">sign in succefully</div>):'errorr'}
   <form onSubmit={submit}> 
      <div className="">
         <label>Username</label>
         <input type="text" style={{border:'1px solid black'}}  onChange={handle} value={formvalue.username} ></input>
       {formerror.username}
      </div>
      <div className="">
         <label>Email</label>
         <input type="text" onChange={handle}  style={{border:'1px solid black'}}  value={formvalue.email} ></input>
         {formerror.email}

      </div>
      <div className="">
         <label>Password</label>
         <input type="text" onChange={handle}  style={{border:'1px solid black'}} value={formvalue.password}></input>
         {formerror.password}

      </div>
    <button type="submit">submit</button>
     
   </form>

      </>
   )
}

export default Loginform