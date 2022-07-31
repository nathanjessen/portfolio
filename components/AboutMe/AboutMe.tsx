import React from "react";
import Image from 'next/image';
import User from "../../constants/User";
import { socialLinks } from "../../constants/socialLinks";

export const AboutMe = () => {
  return (
    <section className="max-w-6xl mx-auto py-20">
      <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left">
        About Me
      </h1>

      <div className="mt-20">
        <div className="text-container">
          <p className="text-2xl md:text-4xl font-semibold  mx-4">
            I&apos;m a software developer that loves building products and web applications that impact millions of lives. Currently working on{" "}
            <a
              className="bg-primary rounded-md px-2 py-1 text-white"
              href="https://tailwindmasterkit.com"
            >
              Tailwind Master Kit ✈️
            </a>
          </p>
        </div>
      </div>

      <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
        <div className="inline-flex flex-col">
          <div>
            <h1 className="text-xl font-semibold">
              Contact
            </h1>
            <p className="text-lg mt-4">
              For any sort of question or inquiry, send me an{" "}
              <a
                href={`mailto:${User.email}`}
                className="link link-primary font-bold"
              >
                email
              </a>{" "}
              and I&apos;ll get back to you.
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-xl font-semibold">
              Job Opportunities
            </h1>
            <p className="text-lg mt-4">
              I&apos;m actively interviewing for a new role. If you see me as a good fit,
              check my{" "}
              <a
                href={User.resumeUrl}
                download={User.resumeUrl.substring(1)}
                target="_blank"
                rel="noreferrer"
                className="link link-primary font-bold"
              >
                Resume
              </a> and get in touch.
            </p>
          </div>

          <h1 className="text-xl font-semibold mt-8">
            Social Links
          </h1>
          <div className="mt-4 ml-4">
            {socialLinks.facebook && (
              <div className="flex flex-row justify-start items-center">
                <a
                  href={socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg font-mono relative overflow-hidden">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                    Facebook
                  </p>
                </a>
              </div>
            )}

            {socialLinks.twitter && (
              <div className="flex flex-row justify-start items-center">
                <a
                  href={socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg font-mono relative overflow-hidden">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                    Twitter
                  </p>
                </a>
              </div>
            )}

            {socialLinks.github && (
              <div className="flex flex-row justify-start items-center">
                <a
                  href={socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg font-mono relative overflow-hidden">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                    GitHub
                  </p>
                </a>
              </div>
            )}

            {socialLinks.linkedin && (
              <div className="flex flex-row justify-start items-center">
                <a
                  href={socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg font-mono relative overflow-hidden">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                    LinkedIn
                  </p>
                </a>
              </div>
            )}

            {socialLinks.instagram && (
              <div className="flex flex-row justify-start items-center">
                <a
                  href={socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg font-mono relative overflow-hidden">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></span>
                    Instagram
                  </p>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <div>
            <p className="text-xl mb-4">
              I&apos;ve been developing full-stack application since I was 10 years old. I didn&apos;t know what full-stack meant at that time because the term was not coined back then. I&apos;m so out of content right now that I&apos;m literally crying writing this text since lorem text is so 2012 now.
            </p>

            <p className="text-xl mb-4">
              After learning HTML and struggling with CSS, I came up with a brilliant idea of using bootstrap so that I don&apos;t have to style everything by myself and - for obvious reasons - if you knew bootstrap, you were cool.
            </p>

            <p className="text-xl mb-4">
              But now, I&apos;m a legend. I&apos;ve been coding in React, Angular, Vue, Svelte, Node.js, Express, Fastify, MongoDB, MySQL, Bootstrap, Tailwind, C, C++, C#, Rust, Haskell, Perl, PHP, Assembly, Logo and YouDontKnowShit programming language etc to name a few. Although I barely know the syntax (Psst, Stack overflow!), I consider myself a Ninja developer I&apos;m laughing right now.
            </p>
          </div>


          <h2 className="bg-primary text-3xl rounded-md px-2 py-1 inline-block font-bold">
            Tech Stack
          </h2>

          <div className="flex flex-row flex-wrap gap-6 mt-8">
            <Image width={80} height={80}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="javascript icon"
              className="h-20 w-20"
            />
            <Image width={80} height={80}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png" alt="java icon"
              className="h-20 w-20"
            />
            <Image width={80} height={80}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" alt="typescript icon"
              className="h-20 w-20"
            />
            <Image width={80} height={80}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="html icon"
              className="h-20 w-20"
            />
            <Image width={80} height={80}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt="css icon"
              className="h-20 w-20"
            />
            <Image width={80} height={80}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png" alt="angular icon"
              className="h-20 w-20"
            />
            <Image width={80} height={80}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png" alt="vue icon"
              className="h-20 w-20"
            />
            <Image width={80} height={80}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" alt="git icon"
              className="h-20 w-20"
            />
            <Image width={80} height={80}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="react icon"
              className="h-20 w-20"
            />
            <Image width={80} height={80}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" alt="firebase icon"
              className="h-20 w-20"
            />
            <Image width={80} height={80}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" alt="mysql icon"
              className="h-20 w-20"
            />
            <Image width={80} height={80}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" alt="mongodb icon"
              className="h-20 w-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
