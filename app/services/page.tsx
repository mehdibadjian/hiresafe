import { ArrowRight, CheckCircle2, Search, Map, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Discover our range of services designed to help you find and retain the best talent.
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
              alt="Services"
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
            <div className="flex flex-col space-y-4">
              <Search className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Customized Talent Search</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We collaborate closely with you to identify the ideal talent from the right industry and market, ensuring the perfect fit for your company’s needs.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <Map className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Market Search Overview</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We help you stay ahead by mapping out your talent pipeline. Our search overview provides you with a curated shortlist of ready-to-go candidates, so you’re always prepared when the need arises.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Talent Advisory Consultation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We partner with you to craft a winning talent acquisition strategy, enhance your employer brand, optimize your campus recruitment approach, and plan for leadership succession.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Comprehensive Background Screening</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Once you’ve selected a candidate, we conduct thorough background checks to ensure complete transparency. Our screening covers criminal records, employment history, and more, giving you peace of mind when making hiring decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
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
    </main>
  );
}
