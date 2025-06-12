"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  MapPin,
  Download,
  ChevronRight,
  Building2,
  GraduationCap,
  TrendingUp,
  Plane,
  Star,
  Users,
  Zap,
  Target,
  Shield,
  Rocket,
} from "lucide-react";
import PlacementCard from "@/components/cards/placement-card";
import FreeCounselingPopup from "@/components/free-counseling-popup";
import { placements } from "@/data/placements";
import BrochureDownloadDialog from "@/components/cards/download-pdf";

// local components to avoid import issues
const AviationGraphics = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dotted Flight Path */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="flightPath"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="#06b6d4" opacity="0.1" />
            </pattern>
          </defs>
          <path
            d="M0 200 Q200 100 400 150 T800 200"
            fill="none"
            stroke="url(#flightPath)"
            strokeWidth="2"
            opacity="0.3"
          />
        </svg>
      </div>

    
    </div>
  );
};

const InteractiveIcon = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`micro-scale transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
};

const FloatingElement = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <div
      className="float-element will-change-transform"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative">
      <AviationGraphics />
      <FreeCounselingPopup />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
        <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/videos/take-off.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
        </div>

        <div className="relative z-10 w-full h-full flex items-center px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-white text-center">
              <Badge className="mb-6 bg-gradient-to-r from-accent to-secondary text-white border-0 px-6 py-3 text-sm font-semibold">
                ✈️ India's Most Advanced Aviation Academy
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Launch Your <span className="gradient-text">Dream Career</span>{" "}
                in Aviation
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-4xl mx-auto">
                Transform your passion into a premium aviation career with our
                cutting-edge training programs.
                <span className="text-accent font-bold">
                  {" "}
                  Join 5000+ successful graduates!
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-accent to-secondary hover:from-accent-600 hover:to-secondary-600 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-accent/25 transition-all duration-300"
                >
                  <Link href="/apply">
                    <Rocket className="mr-2 h-5 w-5" />
                    Apply Now - Limited Seats
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-accent px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
                  onClick={() => setIsBrochureOpen(true)}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>

                {/* Render the BrochureDownloadDialog component */}
                <BrochureDownloadDialog
                  isOpen={isBrochureOpen}
                  onOpenChange={setIsBrochureOpen}
                />
              </div>

              {/* Simple Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-accent" />
                  <span>100% Placement Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-accent" />
                  <span>Industry Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-accent" />
                  <span>13+ Years Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-0 px-4 py-2">
                About Ground to sky
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
                Crafting <span className="gradient-text">Aviation Legends</span>{" "}
                Since 2010
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Ground to sky Aviation Academy stands as India's most advanced
                institution for aviation and hospitality education. Our
                cutting-edge facilities and world-class faculty have
                successfully transformed over 5,000 dreams into soaring careers
                with leading airlines and hospitality brands worldwide.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-accent to-secondary p-3 rounded-full">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      Industry Certified
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-secondary to-accent p-3 rounded-full">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      Expert Faculty
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-accent to-secondary p-3 rounded-full">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      100% Placement
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-secondary to-accent p-3 rounded-full">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      Modern Training
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-accent/20 bg-white shadow-lg">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/director.jpg"
                    alt="Director"
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-4 border-accent/20"
                  />
                  <div>
                    <blockquote className="text-gray-700 italic mb-2 font-medium">
                      "We don't just train students; we craft aviation
                      professionals who lead the industry."
                    </blockquote>
                    <cite className="text-sm font-semibold gradient-text">
                      - xxxxxxxx
                    </cite>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="/images/academy-building.jpg"
                  alt="Academy building"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl object-cover w-full"
                />
                <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl border border-accent/20 bg-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-accent to-secondary p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">
                        Premium Campus
                      </div>
                      <div className="text-sm text-gray-600">Delhi, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Interactive Achievements Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-0 px-4 py-2">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
              Our <span className="gradient-text">Premium</span> Achievements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Numbers that speak for our excellence and commitment to student
              success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="ultra-interactive-card text-center border-0 shadow-2xl h-[280px] flex flex-col justify-center bg-gradient-to-br from-accent/5 to-accent/10 will-change-transform">
              <CardContent className="p-8">
                <div className="rounded-full bg-gradient-to-r from-accent to-accent-600 w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-2xl ultra-interactive-card">
                  <InteractiveIcon>
                    <Award className="h-12 w-12 text-white" />
                  </InteractiveIcon>
                </div>
                <h3 className="text-5xl font-bold gradient-text mb-2">13+</h3>
                <p className="text-gray-600 font-semibold">
                  Years of Excellence
                </p>
              </CardContent>
            </Card>

            <Card className="ultra-interactive-card text-center border-0 shadow-2xl h-[280px] flex flex-col justify-center bg-gradient-to-br from-secondary/5 to-secondary/10 will-change-transform">
              <CardContent className="p-8">
                <div className="rounded-full bg-gradient-to-r from-secondary to-secondary-600 w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-2xl ultra-interactive-card">
                  <InteractiveIcon>
                    <Building2 className="h-12 w-12 text-white" />
                  </InteractiveIcon>
                </div>
                <h3 className="text-5xl font-bold gradient-text mb-2">150+</h3>
                <p className="text-gray-600 font-semibold">Industry Tie-ups</p>
              </CardContent>
            </Card>

            <Card className="ultra-interactive-card text-center border-0 shadow-2xl h-[280px] flex flex-col justify-center bg-gradient-to-br from-green-500/5 to-green-500/10 will-change-transform">
              <CardContent className="p-8">
                <div className="rounded-full bg-gradient-to-r from-green-500 to-green-600 w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-2xl ultra-interactive-card">
                  <InteractiveIcon>
                    <TrendingUp className="h-12 w-12 text-white" />
                  </InteractiveIcon>
                </div>
                <h3 className="text-5xl font-bold gradient-text mb-2">100%</h3>
                <p className="text-gray-600 font-semibold">
                  Placement Guarantee
                </p>
              </CardContent>
            </Card>

            <Card className="ultra-interactive-card text-center border-0 shadow-2xl h-[280px] flex flex-col justify-center bg-gradient-to-br from-primary/5 to-primary/10 will-change-transform">
              <CardContent className="p-8">
                <div className="rounded-full bg-gradient-to-r from-primary to-primary-600 w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-2xl ultra-interactive-card">
                  <InteractiveIcon>
                    <GraduationCap className="h-12 w-12 text-white" />
                  </InteractiveIcon>
                </div>
                <h3 className="text-5xl font-bold gradient-text mb-2">5000+</h3>
                <p className="text-gray-600 font-semibold">
                  Successful Graduates
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Placement Showcase */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white aviation-bg">
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-0 px-4 py-2">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
              Our Students <span className="gradient-text">Soar High</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Meet our successful graduates who are now working with top
              airlines and hospitality brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {placements.slice(0, 8).map((placement, index) => (
              <div
                key={placement.id}
                className="animate-fade-in ultra-interactive-card will-change-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PlacementCard placement={placement} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-accent/25 transition-all duration-300 border-2 border-primary text-primary hover:bg-primary hover:text-white btn-premium ultra-interactive-card"
            >
              <Link href="/placements">
                View All Success Stories
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-primary-800 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 aviation-pattern opacity-10"></div>
        <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 xl:px-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="gradient-text">Premium Aviation</span> Journey?
            </h2>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Join thousands of successful graduates and take the first step
              towards your dream career in aviation and hospitality. Limited
              seats available for the next batch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-secondary hover:from-accent-600 hover:to-secondary-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-accent/25 transition-all duration-300 btn-premium ultra-interactive-card"
              >
                <Link href="/apply">
                  <InteractiveIcon>
                    <Rocket className="mr-2 h-5 w-5" />
                  </InteractiveIcon>
                  Apply Now - Limited Seats
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-black hover:bg-white/10 hover:border-accent px-8 py-4 text-lg font-semibold rounded-2xl glass-morphism transition-all duration-300 ultra-interactive-card"
              >
                <Link href="/courses">
                  <InteractiveIcon>
                    <GraduationCap className="mr-2 h-5 w-5" />
                  </InteractiveIcon>
                  Explore Premium Courses
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-10 right-10 text-white/10">
          <FloatingElement delay={1}>
            <Plane className="h-24 w-24 animate-wiggle" />
          </FloatingElement>
        </div>
        <div className="absolute bottom-10 left-10 text-white/10">
          <FloatingElement delay={2}>
            <Star className="h-20 w-20" />
          </FloatingElement>
        </div>
        <div className="absolute top-1/2 left-1/4 text-white/5">
          <FloatingElement delay={3}>
            <Award className="h-16 w-16" />
          </FloatingElement>
        </div>
      </section>
    </div>
  );
}
