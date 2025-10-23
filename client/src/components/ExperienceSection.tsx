import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Founder & CEO",
    company: "Aternity",
    period: "Aug 2024 – Present",
    location: "India",
    type: "Full-time",
    description: "Leading the development of innovative technology solutions, managing product strategy, and building a team focused on creating impactful products that solve real-world problems.",
    skills: ["Leadership", "Product Management", "Strategy", "Team Building"],
    color: "primary",
    current: true,
  },
  {
    title: "Student Campus Ambassador",
    company: "Dive Money",
    period: "Jan 2025 – Present",
    location: "Remote",
    type: "Part-time",
    description: "Representing Dive Money on campus, organizing events, and building awareness about financial technology solutions among students.",
    skills: ["Marketing", "Event Management", "Community Building"],
    color: "secondary",
    current: true,
  },
  {
    title: "Open Source Team Member",
    company: "GDG VJIT",
    period: "Oct 2024 – Present",
    location: "VJIT, Hyderabad",
    type: "Volunteer",
    description: "Contributing to open-source projects, mentoring fellow developers, and organizing tech workshops for the Google Developer Group community.",
    skills: ["Open Source", "Mentoring", "Community", "Git"],
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
          className="max-w-6xl mx-auto"
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
            My professional journey in tech, from founding startups to community leadership.
          </motion.p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <Card className="relative overflow-visible p-6 md:p-8 border-2 hover:border-primary/50 hover-elevate transition-all group">
                  <div className="absolute top-6 right-6">
                    {exp.current && (
                      <Badge className="bg-secondary text-secondary-foreground">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Current
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div 
                          className="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                          style={{
                            backgroundColor: `hsl(var(--${exp.color}) / 0.1)`,
                            border: `2px solid hsl(var(--${exp.color}))`,
                          }}
                        >
                          <Briefcase className="w-6 h-6" style={{ color: `hsl(var(--${exp.color}))` }} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold mb-2" style={{
                            color: `hsl(var(--${exp.color}))`
                          }}>
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-foreground/70 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-muted text-foreground/80"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-4 flex items-center justify-center md:justify-end">
                      <div className="relative w-32 h-32">
                        <div 
                          className="absolute inset-0 rounded-full opacity-20 blur-xl"
                          style={{
                            backgroundColor: `hsl(var(--${exp.color}))`,
                          }}
                        />
                        <div 
                          className="absolute inset-0 rounded-full border-4 opacity-30"
                          style={{
                            borderColor: `hsl(var(--${exp.color}))`,
                          }}
                        />
                        <div 
                          className="absolute inset-4 rounded-full border-2"
                          style={{
                            borderColor: `hsl(var(--${exp.color}))`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
