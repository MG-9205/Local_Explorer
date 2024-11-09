// src/pages/AboutPage.js
import React from "react";
import { motion } from "framer-motion";
import { FaMapSigns, FaUsers, FaBullseye } from "react-icons/fa";
import Globe from "../components/Globe";
import RotatingEarth from "../components/Rotating_Earth";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen text-white p-8">
      <RotatingEarth />
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      {/* Mission Section */}
      <motion.section
        className="max-w-3xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg mb-12"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-4">
          <FaMapSigns className="text-blue-400 text-3xl mr-4" />
          <h2 className="text-3xl font-semibold">Our Mission</h2>
        </div>
        <p className="text-gray-300">
          At Local Explorer, our mission is to connect people with hidden gems,
          cultural hubs, and unique experiences in local communities. We aim to
          foster a sense of belonging and curiosity wherever people travel.
        </p>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="max-w-3xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg mb-12"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-4">
          <FaBullseye className="text-blue-400 text-3xl mr-4" />
          <h2 className="text-3xl font-semibold">Our Vision</h2>
        </div>
        <p className="text-gray-300">
          We envision a world where travelers immerse themselves deeply in local
          cultures, creating a global network of explorers who prioritize
          sustainability and respect for diversity.
        </p>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        className="max-w-4xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg mb-12"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center mb-8">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Community First",
              description:
                "Building connections and supporting the growth of local communities is at the heart of everything we do.",
            },
            {
              title: "Sustainability",
              description:
                "We encourage responsible travel practices that respect both natural and cultural resources.",
            },
            {
              title: "Innovation",
              description:
                "Always exploring new ways to enhance the traveler experience and promote meaningful, localized adventures.",
            },
          ].map((value, index) => (
            <motion.div
              className="p-4 bg-white bg-opacity-10 rounded-lg"
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="max-w-4xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Manish Gupta",
              role: "Founder & Lead Developer",
              image: "",
            },
            {
              name: "Viraj",
              role: "Founder & Lead Developer",
              image: "",
            },
          ].map((teamMember, index) => (
            <motion.div
              className="text-center"
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={teamMember.image}
                alt={`${teamMember.name}`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-xl font-semibold">{teamMember.name}</p>
              <p className="text-gray-400">{teamMember.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
