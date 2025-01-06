"use client"
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  // Hardcoded username and password for demo purposes
  const correctUsername = 'ledgerline';
  const correctPassword = 'ledgerline@123';

  // Generate a new CAPTCHA when the component loads
  const generateCaptcha = () => {
    const randomCaptcha = Math.random().toString(36).substring(2, 8);
    setCaptcha(randomCaptcha);
  };

  // Validate the form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username !== correctUsername || password !== correctPassword) {
      setErrorMessage('Invalid username or password!');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    if (captchaInput !== captcha) {
      setErrorMessage('Invalid CAPTCHA. Please try again.');
      return;
    }

    setErrorMessage('');
    router.push('/admin'); // Redirect to admin page on successful login
  };

  // Generate CAPTCHA on initial render
  useState(() => {
    generateCaptcha();
  });

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
          {errorMessage && (
            <div className="mb-4 text-red-600 text-center">{errorMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
                CAPTCHA: <span className="font-bold">{captcha}</span>
              </label>
              <input
                type="text"
                id="captcha"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
          <button
            onClick={generateCaptcha}
            className="mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Refresh CAPTCHA
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
