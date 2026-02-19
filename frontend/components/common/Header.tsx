import { FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import profile from "@/app/assets/profile.jpg";
import Link from "next/link";


export default function Header () {
    return (
        <>
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
          <li>
            <a href="#about" className="hover:text-black">
              About
            </a>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

        </>

    );
}