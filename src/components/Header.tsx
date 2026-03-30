"use client";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container-max flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Helens Bay Dental Practice"
            width={180}
            height={60}
            className="h-10 w-auto md:h-12"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://uk.dentalhub.online/soe/new/Helens%20Bay%20Dental%20Practice?pid=UKHEL01"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors shadow-md"
          >
            Book Online
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-4 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://uk.dentalhub.online/soe/new/Helens%20Bay%20Dental%20Practice?pid=UKHEL01"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-teal-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Book Online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
