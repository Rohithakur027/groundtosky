import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link href="/">
              <Image src="/images/logo-white.png" alt="groundtosky Logo" width={180} height={50} className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-gray-400">
              India's premier aviation and hospitality training academy with 100% placement assistance and industry
              partnerships.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/placements" className="text-gray-400 hover:text-white transition-colors">
                  Placements
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-400 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/air-hostess-training" className="text-gray-400 hover:text-white transition-colors">
                  Air Hostess Training
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/hospitality-management"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Hospitality Management
                </Link>
              </li>
              <li>
                <Link href="/courses/airport-ground-staff" className="text-gray-400 hover:text-white transition-colors">
                  Airport Ground Staff
                </Link>
              </li>
              <li>
                <Link href="/courses/travel-tourism" className="text-gray-400 hover:text-white transition-colors">
                  Travel & Tourism
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                <span className="text-gray-400">
                  123 Aviation Plaza, Sector 15, <br />
                  New Delhi - 110001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3" />
                <a href="mailto:info@skywings.edu" className="text-gray-400 hover:text-white transition-colors">
                  info@groundtosky.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ground to sky Aviation Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
