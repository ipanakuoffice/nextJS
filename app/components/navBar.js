'use client';

import Image from 'next/image';
import Logo from '../../public/whiteLogo.png';
import React, { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="w-full bg-[#0B0E1E] px-4 py-3 shadow-md z-50">
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={Logo} width={42} height={42} alt="Logo" />
          </div>
          <div className="flex gap-6 text-white font-medium">
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#portofolio">Portofolio</a>
            <a href="#join">Join With Us</a>
          </div>
          <div>
            <button className="text-white px-4 py-1 bg-blue-500 rounded-xl">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="pt-8    fixed top-0 left-0 w-full bg-[#0B0E1E] px-4 py-3 flex md:hidden justify-between items-center z-50">
        <Image src={Logo} width={42} height={42} alt="Logo" />
        <button
          className="text-white focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-3/4 bg-[#0B0E1E] text-white px-6 py-8 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden z-50 pt-16`}
      >
        <nav className="flex flex-col gap-5">
          <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portofolio" onClick={() => setIsOpen(false)}>Portofolio</a>
          <a href="#join" onClick={() => setIsOpen(false)}>Join With Us</a>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 text-white px-4 py-1 bg-blue-500 rounded-xl w-full text-center"
          >
            Contact Us
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Spacer for fixed top bar */}
      <div className="md:hidden h-16" />
    </>
  );
}
