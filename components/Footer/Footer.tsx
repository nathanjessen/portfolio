import User from "../../constants/User";
import SocialNav from "../SocialNav";

export const Footer = () => {
  return (
    <footer className="bg-base-300" role="contentinfo">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <SocialNav />

        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base leading-6">
            &copy; 2022 {User.name}
          </p>
        </div>
      </div>
    </footer>
  );
};
