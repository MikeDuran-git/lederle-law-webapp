import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { lawyers } from '@/lib/data/lawyers'

export async function generateStaticParams() {
  return lawyers.map((lawyer) => ({
    slug: lawyer.slug,
  }))
}

export default function LawyerProfilePage({ params }: { params: { slug: string } }) {
  const lawyer = lawyers.find((l) => l.slug === params.slug)

  if (!lawyer) {
    notFound()
  }

  return (
    <div className="pt-20">
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{lawyer.name}</h1>
          <p className="text-gray-600 max-w-2xl">
            {lawyer.role}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-semibold">Über {lawyer.name}</h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Fachgebiete</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {lawyer.specializations.map((spec) => (
                        <li key={spec}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Werdegang</h3>
                    <div className="prose max-w-none">
                      {lawyer.biography.map((para, index) => (
                        <p key={index} className="mb-4">{para}</p>
                      ))}
                    </div>
                  </div>

                  {lawyer.education && (
                    <div>
                      <h3 className="font-semibold mb-2">Ausbildung</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {lawyer.education.map((edu) => (
                          <li key={edu}>{edu}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {lawyer.memberships && (
                    <div>
                      <h3 className="font-semibold mb-2">Mitgliedschaften</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {lawyer.memberships.map((membership) => (
                          <li key={membership}>{membership}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}