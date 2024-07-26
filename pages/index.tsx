import { motion } from "framer-motion";
import { NextPage } from "next";
import { LogoLinkedin, LogoGithub, LogoX } from "@carbon/icons-react";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <motion.header
        className="p-5 bg-gray-800 dark:bg-gray-700 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Shreyash Karnik</h1>
        <p>Software Engineer</p>
      </motion.header>

      <main className="p-10">
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold dark:text-gray-300">
            About Me
          </h2>
          <p className="dark:text-gray-400">
            Growth-oriented Software Engineer with over 3 years of experience...
          </p>
        </motion.section>

        <motion.section
          id="skills"
          className="mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold dark:text-gray-300">Skills</h2>
          <ul className="list-disc ml-5 dark:text-gray-400">
            <li>Python, JavaScript, TypeScript</li>
            <li>React, Django</li>
            <li>PostgreSQL, Docker</li>
            <li>Celery, Redis, Git</li>
          </ul>
        </motion.section>
        <motion.section
          id="contact"
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold dark:text-gray-300">Contact</h2>
          {[
            {
              IconElement: LogoLinkedin,
              label: "LinkedIn",
              href: "https://linkedin.com/in/shreyash-karnik-b6b38440",
              hrefLabel: "Shreyash Karnik",
            },
            {
              IconElement: LogoGithub,
              label: "GitHub",
              href: "https://github.com/SniperBuddy101",
              hrefLabel: "SniperBuddy101",
            },
            {
              IconElement: LogoX,
              label: "X",
              href: "https://x.com/shreyashkarnik",
              hrefLabel: "shreyashkarnik",
            },
          ].map((element) => {
            return (
              <div key={element.label} className="flex items-center dark:text-gray-400">
                <element.IconElement className="mr-2" />
                <p>
                  {element.label}{" "}
                  <a
                    target="_blank"
                    href={element.href}
                    className="text-blue-500"
                  >
                    {element.hrefLabel}
                  </a>
                </p>
              </div>
            );
          })}
        </motion.section>
      </main>
    </div>
  );
};

export default Home;
