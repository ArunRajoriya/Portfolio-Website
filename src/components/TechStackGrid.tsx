import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

interface TechItem {
  name: string;
  category: string;
  level: number; // 1-5
  icon?: string;
}

const techStack: TechItem[] = [
  // Frontend Development
  { name: "React", category: "Frontend", level: 5 },
  { name: "TypeScript", category: "Frontend", level: 5 },
  { name: "JavaScript", category: "Frontend", level: 5 },
  { name: "HTML5 & CSS3", category: "Frontend", level: 5 },
  { name: "Tailwind CSS", category: "Frontend", level: 5 },
  { name: "Next.js", category: "Frontend", level: 4 },
  { name: "Vite", category: "Frontend", level: 4 },

  // Motion & Interaction
  { name: "GSAP", category: "Animation", level: 4 },
  { name: "Framer Motion", category: "Animation", level: 4 },
  { name: "Three.js", category: "Animation", level: 3 },
  { name: "React Three Fiber", category: "Animation", level: 3 },

  // Backend & Infrastructure
  { name: "Python", category: "Backend", level: 5 },
  { name: "FastAPI", category: "Backend", level: 5 },
  { name: "Node.js", category: "Backend", level: 4 },
  { name: "PostgreSQL", category: "Backend", level: 4 },
  { name: "Redis", category: "Backend", level: 4 },
  { name: "MongoDB", category: "Backend", level: 4 },
  { name: "Docker", category: "Backend", level: 4 },

  // AI & ML
  { name: "LLMs & RAG", category: "AI/ML", level: 4 },
  { name: "Whisper AI", category: "AI/ML", level: 4 },
  { name: "OpenAI API", category: "AI/ML", level: 4 },

  // Tools & Platform
  { name: "Git", category: "Tools", level: 5 },
  { name: "Figma", category: "Tools", level: 4 },
  { name: "REST APIs", category: "Tools", level: 5 },
  { name: "Celery", category: "Tools", level: 4 },
];

const categoryColors: Record<string, string> = {
  Frontend: "from-cyan-500 to-blue-500",
  Animation: "from-purple-500 to-pink-500",
  Backend: "from-green-500 to-emerald-500",
  "AI/ML": "from-orange-500 to-red-500",
  Tools: "from-yellow-500 to-amber-500",
};

export function TechStackGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".tech-card");

    cards.forEach((card, i) => {
      const htmlCard = card as HTMLElement;

      htmlCard.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      htmlCard.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  const categories = Array.from(new Set(techStack.map((t) => t.category)));

  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const items = techStack.filter((t) => t.category === category);
        const gradient = categoryColors[category] || "from-gray-500 to-gray-700";

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${gradient}`} />
              <h3 className="text-xl font-semibold tracking-tight">{category}</h3>
              <div className={`h-1 flex-1 rounded-full bg-gradient-to-r ${gradient} opacity-20`} />
            </div>

            <div ref={gridRef} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  className="tech-card group relative overflow-hidden rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                >
                  <div className="relative z-10">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold">{tech.name}</span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 w-1 rounded-full ${
                              i < tech.level ? "bg-primary" : "bg-border"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-border">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${gradient}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(tech.level / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 + 0.2, duration: 0.8 }}
                      />
                    </div>
                  </div>

                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity group-hover:opacity-5`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
