"use client";
import '../../../CSS/login.css';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("user");

    const api = "http://localhost:3002";

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await fetch(api + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    userType: userType
                }),
            });

            if (!response.ok) {
                alert("Error: Invalid credentials");
                throw new Error("Network response was not ok");
            }

            // Redirect to the appropriate page based on userType
            if (userType === 'user') {
                router.push("/component/user/UserHome"); 
            } else if (userType === 'client') {
                router.push("/component/client/Clienthome"); 
            } else if (userType === 'admin') {
                router.push("/component/admin/AdminHome"); 
            }
        } catch (error: any) { // Specify the type of error as 'any'
            alert("Error: " + error.message);
            console.error("Error:", error);
        }
    }

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="EMAIL: (abc@cfd.nu.edu.pk)"
                    required
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="PASSWORD"
                    required
                />
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
                <button type="submit" className="opacity">
                    SUBMIT
                </button>
            </form>
            <div className="register-forget opacity">
                <a href="/component/signup">SIGNUP</a>
                <a href="">FORGOT PASSWORD</a> 
                <LoginLink>Sign in with Google</LoginLink>

<RegisterLink>Sign up with Google</RegisterLink>
            </div>
        </div>
    );
}
