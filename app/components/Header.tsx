"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Bar */}
      <section className="topbar">
        Follow us on
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="anchorcss"
        >
          {" "}
          Instagram
        </a>{" "}
        for new updates!
      </section>

      {/* Header */}
      <header className="site-header">
        <div className="header-wrapper">
          {/* Logo */}
          <Link href="/" className="site-logo">
            <Image
              src="/images/Alpha5AcademyLogo.png"
              alt="Alpha5Academy logo"
              width={150}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`navbar-toggler ${isOpen ? "active" : ""}`}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <div id="nav-icon2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Navigation */}
          <nav className={`navbar ${isOpen ? "show" : ""}`}>
            <div
              className={`navbar-collapse ${isOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={
                      pathname === "/"
                        ? "underline decoration-[#f59e0b] underline-offset-4"
                        : ""
                    }
                  >
                    HOME
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/about"
                    className={
                      pathname === "/about"
                        ? "underline decoration-[#f59e0b] underline-offset-4"
                        : ""
                    }
                  >
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/market-az"
                    className={
                      pathname === "/market-az"
                        ? "underline decoration-[#f59e0b] underline-offset-4"
                        : ""
                    }
                  >
                    MARKET A-Z
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/news"
                    className={
                      pathname === "/news"
                        ? "underline decoration-[#f59e0b] underline-offset-4"
                        : ""
                    }
                  >
                    NEWS
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/services"
                    className={
                      pathname === "/services"
                        ? "underline decoration-[#f59e0b] underline-offset-4"
                        : ""
                    }
                  >
                    SERVICES
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/courses"
                    className={
                      pathname === "/courses"
                        ? "underline decoration-[#f59e0b] underline-offset-4"
                        : ""
                    }
                  >
                    COURSES
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/contact"
                    className={
                      pathname === "/contact"
                        ? "underline decoration-[#f59e0b] underline-offset-4"
                        : ""
                    }
                  >
                    GET IN TOUCH
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/signup"
                    className="px-4 py-2 rounded-md bg-linear-to-r from-[#f59e0b] to-[#d97706] text-white font-semibold text-sm shadow hover:shadow-md transition"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
