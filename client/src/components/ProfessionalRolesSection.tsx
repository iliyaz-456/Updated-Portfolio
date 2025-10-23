import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Briefcase, Code2, Server, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const roles = [
  {
    title: "Full-Stack Developer",
    icon: Code2,
    description: "Building end-to-end web applications with modern technologies. Specializing in React, Node.js, and the MERN stack to create seamless user experiences.",
    color: "primary",
  },
  {
    title: "Founder & Entrepreneur",
    icon: Briefcase,
    description: "Leading Aternity from concept to execution. Managing product strategy, team building, and driving innovation in the tech space.",
    color: "accent",
  },
  {
    title: "Backend Engineer",
    icon: Server,
    description: "Building robust and scalable server-side applications, APIs, and databases. Expertise in Node.js, Express, MongoDB, and SQL.",
    color: "secondary",
  },
  {
    title: "AI Enthusiast",
    icon: Blocks,
    description: "Exploring artificial intelligence and machine learning to create intelligent solutions. Passionate about leveraging AI to solve real-world problems.",
    color: "primary",
  },
];

export default function ProfessionalRolesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % roles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + roles.length) % roles.length);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Professional Roles
          </h2>

          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 md:p-12 border-2 hover:border-primary/50 transition-all">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: `hsl(var(--${roles[currentIndex].color}) / 0.1)`,
                      border: `2px solid hsl(var(--${roles[currentIndex].color}))`,
                    }}
                  >
                    {(() => {
                      const Icon = roles[currentIndex].icon;
                      return <Icon className="w-10 h-10" style={{ color: `hsl(var(--${roles[currentIndex].color}))` }} />;
                    })()}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {roles[currentIndex].title}
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
                    {roles[currentIndex].description}
                  </p>
                </div>
              </Card>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
                data-testid="button-prev-role"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {roles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'w-8 bg-primary' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
                data-testid="button-next-role"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
