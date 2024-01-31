// components/UserForm.tsx
"use client";
import { createUser, loginUser } from "@/app/services/userForm.service";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const formData = {
      email,
      password,
    };

    try {
      await loginUser(formData);
      alert("User Login successfully!");
    } catch (error: any) {
      alert(error.message);
    }
    localStorage.setItem("isLoggedIn", "true");

    setIsSubmitting(false);

    console.log(formData);
    router.push("/users");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8">
        <h2 className="text-2xl font-bold mb-8">Login Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
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
          onClick={() => router.push("/auth/signup")}
          className={`btn bg-blue-500 text-white hover:bg-blue-600 w-full my-2 py-2 rounded-lg p`}
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
