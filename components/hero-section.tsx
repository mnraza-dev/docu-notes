import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import type { Variants } from 'framer-motion'
const container: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.75,
    },
  },
}

const item: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(12px)',
    y: 12,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 1.5,
    },
  },
}

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        {/* Background blurred radial shapes */}
        <div
          aria-hidden="true"
          className="absolute inset-0 isolate hidden [contain:strict] lg:block"
        >
          <div className="w-[560px] h-[1280px] -translate-y-[87.5px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[1280px] absolute left-0 top-0 w-[240px] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[1280px] -translate-y-[87.5px] absolute left-0 top-0 w-[240px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        {/* Hero content */}
        <section>
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16"
                >
                  Your Notes. Your Workflow. Simplified.
                </TextEffect>

                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mt-8 max-w-2xl text-pretty text-lg"
                >
                  From quick notes to detailed documents, Docu Notes makes it
                  easy to write, search, and stay productive wherever you are.
                </TextEffect>

                {/* CTA Buttons */}
                <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5 mt-6">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl px-5 text-base"
                  >
                    <Link href="#link">Start Writing</Link>
                  </Button>
                </div>

                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-[42px] rounded-xl px-5 text-base mt-3"
                >
                  <Link href="#link">See it in Action</Link>
                </Button>
              </div>
            </div>

            {/* Animated preview image */}
            <AnimatedGroup variants={{ container, item }}>
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_55%,rgba(0,0,0,0)_100%)]">
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1 ring-background dark:[box-shadow:inset_0_1px_2px_rgba(255,255,255,0.2)]">
                  <Image
                    className="bg-background aspect-[15/8] relative hidden rounded-2xl dark:block"
                    src="/mail2.png"
                    alt="app screen"
                    width={2700}
                    height={1440}
                  />
                  <Image
                    className="z-2 border-border/25 aspect-[15/8] relative rounded-2xl border dark:hidden"
                    src="/mail2-light.png"
                    alt="app screen"
                    width={2700}
                    height={1440}
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  )
}
