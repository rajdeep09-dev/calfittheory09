"use client"

import { Home, Dumbbell, Star, Phone } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export function MainNav() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Programs", url: "/plans", icon: Dumbbell },
    { name: "Results", url: "/testimonials", icon: Star },
    { name: "Contact", url: "/contact", icon: Phone },
  ]

  return <NavBar items={navItems} />
}
