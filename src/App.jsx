import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";

import "./App.css";
function App() {
  const projects = [
    {
      id: 1,
      title: "PSITS Website",
      description:
        " The PSITS Website is a custom-built platform for the College of Computer Studies and the Student Body Organization, specifically under PSITS (Philippine Society of Information Technology Students). This website facilitates the ordering of merchandise, uniforms, and other items by students. With an integrated Point of Sale (POS) system, the platform ensures smooth transaction processing, including receipt generation for every purchase. The website is designed to assist the organization's treasurers and officers by streamlining data compilation and inventory management, reducing the need for manual work and improving overall efficiency. It provides a practical tool for managing orders and transactions within the student organization",
      image: "psits.png",
      demoLink: "https://psits-web.vercel.app/",
      codeLink: "https://github.com/Javabutdif/psits-web-react.git",
    },
    {
      id: 2,
      title: "MentalHelp PH (Capstone)",
      description:
        "Personalized Mental Health Professionals Matching Platform for Mental Health Support",
      image: "mentalhelp.jpg",
      demoLink: "#",
      codeLink: "https://github.com/Javabutdif/MentalHelp-PH-React-Vite.git",
    },
    {
      id: 3,
      title: "System Architecture Project (Sit in Monitoring System)",
      description:
        "College of Computer Studies Sit in Monitoring System using Vanilla JS, Bootstrap , Chart JS and PHP",
      image: "sit.png",
      demoLink: "#",
      codeLink: "https://github.com/Javabutdif/System_Integration.git",
    },
    {
      id: 4,
      title: "Restify (Elnet Project)",
      description:
        "Using ASP Net MVC to find a suitable Rent Place and display the information. It is not complete",
      image: "restifywbg.jpg",
      demoLink: "#",
      codeLink: "https://github.com/Javabutdif/Restify_Core.git",
    },
  ];

  return (
    <>
      <div className="bg-gray-800 min-h-screen text-white">
        <header className="bg-gray-700 py-4 px-2 text-white">
          <nav className="text-xl ps-1 font-thin">Anton James Genabio</nav>
        </header>
        <main className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <h1 className="text-white text-6xl mt-6 font-serif">
                Anton James Genabio
              </h1>
              <p className="text-sm mt-2">
                Aspiring Fullstack Web Developer | Developer at PSITS UC-MAIN
              </p>

              <div className="flex flex-row gap-2 mt-3">
                <a
                  href="https://www.facebook.com/jgenabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black"
                >
                  <FaFacebook className="mt-1" />
                  Facebook
                </a>
                <a
                  href="https://github.com/Javabutdif"
                  className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black"
                >
                  <FaGithub className="mt-1" />
                  Github
                </a>
                <a
                  href="https://www.credly.com/users/anton-james-genabio"
                  className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black"
                >
                  <LuBadgeCheck className="mt-1" />
                  Credly Badges
                </a>
              </div>
              <div className="mt-6">
                <p>Languages</p>
                <div className="flex flex-row gap-2 mt-2">
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    C#
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    Java
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    React
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    Mongoose
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    Express JS
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    Node JS
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    JavaScript
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    PHP
                  </button>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    ASP Net MVC
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <img
                src="profile.png"
                alt="Profile"
                className="rounded-full w-auto h-auto object-cover shadow-lg ring-4 ring-gray-300"
              />
            </div>
          </div>

          <section className="mt-10">
            <h2 className="text-4xl font-semibold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-700 rounded-lg p-4 shadow-lg flex flex-col"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded w-full h-36 object-cover mb-4"
                  />
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm mt-2 overflow-y-scroll max-h-60 custom-scrollbar flex-grow">
                    {project.description.split(".").map((text, index) => (
                      <span key={index}>
                        {text.trim()}.
                        <br />
                        <br />
                      </span>
                    ))}
                  </p>

                  <div className="flex gap-2 mt-4 mt-auto">
                    {project.demoLink !== "#" && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500"
                      >
                        Website
                      </a>
                    )}

                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-400"
                    >
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
