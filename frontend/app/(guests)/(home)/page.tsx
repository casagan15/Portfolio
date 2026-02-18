import { FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import profile from "@/app/assets/profile.jpg";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6">
        <div>
          <h1 className="text-xl font-semibold">John Casagan</h1>
          <p className="text-sm text-gray-500">Software Developer</p>
        </div>

        <ul className="flex gap-6 text-gray-600">
          <li>
            <Link href="/" className="font-medium text-black">
              Home
            </Link>
          </li>
          <a href="#about" className="hover:text-black">
            About
          </a>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* HERO SECTION */}

      <section className="flex items-start justify-between gap-20 px-16 mt-24 bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl py-20">
        <div className="max-w-xl">
          <p className="text-green-600 font-medium mb-2">● Message me</p>

          <h2 className="text-5xl font-bold mb-6">Hey, I'm John 👋</h2>

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
      <section id="about" className="px-16 mt-32">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600">
          Hi there, I'm John. I'm a Software Developer...
        </p>
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
              The Fast Kaon website was developed using modern web technologies such as HTML, CSS, and JavaScript for the structure, design, and interactivity of the platform.
            </p>
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
    </div>
  );
}
