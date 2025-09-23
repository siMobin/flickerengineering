"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+880-XXX-XXXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@flickerengineering.com</span>
            </div>
          </div>
          <div className="text-sm">Professional Engineering Services</div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`navbar sticky top-0 z-50 ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center ">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/logo.png"
                alt="Flicker Engineering Logo"
                className="h-16 w-auto"
                loading="lazy"
              />
              {/* <div>
                <h1 className="text-xl font-bold text-primary">
                  Flicker Engineering
                </h1>
                <p className="text-xs text-muted-foreground">
                  Professional Solutions
                </p>
              </div> */}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${
                    pathname === item.href ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="btn-primary">
                <Link href="/contact">Get Quote</Link>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors bg-accent/30 shadow-xs text-white"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mobile-nav animate-slide-up bg-transparent ">
              <div
                className={`p-4 rounded space-y-2 flex flex-col gap-2 navbar sticky top-0 z-50 ${
                  isScrolled ? "scrolled" : ""
                }`}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`mobile-link nav-link w-min ${
                      pathname === item.href ? "active" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-2">
                  <button
                    className="btn-primary w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/contact">Get Quote</Link>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
