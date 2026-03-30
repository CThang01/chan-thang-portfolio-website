import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Section({ children, className = '', stagger = false }) {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`${stagger ? 'stagger-children' : 'reveal'} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
