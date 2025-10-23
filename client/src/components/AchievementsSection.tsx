import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Award, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    title: "Founded Aternity",
    description: "Successfully launched and leading Aternity as Founder & CEO, building innovative technology solutions.",
    date: "2024",
    icon: Trophy,
    color: "primary",
  },
  {
    title: "Smart India Hackathon 2025",
    description: "Developed Telemedicine platform for SIH 2025, connecting healthcare providers with patients remotely.",
    date: "2025",
    icon: Star,
    color: "accent",
  },
  {
    title: "GDG Open Source Contributor",
    description: "Active open-source team member at Google Developer Group VJIT, mentoring developers and organizing workshops.",
    date: "2024",
    icon: Award,
    color: "secondary",
  },
  {
    title: "Campus Ambassador",
    description: "Selected as Student Campus Ambassador for Dive Money, representing the brand and organizing fintech events.",
    date: "2025",
    icon: Target,
    color: "primary",
  },
  {
    title: "Virtual Shopping AI Launch",
    description: "Launched AI-powered virtual shopping assistant using advanced NLP and computer vision technologies.",
    date: "2024",
    icon: Trophy,
    color: "accent",
  },
  {
    title: "Full-Stack Development Excellence",
    description: "Mastered MERN stack and modern web technologies, building scalable and user-friendly applications.",
    date: "2023-2024",
    icon: Star,
    color: "secondary",
  },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Achievements
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-12"
          >
            Key milestones and accomplishments in my journey as a tech entrepreneur and developer.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full p-6 border-2 hover:border-primary/50 hover-elevate active-elevate-2 transition-all group">
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: `hsl(var(--${achievement.color}) / 0.1)`,
                          border: `2px solid hsl(var(--${achievement.color}))`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: `hsl(var(--${achievement.color}))` }} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {achievement.title}
                          </h3>
                          <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                            {achievement.date}
                          </span>
                        </div>
                        <p className="text-foreground/70 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
