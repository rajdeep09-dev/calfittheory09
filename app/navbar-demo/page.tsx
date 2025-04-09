"use client"

import { NavBarDemo } from "@/components/navbar-demo"

export default function NavBarDemoPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="container mx-auto pt-20 pb-32">
        <h1 className="text-3xl font-bold mb-8 text-center">Tubelight NavBar Demo</h1>

        <div className="space-y-8">
          <div className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-xl font-bold mb-4">About This Component</h2>
            <p className="text-gray-400">
              This is a modern navigation bar with a "tubelight" effect that highlights the active tab. It's responsive
              and changes to an icon-only view on mobile devices.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Features</h2>
            <ul className="list-disc pl-5 text-gray-400 space-y-2">
              <li>Responsive design - text on desktop, icons on mobile</li>
              <li>Animated highlight effect using Framer Motion</li>
              <li>Glowing "tubelight" effect on the active tab</li>
              <li>Positioned at the bottom on mobile, top on desktop</li>
              <li>Backdrop blur effect for a modern look</li>
            </ul>
          </div>

          <div className="p-6 border border-gray-800 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Usage</h2>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
              {`import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Programs', url: '/plans', icon: Briefcase },
    { name: 'Results', url: '/testimonials', icon: FileText }
  ]

  return <NavBar items={navItems} />
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* The NavBar component will be rendered here */}
      <NavBarDemo />
    </div>
  )
}
