import { Home, User, Briefcase, FileText } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "#", icon: User },
    { name: "Programs", url: "/plans", icon: Briefcase },
    { name: "Results", url: "/testimonials", icon: FileText },
  ]

  return <NavBar items={navItems} />
}
