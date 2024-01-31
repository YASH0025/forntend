// components/UserForm.tsx
"use client";
import { createUser } from "@/app/services/userForm.service";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/navigation";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // For submission animation
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const formData = {
      name,
      email,
      password,
      number,
      address: { city, state },
    };

    try {
      await createUser(formData);
      alert("User created successfully!");
    } catch (error: any) {
      alert(error.message);
    }
    setIsSubmitting(false);

    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8">
        <h2 className="text-2xl font-bold mb-8">User Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 w-full">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field flex justify-center items-center"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">Number</label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-2">State</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="input-field"
            />
          </div>
          <button
            type="submit"
            className={`btn bg-blue-500 text-white hover:bg-blue-600 w-full py-2 rounded-lg ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <button
          type="button"
          onClick={() => router.push("/auth/login")}
          className={`btn bg-blue-500 text-white hover:bg-blue-600 w-full my-2 py-2 rounded-lg p`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default UserForm;
