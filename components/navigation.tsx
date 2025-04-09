"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight, Dumbbell, Star, MessageSquare, Phone } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const menuItems = [
    { name: "Home", path: "/", icon: <Star className="h-5 w-5" /> },
    { name: "Programs", path: "/plans", icon: <Dumbbell className="h-5 w-5" /> },
    { name: "Results", path: "/testimonials", icon: <ChevronRight className="h-5 w-5" /> },
    { name: "Contact", path: "/contact", icon: <Phone className="h-5 w-5" /> },
  ]

  return (
    <>
      {/* Fixed Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">C</span>al<span className="text-primary">F</span>itTheory
          </Link>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`text-sm ${pathname === item.path ? "text-primary" : "text-white"} hover:text-primary`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <Link href="/contact">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 ml-2">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Pop-up Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center"
          >
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-[90%] max-w-md bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6 shadow-2xl"
            >
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>

              {/* Menu header */}
              <div className="mb-6 pb-6 border-b border-gray-800">
                <h2 className="text-2xl font-bold">
                  <span className="text-primary">C</span>al<span className="text-primary">F</span>itTheory
                </h2>
                <p className="text-gray-400 text-sm mt-1">Evidence-based fitness coaching</p>
              </div>

              {/* Menu items */}
              <nav className="space-y-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.path}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-left mb-1 ${
                          pathname === item.path ? "bg-primary/10 text-primary" : "text-gray-300 hover:text-primary"
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`mr-3 ${pathname === item.path ? "text-primary" : "text-gray-500"}`}>
                            {item.icon}
                          </div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Call to action */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <Link href="/contact">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Start Your Fitness Journey
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <div className="mt-4 flex items-center justify-center gap-4">
                  <Link href="tel:+917010578829">
                    <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-primary">
                      <Phone className="h-4 w-4" />
                      <span className="sr-only">Call us</span>
                    </Button>
                  </Link>
                  <Link href="https://wa.me/917010578829">
                    <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-primary">
                      <MessageSquare className="h-4 w-4" />
                      <span className="sr-only">Message us</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
