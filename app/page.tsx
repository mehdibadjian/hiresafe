"use client";

import { ArrowRight, CheckCircle2, ShieldCheck, Users, Phone, Search, Map, Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Home page loaded");
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="flex-1 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connecting Your Business with Top Talent & Future Leaders
                  </h1>
                  <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                    HireSafe helps businesses hire the right people through strategic recruitment, market insights, and thorough background checks.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                  <Link href="/contact">
                    <Button size="lg">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline">
                      Our Services
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800/40">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">Our Services</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col space-y-4 text-center lg:text-left">
                <Search className="h-8 w-8 text-primary mx-auto lg:mx-0" />
                <h3 className="text-xl font-bold">Customized Talent Search</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Industry-specific recruitment solutions.
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-center lg:text-left">
                <Map className="h-8 w-8 text-primary mx-auto lg:mx-0" />
                <h3 className="text-xl font-bold">Market Search Overview</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Data-driven talent pipeline insights.
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-center lg:text-left">
                <Users className="h-8 w-8 text-primary mx-auto lg:mx-0" />
                <h3 className="text-xl font-bold">Talent Advisory</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Strategic hiring, employer branding, and leadership planning.
                </p>
              </div>
              <div className="flex flex-col space-y-4 text-center lg:text-left">
                <ShieldCheck className="h-8 w-8 text-primary mx-auto lg:mx-0" />
                <h3 className="text-xl font-bold">Comprehensive Background Screening</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Employment verification, criminal records, and more.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">About HireSafe</h2>
            <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400 text-center mb-8">
              Helping businesses hire smart, hire safe, and hire right. Founded in 2020, HireSafe evolved from a background screening firm to a full-scale talent solutions company serving Southeast Asia.
            </p>
            <div className="grid gap-6 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4 text-center">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We provide honest, transparent solutions you can trust.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Smart Hiring</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We help businesses make informed, strategic hiring decisions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Safety & Security</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We ensure a secure hiring process with thorough background checks.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We work closely with clients to understand their unique needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Globe2 className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We embrace new technology to make hiring smarter and faster.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Diversity & Inclusion</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We believe in building diverse, inclusive teams.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We are committed to delivering the best results for your business.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">Industry & Vertical Coverage</h2>
            <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400 text-center mb-8">
              We specialize in providing tailored talent solutions across a range of industries and roles, ensuring the right fit for every business need:
            </p>
            <ul className="max-w-[900px] mx-auto space-y-2 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              <li>• Sales & Marketing</li>
              <li>• Commercial & Technical Roles</li>
              <li>• Support Functions (HR & Finance)</li>
              <li>• Manufacturing & Industrial Technology</li>
              <li>• Consumer & Retail</li>
              <li>• Life Sciences & Medical Devices</li>
            </ul>
            <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400 text-center mt-8">
              Whether you’re looking for specialized skills or versatile team members, we have the expertise to meet your unique requirements across these key sectors.
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-start text-center">
          <div className="flex items-center gap-2">
            <p className="text-sm leading-loose text-muted-foreground">© 2025 Hiresafe. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

