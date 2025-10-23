import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <Card className="relative overflow-visible h-full border-2 border-border hover:border-primary/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-foreground/70 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-muted text-foreground border border-border"
                data-testid={`badge-tech-${tech.toLowerCase()}`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-4">
            {liveUrl && (
              <Button
                variant="default"
                size="sm"
                asChild
                data-testid={`button-view-${title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
