"use client";
import React, { useState } from "react";
import "./loginpage.css"; // Import the custom CSS
import Link from "next/link";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 custom-background">
      <div className="container relative">
        <form onSubmit={handleSubmit} className="glassmorphic-form">
          <h2 style={{color: "white", fontSize: "1.765em", fontFamily:"serif"}}>ChartSign </h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <input type="button" value="Sign in" onClick={handleSubmit} />
          <br />
          <Link href="#">Forgot Password?</Link>
        </form>

        <div className="drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
