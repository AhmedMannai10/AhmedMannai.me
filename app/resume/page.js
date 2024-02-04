import React from "react";

const ResumePage = () => {
  return (
    <div className="min-h-screen mt-3  flex items-center justify-center container relative">
      <div className=" p-8 shadow-md rounded-md">
        <h1 className="text-4xl font-bold mb-4">Ahmed Mannai</h1>
        <p className="mb-8">Passionate Software Engineer</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div>
            <h3 className="text-lg font-medium mb-2">
              Software Engineer Intern
            </h3>
            <p className=" mb-1">
              Altersis Performance | February 2023 – June 2023
            </p>
            <ul className="list-disc pl-6">
              <li>
                Developed a front-end performance testing tool using Selenium
                and Java.
              </li>
              <li>
                Aimed at evaluating and enhancing web application performance
                during development.
              </li>
              <li>
                Integrated a Grafana dashboard for visualizing performance
                metrics over time.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">
              Software Engineer Intern
            </h3>
            <p className=" mb-1">Accent | June 2022 – August 2022</p>
            <ul className="list-disc pl-6">
              <li>
                Developed a fully functional Flutter Desktop App for circuit
                board communication.
              </li>
              <li>
                Automated calibration processes for improved functionality.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div>
            <h3 className="text-lg font-medium mb-2">
              Full Stack Personal Blog Website
            </h3>
            <p className=" mb-1">Self-Learning Project | NextJS ∗ Firebase</p>
            <p>
              Build a personal website for sharing projects and publishing blog
              posts (www.ahmedmannai.me).
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">
              Earthquake Data Visualization Desktop App
            </h3>
            <p className=" mb-1">Self-Learning Project | Java</p>
            <p>
              Desktop app that gets data about earthquakes from NASA's API and
              visualizes them on an earth map.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div>
            <h3 className="text-lg font-medium mb-2">Back End Development</h3>
            <ul className="list-disc pl-6">
              <li>JavaScript</li>
              <li>NestJS</li>
              <li>Java</li>
              <li>Python</li>
              <li>C</li>
              <li>Spring Boot</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Front End Development</h3>
            <ul className="list-disc pl-6">
              <li>NextJS</li>
              <li>ReactJS</li>
              <li>Flutter</li>
              <li>Dart</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Miscellaneous</h3>
            <ul className="list-disc pl-6">
              <li>Docker</li>
              <li>Oracle SQL</li>
              <li>PostgreSQL</li>
              <li>Git</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Coursework</h2>
          <ul className="list-disc pl-6">
            <li>Data Structures and Algorithms</li>
            <li>Object-Oriented Programming</li>
            <li>Mobile Development</li>
            <li>Software Engineering</li>
            <li>Artificial Intelligence</li>
            <li>Operating Systems</li>
            <li>Database Management Systems</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
