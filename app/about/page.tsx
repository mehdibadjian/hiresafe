import { Building2, Globe2, Shield, Users2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About HireSafe</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We're on a mission to make background screening more accessible, efficient, and secure for businesses of
                all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  At HireSafe, we started in 2020 with a simple mission: to streamline the hiring process through reliable background screening. But as we grew, we realized businesses across Southeast Asia needed more than just verification—they needed to hire smart, hire safe, and hire right.
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  What began as a background screening firm soon expanded into a full-service talent solutions company, offering a comprehensive approach to recruitment, talent strategy, and team-building. We specialize in customized talent searches, expert advisory, and in-depth background checks, ensuring businesses find the right fit for their unique culture and goals—while making sure every hire is informed, secure, and aligned with their long-term vision.
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Our mission is to help businesses across Southeast Asia build strong, diverse, and future-ready teams. We believe the right people can transform your business, and we’re here to ensure your team is not just ready for today, but equipped to lead tomorrow.
                </p>
              </div>
            </div>
            <Image
              alt="Company office"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">Our Values</h2>
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We provide honest, transparent solutions you can trust.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Smart Hiring</h3>
              <p className="text-gray-500 dark:text-gray-400">We help businesses make informed, strategic hiring decisions.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Safety & Security</h3>
              <p className="text-gray-500 dark:text-gray-400">We ensure a secure hiring process with thorough background checks.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-gray-500 dark:text-gray-400">We work closely with clients to understand their unique needs.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Globe2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-gray-500 dark:text-gray-400">We embrace new technology to make hiring smarter and faster.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Diversity & Inclusion</h3>
              <p className="text-gray-500 dark:text-gray-400">We believe in building diverse, inclusive teams.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-gray-500 dark:text-gray-400">We are committed to delivering the best results for your business.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">People Matter</h3>
              <p className="text-gray-500 dark:text-gray-400">We value the individuals behind every hire, believing that great teams are built by great people.</p>
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Join thousands of companies using HireSafe for their background screening needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg">Talk to us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
)}

