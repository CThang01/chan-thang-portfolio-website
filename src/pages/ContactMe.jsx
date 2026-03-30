import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import Section from '../components/Section'

export default function ContactMe() {
  return (
    <div>
      <section className="pt-28 lg:pt-36 pb-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Section>
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Contact</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
              Get In Touch
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </Section>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <Section>
                <ContactForm />
              </Section>
            </div>

            <div className="lg:col-span-2">
              <Section stagger>
                <div className="space-y-3">
                  <ContactCard icon={<Mail size={16} />} label="Email" value="chankapthang300@gmail.com" href="mailto:chankapthang300@gmail.com" />
                  <ContactCard icon={<Phone size={16} />} label="Phone" value="(980) 309-5253" href="tel:+19803095253" />
                  <ContactCard icon={<Linkedin size={16} />} label="LinkedIn" value="linkedin.com/in/cthang10" href="https://linkedin.com/in/cthang10" external />
                  <ContactCard icon={<MapPin size={16} />} label="Location" value="Charlotte, NC" />
                </div>
              </Section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactCard({ icon, label, value, href, external }) {
  const inner = (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500 shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{label}</p>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">{value}</p>
      </div>
    </div>
  )

  const cls = "block bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"

  return href ? (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={cls}>{inner}</a>
  ) : (
    <div className={cls}>{inner}</div>
  )
}
