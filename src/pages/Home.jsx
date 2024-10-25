// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-[#0F0C29] via-[#302B63] to-[#24243E] min-h-screen text-white">
      <header className="flex flex-col items-center justify-center text-center pt-60 px-4 sm:px-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to Local Explorer</h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          Discover hidden gems, explore local communities, and connect with new
          places around you. Local Explorer helps you find experiences beyond
          the usual tourist spots.
        </p>
        <div className="flex gap-4">
          <Link to="/explore">
            <Button color="light" className="px-6 py-3">
              Explore Now
            </Button>
          </Link>
          <Link to="/signup">
            <Button color="dark" className="px-6 py-3">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      <section className="py-20 px-4 sm:px-8">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What You’ll Find
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white bg-opacity-10 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Top-Rated Places</h3>
            <p className="text-gray-300">
              Explore the highest-rated restaurants, cafes, and tourist spots
              curated by locals and frequent travelers.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white bg-opacity-10 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Events & Activities</h3>
            <p className="text-gray-300">
              Discover ongoing events, workshops, and festivals in your area to
              make the most of your weekends.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white bg-opacity-10 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Community Connections</h3>
            <p className="text-gray-300">
              Connect with locals who share your interests and make new friends
              through community groups and activities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8 bg-[#1E1E1E]">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Developers and Creators
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="p-6 bg-white bg-opacity-10 rounded-lg flex-1">
            <p className="text-gray-300 italic">
              "Local Explorer helped me find amazing places I’d never have known
              about otherwise. It’s now my go-to travel guide!"
            </p>
            <p className="text-right mt-4">- Manish Gupta, Developer</p>
          </div>

          <div className="p-6 bg-white bg-opacity-10 rounded-lg flex-1">
            <p className="text-gray-300 italic">
              "Thanks to this platform, I connected with people who share my
              love for hiking. We've been on so many great adventures together!"
            </p>
            <p className="text-right mt-4">- Viraj, Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
