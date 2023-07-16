import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>RideShareX - Your Reliable Ridesharing Service</title>
        <meta
          name="description"
          content="RideShareX - Your reliable and convenient ridesharing service. Book a ride now!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#3498db] to-[#2980b9]">
        <div className="container main-content flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Welcome to <span className="text-[#27ae60]">RideShareX</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl link-card bg-[#2ecc71]/10 p-4"
              href="https://www.ridesharex.com/book-ride"
              target="_blank"
            >
              <h3 className="text-2xl font-bold text-[#2ecc71]">Book a Ride →</h3>
              <div className="text-lg text-white">
                Need a ride? Book now and enjoy our reliable and comfortable
                ridesharing service.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl link-card bg-[#f1c40f]/10 p-4"
              href="https://www.ridesharex.com/become-driver"
              target="_blank"
            >
              <h3 className="text-2xl font-bold text-[#f1c40f]">Become a Driver →</h3>
              <div className="text-lg text-white">
                Want to earn money driving with us? Join our team of drivers and
                start earning today.
              </div>
            </Link>
          </div>
          <p className="text-2xl text-white loading-text">
            {hello.data ? hello.data.greeting : "Loading RideShareX query..."}
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
