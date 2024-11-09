import React from "react";
import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Globe from "../components/Globe";
import RotatingEarth from "../components/Rotating_Earth";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen text-white p-8">
      <RotatingEarth />
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>

      {/* Contact Form */}
      <motion.section
        className="max-w-2xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg mb-12"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
        <form className="space-y-6">
          {["name", "email", "message"].map((field, idx) => (
            <motion.div
              key={field}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: idx * 0.1 }}
            >
              <label
                className="block text-sm font-medium text-gray-300 mb-1"
                htmlFor={field}
              >
                {field === "name"
                  ? "Your Name"
                  : field === "email"
                  ? "Email Address"
                  : "Your Message"}
              </label>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  className="w-full p-3 rounded bg-transparent border border-gray-500 text-gray-300 focus:ring-2 focus:ring-blue-500"
                  required
                />
              ) : (
                <textarea
                  name={field}
                  className="w-full p-3 rounded bg-transparent border border-gray-500 text-gray-300 focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  required
                />
              )}
            </motion.div>
          ))}

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
          >
            <Button type="submit" color="dark" className="w-full py-3">
              Submit
            </Button>
          </motion.div>
        </form>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        className="max-w-2xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
        <div className="space-y-4">
          {[
            {
              icon: <FaPhoneAlt className="text-blue-400 mr-4" />,
              text: "7678-----",
            },
            {
              icon: <FaEnvelope className="text-blue-400 mr-4" />,
              text: "viraj180201@gmail.com",
            },
            {
              icon: <FaMapMarkerAlt className="text-blue-400 mr-4" />,
              text: "Institute of innovation in technology and management, janakpuri delhi",
            },
          ].map((contact, idx) => (
            <motion.div
              key={idx}
              className="flex items-center"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 * idx }}
            >
              {contact.icon}
              <span className="text-gray-300">{contact.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
