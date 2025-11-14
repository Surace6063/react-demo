import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Logo or name */}
        <h2 className="text-lg font-semibold">MyWebsite</h2>

        {/* Center: Navigation links */}
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        {/* Right side: Copyright */}
        <p className="text-sm mt-3 md:mt-0">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
