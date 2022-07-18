import React, { useState } from "react";

const ClassForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (coker) => {
        coker.preventDefault();
        console.log(name, email, password);
    };

    const handleName = (coker) => {
        setName(coker.target.value);
    };

    const handleEmail = (coker) =>{
        setEmail(coker.target.value);
    };

    const handlePassword = (coker) => {
        setPassword(coker.target.value)
    };
    

    return(
        <form onClick={handleSubmit}>
          <div className="container">
            <div className="controlform">
              <label htmlFor="name">Name</label>
              <input type= "text" onChange={handleName} value ={name}></input>
            </div>

            <div className="controlform">
              <label htmlFor="email">Email</label>
              <input type= "email" onChange={handleEmail} value ={email}></input>
            </div>
           
            <div className="controlform">
              <label htmlFor="password">Password</label>
              <input type= "password" onChange={handlePassword} value ={password}></input>
            </div>

            <br/>

            <button type ="submit">Submit</button>
          </div>

        </form>
    )


}
 export default ClassForm;