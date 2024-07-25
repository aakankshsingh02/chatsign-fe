import React, { useState } from "react";
import Link from "next/link";
import "./loginpage.css"; // Ensure the path is correct

const LoginPage: React.FC = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/login`;
  const handleusernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setusername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    
    const data = new URLSearchParams();
    data.append("username", username);
    data.append("password", password);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      });

      if (response.ok) {
        const result = await response.json(); 
        console.log(result);
      } else {
        console.error("Server error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="drop drop-1"></div>
      <div className="drop drop-2"></div>
      <div className="drop drop-3"></div>
      <div className="drop drop-4"></div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-white text-2xl font-bold text-center font-serif mb-2">
          ChartSign
        </h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleusernameChange}
          className="placeholder-white"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="placeholder-white"
        />
        <br />
        <button type="submit">Sign In</button>
        <div className="text-center">
          <Link href="#" className="text-blue-100 hover:underline text-sm">
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
