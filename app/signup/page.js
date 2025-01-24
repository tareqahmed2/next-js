"use client";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export default function SignUp() {
  const { login } = useKindeAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white max-w-screen-xl mx-auto">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Sign Up for an Account
        </h1>
        <p className="text-gray-600 mb-6">
          Create an account to access your personalized profile and features.
        </p>

        {/* Sign-up Button */}
        <button
          className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition duration-300 ease-in-out"
          onClick={() => login()}
        >
          Sign Up with Kinde
        </button>

        <div className="mt-6">
          <p className="text-gray-700">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
