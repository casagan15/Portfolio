import { FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import profile from "@/app/assets/profile.jpg";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Let's get in touch!</h2>
          <p className="text-gray-600 mt-4">
            You can reach me at the following
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* LEFT SIDE */}
          <div className="space-y-6">
            
            {/* Email Card */}
            <div className="bg-linear-to-r from-black to-gray-900 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-lg">johncasagan23@gmail.com</p>
              <p className="text-gray-400 mt-2 text-sm">
                I usually email you back within an hour.
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-linear-to-r from-black to-gray-900 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p className="text-lg">+63 927934939</p>
              <p className="text-gray-400 mt-2 text-sm">
                I'm available weekdays from 9AM to 6PM
              </p>
            </div>

            {/* Social Card */}
            <div className="bg-linear-to-r from-black to-gray-900 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Connect with me</h3>

              <div className="flex gap-4">
                <div className="border border-gray-700 p-4 rounded-xl hover:bg-gray-800 cursor-pointer">
                  LinkedIn
                </div>
                <div className="border border-gray-700 p-4 rounded-xl hover:bg-gray-800 cursor-pointer">
                  <a href="https://github.com/casagan15/">Github</a>
                </div>
                <div className="border border-gray-700 p-4 rounded-xl hover:bg-gray-800 cursor-pointer">
                  <a href="https://www.instagram.com/sungjohunn?igsh=MWZ3Nnh5Mmk3enI5dQ==
Sent/">Instagam</a>
                </div>
                <div className="border border-gray-700 p-4 rounded-xl hover:bg-gray-800 cursor-pointer">
                 <a href="https://www.facebook.com/john.escuadro.casagan/">Facebook </a> 
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Let's get in touch
            </h3>

            <p className="text-gray-600 mb-8">
              Whether you have a project in mind or just want to connect,
              I'd love to hear from you.
            </p>

            <form className="space-y-6">
              
              {/* Name Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-black to-gray-900 text-white py-4 rounded-xl hover:opacity-90 transition"
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
