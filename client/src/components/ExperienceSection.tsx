import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Founder & CEO",
    company: "Aternity",
    period: "Aug 2024 – Present",
    description: "Leading the development of innovative technology solutions, managing product strategy, and building a team focused on creating impactful products.",
    color: "primary",
  },
  {
    title: "Student Campus Ambassador",
    company: "Dive Money",
    period: "Jan 2025 – Present",
    description: "Representing Dive Money on campus, organizing events, and building awareness about financial technology solutions among students.",
    color: "secondary",
  },
  {
    title: "Open Source Team Member",
    company: "GDG VJIT",
    period: "Oct 2024 – Present",
    description: "Contributing to open-source projects, mentoring fellow developers, and organizing tech workshops for the Google Developer Group community.",
    color: "accent",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Experience
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-12"
          >
            My journey in tech, from founding startups to contributing to communities.
          </motion.p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <Card className="relative overflow-visible p-6 border-l-4 hover-elevate" style={{
                  borderLeftColor: `hsl(var(--${exp.color}))`
                }}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold" style={{
                        color: `hsl(var(--${exp.color}))`
                      }}>
                        {exp.company}
                      </p>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-2 w-fit">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {exp.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
