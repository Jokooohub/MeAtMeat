import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Handle Sign-Up Logic
    if (currState === "Sign Up") {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some((user) => user.email === email);

      if (userExists) {
        toast.error("User with this email already exists.");
      } else {
        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        toast.success("Account created successfully! Please log in.");
        setCurrState("Login");
      }
    }

    // Handle Login Logic
    if (currState === "Login") {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        toast.success(`Welcome back, ${user.name}!`);
        localStorage.setItem("loggedInEmail", email); // Store logged-in email

        // Close the login popup
        setShowLogin(false);

        // Trigger a "logged in" notification
        setTimeout(() => {
          toast.info("You are now logged in!");
          window.location.reload(); // Optional page reload for UI update
        }, 500);
      } else {
        toast.error("Invalid email or password.");
      }
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleFormSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
      {/* Toastify container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default LoginPopup;