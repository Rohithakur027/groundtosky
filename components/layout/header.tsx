"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Placements", href: "/placements" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },

  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        className="w-full px-4 md:px-8 lg:px-16 xl:px-24 flex items-center justify-between py-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SkyWings Aviation Academy</span>
            <Image
              src="/images/logo.png"
              alt="SkyWings Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            asChild
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Link href="/apply">Enroll Now</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/20"
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SkyWings Aviation Academy</span>
              <Image
                src="/images/logo.png"
                alt="SkyWings Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Link href="/apply" onClick={() => setMobileMenuOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
