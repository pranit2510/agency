'use client'

import { motion } from 'framer-motion'

const caseStudies = [
  {
    name: 'E-commerce Optimization',
    description: 'How we helped an online retailer increase sales by 150% using AI-powered recommendations.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
  },
  {
    name: 'Customer Service AI',
    description: 'Implementing 24/7 AI customer support that reduced response times by 80%.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
  },
  {
    name: 'Manufacturing Efficiency',
    description: 'AI-driven process optimization that increased production efficiency by 35%.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
  },
]

export default function CaseStudies() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            See how we&apos;ve helped businesses transform with AI.
          </motion.p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {caseStudies.map((post, index) => (
            <motion.article
              key={post.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="flex max-w-xl flex-col items-start justify-between group cursor-pointer"
            >
              <div className="relative w-full">
                <img
                  src={post.image}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500 dark:text-gray-400">
                    Case Study
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                    <span className="absolute inset-0" />
                    {post.name}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{post.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
} 