'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Lightbulb, Shield, Target } from 'lucide-react'

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Lead AI Engineer',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const values = [
  {
    name: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible with AI technology.',
    icon: Lightbulb,
  },
  {
    name: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical business practices.',
    icon: Shield,
  },
  {
    name: 'Impact',
    description: 'We measure our success by the positive impact we create for our clients.',
    icon: Target,
  },
]

export default function About() {
  return (
    <div>
      {/* Mission & Vision */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-x-2 rounded-full bg-blue-600/10 px-4 py-1 text-sm font-medium leading-6 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
            >
              Our Mission
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
              Empowering businesses through AI innovation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              To empower small and medium-sized businesses with cutting-edge AI solutions that drive growth, efficiency, and innovation. We believe in making advanced technology accessible and impactful for businesses of all sizes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex items-center gap-x-6"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-x-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-x-2 rounded-full bg-blue-600/10 px-4 py-1 text-sm font-medium leading-6 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
          >
            Our Values
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Guided by principles that matter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            We believe in innovation, integrity, and impact. These core values guide everything we do and shape how we serve our clients.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className="rounded-lg bg-blue-600/10 p-2 dark:bg-blue-400/10">
                  <value.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900 dark:text-white">{value.name}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{value.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-x-2 rounded-full bg-blue-600/10 px-4 py-1 text-sm font-medium leading-6 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
            >
              Our Team
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              Meet the experts
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Our team of AI experts and innovators is dedicated to helping businesses succeed in the digital age.
            </motion.p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {team.map((person, index) => (
              <motion.li
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    className="aspect-[3/2] w-full object-cover transition duration-300 group-hover:scale-105" 
                    src={person.image} 
                    alt="" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/0" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{person.role}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
} 