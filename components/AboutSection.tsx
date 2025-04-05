import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Fellipe Juncal and I am a{" "}
              <span className="font-bold">{"passionate"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" curios"}</span> software engineer
              based in Rio de Janeiro, Brazil, with a strong desire to create
              impactful solutions through technology.
            </p>
            <br />
            <p>
              I’ve been working in software development for the past few years,
              mainly with Java, React, and modern backend architectures, and I
              thrive in projects that involve complex challenges, clean code,
              and real-world impact. I’m currently focused on growing as a
              fullstack developer, while also diving deeper into cloud computing
              and system design.
            </p>
            <br />
            <p>
              Outside of coding, I’m all about enjoying life — whether it&#39;s
              playing football, going to the gym, traveling, or just diving into
              a good tech article or side project. I’m always seeking ways to
              learn something new and evolve both personally and professionally.
            </p>
            <br />
            <p>
              I truly believe in{" "}
              <span className="font-bold text-teal-500">constant growth</span>{" "}
              and I’m excited about what the future holds. Whether it’s working
              with new technologies, collaborating with great people, or
              building something meaningful — I’m here for it. Let&#39;s connect
              and make it happen!🚀
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image-man3.png"
              alt=""
              width={325}
              height={325}
              className=" hidden mt-10 md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
