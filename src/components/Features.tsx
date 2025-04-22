'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Brain, LineChart, Cog, Zap, Users } from 'lucide-react'
import { FC, useRef } from 'react'

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    name: 'Custom AI Development',
    description: 'Tailored AI solutions designed to meet your specific business needs, from chatbots to predictive analytics systems.',
    icon: Code,
  },
  {
    name: 'Machine Learning Integration',
    description: 'Seamlessly integrate machine learning models into your existing workflows to enhance decision-making and automation.',
    icon: Brain,
  },
  {
    name: 'AI Consulting',
    description: 'Expert guidance on AI strategy, implementation, and optimization to ensure maximum ROI from your AI investments.',
    icon: LineChart,
  },
  {
    name: 'Data Analytics',
    description: 'Advanced data analysis and visualization tools powered by AI to uncover valuable insights from your business data.',
    icon: Cog,
  },
  {
    name: 'Process Automation',
    description: 'Intelligent automation solutions that streamline operations and reduce manual workload across your organization.',
    icon: Zap,
  },
  {
    name: 'AI Training & Support',
    description: 'Comprehensive training programs and ongoing support to help your team effectively utilize AI technologies.',
    icon: Users,
  },
]

const Features: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/40 to-cyan-50/40 dark:from-blue-950/40 dark:via-purple-950/40 dark:to-cyan-950/40" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <motion.div style={{ y }} className="relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent sm:text-5xl md:text-6xl"
            >
              Our AI Solutions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Transform your business with our cutting-edge AI solutions. We combine innovation with expertise to deliver powerful, scalable, and customized AI technologies that drive growth and efficiency.
            </motion.p>
          </div>

          <motion.div 
            className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                  translateZ: 20
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Content */}
                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-blue-500/25">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover spotlight effect */}
                <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 blur-xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Features 