"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Dumbbell, Salad, Star, StarHalf } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"
import BackgroundImage from "@/components/background-image"
import Footer from "@/components/footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { once: true })

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

      {/* Hero Section - No Image */}
      <section ref={heroRef} className="pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="space-y-8 max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
            >
              <Star className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium text-sm">Science-Based Fitness Coaching</span>
              <Star className="h-4 w-4 text-primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl font-bold leading-tight tracking-tighter"
            >
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block"
              >
                ELEVATE YOUR
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="block text-primary"
              >
                FITNESS JOURNEY
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="block text-white/20"
              >
                WITH CALFITTHEORY
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="text-gray-400 max-w-md mx-auto text-lg"
            >
              Experience transformative, evidence-based training from elite fitness coaches. Custom programs designed
              using metabolic profiling and biomechanical optimization.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link href="/plans">
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_15px_rgba(193,255,0,0.5)]">
                  Explore Elite Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/testimonials">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-gray-700 text-white hover:bg-gray-800 px-8 py-6 text-base font-medium rounded-md transition-all duration-300 ease-in-out"
                >
                  View Success Stories
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Premium background effects */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent z-0"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -top-[30%] -right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] z-0"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute -bottom-[30%] -left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] z-0"
        ></motion.div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-10 px-4 border-t border-gray-800 bg-black/50 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-xl -z-10 opacity-70"
              ></motion.div>
              <div className="py-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl font-bold text-primary"
                >
                  8+ Yrs
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-gray-400 text-sm mt-1"
                >
                  Elite Experience
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-xl -z-10 opacity-70"
              ></motion.div>
              <div className="py-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-3xl font-bold text-primary"
                >
                  350+
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-gray-400 text-sm mt-1"
                >
                  Transformations
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.7 }}
                className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-xl -z-10 opacity-70"
              ></motion.div>
              <div className="py-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-3xl font-bold text-primary"
                >
                  20+
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-gray-400 text-sm mt-1"
                >
                  Certifications
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Premium background effects */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5 mix-blend-overlay"></div>
      </section>

      {/* About Me Section */}
      <section ref={aboutRef} className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[450px]"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 -z-10"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"
              ></motion.div>

              <Image
                src="/images/trainer-3.png"
                alt="CalFitTheory - Elite Fitness Coach"
                fill
                className="object-contain object-center"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=450&width=350&text=Trainer+Image"
                }}
              />

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute bottom-10 left-0 h-1 bg-gradient-to-r from-primary to-transparent"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-primary/10 px-4 py-2 rounded-full"
              >
                <span className="text-primary font-medium text-sm">About CalFitTheory</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold tracking-tight"
              >
                <span className="text-white">SCIENTIFIC FITNESS</span>
                <span className="text-primary"> EXPERTISE</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-300 text-lg leading-relaxed"
              >
                We're CalFitTheory, an elite fitness coaching team with over 8 years of experience transforming bodies
                through evidence-based methods. Our approach combines cutting-edge exercise science with metabolic
                profiling to deliver results that generic programs simply can't match.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-300 text-lg leading-relaxed"
              >
                Our methodology is built on biomechanical optimization, neural activation techniques, and personalized
                nutrition protocols to deliver exceptional results. Whether you're looking to build an impressive
                physique, optimize performance, or completely transform your body, our science-backed coaching delivers.
              </motion.p>

              <div className="pt-6 grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-base font-medium">Exercise Science Specialists</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-base font-medium">Metabolic Profiling Experts</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-base font-medium">Biomechanical Optimization</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-base font-medium">Evidence-Based Protocols</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Premium background effects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-full h-full bg-[url('/placeholder.svg?height=50&width=50')] bg-repeat opacity-5 mix-blend-overlay"
        ></motion.div>
      </section>

      {/* Programs Section */}
      <BackgroundImage className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">Scientific Programs</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">
              <span className="text-white/20">EVIDENCE-BASED</span>
              <span className="text-white"> COACHING SOLUTIONS</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tailored fitness solutions designed using metabolic profiling and biomechanical optimization for
              exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Dumbbell className="h-6 w-6" />,
                title: "Platinum 1:1 Coaching",
                price: "₹6,000",
                description:
                  "The ultimate personalized experience with metabolic profiling, biomechanical optimization, and neural activation techniques",
                features: [
                  "24/7 direct coach access",
                  "Custom training program",
                  "Metabolic profiling",
                  "Biomechanical analysis",
                  "Neural activation protocols",
                ],
                link: "/plans#one-on-one",
                featured: true,
              },
              {
                icon: <Salad className="h-6 w-6" />,
                title: "Diet Plan",
                price: "₹1,500",
                description:
                  "Personalized nutrition guidance based on your unique metabolic profile and body composition",
                features: [
                  "Metabolic profiling",
                  "Macro optimization",
                  "Nutrient timing protocols",
                  "Supplement guidance",
                  "Adaptation strategies",
                ],
                link: "/plans#diet",
                featured: false,
              },
              {
                icon: <Dumbbell className="h-6 w-6" />,
                title: "Workout Plan",
                price: "₹1,500",
                description:
                  "Structured training programs designed using biomechanical optimization and neural activation techniques",
                features: [
                  "Biomechanical assessment",
                  "Neural activation protocols",
                  "Progressive overload system",
                  "Recovery optimization",
                  "Form correction guides",
                ],
                link: "/plans#workout",
                featured: false,
              },
              {
                icon: <Dumbbell className="h-6 w-6" />,
                title: "Diet + Workout Combo",
                price: "₹2,500",
                description:
                  "The complete scientific package combining metabolic profiling and biomechanical optimization",
                features: [
                  "Integrated training system",
                  "Metabolic profiling",
                  "Biomechanical assessment",
                  "Neural activation techniques",
                  "Recovery optimization",
                ],
                link: "/plans#combo",
                featured: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`group relative overflow-hidden rounded-xl border ${plan.featured ? "border-primary" : "border-gray-800"} ${plan.featured ? "bg-gradient-to-b from-black to-gray-900" : "bg-black"} p-8 text-left h-full`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <div className="flex flex-col h-full">
                  <div>
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full ${plan.featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"} mb-4`}
                    >
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                    <div className="flex items-baseline mb-4">
                      <p className="text-3xl font-bold">{plan.price}</p>
                      <p className="text-sm text-gray-400 ml-2">/month</p>
                    </div>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle
                          className={`h-5 w-5 ${plan.featured ? "text-primary" : "text-gray-500"} flex-shrink-0`}
                        />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link href={plan.link}>
                      <Button
                        className={`w-full ${plan.featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-gray-800 text-white hover:bg-gray-700"} transition-all duration-300`}
                      >
                        Select Plan
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </BackgroundImage>

      {/* Methodology Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">Scientific Approach</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">
              <span className="text-white">THE CALFITTHEORY</span>
              <span className="text-white/20"> METHODOLOGY</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A systematic approach to physical excellence built on exercise science and evidence-based protocols
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[550px]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 -z-10"></div>
              <Image
                src="/images/trainer-pose.png"
                alt="CalFitTheory - Elite Fitness Coach"
                fill
                className="object-contain object-center"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=550&width=400&text=Trainer+Pose"
                }}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-primary">Scientific Optimization</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our approach to physical transformation is built on metabolic profiling, biomechanical optimization, and
                neural activation techniques. Every aspect of your training and nutrition is meticulously designed based
                on scientific evidence.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Through years of research and practical application, we've developed a systematic methodology that
                adapts to your unique body mechanics, metabolic profile, and recovery capacity. This isn't about generic
                workouts—it's about engineering your ideal physique through evidence-based protocols.
              </p>
              <div className="space-y-5 pt-6">
                {[
                  "Biomechanical optimization for maximum muscle stimulation",
                  "Metabolic profiling for personalized nutrition protocols",
                  "Neural activation techniques for superior mind-muscle connection",
                  "Evidence-based recovery systems for enhanced performance",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 mt-1">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    </div>
                    <span className="text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">Scientific Results</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">
              <span className="text-white">TRANSFORMATION</span>
              <span className="text-white/20"> STORIES</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real results from clients who experienced the CalFitTheory difference through evidence-based methods
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

          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-6 w-max">
              {[
                {
                  name: "Arjun M.",
                  achievement: "8kg lean muscle gain",
                  testimonial:
                    "CalFitTheory's approach to fitness is unlike anything I've experienced before. Their metabolic profiling completely changed how I eat and train. In just 3 months, I've gained 8kg of lean muscle while actually improving my cardiovascular health.",
                  rating: 5,
                  profileImage: "/images/client1.jpg",
                },
                {
                  name: "Divya S.",
                  achievement: "12kg weight loss",
                  testimonial:
                    "I've tried countless diet plans before, but CalFitTheory's nutrition protocol is the first one that actually feels sustainable. They didn't just give me a meal plan - they taught me how to eat for my specific metabolism.",
                  rating: 4.5,
                  profileImage: "/images/client2.jpg",
                  transformationImage:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1687.jpg.jpg-vokpca3KiSBcDIueP1rn5wxM2YcG6H.jpeg",
                },
                {
                  name: "Meera P.",
                  achievement: "Complete body transformation",
                  testimonial:
                    "CalFitTheory's holistic approach addresses everything - nutrition, training, recovery, and even stress management. As a busy professional, I needed something that would fit into my lifestyle, not consume it.",
                  rating: 5,
                  profileImage: "/images/client4.jpg",
                  transformationImage:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2325.JPG-pTjppJT8oKMv1G4VfdnXiNgC0lezw6.jpeg",
                },
              ].map((client, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: i * 0.1 },
                    },
                  }}
                  className="flex-none w-[350px] rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
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
                      <h3 className="font-bold text-lg">{client.name}</h3>
                      <p className="text-sm text-primary">{client.achievement}</p>
                    </div>
                  </div>
                  <p className="text-base text-gray-300 mb-4 italic">&quot;{client.testimonial}&quot;</p>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      {client.rating === 5 ? (
                        [...Array(5)].map((_, j) => (
                          <Star key={j} className="text-primary" size={18} fill="currentColor" />
                        ))
                      ) : client.rating === 4.5 ? (
                        <>
                          {[...Array(4)].map((_, j) => (
                            <Star key={j} className="text-primary" size={18} fill="currentColor" />
                          ))}
                          <StarHalf className="text-primary" size={18} fill="currentColor" />
                        </>
                      ) : (
                        [...Array(4)].map((_, j) => (
                          <Star key={j} className="text-primary" size={18} fill="currentColor" />
                        ))
                      )}
                    </div>
                    {client.transformationImage && (
                      <Link href="/testimonials" className="text-xs text-primary hover:underline">
                        View Transformation
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/testimonials">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-700 text-white hover:bg-gray-800 px-8 py-6 text-base font-medium rounded-md transition-all duration-300"
              >
                View All Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BackgroundImage className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">The Difference</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">
              <span className="text-white/20">WHY CHOOSE</span>
              <span className="text-white"> CALFITTHEORY</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              What separates our evidence-based coaching from standard fitness offerings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Metabolic Profiling",
                description:
                  "Personalized nutrition strategies based on your unique metabolic response, not generic calorie calculations.",
              },
              {
                title: "Biomechanical Optimization",
                description:
                  "Training protocols designed around your unique body mechanics for maximum muscle stimulation and minimal injury risk.",
              },
              {
                title: "Neural Activation",
                description:
                  "Specialized techniques to enhance mind-muscle connection, making every rep more effective for faster results.",
              },
              {
                title: "Scientific Progression",
                description:
                  "Evidence-based progression systems that ensure continuous adaptation without plateaus or overtraining.",
              },
              {
                title: "Recovery Optimization",
                description:
                  "Structured recovery protocols that enhance performance, prevent injury, and accelerate muscle growth.",
              },
              {
                title: "Lifestyle Integration",
                description:
                  "Programs designed to enhance your life, not consume it, with strategies for sleep optimization and stress management.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
                className="flex flex-col items-start gap-4 p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-black to-gray-900/50 h-full"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </BackgroundImage>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80 text-black relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8 max-w-3xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight"
            >
              Ready For Your Scientific Transformation?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-black/80 text-xl max-w-2xl mx-auto"
            >
              Join the elite clients who have achieved extraordinary results with our evidence-based coaching
              methodology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-black/80 px-10 py-7 text-lg font-medium rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 mt-4 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                >
                  Begin Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Premium background effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute -top-[20%] -right-[10%] w-[300px] h-[300px] bg-white/10 rounded-full blur-[50px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-[20%] -left-[10%] w-[300px] h-[300px] bg-white/10 rounded-full blur-[50px]"
        ></motion.div>

        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5"></div>
      </section>

      {/* Mobile Navigation */}
      <Footer />
    </div>
  )
}
