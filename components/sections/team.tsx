"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { lawyers } from '@/lib/data/lawyers'

export function TeamSection() {
  const router = useRouter()

  return (
    <section id="team" className="relative py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/office-building.jpg"
          alt="Kanzlei Gebäude"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawyers.map((lawyer) => (
            <Card 
              key={lawyer.slug} 
              className="bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg cursor-pointer"
              onClick={() => router.push(`/team/${lawyer.slug}`)}
            >
              <div className="relative h-[400px]">
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  fill
                  className="object-cover object-center rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={lawyer.name === 'Joachim Lederle'}
                />
              </div>
              <CardHeader className="text-center">
                <h3 className="text-xl font-semibold">{lawyer.name}</h3>
                <p className="text-primary">{lawyer.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{lawyer.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}