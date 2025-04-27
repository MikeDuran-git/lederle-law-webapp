import { ReactNode } from 'react'

interface PrivacySectionProps {
  title: string
  children: ReactNode
  id: string
}

export function PrivacySection({ title, children, id }: PrivacySectionProps) {
  return (
    <section id={id} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  )
}