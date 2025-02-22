"use client"

import { ChevronRight, Menu, Mountain } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center border-b bg-background px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="mr-2 lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span className="font-bold">HireSafe</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link href="/about" className="flex w-full items-center py-2 text-lg font-semibold">
              About
            </Link>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Features <ChevronRight className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-muted p-6">
                  <Link href="/features/background-checks" className="group grid h-auto w-full justify-start gap-1">
                    <div className="text-sm font-medium leading-none group-hover:underline">Background Checks</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Comprehensive background screening solutions.
                    </div>
                  </Link>
                  <Link href="/features/identity-verification" className="group grid h-auto w-full justify-start gap-1">
                    <div className="text-sm font-medium leading-none group-hover:underline">Identity Verification</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Secure identity verification services.
                    </div>
                  </Link>
                  <Link href="/features/compliance" className="group grid h-auto w-full justify-start gap-1">
                    <div className="text-sm font-medium leading-none group-hover:underline">Compliance</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Stay compliant with our automated tools.
                    </div>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Link href="/contact" className="flex w-full items-center py-2 text-lg font-semibold">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 flex items-center gap-2 lg:mr-8">
        <Mountain className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">HireSafe</span>
      </Link>
      <NavigationMenu className="hidden lg:flex lg:flex-1">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="/about"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              About
            </Link>
          </NavigationMenuLink>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4">
                <NavigationMenuLink asChild>
                  <Link
                    href="/features/background-checks"
                    className="group grid h-auto w-full justify-start gap-1 rounded-md p-3 text-sm font-medium hover:bg-accent"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Background Checks</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Comprehensive background screening solutions.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/features/identity-verification"
                    className="group grid h-auto w-full justify-start gap-1 rounded-md p-3 text-sm font-medium hover:bg-accent"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Identity Verification</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Secure identity verification services.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/features/compliance"
                    className="group grid h-auto w-full justify-start gap-1 rounded-md p-3 text-sm font-medium hover:bg-accent"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Compliance</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Stay compliant with our automated tools.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

