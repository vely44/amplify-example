import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tourism Microservices - Itinerary Service</title>
        <meta
          name="description"
          content="Plan your dream trip with our Itinerary Service. Create personalized travel itineraries, add activities, book accommodations, and manage your entire trip in one place."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gradient-to-b from-[#1a1a1a] to-[#444444]">
        <div className="flex justify-end px-4 py-2">
          <Link href="/login">
            <button className="text-white text-lg font-semibold rounded-md px-4 py-2 mr-2 border border-white bg-[#2e2e2e] hover:bg-[#484848]">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="text-white text-lg font-semibold rounded-md px-4 py-2 border border-white bg-[#2e2e2e] hover:bg-[#484848]">
              Register
            </button>
          </Link>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#444444]">
        <div className="container main-content flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Welcome to <span className="text-[#e74c3c]">Tourism Microservices</span>
          </h1>
          <div className="max-w-xl p-4 rounded-xl bg-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">Itinerary Service</h2>
            <p className="text-lg text-white">
              Plan your dream trip with our Itinerary Service! Create personalized travel
              itineraries, add activities, book accommodations, and manage your entire trip in
              one place. With real-time updates, collaboration options, and personalized
              recommendations, we make travel planning a breeze.
            </p>
            <p className="text-lg text-white mt-4">
              Whether you're a solo traveler or traveling with a group, our Itinerary Service
              will help you make the most of your trip. You can customize your itinerary based
              on your preferences and easily modify it as your plans change. Get ready to embark
              on a memorable adventure with our Itinerary Service!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl link-card bg-[#27ae60] hover:bg-[#2ecc71]/10 p-4"
              href="/connect"
            >
              <h3 className="text-2xl font-bold text-white">Connect →</h3>
              <div className="text-lg text-white">
                Connect with friends and players from around the world. Socialize and make new
                friends in an immersive online environment.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl link-card bg-[#9b59b6] hover:bg-[#8e44ad]/10 p-4"
              href="/support"
            >
              <h3 className="text-2xl font-bold text-white">Support →</h3>
              <div className="text-lg text-white">
                Need assistance or have questions? Our support team is here to help you.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl link-card bg-[#e67e22] hover:bg-[#d35400]/10 p-4"
              href="/start"
            >
              <h3 className="text-2xl font-bold text-white">Get Started →</h3>
              <div className="text-lg text-white">
                Ready to plan your trip? Get started with our Itinerary Service now!
              </div>
            </Link>
            <button
              className="flex max-w-xs flex-col gap-4 rounded-xl link-card bg-[#3498db] hover:bg-[#2980b9]/10 p-4"
              onClick={() => alert("Feature coming soon!")}>
              <h3 className="text-2xl font-bold text-white">Collaborate →</h3>
              <div className="text-lg text-white">
                Collaborate with friends or family in planning your travel itinerary.
              </div>
            </button>
          </div>
          <div className="max-w-xl p-4 rounded-xl bg-gray-800">
            <h2 className="text-3xl font-bold text-white mt-16">Why Choose Our Itinerary Service?</h2>
            <ul className="list-disc list-inside text-white text-lg mt-4">
              <li>Streamlined Planning: Centralize all travel-related information in one place.</li>
              <li>Organization: Keep track of your travel plans, reservations, and important details conveniently.</li>
              <li>Flexibility: Easily modify and adjust your itinerary based on changing preferences or unexpected events.</li>
              <li>Time Savings: Save time and effort by automating the process of compiling travel plans.</li>
              <li>Collaboration: Share itineraries with travel companions, enabling seamless coordination during your trip.</li>
            </ul>
          </div>
          <div className="max-w-xl p-4 rounded-xl bg-gray-800">
            <h2 className="text-3xl font-bold text-white mt-16">Personalization and Recommendations</h2>
            <ul className="list-disc list-inside text-white text-lg mt-4">
              <li>Personalized Recommendations: Receive activity and attraction suggestions tailored to your preferences.</li>
              <li>Weather Integration: Stay weather-ready with forecasts for each day of your trip.</li>
              <li>Time Optimization: Optimize your itinerary for efficient travel between locations.</li>
            </ul>
          </div>
          <div className="max-w-xl p-4 rounded-xl bg-gray-800">
            <h2 className="text-3xl font-bold text-white mt-16">Integration with Other Services</h2>
            <ul className="list-disc list-inside text-white text-lg mt-4">
              <li>Booking Integration: Seamlessly add bookings for flights, accommodations, and activities to your itinerary.</li>
              <li>Location and Navigation: Access maps, directions, and proximity alerts for planned activities and attractions.</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
