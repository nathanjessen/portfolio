import Link from "next/link";
// import Brand from "../Brand";

export const NavbarCustom = () => {
  const showMenu = () => {
    const mobileMenu = document.getElementById("MobileMenu");
    let isExpanded = mobileMenu?.getAttribute("aria-expanded");

    if (isExpanded == "true") {
      isExpanded = "false";
      mobileMenu?.classList.remove("block");
      mobileMenu?.classList.add("hidden");
    } else {
      isExpanded = "true";
      mobileMenu?.classList.remove("hidden");
      mobileMenu?.classList.add("block");
    }
    mobileMenu?.setAttribute("aria-expanded", isExpanded);
  };

  return (
    <nav className="bg-base-100 fixed top-0 w-full z-10">
      <div className="navbar px-4 sm:px-6 lg:px-8 py-4">
        <div className="navbar-start">
          {/* <Brand /> */}
        </div>

        <div className="navbar-end hidden sm:flex justify-end">
          <ul className="menu menu-horizontal">
            {/* active class current='bordered !rounded-none' */}
            <li className={'current'}>
              <Link href="/" className="px-8 !rounded-none">
                Home
              </Link>
            </li>
            <li className={'current'}>
              <Link href="/about" className="px-8 !rounded-none">
                About
              </Link>
            </li>
            <li className={'current'}>
              <Link href="/projects" className="px-8 !rounded-none">
                Projects
              </Link>
            </li>
            <li className={'current'}>
              <Link href="/experience" className="px-8 !rounded-none">
                Experience
              </Link>
            </li>
            <li className={'current'}>
              <Link href="/contact" className="px-8 !rounded-none">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex sm:hidden">
          <label className="btn btn-ghost btn-circle swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" aria-label="Main menu" onChange={showMenu} />

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
      </div>

      {/*
        Mobile menu, toggle classes based on menu state.
        Menu open: "block", Menu closed: "hidden"
      */}
      <div className="hidden sm:hidden" id="MobileMenu" aria-expanded="false">
        <ul className="menu w-full pb-4">
          {/* <li>
            <Link href="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="active">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="active">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/experience" className="active">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/contact" className="active">
              Contact
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
