import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Auth } from "aws-amplify"; // Import Amplify's Auth module

const Login: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Sign in with Amplify Auth
      await Auth.signIn(username, password);
      setMessage("Login successful!");
    } catch (error) {
      setMessage("Login failed: " + error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Login | Z Gen App</title>
        <meta name="description" content="Login to Z Gen App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#444444]">
        <div className="container main-content flex flex-col items-center justify-center gap-8 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Login to <span className="text-[#e74c3c]">Z Gen App</span>
          </h1>
          <form className="flex flex-col gap-4 max-w-md w-full" onSubmit={handleLogin}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-md px-4 py-2 bg-[#2e2e2e] text-white placeholder-[#8c8c8c] focus:outline-none"
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md px-4 py-2 bg-[#2e2e2e] text-white placeholder-[#8c8c8c] focus:outline-none"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="bg-[#e74c3c] text-white text-lg font-semibold rounded-md px-4 py-2 hover:bg-[#c0392b] focus:outline-none"
            >
              Login
            </button>
          </form>
          {message && <p className="text-white">{message}</p>}
          <div className="mt-4">
            <Link href="/">
              <a className="text-[#e74c3c] font-semibold text-lg hover:underline">
                Return to Homepage
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
