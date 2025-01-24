"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
  useKindeAuth,
} from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
  const router = useRouter();
  const { isAuthenticated, user, login, logout } = useKindeAuth();

  // Show toast messages
  const showToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeButton: true,
      theme: "light",
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      showToast("Login successful!");
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    toast.success("Logged out successfully!");

    logout();
  };

  const handleLoginSuccess = () => {
    showToast("Login successful!");
  };

  const handleRegisterSuccess = () => {
    showToast("Registration successful!");
  };
  const redirectURL =
    process.env.NODE_ENV === "production"
      ? process.env.KINDE_SITE_URL
      : "https://next-js-jg5a.vercel.app";

  return (
    <header className="bg-gray-200 shadow-md p-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div>
          <button
            className="text-2xl font-bold text-gray-800 hover:text-purple-600"
            onClick={() => router.push("/")}
          >
            Blog Viewer
          </button>
        </div>
        <nav>
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
            <li>
              <button
                className="text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => router.push("/")}
              >
                Home
              </button>
            </li>

            <li>
              <button
                className="text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => router.push("/profile")}
              >
                Profile
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
          {!isAuthenticated ? (
            <>
              <LoginLink
                postLoginRedirectURL={redirectURL}
                onLogin={handleLoginSuccess}
              >
                <button className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-md">
                  Login
                </button>
              </LoginLink>
              <RegisterLink
                postLoginRedirectURL={redirectURL}
                onRegister={handleRegisterSuccess}
              >
                <button className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-md">
                  Register
                </button>
              </RegisterLink>
            </>
          ) : (
            <>
              <p className="text-gray-700 font-medium flex items-center">
                Welcome, {user?.given_name || "User"}!
              </p>
              <LogoutLink
                postLogoutRedirectURL={
                  process.env.KINDE_POST_LOGOUT_REDIRECT_URL
                }
                onLogout={handleLogout}
              >
                <button className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-md">
                  Logout
                </button>
              </LogoutLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
