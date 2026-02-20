import { FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import profile from "@/app/assets/profile.jpg";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}

      <section className="flex items-start justify-between gap-20 px-16 mt-24 bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl py-20">
        <div className="max-w-xl">
          <p className="text-green-600 font-medium mb-2">● Message me</p>

          <h2 className="text-5xl font-bold mb-6">Hey, I'm John </h2>

          <p className="text-gray-600 mb-8">
            A passionate software developer eager to learn and build websites
            and applications that are simple, functional, and visually
            appealing.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg">
                Free Consultation
              </button>

              <button className="border px-6 py-3 rounded-lg">
                Explore Projects
              </button>
            </div>

            <div className="flex gap-4 text-xl text-gray-600">
              <FiGithub />
              <FiLinkedin />
              <FiFacebook />
            </div>
          </div>
        </div>

        <div className="w-420px mr-10">
          <Image
            src={profile}
            alt="Profile"
            width={420}
            height={420}
            className="rounded-2xl object-cover"
          />
        </div>
      </section>
      

      {/* PROJECTS SECTION */}
      <section className="px-16 mt-32 flex flex-col items-center text-center">
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
          Recent Projects
        </span>

        <h2 className="text-3xl font-bold mb-4">Check out my recent work</h2>

        <p className="text-gray-600 max-w-xl mb-12">
          Here are some of the projects I worked on while learning web
          development.
        </p>

        <div className="grid grid-cols-3 gap-8">
          {/* PROJECT CARD */}
          <div className="rounded-2xl border p-4 shadow-sm">
            <Image
              src="/project1.png"
              alt="Project 1"
              width={400}
              height={250}
              className="rounded-xl mb-4"
            />
            <h3 className="font-semibold text-lg">fast-kaon Website</h3>
            <p className="text-sm text-gray-600">
              The Fast Kaon website was developed using modern web technologies
              such as HTML, CSS, and JavaScript for the structure, design, and
              interactivity of the platform.
            </p>
            
            <div className="flex justify-start">
  <button className="bg-black text-white px-4 py-1.5 text-sm rounded-full font-medium hover:bg-gray-800 transition duration-300">
    Get Started
  </button>
</div>
              
          </div>

          <div className="rounded-2xl border p-4 shadow-sm">
            <Image
              src="/project2.png"
              alt="Project 2"
              width={400}
              height={250}
              className="rounded-xl mb-4"
            />
            <h3 className="font-semibold text-lg">Landing Page</h3>
            <p className="text-sm text-gray-600">
              A clean landing page design for practice.
            </p>
           
          </div>

          <div className="rounded-2xl border p-4 shadow-sm">
            <Image
              src="/project3.png"
              alt="Project 3"
              width={400}
              height={250}
              className="rounded-xl mb-4"
            />
            <h3 className="font-semibold text-lg">Mini Web App</h3>
            <p className="text-sm text-gray-600">
              A basic web app made for school requirements.
            </p>
             
          </div>
        </div>
      </section>

    
      <section className="flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl rounded-2xl bg-black p-16 text-center shadow-2xl">
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Need help building something?
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Whether you're searching for a dedicated partner to develop your project
          or simply need expert support, I'm here to help.
        </p>

        <button className="bg-white text-black font-medium px-8 py-3 rounded-xl shadow-md hover:bg-gray-200 transition duration-300">
          Get in Touch
        </button>

      </div>
    </section>

    </div>
  );
}
