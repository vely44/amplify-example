import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [showDescription, setShowDescription] = useState(false);

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
            <button
              className="flex max-w-xs flex-col gap-4 rounded-xl link-card bg-[#e74c3c]/10 p-4"
              onClick={() => setShowDescription(!showDescription)}
            >
              <h3 className="text-2xl font-bold text-[#e74c3c]">Description →</h3>
            </button>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl link-card bg-[#9b59b6]/10 p-4"
              href="tel:+1234567890"
            >
              <h3 className="text-2xl font-bold text-[#9b59b6]">Call us →</h3>
              <div className="text-lg text-white">
                Need assistance? Call us at +1 (234) 567-890.
              </div>
            </Link>
          </div>
          {showDescription && (
            <p className="text-2xl text-white loading-text">
              As a ridesharing driver, navigating through traffic is crucial to
              providing a pleasant experience for your passengers. Here are some
              tips to be a good ridesharing driver in traffic:
              <br />
              <br />
              1. Plan Your Routes: Familiarize yourself with common routes and
              traffic patterns. Use navigation apps to find the best routes to
              avoid congestion.
              <br />
              <br />
              2. Stay Calm and Patient: Traffic can be frustrating, but staying
              calm and patient is essential. Avoid aggressive driving and road
              rage.
              <br />
              <br />
              3. Follow Traffic Laws: Obey all traffic laws, including speed
              limits and traffic signals, for everyone's safety.
              <br />
              <br />
              4. Maintain Safe Following Distance: Keep a safe distance from the
              vehicle in front of you to allow for sudden stops.
              <br />
              <br />
              5. Be Courteous to Other Drivers: Use your indicators, give way
              when necessary, and be respectful of other drivers on the road.
              <br />
              <br />
              6. Monitor Weather Conditions: Adjust your driving behavior based
              on weather conditions to ensure safety.
            </p>
          )}
          <p className="text-2xl text-white loading-text">
            {hello.data ? hello.data.greeting : "Loading RideShareX query..."}
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
