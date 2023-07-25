import React from 'react'
import './LogReg.css'

export default function Login() {
    return (
        <>

        <div class="form">
  
          <div className="register">
            <h2>Log-In</h2>
            <form id="register" method="post">
  
  
  
              <br /><br />
              <label>Email :</label>
              <br />
              <input type="email" name="email" id="email"
                placeholder="Enter Your Valid Email" />
  
  
              <br /><br />
  
              <label>Password :</label>
              <br />
              <input type="text" name="fname" id="name"
                placeholder="Enter Your Password" />
  
  
  
              <br /><br /><br /><br />
              <input type="submit" value="Log-In" name="submit"
                id="submit" />
  
  
            </form>
          </div>
        </div>
  
      </>
    )
}
