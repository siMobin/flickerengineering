import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/logo.png"
              alt="Flicker Engineering"
              className="w-36"
              loading="lazy"
            />
            <div>
              {/* <h2 className="font-bold text-lg">Flicker Engineering</h2>
              <p className="text-sm text-gray-300">Professional Solutions</p> */}
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-6">
            Providing professional engineering services with innovative
            solutions and cutting-edge technology for over a decade.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Structural Engineering</li>
            <li>Building Design</li>
            <li>Project Management</li>
            <li>Construction Planning</li>
            <li>Quality Assurance</li>
            <li>Technical Consulting</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-400" />
              <p>
                74/1-B, Malibagh Chowdhurypara, Malibadh, Dhaka-1219, Dhaka,
                Bangladesh
              </p>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />
              <div>
                <Link href="tel:+88 01682-70 8000">+88 01682-70 8000</Link>
                <br />
                <Link href="tel:+88 01711-98 9282">+88 01711-98 9282</Link>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              <span>info@flickerengineering.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-900 border-t border-blue-800 py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
        <p>
          © {new Date().getFullYear()} Flicker Engineering. All rights reserved.
        </p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
