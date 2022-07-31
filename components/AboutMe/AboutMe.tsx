import User from "../../constants/User";
import { socialLinks } from "../../constants/socialLinks";
import TechList from "../TechList";

export const AboutMe = () => {
  return (
    <section className="py-12">
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

      <div className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-20">
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
              I&apos;m actively interviewing for a new role. If I might be a good fit,{" "}
              {User.resumeUrl && (
                <>
                  check out my{" "}
                  <a
                    href={User.resumeUrl}
                    download={User.resumeUrl.substring(1)}
                    target="_blank"
                    rel="noreferrer"
                    className="link link-primary font-bold"
                  >
                    Resume
                  </a> and{" "}
                </>
              )}
              get in contact.
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
          <div className="space-y-4">
            <p className="text-xl">
              I&apos;ve been developing full-stack application since I was 10 years old. I didn&apos;t know what full-stack meant at that time because the term was not coined back then. I&apos;m so out of content right now that I&apos;m literally crying writing this text since lorem text is so 2012 now.
            </p>

            <p className="text-xl">
              After learning HTML and struggling with CSS, I came up with a brilliant idea of using bootstrap so that I don&apos;t have to style everything by myself and - for obvious reasons - if you knew bootstrap, you were cool.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="bg-primary text-3xl rounded-md px-3 inline-block font-medium mb-6">
              Tech Stack
            </h2>
            <TechList />
          </div>
        </div>
      </div>
    </section>
  );
};
