import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactCardDesk = () => {
  return (
    <div className="hidden xl:block max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 relative bottom-10 z-50">
      {/* Card Content */}
      <div className="flex">
        {/* Left Side - Labels */}
        <div className="w-1/2 pr-4">
          <p className="text-gray-600 font-semibold">Name:</p>
          <p className="text-gray-600 font-semibold mt-4">Email:</p>
          <p className="text-gray-600 font-semibold mt-4">Phone:</p>
          <p className="text-gray-600 font-semibold mt-4">Address:</p>
          <p className="text-gray-600 font-semibold mt-28">Website:</p>
          <p className="text-gray-600 font-semibold mt-4">Social:</p>
        </div>

        {/* Right Side - Actual Data */}
        <div className="w-1/2">
          <p className="text-gray-800">John Doe</p>
          <p className="text-gray-800 mt-4">johndoe@email.com</p>
          <p className="text-gray-800 mt-4">+123 456 7890</p>
          <p className="text-gray-800 mt-4">
            123 Main St, <br />
            Suite 456, <br />
            New York, <br />
            NY 10001, <br />
            United States
          </p>
          <p className="text-gray-800 mt-4">
            <a
              href="https://johndoewebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              www.johndoewebsite.com
            </a>
          </p>
          <div className="flex justify-start mt-6 space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 text-2xl hover:text-pink-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900" />
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}

      <button className=" bottom-2 border-gray-900 bg-purple-600 py-2 my-4 w-[350px]">
        Contact us
      </button>
    </div>
  );
};

export default ContactCardDesk;
