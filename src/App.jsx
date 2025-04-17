import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";
import {
  FaReact,
  FaJava,
  FaLinkedin,
  FaGithub,
  FaNodeJs,
  FaJsSquare,
  FaPhp,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { projects } from "./projects";
import Modal from "./components/Modal";

import "./App.css";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isImage, setIsImage] = useState([]);

  const handleOpenModal = (images) => {
    setIsImage(images);

    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

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

              <div className="flex flex-wrap gap-2 mt-3">
                <a
                  href="https://www.facebook.com/jgenabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border p-2 rounded flex items-center gap-2 hover:bg-white hover:text-black w-full sm:w-auto"
                >
                  <FaFacebook />
                  Facebook
                </a>
                <a
                  href="https://github.com/Javabutdif"
                  className="border p-2 rounded flex items-center gap-2 hover:bg-white hover:text-black w-full sm:w-auto"
                >
                  <FaGithub />
                  Github
                </a>
                <a
                  href="https://www.credly.com/users/anton-james-genabio"
                  className="border p-2 rounded flex items-center gap-2 hover:bg-white hover:text-black w-full sm:w-auto"
                >
                  <LuBadgeCheck />
                  Credly Badges
                </a>
                <a
                  href="https://www.linkedin.com/in/anton-james-genabio-2a4149316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="border p-2 rounded flex items-center gap-2 hover:bg-white hover:text-black w-full sm:w-auto"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>

              <div className="mt-6">
                <p>Languages</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2 mt-2">
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    C#
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    <FaJava className="mt-1" />
                    Java
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    <FaReact className="mt-1" />
                    React
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    <DiMongodb className="mt-1" />
                    Mongo DB
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    <SiExpress className="mt-1" />
                    Express JS
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    <FaNodeJs className="mt-1" />
                    Node JS
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    <FaJsSquare className="mt-1" />
                    JavaScript
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    <FaPhp className="mt-1" />
                    PHP
                  </button>
                  <button className="border p-2 rounded flex flex-row gap-2 hover:bg-white hover:text-black">
                    <AiOutlineDotNet className="mt-1" />
                    .NET MVC
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
                    className="rounded w-full h-52 object-cover mb-4"
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
                    <button
                      className="bg-blue-400 px-4 py-2 rounded text-white hover:bg-blue-400"
                      onClick={() => handleOpenModal(project.images)}
                    >
                      View
                    </button>
                    
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        {isOpen && (
          <Modal
            images={isImage}
            isOpen={isOpen}
            onClose={() => handleCloseModal()}
          />
        )}
      </div>
    </>
  );
}

export default App;
