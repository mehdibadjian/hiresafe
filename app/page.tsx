import { ArrowRight, CheckCircle2, ShieldCheck, Users, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    console.log("Home page loaded")
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Secure Background Checks Made Simple
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Protect your business with comprehensive background screening and identity verification solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      Learn More
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
        <section className="w-full border-t bg-gray-50/40 py-12 dark:bg-gray-800/40 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Comprehensive Screening</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our thorough background checks cover criminal records, employment history, and more.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Identity Verification</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Advanced identity verification technology to prevent fraud and ensure compliance.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Automated Compliance</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Stay compliant with automated tools and real-time updates on regulatory changes.
                </p>
              </div>
              <div className="flex items-center gap-2" onClick={() => window.open('https://wa.me/6589519656', '_blank')}>
                <Phone className="h-5 w-5" />
                <span>+65 8951 9656</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

