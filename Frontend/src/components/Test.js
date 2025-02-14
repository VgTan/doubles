import React from "react";
import { useState, useEffect } from "react";

function Test() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [roles, setRoles] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:8010/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error:", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8010/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, roles }), // Add password & roles
    })
      .then((res) => res.json())
      .then(() => {
        fetchUsers();
        setName("");
        setEmail("");
        setPass(""); // Reset password field
        setRoles(""); // Reset roles field
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="pt-20">
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <select
          value={roles}
          onChange={(e) => setRoles(e.target.value)}
          required
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit">Add User</button>
      </form>

      <h3>Existing Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
