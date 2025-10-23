import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Founder & CEO",
    company: "Aternity",
    period: "Aug 2024 – Present",
    location: "India",
    type: "Full-time",
    description: "Leading innovative technology solutions, managing product strategy, and building a team focused on impactful products.",
    skills: ["Leadership", "Product Management", "Strategy"],
    color: "primary",
    current: true,
  },
  {
    title: "Student Campus Ambassador",
    company: "Dive Money",
    period: "Jan 2025 – Present",
    location: "Remote",
    type: "Part-time",
    description: "Representing Dive Money on campus, organizing events, and building awareness about fintech solutions among students.",
    skills: ["Marketing", "Event Management", "Community"],
    color: "secondary",
    current: true,
  },
  {
    title: "Open Source Team Member",
    company: "GDG VJIT",
    period: "Oct 2024 – Present",
    location: "VJIT, Hyderabad",
    type: "Volunteer",
    description: "Contributing to open-source projects, mentoring developers, and organizing tech workshops for the community.",
    skills: ["Open Source", "Mentoring", "Git"],
    color: "accent",
    current: true,
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
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Work Experience
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-12"
          >
            My professional journey in tech and entrepreneurship.
          </motion.p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-30" />

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.15, duration: 0.3 }}
                    className="absolute left-2.5 md:left-6.5 top-6"
                  >
                    <div 
                      className="w-3 h-3 rounded-full border-2 relative z-10"
                      style={{
                        backgroundColor: `hsl(var(--${exp.color}))`,
                        borderColor: `hsl(var(--${exp.color}))`,
                        boxShadow: `0 0 0 4px hsl(var(--background)), 0 0 12px hsl(var(--${exp.color}) / 0.5)`,
                      }}
                    >
                      {exp.current && (
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute inset-0 rounded-full"
                          style={{
                            backgroundColor: `hsl(var(--${exp.color}) / 0.3)`,
                          }}
                        />
                      )}
                    </div>
                  </motion.div>

                  <Card className="border-l-4 hover-elevate active-elevate-2 transition-all group" style={{
                    borderLeftColor: `hsl(var(--${exp.color}))`
                  }}>
                    <div className="p-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-base font-semibold mt-1" style={{
                            color: `hsl(var(--${exp.color}))`
                          }}>
                            {exp.company}
                          </p>
                        </div>
                        {exp.current && (
                          <Badge className="bg-secondary text-secondary-foreground w-fit">
                            Current
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                        <Badge variant="outline" className="text-xs h-5">
                          {exp.type}
                        </Badge>
                      </div>

                      <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs bg-muted/50 text-foreground/80 h-6"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative gradient orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute top-1/2 right-0 w-64 h-64 opacity-10 pointer-events-none"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-accent to-secondary blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
