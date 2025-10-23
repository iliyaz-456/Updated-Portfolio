import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Virtual Shopping AI",
    description: "An AI-powered virtual shopping assistant that revolutionizes the online shopping experience. Uses advanced natural language processing and computer vision to help users find and purchase products through intuitive conversations.",
    techStack: ["React", "Python", "TensorFlow", "Node.js", "MongoDB"],
    liveUrl: "https://iliyaz-456.github.io/virrtualshopAI/",
    githubUrl: "https://github.com/iliyaz-456/virrtualshopAI",
  },
  {
    title: "Telemedicine Platform",
    description: "Smart India Hackathon 2025 project - A comprehensive telemedicine platform connecting patients with healthcare providers remotely. Features include video consultations, prescription management, and health monitoring.",
    techStack: ["React", "Node.js", "WebRTC", "MongoDB", "Express"],
    githubUrl: "https://github.com/iliyaz-456/Telemedicine-",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Featured Projects
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl"
          >
            Exploring innovative solutions through code. Here are some projects I've built that showcase my skills in AI, web development, and problem-solving.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
