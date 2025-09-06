import React, { useState } from "react";
import { Mail, User, Lock } from "lucide-react";
import { FaUser, FaBook } from "react-icons/fa";
const Login = ({ setUser }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const { name, email, password } = form;

    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    if (!acceptPolicy) {
      setError("You must accept the privacy policy!");
      return;
    }

    // Fake user login (localStorage)
    const userData = { name, email };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Welcome to MindEase
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        {/* Name */}
        <div className="flex items-center border rounded mb-3 px-3">
          <User className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 outline-none"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="flex items-center border rounded mb-3 px-3">
          <Mail className="text-gray-500 mr-2" size={18} />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 outline-none"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="flex items-center border rounded mb-5 px-3">
          <Lock className="text-gray-500 mr-2" size={18} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 outline-none"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        {/* Privacy Policy Checkbox */}
        <div className="flex items-center mb-5">
          <input
            type="checkbox"
            id="acceptPolicy"
            checked={acceptPolicy}
            onChange={(e) => setAcceptPolicy(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="acceptPolicy" className="text-sm text-gray-600">
            I accept the{" "}
            <span className="text-purple-600 font-semibold cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </label>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <span className="text-purple-600 font-semibold cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
