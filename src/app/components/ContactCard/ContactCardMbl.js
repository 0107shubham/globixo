import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactCardMbl = () => {
  return (
    <div className="w-full  lg:h-[600px] xl:hidden   bg-white  p-6">
      {/* Card Content */}

      {/* Left Side - Labels */}
      <div className="pr-4 w-full">
        {/* Full width heading in black */}
        <h2 className="text-black text-[20px] font-bold mb-4 w-full">
          Contact Information
        </h2>

        {/* Name */}
        <p className="text-gray-700  text-[15px]  font-semibold">Name:</p>
        <p className="text-gray-400  text-[13px] ">John Doe</p>

        {/* Email */}
        <p className="text-gray-700  text-[15px]  font-semibold mt-4">Email:</p>
        <p className="text-gray-400 text-[13px]  mt-1">johndoe@email.com</p>

        {/* Phone */}
        <p className="text-gray-700  text-[15px]  font-semibold mt-4">Phone:</p>
        <p className="text-gray-400 text-[13px]  mt-1">+123 456 7890</p>

        {/* Address */}
        <p className="text-gray-700  text-[15px]  font-semibold mt-4">
          Address:
        </p>
        <p className="text-gray-400 text-[13px]  mt-1">
          123 Main St, Suite 456, New York, NY 10001, United States
        </p>

        {/* Website */}
        <p className="text-gray-700  text-[15px]  font-semibold mt-8">
          Website:
        </p>
        <p className="text-gray-400 mt-1 text-[13px] ">
          <a
            href="https://zelonihire.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            www.zelonihire.com.com
          </a>
        </p>

        {/* Social Media */}
        <p className="text-gray-700  text-[15px]   font-semibold mt-8">
          Social:
        </p>
        <div className="flex justify-start mt-4 space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-blue-600 text-[16px]  hover:text-blue-800" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-blue-400 text-[16px]  hover:text-blue-600" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-500 text-[16px]  hover:text-pink-700" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-700 text-[16px]  hover:text-blue-900" />
          </a>
        </div>
      </div>

      {/* Contact Button */}
      <button className="w-full bg-purple-600  text-[16px]  text-white py-2 mt-6 rounded-lg hover:bg-purple-700">
        Contact us
      </button>
    </div>
  );
};

export default ContactCardMbl;
