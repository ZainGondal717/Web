"use client";
import '../../CSS/signup.css';
import { useState } from "react";
export default function SignUpPage()
{
  const [userName, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [email, setemail] = useState("");
 
  const api = "http://localhost:3002";
  const checker1 = async () => {
    try {
      const response = await fetch(api + "/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username: userName,
          password: pass,
          Email: email, 
        }),
      });

      if (!response.ok) {
        alert("error45");
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
    
    } catch (error) {
      alert("error");
      console.error("Error:", error);
      
    }
  };
  return (
    <>
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <h1 className="opacity">SIGNUP---</h1>
            <form onSubmit={() => checker1()}>
              <input
                onChange={(e) => setemail(e.target.value)}
                type="text"
                placeholder="EMAIL: (abc@cfd.nu.edu.pk)"
              />
              <input
                onChange={(e) => setuser(e.target.value)}
                type="text"
                placeholder="USERNAME"
              />
              <input
                onChange={(e) => setpass(e.target.value)}
                type="password"
                placeholder="PASSWORD"
              />
              <button className="opacity">SUBMIT</button>
            </form>
            <div className="register-forget opacity">
              <a href="http://localhost:3000/components/login">Login</a>
              <a href="">FORGOT PASSWORD</a>
            </div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </>
  );
}



