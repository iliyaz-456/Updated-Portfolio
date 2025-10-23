import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, Sparkles } from "lucide-react";

const skills = [
  { name: "HTML", category: "Frontend", icon: Code2 },
  { name: "CSS", category: "Frontend", icon: Code2 },
  { name: "JavaScript", category: "Frontend", icon: Code2 },
  { name: "React", category: "Frontend", icon: Code2 },
  { name: "Node.js", category: "Backend", icon: Globe },
  { name: "MongoDB", category: "Database", icon: Database },
  { name: "SQL", category: "Database", icon: Database },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              About Me
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 text-lg text-foreground/80 mb-12"
          >
            <p>
              I'm <span className="text-primary font-semibold">Syed Iliyaz</span>, the founder and CEO of{" "}
              <span className="text-accent font-semibold">Aternity</span>, where we're building the future of technology solutions. 
              With a passion for AI and full-stack development, I specialize in creating innovative products that solve real-world problems.
            </p>
            <p>
              My journey in tech has been driven by curiosity and a commitment to excellence. From leading open-source initiatives 
              to representing brands as a campus ambassador, I thrive on challenges that push the boundaries of what's possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="group relative overflow-visible"
                  >
                    <div className="relative p-4 rounded-md border border-border bg-card hover-elevate active-elevate-2 transition-all cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                        <div>
                          <div className="font-medium text-foreground">{skill.name}</div>
                          <div className="text-xs text-muted-foreground">{skill.category}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
