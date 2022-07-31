import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import User from "../../constants/User";
import Brand from "../Brand";
import SocialNav from "../SocialNav";

export const Navbar = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleMenu = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };

  return (
    <header className="bg-base-100 fixed top-0 w-full z-50">
      <nav className="navbar px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        <div className="navbar-start">
          <Brand
            name={User.name}
            position={User.position}
          />
        </div>

        <div className="navbar-center hidden sm:block">
          <ul className="menu menu-horizontal">
            <li className={`border-b-4 ${router.asPath === "/about" ? 'border-primary !rounded-none' : 'border-transparent hover:border-primary-focus'}`}>
              <Link href="/about" className="px-8 !rounded-none">
                About
              </Link>
            </li>
            <li className={`border-b-4 ${router.asPath === "/projects" ? 'border-primary !rounded-none' : 'border-transparent hover:border-primary-focus'}`}>
              <Link href="/projects" className="px-8 !rounded-none">
                Projects
              </Link>
            </li>
            <li className={`border-b-4 ${router.asPath === "/experience" ? 'border-primary !rounded-none' : 'border-transparent hover:border-primary-focus'}`}>
              <Link href="/experience" className="px-8 !rounded-none">
                Experience
              </Link>
            </li>
            <li className={`border-b-4 ${router.asPath === "/contact" ? 'border-primary !rounded-none' : 'border-transparent hover:border-primary-focus'}`}>
              <Link href="/contact" className="px-8 !rounded-none">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end hidden sm:flex justify-end">
          <SocialNav />
        </div>

        <div className="navbar-end flex sm:hidden">
          <label className="btn btn-ghost btn-circle swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" aria-label="Main menu" onChange={toggleMenu} />

            {/* hamburger icon */}
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
              viewBox="0 0 512 512">
              <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </nav>

      {/* Mobile menu */}
      {expanded && (
        <nav>
          <ul className="menu w-full pb-4">
            <li>
              <Link href="/about">
                <a className={router.asPath === "/about" ? "active" : ""}>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className={router.asPath === "/projects" ? "active" : ""}>
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <a className={router.asPath === "/experience" ? "active" : ""}>
                  Experience
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={router.asPath === "/contact" ? "active" : ""}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
