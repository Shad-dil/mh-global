"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <nav className="flex items-center justify-between px-5 py-4 bg-black/80 text-white">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <Image
              src="/logo-banner.png"
              alt="MH Global Logo"
              width={100}
              height={30}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#careers">Careers</Link>
          </li>
          <li>
            <Link href="#clients">Clients</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        {/* Call Now (Desktop) */}
        <a
          href="tel:+919356779714"
          className="hidden md:flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md text-sm font-semibold"
        >
          <FaPhoneAlt />
          Call Now
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/85 text-white px-6 py-8 space-y-6">
          <Link
            href="#home"
            onClick={() => setOpen(false)}
            className="block text-lg"
          >
            Home
          </Link>
          <Link
            href="#services"
            onClick={() => setOpen(false)}
            className="block text-lg"
          >
            Services
          </Link>
          <Link
            href="#careers"
            onClick={() => setOpen(false)}
            className="block text-lg"
          >
            Careers
          </Link>
          <Link
            href="#clients"
            onClick={() => setOpen(false)}
            className="block text-lg"
          >
            Clients
          </Link>
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-lg"
          >
            Contact
          </Link>

          {/* Call Now (Mobile – Primary CTA) */}
          <a
            href="tel:+919356779714"
            className="mt-4 flex items-center justify-center gap-2 bg-teal-500 py-4 rounded-md text-lg font-semibold"
          >
            <FaPhoneAlt />
            Call Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
