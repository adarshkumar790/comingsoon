"use client"
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { FiRefreshCw } from "react-icons/fi";
import { FaCheck, FaTimes } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [passwordValidation, setPasswordValidation] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSymbol: false,
  });

  const correctUsername = "ledgerline";
  const correctPassword = "Ledger@790";

  const generateCaptcha = () => {
    const randomCaptcha = Math.random().toString(36).substring(2, 8);
    setCaptcha(randomCaptcha);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username !== correctUsername || password !== correctPassword) {
      toast.error("Invalid username or password!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    if (captchaInput !== captcha) {
      toast.error("Invalid CAPTCHA. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    setIsLoggedIn(true);
    toast.success("Login successful! Redirecting to admin page...", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const validatePassword = (value: string) => {
    setPasswordValidation({
      hasUppercase: /[A-Z]/.test(value),
      hasLowercase: /[a-z]/.test(value),
      hasNumber: /[0-9]/.test(value),
      hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(value),
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <>
      {/* <Head>
        <title>Login Page</title>
      </Head> */}
      <ToastContainer />
      <div className="flex min-h-screen items-center justify-center  bg-gradient-to-br from-gray-100 to-gray-300 px-4">
        <div className="w-full max-w-md p-8 bg-white mt-2 mb-2 rounded-xl shadow-lg border border-gray-200">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-bold text-pink-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full px-4 py-2 border border-blue-400 text-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-bold text-pink-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-blue-400 text-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className="mt-2">
                <p className="text-sm text-blue-500">
                  {passwordValidation.hasUppercase ? (
                    <FaCheck className="inline text-green-600" />
                  ) : (
                    <FaTimes className="inline text-red-600" />
                  )}{" "}
                  Contains an uppercase letter
                </p>
                <p className="text-sm text-blue-500">
                  {passwordValidation.hasLowercase ? (
                    <FaCheck className="inline text-green-600" />
                  ) : (
                    <FaTimes className="inline text-red-600" />
                  )}{" "}
                  Contains a lowercase letter
                </p>
                <p className="text-sm text-blue-500">
                  {passwordValidation.hasNumber ? (
                    <FaCheck className="inline text-green-600" />
                  ) : (
                    <FaTimes className="inline text-red-600" />
                  )}{" "}
                  Contains a number
                </p>
                <p className="text-sm text-blue-500">
                  {passwordValidation.hasSymbol ? (
                    <FaCheck className="inline text-green-600" />
                  ) : (
                    <FaTimes className="inline text-red-600" />
                  )}{" "}
                  Contains a symbol
                </p>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-pink-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 block w-full px-4 py-2 border border-blue-400 text-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="captcha" className="block text-sm font-bold text-pink-700">
                CAPTCHA:
              </label>
              <div className="flex items-center">
                <span className="font-bold text-green-600">{captcha}</span>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="ml-2 text-red-500 hover:text-blue-700 focus:outline-none"
                >
                  <FiRefreshCw size={20} />
                </button>
              </div>
              <input
                type="text"
                id="captcha"
                className="mt-2 block w-full px-4 py-2 border border-blue-400 text-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
          {isLoggedIn && (
            <Link
              href="/admin"
              className="mt-4 block text-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Admin Page
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
