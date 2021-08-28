//import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
const projects = [
    {
      title: "React Reserve",
      subtitle: "MERN Stack",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-1.gif",
      link: "https://reactbootcamp.com",
    },
    {
      title: "React Tracks",
      subtitle: "React and Python",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-2.gif",
      link: "https://reedbarger.com",
    },
    {
      title: "DevChat",
      subtitle: "React and Firebase",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-3.gif",
      link: "https://jsbootcamp.com",
    },
    {
      title: "Epic Todo App",
      subtitle: "React Hooks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-4.gif",
      link: "https://pythonbootcamp.com",
    },
  ];
function Projects() {
  return (
    <section id="projects">
      <div>
        <div>
          <CodeIcon/>
          <h1>
            Apps I've Built
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}>
              <div>
                <img
                  alt="gallery"
                  src={project.image}
                />
                <div>
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