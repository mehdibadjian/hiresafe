import { ArrowRight, CheckCircle2, Fingerprint, ShieldCheck, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function IdentityVerificationPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Identity Verification</h1>
                <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Advanced identity verification solutions to prevent fraud and ensure compliance.
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
              alt="Identity Verification"
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">Verification Methods</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <Fingerprint className="h-8 w-8 text-primary mx-auto lg:mx-0" />
              <h3 className="text-xl font-bold">Biometric Verification</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Advanced biometric technology for secure identity verification.
              </p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Facial Recognition
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Fingerprint Scanning
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Liveness Detection
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <Smartphone className="h-8 w-8 text-primary mx-auto lg:mx-0" />
              <h3 className="text-xl font-bold">Document Verification</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Verify government-issued IDs and documents in real-time.
              </p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  ID Document Scanning
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Document Authentication
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Fraud Detection
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <ShieldCheck className="h-8 w-8 text-primary mx-auto lg:mx-0" />
              <h3 className="text-xl font-bold">Multi-Factor Authentication</h3>
              <p className="text-gray-500 dark:text-gray-400">Additional security layers for enhanced verification.</p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  SMS Verification
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Email Verification
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Knowledge-Based Authentication
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

