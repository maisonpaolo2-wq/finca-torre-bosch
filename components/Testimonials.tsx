'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { testimonials } from '@/content/data'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setI((n) => (n + 1) % testimonials.length), 7000)
    return () => clearTimeout(t)
  }, [i, paused])

  const t = testimonials[i]
  return (
    <div className="quote" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <span className="quote__mark" aria-hidden="true">
        “
      </span>
      <AnimatePresence mode="wait">
        <motion.figure
          key={i}
          style={{ margin: 0 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45 }}
        >
          <blockquote>{t.text}</blockquote>
          <cite>
            {t.name}
            <span>
              {t.date} · {t.location}
            </span>
          </cite>
        </motion.figure>
      </AnimatePresence>
      <div className="quote__nav" role="group" aria-label="Elegir testimonio">
        {testimonials.map((x, n) => (
          <button
            key={x.name}
            type="button"
            className="quote__dot"
            aria-label={`Testimonio de ${x.name}`}
            aria-current={n === i}
            onClick={() => setI(n)}
          >
            <span />
          </button>
        ))}
      </div>
    </div>
  )
}
