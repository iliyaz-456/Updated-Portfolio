import ProjectCard from '../ProjectCard'

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-lg">
      <ProjectCard
        title="Virtual Shopping AI"
        description="AI-powered virtual shopping assistant that helps users find and purchase products using natural language processing and computer vision."
        techStack={["React", "Python", "TensorFlow", "Node.js"]}
        liveUrl="https://iliyaz-456.github.io/virrtualshopAI/"
        githubUrl="https://github.com/iliyaz-456/virrtualshopAI"
        index={0}
      />
    </div>
  )
}
