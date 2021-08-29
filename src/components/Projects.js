//import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
const projects = [
    {
      title: "BarkBook",
      subtitle: "MERN Stack",
      description:
        "LA Mern stack social media for dogs and dog lovers",
      image: "../assets/Barkbook.JPG",
      link: "https://barkbook.herokuapp.com/",
    },
    {
      title: "runBuddy",
      subtitle: "HTML CSS JS",
      description:
        "This is a html css js website that is used to advertise a gym called runbuddy",
      image: "../assets/runBuddy.JPG",
      link: "https://anirud314.github.io/Run-Buddy/",
    },
    {
      title: "bikeWise",
      subtitle: "FrontEnd Backend web dev HTML CSS JS",
      description:
        "This project is to map out bike paths and find hazards related to biking around that area",
      image: "../assets/bikeWise.JPG",
      link: "https://acevezl.github.io/biker/",
    },
    {
      title: "GarageSale",
      subtitle: "MERN STACK",
      description:
        "Poject using mern Fullstack, The project is about buying and selling items over the internet",
      image: "../project-4.gif",
      link: "https://pythonbootcamp.com",
    },
  ];
function Projects() {
  return (
    <section id="projects">
      <div>
        <div>
          <h1>
            Apps I've Built
          </h1>
          <p>
          These are some of the fullstack apps that I have built with my experience.
          </p>
        </div>
        <div className = "project">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}>
              <div>
                <img
                  alt="gallery"
                  src={project.image}
                />
                <div className = "project-text">
                  <h2>
                    {project.subtitle}
                  </h2>
                  <h1>
                    {project.title}
                  </h1>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;