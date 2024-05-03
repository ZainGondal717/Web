"use client";
import '../../CSS/Login.css';
import React from 'react';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
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
                    Email: email,
                    password: pass,
                }),
            });

            if (!response.ok) {
                alert("error123");
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            router.push("/");
        } catch (error) {
            alert(error);
            console.error("Error:", error);
        }
    }

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setemail(e.target.value)}
                    type="text"
                    placeholder="EMAIL: (abc@cfd.nu.edu.pk)"
                />
                <input
                    onChange={(e) => setpass(e.target.value)}
                    type="password"
                    placeholder="PASSWORD"
                />
                <button type="submit" className="opacity">
                    SUBMIT
                </button>
            </form>
            <div className="register-forget opacity">
                <a href="http://localhost:3000/">SIGNUP</a>
                <a href="">FORGOT PASSWORD</a>
            </div>
        </div>
    );
}
