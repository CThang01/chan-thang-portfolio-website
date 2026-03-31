import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden">

      {/*
        PROJECT IMAGE
        To add your own image, replace this div with:

        <img
          src="/images/your-project-image.png"
          alt={project.title}
          className="w-full h-44 object-cover"
        />

        Put images in /public/images/ — recommended 600x400px (3:2 ratio).
      */}
      <div className="w-full h-44 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
        <span className="text-3xl">{project.icon}</span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">{project.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2.5 py-0.5 rounded-full text-[11px] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-3 border-t border-gray-100 dark:border-gray-800 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-200 text-white dark:text-gray-900 py-2 rounded-full transition-colors text-xs font-semibold"
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 py-2 rounded-full transition-colors text-xs font-semibold"
            >
              <Github size={12} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
