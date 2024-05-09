"use client";
import React, { useState } from "react";
import '../../../CSS/signup.css';

export default function SignUpPage() {
  // State variables to manage form input
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("user"); // Default to user
  const [companyName, setCompanyName] = useState(""); // New state for companyName

  const api = "http://localhost:3002";

  // Function to handle form submission
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Check if any required fields are empty
    if (!email || !userName || !password || (userType === "client" && !companyName)) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      // Construct user data based on selected userType
      const userData = {
        username: userName,
        password: password,
        email: email,
        companyName: companyName // Include companyName when userType is "client"
      };

      // Send signup request to the server based on userType
      const response = await fetch(api + `/api/signup/${userType}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Reset form fields and show success message
      setUserName("");
      setPassword("");
      setEmail("");
      setCompanyName(""); // Reset companyName field
      alert(`${userType.charAt(0).toUpperCase() + userType.slice(1)} signed up successfully! Please proceed to login.`);
      
      // Redirect to the login page
      window.location.href = "/component/login";
    } catch (error) {
      console.error("Error:", error);
      alert("Error: Something went wrong, please try again later.");
    }
  };

  return (
    <section className="container">
      {/* Signup form */}
      <div className="login-container">
        {/* Form fields */}
        <div className="form-container">
          <h1 className="opacity">SIGNUP</h1>
          <form onSubmit={handleSubmit}>
            {/* Input fields */}
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email: (abc@cfd.nu.edu.pk)"
              required
              value={email}
            />
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder={userType === "user" ? "Username" : userType === "client" ? "Company Name" : "Admin Name"}
              required
              value={userName}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
              value={password}
            />
            {/* Include companyName field when userType is "client" */}
            {userType === "client" && (
              <input
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                placeholder="Company Name"
                required
                value={companyName}
              />
            )}
            {/* Radio buttons for user type selection */}
            <div>
              <label>
                <input
                  type="radio"
                  value="user"
                  checked={userType === "user"}
                  onChange={() => setUserType("user")}
                />
                User
              </label>
              <label>
                <input
                  type="radio"
                  value="client"
                  checked={userType === "client"}
                  onChange={() => setUserType("client")}
                />
                Client
              </label>
              <label>
                <input
                  type="radio"
                  value="admin"
                  checked={userType === "admin"}
                  onChange={() => setUserType("admin")}
                />
                Admin
              </label>
            </div>
            {/* Submit button */}
            <button type="submit" className="opacity">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
