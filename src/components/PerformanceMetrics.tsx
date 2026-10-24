import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

interface Metric {
  label: string;
  value: string;
  unit: string;
  description: string;
  icon: string;
}

const metrics: Metric[] = [
  {
    label: "API Response Time",
    value: "180",
    unit: "ms",
    description: "Average FastAPI endpoint latency",
    icon: "⚡",
  },
  {
    label: "Build Performance",
    value: "95",
    unit: "/100",
    description: "Lighthouse performance score",
    icon: "🚀",
  },
  {
    label: "Bundle Size",
    value: "183",
    unit: "KB",
    description: "Gzipped production bundle",
    icon: "📦",
  },
  {
    label: "First Contentful Paint",
    value: "1.2",
    unit: "s",
    description: "Time to first meaningful content",
    icon: "⏱️",
  },
  {
    label: "Code Coverage",
    value: "87",
    unit: "%",
    description: "Test coverage for critical paths",
    icon: "✓",
  },
  {
    label: "Uptime",
    value: "99.9",
    unit: "%",
    description: "Production service availability",
    icon: "📊",
  },
];

function AnimatedCounter({
  value,
  unit,
  inView,
}: {
  value: string;
  unit: string;
  inView: boolean;
}) {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!countRef.current || !inView) return;

    const numericValue = parseFloat(value);
    const obj = { val: 0 };

    gsap.to(obj, {
      val: numericValue,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        if (countRef.current) {
          const formatted =
            numericValue % 1 === 0 ? Math.round(obj.val).toString() : obj.val.toFixed(1);
          countRef.current.textContent = formatted;
        }
      },
    });
  }, [value, inView]);

  return (
    <span className="font-mono text-4xl font-bold text-primary md:text-5xl">
      <span ref={countRef}>0</span>
      <span className="text-2xl text-muted-foreground">{unit}</span>
    </span>
  );
}

export function PerformanceMetrics() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Performance First
        </p>
        <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Built for <span className="text-primary">speed & scale</span>
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Every line of code optimized for performance, maintainability, and production reliability.
          Measurable results across frontend, backend, and infrastructure.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.label}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                className="mb-4 text-4xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: idx * 0.1 + 0.2 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {metric.icon}
              </motion.div>

              {/* Value */}
              <div className="mb-3">
                <AnimatedCounter value={metric.value} unit={metric.unit} inView={isInView} />
              </div>

              {/* Label */}
              <h3 className="mb-2 font-semibold tracking-tight">{metric.label}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">{metric.description}</p>

              {/* Progress bar */}
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-cyan-400"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ delay: idx * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Performance Highlights */}
      <motion.div
        className="mt-12 grid gap-4 md:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
      >
        <div className="rounded-lg border border-border bg-card p-5">
          <p className="mb-2 font-mono text-xs uppercase text-primary">Architecture</p>
          <p className="text-sm text-muted-foreground">
            Modern SSR with TanStack Start, optimized for edge deployment and fast hydration
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <p className="mb-2 font-mono text-xs uppercase text-primary">Optimization</p>
          <p className="text-sm text-muted-foreground">
            Code splitting, lazy loading, image optimization, and efficient asset delivery
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <p className="mb-2 font-mono text-xs uppercase text-primary">Monitoring</p>
          <p className="text-sm text-muted-foreground">
            Real-time error tracking, performance monitoring, and production observability
          </p>
        </div>
      </motion.div>
    </section>
  );
}
