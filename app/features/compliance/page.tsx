import { ArrowRight, CheckCircle2, FileText, Scale, ShieldAlert } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function CompliancePage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Compliance Solutions</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Stay compliant with automated tools and real-time updates on regulatory changes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              alt="Compliance"
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">Compliance Features</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col space-y-4">
              <Scale className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Regulatory Compliance</h3>
              <p className="text-gray-500 dark:text-gray-400">Stay compliant with FCRA, EEOC, and other regulations.</p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  FCRA Compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  EEOC Guidelines
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  State Law Compliance
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <FileText className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Documentation</h3>
              <p className="text-gray-500 dark:text-gray-400">Automated documentation and record-keeping.</p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Consent Forms
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Adverse Action Notices
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Record Retention
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <ShieldAlert className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Risk Management</h3>
              <p className="text-gray-500 dark:text-gray-400">Tools and processes to minimize compliance risks.</p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Audit Trails
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Regular Updates
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Compliance Training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

