"use client";

import { useKindeAuth, LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export default function Login() {
  const { login } = useKindeAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white max-w-screen-xl mx-auto">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Login to Your Account
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome back! Please log in to access your account and personal
          profile.
        </p>

        <LoginLink postLoginRedirectURL="/profile">
          <button
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300 ease-in-out"
            onClick={() => login()}
          >
            Log in with Kinde
          </button>
        </LoginLink>

        <div className="mt-6">
          <p className="text-gray-700">
            Donot have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
