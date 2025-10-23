import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, Server, Blocks, Smartphone, Rocket, Lightbulb, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const roles = [
  {
    title: "Full-Stack Developer",
    icon: Code2,
    description: "Building end-to-end web applications with modern technologies using React, Node.js, and the MERN stack.",
    color: "primary",
  },
  {
    title: "Founder & CEO",
    icon: Briefcase,
    description: "Leading Aternity from concept to execution, managing product strategy and driving innovation.",
    color: "accent",
  },
  {
    title: "Backend Engineer",
    icon: Server,
    description: "Creating robust and scalable server-side applications, APIs, and database architectures.",
    color: "secondary",
  },
  {
    title: "AI Enthusiast",
    icon: Blocks,
    description: "Exploring artificial intelligence and machine learning to create intelligent solutions.",
    color: "primary",
  },
  {
    title: "Mobile Developer",
    icon: Smartphone,
    description: "Building cross-platform mobile applications with responsive and intuitive user interfaces.",
    color: "accent",
  },
  {
    title: "Product Innovator",
    icon: Lightbulb,
    description: "Transforming ideas into reality through creative problem-solving and strategic thinking.",
    color: "secondary",
  },
];

export default function ProfessionalRolesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Professional Roles
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-12"
          >
            Versatile expertise across multiple domains of technology and innovation.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full p-6 border-2 hover:border-primary/50 hover-elevate active-elevate-2 transition-all group cursor-pointer">
                    <div className="flex flex-col items-start space-y-4">
                      <div 
                        className="w-14 h-14 rounded-md flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: `hsl(var(--${role.color}) / 0.1)`,
                          border: `2px solid hsl(var(--${role.color}))`,
                        }}
                      >
                        <Icon className="w-7 h-7" style={{ color: `hsl(var(--${role.color}))` }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {role.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed">
                          {role.description}
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
