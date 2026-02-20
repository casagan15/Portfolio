"use client";

import Image from "next/image";
import profile from "@/app/assets/profile.jpg"; // replace with your image
import Cover from "@/app/assets/cover.jpg"; // replace with your cover image

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">

      
      {/* COVER SECTION */}
      <section className="relative px-10 mt-6">
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src={Cover}
            alt="Cover"
            fill
            className="object-cover"
          />
        </div>

        {/* PROFILE IMAGE */}
        <div className="absolute -bottom-16 left-16">
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <Image
              src={profile}
              alt="Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* NAME SECTION */}
      <section className="mt-20 px-10">
        <h2 className="text-3xl font-semibold">John casagan</h2>
        <p className="text-gray-500 italic">Software Developer</p>
      </section>

      {/* CONTENT SECTION */}
      <section className="grid md:grid-cols-2 gap-8 px-10 py-10">

        {/* ABOUT CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <p className="text-gray-600 leading-relaxed">
            Hi there, I'm john. I'm a Software Developer passionate about
            developing high-performance applications that seamlessly bridge
            web and mobile experiences.
          </p>
        </div>

        {/* EXPERIENCE CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="text-xl font-semibold mb-4">Experience</h3>

          <div className="space-y-4">
            <div>
              <p className="font-medium">Web Developer (Remote)</p>
              <p className="text-sm text-gray-500">2023 - Present</p>
            </div>

            <div>
              <p className="font-medium">Frontend Developer</p>
              <p className="text-sm text-gray-500">2021 - 2023</p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}