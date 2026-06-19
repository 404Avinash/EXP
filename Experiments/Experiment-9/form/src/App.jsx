import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);

  // Fetch API data when component loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.slice(0, 3)); // show first 3 users
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required!");
      setSuccess("");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email format!");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Registration Successful!");

    const newUser = { name, email };
    setUsers([...users, newUser]);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>

      <div className="api-box">
        <h2>Registered Users</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
