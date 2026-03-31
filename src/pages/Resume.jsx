import { Download, Briefcase, GraduationCap, Code, Award } from 'lucide-react'
import Section from '../components/Section'

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume/Chan Thang - Resume.pdf'
    link.download = 'Chan Thang - Resume.pdf'
    link.click()
  }

  return (
    <div>
      {/* Header */}
      <section className="pt-28 lg:pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Section>
            <div className="text-center mb-4">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Background</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
                Resume
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Experience, education, and technical skills
              </p>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                <Download size={15} />
                Download PDF
              </button>
            </div>
          </Section>
        </div>
      </section>

      {/* Technical Skills — moved to top */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Section>
            <SectionTitle icon={<Code size={18} />} title="Technical Skills" />
          </Section>
          <Section stagger>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'Programming', skills: ['Python', 'SQL', 'JavaScript', 'Java', 'HTML/CSS'] },
                { label: 'AI / ML', skills: ['LLMs', 'RAG', 'Embeddings', 'Predictive Modeling'] },
                { label: 'Data', skills: ['Hadoop', 'Snowflake', 'Teradata', 'Trino', 'BigQuery', 'MongoDB'] },
                { label: 'Backend', skills: ['FastAPI', 'APIs', 'Data Pipelines', 'Vector DBs'] },
                { label: 'Analytics', skills: ['Power BI', 'Tableau', 'Alteryx', 'Excel'] },
              ].map((group) => (
                <div key={group.label} className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
                  <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span key={skill} className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Section>
            <SectionTitle icon={<Briefcase size={18} />} title="Experience" />
          </Section>
          <div className="mt-8 space-y-4">
            <Section><ExperienceCard title="Associate AI Engineer" company="Lowe's Company, Inc." location="Charlotte, NC" period="Sep 2025 — Present" bullets={[
              'Completed internal AI Engineering bootcamp covering Python, LLM systems, vector databases, and RAG architectures',
              'Built an end-to-end RAG system for enterprise document question answering',
              'Developed ingestion pipelines including crawling, preprocessing, chunking, embedding generation, and Pinecone indexing',
              'Implemented FastAPI backend with retrieval, reranking, and LLM response workflows',
            ]} /></Section>
            <Section><ExperienceCard title="Associate Data Analyst" company="Lowe's Company, Inc." location="Charlotte, NC" period="Sep 2023 — Present" bullets={[
              'Built a full-stack React application to automate reporting and centralize analytics',
              'Integrated LLM models and embedding pipelines for enterprise data classification',
              'Developed Python pipelines processing hundreds of millions of records across databases',
              'Created Tableau and Power BI dashboards reducing manual reporting time',
              'Built forecasting models in Python supporting sales and inventory planning',
            ]} /></Section>
            <Section><ExperienceCard title="Business Analyst Apprentice" company="Road to Hire" location="Fort Mill, SC" period="Mar 2022 — Sep 2022" bullets={[
              'Completed competitive program in Web Development and Data Analytics training',
              'Mentored peers in SQL and Tableau, promoting knowledge-sharing within the team',
              'Delivered actionable insights using Excel, SQL, and Tableau across projects',
            ]} /></Section>
            <Section><ExperienceCard title="Front Desk Receptionist" company="Sports Connection" location="Charlotte, NC" period="Mar 2020 — Nov 2021" bullets={[
              'Managed guest check-ins, sign-ups, membership renewals, and payment processing',
              'Coordinated communications across phone, email, and in-person interactions',
              'Resolved customer inquiries promptly, maintaining top-tier service standards',
            ]} /></Section>
          </div>
        </div>
      </section>

      {/* Education + Activities */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Section>
                <SectionTitle icon={<GraduationCap size={18} />} title="Education" />
              </Section>
              <Section>
                <div className="mt-8 space-y-4">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">B.S. Business Management Information Systems</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Minor in Data Science</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">UNC Charlotte &middot; Dec 2025</p>
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">A.A. Business Administration</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Central Piedmont CC &middot; May 2023</p>
                  </div>
                </div>
              </Section>
            </div>

            <div>
              <Section>
                <SectionTitle icon={<Award size={18} />} title="Activities" />
              </Section>
              <Section>
                <div className="mt-8 space-y-3">
                  <p className="text-sm text-gray-600 dark:text-gray-300">High School Volleyball Coach</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Worship Team Musician <span className="text-gray-400 dark:text-gray-500">(Drums & Guitar)</span>
                  </p>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-gray-400 dark:text-gray-500">{icon}</span>
      <h2 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">{title}</h2>
    </div>
  )
}

function ExperienceCard({ title, company, location, period, bullets }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 mb-3">
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{company} &middot; {location}</p>
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap">{period}</p>
      </div>
      <ul className="space-y-1.5">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}
