import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import CustomCursor from "@/components/custom-cursor"
import JotformChatbot from "@/components/jotform-chatbot"

export const metadata = {
  title: "CalFitTheory - Elite Fitness Coaching",
  description:
    "Transform your physique with premium fitness coaching by CalFitTheory. Personalized training programs, expert nutrition guidance, and proven results.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <CustomCursor />
          <MainNav />
          {children}
          <JotformChatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'