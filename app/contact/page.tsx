"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MessageSquare, Calendar, ArrowRight, Mail, Clock } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    goal: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, goal: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
    alert("Thanks for your message! We'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      goal: "",
      message: "",
    })
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <CustomCursor />

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">C</span>al<span className="text-primary">F</span>itTheory
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/contact">
              <Button variant="ghost" size="sm" className="text-white">
                Contact
              </Button>
            </Link>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-white">GET IN</span>
              <span className="text-white/20"> TOUCH</span>
            </h1>
            <p className="text-gray-400 max-w-md mx-auto">
              Ready to start your scientific fitness journey? Have questions about our evidence-based programs? We're
              here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="rounded-lg border border-gray-800 p-6"
          >
            <h2 className="text-xl font-bold mb-6">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-gray-900 border-gray-700"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-900 border-gray-700"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="goal" className="text-sm font-medium">
                  Fitness Goal
                </label>
                <Select value={formState.goal} onValueChange={handleSelectChange}>
                  <SelectTrigger id="goal" className="bg-gray-900 border-gray-700">
                    <SelectValue placeholder="Select your primary fitness goal" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="weight-loss">Weight Loss</SelectItem>
                    <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                    <SelectItem value="toning">Toning & Definition</SelectItem>
                    <SelectItem value="strength">Strength Training</SelectItem>
                    <SelectItem value="endurance">Endurance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your fitness goals and any questions you have"
                  className="bg-gray-900 border-gray-700 min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold mb-4">Quick Contact</h2>

            <div className="grid gap-4">
              <a
                href="tel:+917010573829"
                className="flex items-center gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <p className="text-sm text-gray-400">+91 7010573829</p>
                </div>
              </a>

              <a
                href="mailto:coachsoham@gmail.com"
                className="flex items-center gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <p className="text-sm text-gray-400">coachsoham@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/917010573829"
                className="flex items-center gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">WhatsApp</h3>
                  <p className="text-sm text-gray-400">+91 7010573829</p>
                </div>
              </a>

              <a
                href="https://calendly.com/calfittheory/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Free 10-Minute Consultation</h3>
                  <p className="text-sm text-gray-400">Schedule a quick call with our fitness expert</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Availability */}
      <section className="py-8 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold mb-4">Consultation Availability</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-800 bg-black p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold">Saturday</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>8:30 AM - 10:30 AM</span>
                </div>
              </div>

              <div className="rounded-lg border border-gray-800 bg-black p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold">Sunday</h3>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>2:00 PM - 3:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <a
                href="https://calendly.com/calfittheory/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-xl font-bold mb-4">Our Programs</h2>

            <div className="grid gap-4">
              {[
                {
                  title: "Platinum 1:1 Coaching",
                  price: "₹6,000",
                  description:
                    "Comprehensive personalized coaching with metabolic profiling, biomechanical optimization, and direct access to our expert coaches.",
                },
                {
                  title: "Diet Plan",
                  price: "₹1,500",
                  description:
                    "Evidence-based nutrition protocols tailored to your unique metabolic profile and body composition goals.",
                },
                {
                  title: "Workout Plan",
                  price: "₹1,500",
                  description:
                    "Scientifically designed training programs using biomechanical optimization and neural activation techniques.",
                },
                {
                  title: "Diet & Workout Combo",
                  price: "₹2,500",
                  description:
                    "The complete scientific package combining metabolic profiling and biomechanical optimization at a special price.",
                },
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: i * 0.1 },
                    },
                  }}
                  className="rounded-lg border border-gray-800 bg-black p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold">{plan.title}</h3>
                    <span className="text-primary font-bold">
                      {plan.price}
                      <span className="text-sm text-gray-400">/month</span>
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-6">
              <Link href="/plans">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  View Detailed Program Information
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  question: "How do I know which program is right for me?",
                  answer:
                    "The best program depends on your specific goals and current fitness level. Our Platinum 1:1 Coaching offers the most personalized approach with metabolic profiling and biomechanical optimization, while our Workout Plan and Diet Plan are excellent for those who prefer more independence. We recommend scheduling a free consultation to discuss your specific needs and goals.",
                },
                {
                  question: "How are the programs delivered?",
                  answer:
                    "All programs are delivered digitally through our app and email. You'll receive detailed workout instructions with form guidance, personalized nutrition protocols, and regular check-ins depending on your chosen program. Our evidence-based approach ensures you receive clear, actionable guidance.",
                },
                {
                  question: "Can I upgrade my program later?",
                  answer:
                    "Absolutely. Many clients start with a single program and upgrade as they see results. We make the transition seamless and will apply any appropriate prorating to ensure you get the most value from your investment.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: i * 0.1 },
                    },
                  }}
                  className="rounded-lg border border-gray-800 bg-black p-4"
                >
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary text-black">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Ready to Transform Your Fitness Journey?</h2>
            <p className="text-black/80 max-w-md mx-auto">
              Take the first step toward a scientifically optimized approach to fitness. Our evidence-based methods are
              designed to deliver sustainable results.
            </p>
            <Link href="/plans">
              <Button size="lg" className="bg-black text-white hover:bg-black/80">
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
