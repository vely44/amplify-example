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
        <title>Z Gen Social Multiplayer App</title>
        <meta
          name="description"
          content="Z Gen App - Connect, socialize, and play multiplayer games like never before!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-end p-4">
        <Link href="/login">
          <button className="text-white text-lg font-semibold bg-[#3498db] rounded-md px-4 py-2 mr-2">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="text-white text-lg font-semibold bg-[#f39c12] rounded-md px-4 py-2">
            Register
          </button>
        </Link>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#444444]">
        <div className="container main-content flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Welcome to <span className="text-[#e74c3c]">Z Gen App</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl link-card bg-[#3498db]/10 p-4"
              href="/connect"
            >
              <h3 className="text-2xl font-bold text-[#3498db]">Connect →</h3>
              <div className="text-lg text-white">
                Connect with friends and players from around the world. Socialize and
                make new friends in an immersive online environment.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl link-card bg-[#f39c12]/10 p-4"
              href="/multiplayer"
            >
              <h3 className="text-2xl font-bold text-[#f39c12]">Multiplayer →</h3>
              <div className="text-lg text-white">
                Dive into the world of multiplayer gaming. Team up with others or
                compete against players in action-packed adventures.
              </div>
            </Link>
            <button
              className="flex max-w-xs flex-col gap-4 rounded-xl link-card bg-[#2ecc71]/10 p-4"
              onClick={() => setShowDescription(!showDescription)}
            >
              <h3 className="text-2xl font-bold text-[#2ecc71]">Description →</h3>
            </button>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl link-card bg-[#9b59b6]/10 p-4"
              href="/support"
            >
              <h3 className="text-2xl font-bold text-[#9b59b6]">Support →</h3>
              <div className="text-lg text-white">
                Need assistance or have questions? Our support team is here to help you.
              </div>
            </Link>
          </div>
          {showDescription && (
            <p className="text-2xl text-white loading-text">
              Welcome to Z Gen App, where socialization and multiplayer gaming blend
              together to create an unforgettable experience inspired by "GTA San
              Andreas Multiplayer."
              <br />
              <br />
              In Z Gen App, you can connect with friends and players from around the
              globe in an immersive online world. Make new friends, form alliances, and
              embark on thrilling adventures together.
              <br />
              <br />
              Get ready to dive into the world of multiplayer gaming. Whether you enjoy
              cooperative missions or competitive challenges, Z Gen App has something
              for everyone. Battle rival gangs, engage in high-speed pursuits, and
              explore vast open-world environments together.
              <br />
              <br />
              The action never stops, and the possibilities are endless. Join Z Gen App
              today and experience socialization and multiplayer like never before.
            </p>
          )}
          <p className="text-2xl text-white loading-text">
            {hello.data ? hello.data.greeting : "Loading Z Gen App query..."}
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
