import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt4 } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-lg border-b border-border/20" />
      
      <div className="relative flex justify-between items-center px-6 md:px-8 py-4">
        {/* Logo */}
        <a href="/" className="font-megrim text-2xl md:text-xl text-text hover:text-accent transition-colors duration-300">
          Whizper
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-inter">
          <a href="/confessions" className="text-sm text-text/85 hover:text-accent transition-colors duration-300 relative group">
            Confessions
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-secondary group-hover:w-full transition-all duration-300" />
          </a>
          <a href="/new" className="text-sm text-text/85 hover:text-accent transition-colors duration-300 relative group">
            Share
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-secondary group-hover:w-full transition-all duration-300" />
          </a>
          <a href="/admin" className="text-sm text-text/85 hover:text-accent transition-colors duration-300 relative group">
            Admin
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-secondary group-hover:w-full transition-all duration-300" />
          </a>
          <div className="h-6 w-px bg-text/10" />
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-2xl focus:outline-none transition-transform duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <RxCross2 /> : <HiMenuAlt4 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background/70 backdrop-blur-lg border-b border-text/10 overflow-hidden transition-all duration-300 ease-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{
          maxHeight: open ? "300px" : "0",
          transition: "max-height 0.3s ease-out, opacity 0.3s ease-out"
        }}
      >
        <div className="flex flex-col p-4 gap-1 font-inter">
          <a 
            href="/confessions" 
            className="px-4 py-2.5 text-sm text-text/85 hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300" 
            onClick={() => setOpen(false)}
          >
            Confessions
          </a>
          <a 
            href="/new" 
            className="px-4 py-2.5 text-sm text-text/85 hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300" 
            onClick={() => setOpen(false)}
          >
            Share
          </a>
          <a 
            href="/admin" 
            className="px-4 py-2.5 text-sm text-text/85 hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300" 
            onClick={() => setOpen(false)}
          >
            Admin
          </a>
        </div>
      </div>
    </nav>
  );
}