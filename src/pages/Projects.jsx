import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import { projectsData } from '../data/projects'

export default function Projects() {
  return (
    <div>
      <section className="pt-28 lg:pt-36 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Section>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Portfolio</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
                Projects
              </h1>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Production-minded AI and software projects focused on automation, intelligence, and scale.
              </p>
            </div>
          </Section>

          <Section stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </Section>
        </div>
      </section>
    </div>
  )
}
