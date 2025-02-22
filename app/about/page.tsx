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
                  Founded in 2020, HireSafe emerged from a simple observation: background screening shouldn't be
                  complicated. We've built a platform that combines advanced technology with human expertise to deliver
                  accurate, compliant, and timely results.
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
              <h3 className="text-xl font-bold">Security First</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Protecting sensitive information with enterprise-grade security.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">People Matter</h3>
              <p className="text-gray-500 dark:text-gray-400">Treating every screening with care and respect.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Globe2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Global Reach</h3>
              <p className="text-gray-500 dark:text-gray-400">Supporting businesses worldwide with local expertise.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-gray-500 dark:text-gray-400">Continuously improving our technology and services.</p>
            </div>
          </div>
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
                <Button size="lg">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

