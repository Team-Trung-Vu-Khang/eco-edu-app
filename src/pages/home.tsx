import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, CalendarDays, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full px-6 py-24 md:py-32 flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="/edu/mevi-logo.jpeg"
            alt="MEVI Logo"
            className="h-24 w-24 rounded-2xl object-contain shadow-sm border border-border"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground mb-6"
        >
          MEVI UI Component System
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground"
        >
          Build powerful farm management UIs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
        >
          A complete component system for modern agricultural platforms.
          Grounded design, purposeful interactions, and robust data display for
          the farming community.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <Link href="/components">
            <Button size="lg" className="h-12 px-8 text-base">
              Explore Components
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Features */}
      <section className="w-full bg-muted/50 py-24 border-t border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 bg-background rounded-2xl shadow-sm border border-border">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Farm Data Forms</h3>
              <p className="text-muted-foreground">
                Robust input controls designed specifically for complex
                agricultural data entry.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 bg-background rounded-2xl shadow-sm border border-border">
                <CalendarDays className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Harvest Schedules</h3>
              <p className="text-muted-foreground">
                Intuitive date pickers and calendars to keep operations running
                smoothly.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 bg-background rounded-2xl shadow-sm border border-border">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Field Analytics</h3>
              <p className="text-muted-foreground">
                Clear, actionable data visualizations to monitor yield and
                efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
