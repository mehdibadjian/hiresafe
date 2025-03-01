import { ArrowRight, CheckCircle2, FileCheck, Shield, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function BackgroundChecksPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Background Checks</h1>
                <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Comprehensive background screening solutions that help you make informed hiring decisions with confidence.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Link href="/contact">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              alt="Background Checks"
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">Our Screening Services</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <Shield className="h-8 w-8 text-primary mx-auto lg:mx-0" />
              <h3 className="text-xl font-bold">Criminal Background Checks</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Comprehensive criminal history searches at county, state, and federal levels.
              </p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  County Criminal Searches
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Federal Criminal Searches
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  National Criminal Database
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <Users className="h-8 w-8 text-primary mx-auto lg:mx-0" />
              <h3 className="text-xl font-bold">Employment Verification</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Verify employment history, education, and professional licenses.
              </p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Work History Verification
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Education Verification
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Professional References
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <FileCheck className="h-8 w-8 text-primary mx-auto lg:mx-0" />
              <h3 className="text-xl font-bold">Additional Screenings</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Customize your screening package with additional checks.
              </p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Drug Screening
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Motor Vehicle Records
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Credit Reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

