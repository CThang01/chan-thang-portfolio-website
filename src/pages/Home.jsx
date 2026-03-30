import { Link } from 'react-router-dom'
import { ArrowRight, Linkedin, Mail } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import { projectsData } from '../data/projects'

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3)

  return (
    <div>
      {/* Hero — full viewport, centered, Apple-style */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Section>
            <p className="text-sm font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-6">
              AI Engineer / Data Analyst / Software Engineer / Data Engineer
            </p>
          </Section>

          <Section>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[0.95] mb-6">
              Chan Thang
            </h1>
          </Section>

          <Section>
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl mx-auto mb-10">
              Building LLM-powerasdasdsaed systems, RAG pipelines, and data products that turn
              complex information into practical tools, faster workflows, and better decisions.
            </p>
          </Section>

          <Section>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-6 py-3 rounded-full text-sm font-semibold transition-colors"
              >
                View My Work
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-300 px-6 py-3 rounded-full text-sm font-semibold transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </Section>

          <Section>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-400 dark:text-gray-500">
              <a href="https://linkedin.com/in/cthang10" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                <Linkedin size={13} /> LinkedIn
              </a>
              <span>|</span>
              <a href="mailto:chankapthang300@gmail.com"
                className="inline-flex items-center gap-1 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                <Mail size={13} /> chankapthang300@gmail.com
              </a>
            </div>
          </Section>
        </div>
      </section>

      {/* Currently section — full-width background break */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20 lg:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <Section>
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Currently</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight max-w-2xl">
              Associate AI Engineer at Lowe's
            </h2>
          </Section>
          <Section>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mt-5 max-w-xl">
              Building end-to-end RAG systems, ingestion pipelines, and FastAPI backends
              for enterprise AI products that serve thousands of users.
            </p>
          </Section>

          <Section stagger>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <Stat label="Records processed" value="100M+" />
              <Stat label="Role focus" value="AI & Data" />
              <Stat label="Based in" value="Charlotte, NC" />
            </div>
          </Section>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <Section>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Selected Work</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                Featured Projects
              </h2>
            </div>
          </Section>

          <Section stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </Section>

          <Section>
            <div className="text-center mt-10">
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                View all projects
                <ArrowRight size={14} />
              </Link>
            </div>
          </Section>
        </div>
      </section>

      {/* Core Expertise — full-width background */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20 lg:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <Section>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">What I Do</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                Core Expertise
              </h2>
            </div>
          </Section>

          <Section stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <ExpertiseCard
                title="AI & LLM Systems"
                description="End-to-end RAG architectures, embedding pipelines, vector search, and LLM orchestration for enterprise-scale applications."
                tools={['Python', 'LLMs', 'RAG', 'Pinecone', 'FastAPI']}
              />
              <ExpertiseCard
                title="Data Engineering"
                description="Large-scale pipelines processing hundreds of millions of records across distributed systems and cloud data warehouses."
                tools={['Snowflake', 'Hadoop', 'BigQuery', 'Teradata', 'SQL']}
              />
              <ExpertiseCard
                title="Analytics & Viz"
                description="Dashboards and forecasting models that replace manual reporting and drive planning decisions across business teams."
                tools={['Tableau', 'Power BI', 'Python', 'React', 'Excel']}
              />
            </div>
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Section>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-5">
              Let's work together
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
              I'm always open to discussing new opportunities, collaborations, and interesting problems.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-8 py-3.5 rounded-full text-sm font-semibold transition-colors"
            >
              Get In Touch
              <ArrowRight size={15} />
            </Link>
          </Section>
        </div>
      </section>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
      <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{value}</p>
      <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">{label}</p>
    </div>
  )
}

function ExpertiseCard({ title, description, tools }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tools.map((tool) => (
          <span key={tool} className="bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2.5 py-0.5 rounded-full text-xs font-medium">
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}
