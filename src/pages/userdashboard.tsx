import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Z Gen App</title>
        <meta name="description" content="User Dashboard for Z Gen App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gradient-to-b from-[#1a1a1a] to-[#444444]">
        <div className="container flex justify-between items-center py-4 px-8">
          <div className="flex items-center">
            <div className="rounded-full h-12 w-12 bg-[#2e2e2e]"></div>
            <h2 className="text-lg font-semibold text-white ml-4">Username</h2>
          </div>
          <button className="bg-[#e74c3c] text-white text-lg font-semibold rounded-md px-4 py-2 hover:bg-[#c0392b] focus:outline-none">
            Logout
          </button>
        </div>
      </header>
      <main className="bg-gradient-to-b from-[#1a1a1a] to-[#444444]">
        <div className="container py-8 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#2e2e2e] rounded-md p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Credits: 1000</h3>
              <h3 className="text-lg font-semibold mb-4">Properties:</h3>
              <ul className="list-disc list-inside">
                <li>Property 1</li>
                <li>Property 2</li>
                <li>Property 3</li>
              </ul>
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Upload Avatar</h3>
                {/* Add the form for uploading avatar here */}
              </div>
            </div>
            <div className="bg-[#2e2e2e] rounded-md p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">User Location</h3>
              {/* Add the map component to display user location */}
              <h3 className="text-lg font-semibold mt-8 mb-4">Vehicles Owned: 3</h3>
              {/* Add the list of vehicles owned */}
            </div>
          </div>
          {/* Add the main dashboard content here */}
          <div className="bg-[#2e2e2e] rounded-md p-6 text-white mb-8">
            <h3 className="text-lg font-semibold mb-4">Main Dashboard Content</h3>
            <p>
              Add your main dashboard content here, such as user statistics, recent activity,
              notifications, or any other relevant information...
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
