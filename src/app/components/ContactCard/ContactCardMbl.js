import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactCardMbl = () => {
  return (
    <div className="w-full  lg:h-[600px] xl:hidden   bg-white rounded-md px-4 py-3">
      {/* Card Content */}

      {/* Left Side - Labels */}
      <div className="pr-4 w-full">
        {/* Full width heading in black */}
        <h2 className="text-[24px] font-bold my-3 mb-2 w-full">
          Contact Information
        </h2>

        {/* Name */}
        <p className="text-gray-800  text-[15px]  sm:text-[18px]    font-semibold">
          Name:
        </p>
        <p className="text-[13px] sm:text-[16px]  font-normal  text-gray-600">
          John Doe
        </p>

        {/* Email */}
        <p className="text-gray-800  text-[15px]  sm:text-[18px]   font-semibold mt-2">
          Email:
        </p>
        <p className="text-[13px] sm:text-[16px]  font-normal  text-gray-600  mt-1">
          johndoe@email.com
        </p>

        {/* Phone */}
        <p className="text-gray-800  text-[15px]  sm:text-[18px]    font-semibold mt-2">
          Phone:
        </p>
        <p className="text-[13px] sm:text-[16px]  font-normal  text-gray-600 mt-1">
          +123 456 7890
        </p>

        {/* Address */}
        <p className="text-gray-800  text-[15px]  sm:text-[18px]   font-semibold mt-2">
          Address:
        </p>
        <p className="text-[13px] sm:text-[16px]  font-normal  text-gray-600  mt-1">
          123 Main St, Suite 456, New York, NY 10001, United States
        </p>

        {/* Website */}
        <p className="text-gray-800  text-[15px]  sm:text-[18px]    font-semibold mt-3">
          Website:
        </p>
        <p className="text-[13px] sm:text-[16px]  font-normal  text-gray-600 mt-1">
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
        <p className="text-gray-800  text-[15px] sm:text-[18px]  font-semibold mt-3">
          Social:
        </p>
        <div className="flex justify-start mt-4 space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-blue-600 text-[24px]  hover:text-blue-800" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-blue-400 text-[24px]  hover:text-blue-600" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-500 text-[24px]  hover:text-pink-700" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-700 text-[24px]  hover:text-blue-900" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCardMbl;
