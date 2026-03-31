import { useState, useRef } from 'react'
import { Send, AlertCircle, CheckCircle } from 'lucide-react'
import { sanitizeInput, validateEmail } from '../utils/security'
import emailjs from '@emailjs/browser'

// EmailJS configuration — replace these with your actual IDs from https://emailjs.com
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function ContactForm() {
  const formRef = useRef()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const e = {}
    if (!formData.name.trim()) e.name = 'Name is required'
    else if (formData.name.trim().length < 2) e.name = 'Name must be at least 2 characters'
    if (!formData.email.trim()) e.email = 'Email is required'
    else if (!validateEmail(formData.email)) e.email = 'Please enter a valid email'
    if (!formData.subject.trim()) e.subject = 'Subject is required'
    else if (formData.subject.trim().length < 3) e.subject = 'Subject must be at least 3 characters'
    if (!formData.message.trim()) e.message = 'Message is required'
    else if (formData.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setFormData((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    setStatus(null)
    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: sanitizeInput(formData.name),
          reply_to: sanitizeInput(formData.email),
          subject: sanitizeInput(formData.subject),
          message: sanitizeInput(formData.message),
          to_email: 'chankapthang300@gmail.com',
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      console.log('EmailJS success:', result)
      setStatus({ type: 'success', message: "Message sent! I'll get back to you soon." })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus({ type: 'error', message: 'Failed to send. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inp = (field) =>
    `w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900/5 dark:focus:ring-white/10 focus:border-gray-300 dark:focus:border-gray-600 transition-all text-sm ${
      errors[field] ? 'border-red-300 dark:border-red-500' : 'border-gray-200 dark:border-gray-800'
    }`

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="space-y-4">
        <Field id="name" label="Name" type="text" value={formData.name} onChange={handleChange} error={errors.name} placeholder="Your name" max="100" cls={inp('name')} />
        <Field id="email" label="Email" type="email" value={formData.email} onChange={handleChange} error={errors.email} placeholder="you@example.com" max="254" cls={inp('email')} />
        <Field id="subject" label="Subject" type="text" value={formData.subject} onChange={handleChange} error={errors.subject} placeholder="What's this about?" max="200" cls={inp('subject')} />
        <div>
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-medium text-sm mb-1.5">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5"
            className={`${inp('message')} resize-none`} placeholder="Your message..." maxLength="5000" />
          {errors.message && <Err msg={errors.message} />}
        </div>

        {status && (
          <div className={`p-3 rounded-xl flex items-center gap-2 text-sm ${
            status.type === 'success'
              ? 'bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400'
              : 'bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400'
          }`}>
            <CheckCircle size={14} />
            <p>{status.message}</p>
          </div>
        )}

        <button type="submit" disabled={isSubmitting}
          className="w-full bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-200 disabled:opacity-40 text-white dark:text-gray-900 font-semibold py-3 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm">
          <Send size={14} />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}

function Field({ id, label, type, value, onChange, error, placeholder, max, cls }) {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 dark:text-gray-200 font-medium text-sm mb-1.5">{label}</label>
      <input type={type} id={id} name={id} value={value} onChange={onChange} className={cls} placeholder={placeholder} maxLength={max} />
      {error && <Err msg={error} />}
    </div>
  )
}

function Err({ msg }) {
  return <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{msg}</p>
}
