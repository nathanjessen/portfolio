import User from "../../constants/User";
import { socialLinks } from "../../constants/socialLinks";
import TechList from "../TechList";
import Link from "next/link";

export const AboutMe = () => {
  return (
    <section>
      <p className="text-2xl md:text-4xl font-semibold px-8">
        I&apos;m a frontend developer who loves to build and document UI components using tools like React and Storybook.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-20">
        <div>
          <div>
            <h2 className="text-xl font-semibold">
              Contact
            </h2>
            <p className="text-lg mt-4">
              I&apos;d love to hear from you or answer any questions you may have. Reach out using the{" "}
              <Link href="/contact">
                <a className="link link-primary font-bold">
                  Contact
                </a>
              </Link> page.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">
              Job Opportunities
            </h2>
            <p className="text-lg mt-4">
              I&apos;m actively interviewing for a new role. If I might be a good fit,{" "}
              {User.resumeUrl && (
                <>
                  check out my{" "}
                  <a
                    href={User.resumeUrl}
                    download={User.resumeName}
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

          <div className="mt-8">
            <h2 className="text-xl font-semibold">
              Social Links
            </h2>
            <div className="mt-4 ml-4">
              {socialLinks.facebook && (
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={socialLinks.facebook}
                    className="flex flex-row items-center space-x-4 group py-2"
                  >
                    <span>&rarr;</span>
                    <p className="text-lg relative overflow-hidden">
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
                    className="flex flex-row items-center space-x-4 group py-2"
                  >
                    <span>&rarr;</span>
                    <p className="text-lg relative overflow-hidden">
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
                    className="flex flex-row items-center space-x-4 group py-2"
                  >
                    <span>&rarr;</span>
                    <p className="text-lg relative overflow-hidden">
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
                    className="flex flex-row items-center space-x-4 group py-2"
                  >
                    <span>&rarr;</span>
                    <p className="text-lg relative overflow-hidden">
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
                    className="flex flex-row items-center space-x-4 group py-2"
                  >
                    <span>&rarr;</span>
                    <p className="text-lg relative overflow-hidden">
                      <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></span>
                      Instagram
                    </p>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <div className="space-y-4">
            <p className="text-xl">
              I&apos;ve been developing frontend applications professionally for over 10 years. My workflow has evolved over the years to include more unit testing and automation to find issues earlier and give myself more time to develop new features.
            </p>
            <p className="text-xl">
              The user is at the heart of every decision I make. Websites and applications should be accessible to everyone and the interface and user journey should constantly evolve to give the best user experience.
            </p>
            <p className="text-xl">
              I&apos;m looking for a position that allows me to continue with my work and evolve as a developer, contributor, and leader. An ideal position would involve mentoring Junior developers, coding applications with React and Storybook, and allow me to work toward certifications in things like WCAG 2.1 AA compliance.
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
