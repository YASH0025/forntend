"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn == "false") {
      router.push("/auth/login");
    }
  }, []);

  return null;
};

export default useAuth;
