import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Coursera",
    date: "2024",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    credentialUrl: "#",
  },
  {
    title: "AI and Machine Learning Foundations",
    issuer: "Google Cloud",
    date: "2024",
    skills: ["Python", "TensorFlow", "ML Algorithms"],
    credentialUrl: "#",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
    credentialUrl: "#",
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2024",
    skills: ["MongoDB", "NoSQL", "Database Design"],
    credentialUrl: "#",
  },
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2023",
    skills: ["React", "Redux", "React Hooks"],
    credentialUrl: "#",
  },
  {
    title: "Git and GitHub Essentials",
    issuer: "LinkedIn Learning",
    date: "2023",
    skills: ["Git", "GitHub", "Version Control"],
    credentialUrl: "#",
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Certifications
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-12"
          >
            Professional certifications and completed courses demonstrating continuous learning.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full p-6 border-2 hover:border-accent/50 hover-elevate active-elevate-2 transition-all group">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-md bg-accent/10 border-2 border-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Award className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-semibold text-accent mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Issued: {cert.date}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-muted"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-auto"
                      asChild
                      data-testid={`button-cert-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Credential
                      </a>
                    </Button>
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
