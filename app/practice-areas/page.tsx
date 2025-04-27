import { PracticeAreas } from '@/components/sections/practice-areas'

export default function PracticeAreasPage() {
  return (
    <div className="pt-20">
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Practice Areas</h1>
          <p className="text-gray-600 max-w-2xl">
            Explore our comprehensive legal services and areas of expertise. Our team provides
            professional guidance and representation across various fields of law.
          </p>
        </div>
      </div>
      <PracticeAreas />
    </div>
  )
}