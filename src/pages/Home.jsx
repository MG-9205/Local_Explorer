// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import Globe from "../components/Globe";
import { FaHeart, FaReply } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion

// Fade-in and slide-up animation variant
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.0 } },
};

const UserReviewCard = ({ user, review }) => {
  return (
    <motion.div
      className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col mb-6"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <div className="flex items-center mb-4">
        <img
          src={user.profilePicture}
          alt={`${user.name}'s profile`}
          className="w-14 h-14 rounded-full mr-4"
        />
        <div>
          <p className="text-lg font-semibold text-white-400">{user.name}</p>
          <p className="text-white-500 text-sm">{user.date}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{review.text}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button className="flex items-center text-gray-400 hover:text-pink-400 transition-colors duration-200">
            <FaHeart className="mr-1" />
            <span>{review.likes}</span>
          </button>
          <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200 ml-4">
            <FaReply className="mr-1" />
            <span>Reply</span>
          </button>
        </div>
        <input
          type="text"
          placeholder="Write a reply..."
          className="p-2 rounded-full border border-gray-600 text-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          style={{ width: "200px" }}
        />
      </div>
    </motion.div>
  );
};

const HomePage = () => {
  const reviews = [
    {
      user: {
        name: "Priya Sharma",
        profilePicture: "https://randomuser.me/api/portraits/women/44.jpg",
        date: "October 26, 2024",
      },
      text: "Local Explorer has completely changed the way I travel! I found amazing spots that I never would have discovered on my own.",
      likes: 12,
    },
    {
      user: {
        name: "Anil Verma",
        profilePicture: "https://randomuser.me/api/portraits/men/45.jpg",
        date: "October 25, 2024",
      },
      text: "Thanks to Local Explorer, I’ve connected with incredible people and had unforgettable experiences on my trips!",
      likes: 8,
    },
    {
      user: {
        name: "Sneha Reddy",
        profilePicture: "https://randomuser.me/api/portraits/women/46.jpg",
        date: "October 24, 2024",
      },
      text: "I love how easy it is to find local events and activities! It has made my weekends so much more fun.",
      likes: 15,
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <Globe />

      <motion.header
        className="flex flex-col items-center justify-center text-center mt-40 pt-50 px-4 sm:px-8"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
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
      </motion.header>

      <section className="mt-10 py-20 px-4 sm:px-8">
        <motion.h2
          className="text-3xl font-semibold text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          What You’ll Find
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Top-Rated Places",
            "Events & Activities",
            "Community Connections",
          ].map((title, index) => (
            <motion.div
              className="p-6 bg-white bg-opacity-10 rounded-lg"
              key={index}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-300">
                {title === "Top-Rated Places"
                  ? "Explore the highest-rated restaurants, cafes, and tourist spots curated by locals and frequent travelers."
                  : title === "Events & Activities"
                  ? "Discover ongoing events, workshops, and festivals in your area to make the most of your weekends."
                  : "Connect with locals who share your interests and make new friends through community groups and activities."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8">
        <motion.h2
          className="text-3xl font-semibold text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          User Reviews
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
          {reviews.map((review, index) => (
            <UserReviewCard key={index} user={review.user} review={review} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
