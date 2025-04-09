"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, StarHalf } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"

export default function TestimonialsPage() {
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
              <span className="text-white">TRANSFORMATION</span>
              <span className="text-white/20"> STORIES</span>
            </h1>
            <p className="text-gray-400 max-w-md mx-auto">
              Real people, real results. See how CalFitTheory has transformed lives through science-backed fitness
              coaching.
            </p>
            <div className="flex items-center justify-center mt-4">
              <div className="flex">
                {[...Array(4)].map((_, j) => (
                  <Star key={j} className="text-primary" size={24} fill="currentColor" />
                ))}
                <StarHalf className="text-primary" size={24} fill="currentColor" />
              </div>
              <span className="ml-2 font-bold text-xl">4.8/5</span>
              <span className="ml-2 text-gray-400 text-sm">(based on 150+ client reviews)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid gap-6">
            {[
              {
                name: "Arjun M.",
                plan: "Platinum 1:1 Coaching",
                testimonial:
                  "CalFitTheory's approach to fitness is unlike anything I've experienced before. Their metabolic profiling completely changed how I eat and train. In just 3 months, I've gained 8kg of lean muscle while actually improving my cardiovascular health. The science-backed methods make all the difference.",
                results: "8kg lean muscle gain",
                duration: "3 months",
                rating: 5,
                profileImage: "/images/client1.jpg",
              },
              {
                name: "Divya S.",
                plan: "Diet Plan",
                testimonial:
                  "I've tried countless diet plans before, but CalFitTheory's nutrition protocol is the first one that actually feels sustainable. They didn't just give me a meal plan - they taught me how to eat for my specific metabolism. I've lost 12kg and finally understand how to maintain my results long-term.",
                results: "12kg weight loss",
                duration: "4 months",
                rating: 4.5,
                profileImage: "/images/client2.jpg",
                transformationImage:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1687.jpg.jpg-8wIJooY45sfHunqGUbTs3srwsghJlr.jpeg",
              },
              {
                name: "Karan R.",
                plan: "Workout Plan",
                testimonial:
                  "As someone who's been lifting for years, I was skeptical about what CalFitTheory could offer. Their biomechanical approach to training completely transformed my results. The precise form adjustments and progressive overload strategy broke through plateaus I'd been stuck at for years. My strength has increased dramatically.",
                results: "30% strength increase",
                duration: "5 months",
                rating: 5,
                profileImage: "/images/client3.jpg",
                transformationImage:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1683.jpg.jpg-lfbk7oWuG056sdnKovMp2lCYvmE1NN.jpeg",
              },
              {
                name: "Meera P.",
                plan: "Diet + Workout Combo",
                testimonial:
                  "CalFitTheory's holistic approach addresses everything - nutrition, training, recovery, and even stress management. As a busy professional, I needed something that would fit into my lifestyle, not consume it. They delivered exactly that, while helping me achieve a level of fitness I never thought possible at 42.",
                results: "Complete body transformation",
                duration: "6 months",
                rating: 5,
                profileImage: "/images/client4.jpg",
                transformationImage:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2325.JPG-jlqKK3x4q5cQFp3PQlURVWLiTGf0DO.jpeg",
              },
              {
                name: "Vikram D.",
                plan: "Platinum 1:1 Coaching",
                testimonial:
                  "The neural activation techniques CalFitTheory taught me completely changed my mind-muscle connection. I'm getting better results with less time in the gym because every rep is now so much more effective. Their knowledge of exercise science is unmatched, and they explain everything in a way that makes perfect sense.",
                results: "Optimized training efficiency",
                duration: "3 months",
                rating: 4.5,
                profileImage: "/images/client5.jpg",
              },
            ].map((client, i) => (
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
                className="rounded-lg border border-gray-800 bg-black p-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src={client.profileImage || "/placeholder.svg?height=60&width=60&text=Client"}
                        alt={`${client.name} profile`}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=60&width=60&text=Client"
                        }}
                      />
                      <div>
                        <h3 className="font-bold">{client.name}</h3>
                        <p className="text-xs text-gray-400">Plan: {client.plan}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {client.rating === 5 ? (
                        [...Array(5)].map((_, j) => (
                          <Star key={j} className="text-primary" size={16} fill="currentColor" />
                        ))
                      ) : client.rating === 4.5 ? (
                        <>
                          {[...Array(4)].map((_, j) => (
                            <Star key={j} className="text-primary" size={16} fill="currentColor" />
                          ))}
                          <StarHalf className="text-primary" size={16} fill="currentColor" />
                        </>
                      ) : client.rating === 4 ? (
                        [...Array(4)].map((_, j) => (
                          <Star key={j} className="text-primary" size={16} fill="currentColor" />
                        ))
                      ) : (
                        <>
                          {[...Array(3)].map((_, j) => (
                            <Star key={j} className="text-primary" size={16} fill="currentColor" />
                          ))}
                          <StarHalf className="text-primary" size={16} fill="currentColor" />
                        </>
                      )}
                    </div>
                    <p className="text-sm text-gray-300 mb-3">&quot;{client.testimonial}&quot;</p>
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">Results:</span>
                        <span>{client.results}</span>
                      </div>
                      <span>{client.duration}</span>
                    </div>
                  </div>

                  {client.transformationImage && (
                    <div className="flex-1 relative min-h-[250px] rounded-lg overflow-hidden">
                      <Image
                        src={client.transformationImage || "/placeholder.svg?height=250&width=350&text=Transformation"}
                        alt={`${client.name} transformation with CalFitTheory`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=250&width=350&text=Transformation"
                        }}
                      />
                      <div className="absolute top-2 left-2 bg-primary/80 px-2 py-1 rounded text-xs font-medium text-black">
                        Transformation
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-white">SCIENTIFIC</span>
              <span className="text-white/20"> RESULTS</span>
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Real transformations achieved through CalFitTheory's evidence-based methodology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Divya S.",
                plan: "Diet + Workout Combo",
                result: "Lost 12kg and completely reshaped her body composition in 4 months using metabolic profiling.",
                image: "/images/client2-transformation.png",
              },
              {
                name: "Karan R.",
                plan: "Platinum 1:1 Coaching",
                result: "Gained significant muscle mass while reducing body fat through biomechanical optimization.",
                image: "/images/client3-transformation.png",
              },
              {
                name: "Meera P.",
                plan: "Diet + Workout Combo",
                result: "Achieved a balanced, sustainable physique at 42 through CalFitTheory's holistic approach.",
                image: "/images/client4-transformation.png",
              },
            ].map((client, i) => (
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
                className="rounded-lg overflow-hidden bg-black border border-gray-800"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={client.image || "/placeholder.svg?height=400&width=300&text=Transformation"}
                    alt={`${client.name} transformation with CalFitTheory`}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=400&width=300&text=Transformation"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-lg">{client.name}</h3>
                    <p className="text-xs text-gray-300 mb-1">Plan: {client.plan}</p>
                    <p className="text-sm text-gray-200">{client.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-white/20">CLIENT</span>
              <span className="text-white"> EXPERIENCES</span>
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Hear directly from our clients about their transformative journeys with CalFitTheory
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Arjun M.",
                plan: "Platinum 1:1 Coaching",
                quote: "CalFitTheory's metabolic profiling completely changed my approach to fitness.",
              },
              {
                name: "Meera P.",
                plan: "Diet + Workout Combo",
                quote:
                  "Their holistic approach addresses everything - nutrition, training, recovery, and stress management.",
              },
              {
                name: "Vikram D.",
                plan: "Platinum 1:1 Coaching",
                quote: "The neural activation techniques completely transformed my mind-muscle connection.",
              },
            ].map((client, i) => (
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
                className="rounded-lg overflow-hidden bg-black border border-gray-800"
              >
                <div className="relative aspect-video">
                  <Image
                    src={`/placeholder.svg?height=200&width=350&text=Video+Testimonial`}
                    alt="Video testimonial thumbnail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="rounded-full bg-primary/90 p-3">
                      <Play className="h-6 w-6 text-black" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm">{client.name}</h3>
                  <p className="text-xs text-gray-400 mb-2">Plan: {client.plan}</p>
                  <p className="text-xs text-gray-400">
                    &quot;{client.quote} Watch my full journey to see how CalFitTheory's scientific approach delivered
                    results where other programs failed.&quot;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-2xl font-bold">Ready For Your Scientific Transformation?</h2>
            <p className="text-black/80 max-w-md mx-auto">
              Experience the CalFitTheory difference with our evidence-based approach to fitness and nutrition.
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
