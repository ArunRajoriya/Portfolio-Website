import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";

interface ProjectCardProps {
  index: string;
  type: string;
  title: string;
  summary: string;
  metric: string;
  stack: string[];
  tone: string;
  link?: string;
  delay?: number;
}

export function ProjectCard({
  index,
  type,
  title,
  summary,
  metric,
  stack,
  tone,
  link,
  delay = 0,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.article
      ref={cardRef}
      className={`${tone} project-card group relative overflow-hidden rounded-xl border border-border bg-card p-8 shadow-lg transition-shadow hover:shadow-2xl`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <motion.span
            className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
          >
            {index} / {type}
          </motion.span>
          <motion.span
            className="project-signal size-2 rounded-full bg-primary shadow-[0_0_10px_rgba(8,145,178,0.5)]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Metric */}
        <motion.p
          className="mb-3 font-mono text-sm font-semibold text-primary"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.3 }}
        >
          {metric}
        </motion.p>

        {/* Title */}
        <motion.h3
          className="mb-5 text-3xl font-bold tracking-tight transition-colors group-hover:text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.4 }}
        >
          {title}
        </motion.h3>

        {/* Summary */}
        <motion.p
          className="mb-6 leading-relaxed text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.5 }}
        >
          {summary}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          className="mb-6 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.6 }}
        >
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              className="rounded-md border border-border bg-background/50 px-3 py-1 font-mono text-xs backdrop-blur-sm transition-all hover:border-primary/40 hover:text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.7 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Link */}
        <motion.a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-foreground transition-colors hover:text-primary"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.8 }}
          whileHover={{ x: 5 }}
        >
          View Project
          <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            →
          </motion.span>
        </motion.a>
      </div>

      {/* 3D Effect Layer */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(8, 145, 178, 0.1), transparent 50%)",
        }}
      />
    </motion.article>
  );
}
