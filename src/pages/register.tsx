import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register | Z Gen App</title>
        <meta name="description" content="Register for Z Gen App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#444444]">
        <div className="container main-content flex flex-col items-center justify-center gap-8 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Register for <span className="text-[#e74c3c]">Z Gen App</span>
          </h1>
          <form className="flex flex-col gap-4 max-w-md w-full">
            <input
              type="text"
              className="rounded-md px-4 py-2 bg-[#2e2e2e] text-white placeholder-[#8c8c8c] focus:outline-none"
              placeholder="Username"
              required
            />
            <input
              type="password"
              className="rounded-md px-4 py-2 bg-[#2e2e2e] text-white placeholder-[#8c8c8c] focus:outline-none"
              placeholder="Password"
              required
            />
            <input
              type="password"
              className="rounded-md px-4 py-2 bg-[#2e2e2e] text-white placeholder-[#8c8c8c] focus:outline-none"
              placeholder="Confirm Password"
              required
            />
            <input
              type="email"
              className="rounded-md px-4 py-2 bg-[#2e2e2e] text-white placeholder-[#8c8c8c] focus:outline-none"
              placeholder="Email Address"
              required
            />
            <button
              type="submit"
              className="bg-[#3498db] text-white text-lg font-semibold rounded-md px-4 py-2 hover:bg-[#2980b9] focus:outline-none"
            >
              Register
            </button>
          </form>
          <div className="w-full max-w-md">
            <hr className="border-t border-[#8c8c8c]" />
          </div>
          <p className="text-white">
            Already have an account?{" "}
            <Link href="/login">
              <a className="text-[#e74c3c]">Login here</a>
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Register;
