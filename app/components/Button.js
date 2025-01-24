"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Button = () => {
  const router = useRouter();
  return (
    <button
      className="btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 text-white px-6 py-2 rounded-md"
      onClick={() => router.push("/")}
    >
      Back to Blog
    </button>
  );
};

export default Button;
