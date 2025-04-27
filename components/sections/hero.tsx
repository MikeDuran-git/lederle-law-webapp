import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-background.jpg"
            alt="Anwaltskanzlei"
            fill
            quality={100}
            sizes="100vw"
            className="object-cover object-center brightness-[0.85] transform scale-[1.02]"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMkYyLlFUUVRAR0BXUFNMUE1HUVf/2wBDAR"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container relative z-10 mx-auto px-4 min-h-screen">
          <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="w-full max-w-4xl text-center">
              <div className="mb-12">
                <h1 className="title-font text-4xl md:text-6xl font-bold text-[#EFE6DA] mb-4 drop-shadow-lg whitespace-nowrap tracking-wide inline-flex justify-center w-full">
                  ANWALTSKANZLEI LEDERLE
                </h1>
                <div className="flex justify-center mb-6">
                  <div className="w-full max-w-[600px] h-[2px] bg-[#EFE6DA]"></div>
                </div>
                <p className="text-xl text-[#EFE6DA] mb-2 drop-shadow-md">Rechtsanwälte <span className="mx-2">•</span> Fachanwälte</p>
                <p className="text-2xl font-semibold text-[#EFE6DA] mb-2 drop-shadow-md">Joachim Lederle</p>
                <p className="text-lg text-[#AABBCD] drop-shadow-sm">Fachanwalt für Strafrecht - seit 2000</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#EFE6DA] text-[#2D2D2D] hover:bg-[#D9C9B8] shadow-lg"
                  asChild
                >
                  <Link href="/contact">Beratungstermin anfragen</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent text-[#EFE6DA] border-[#EFE6DA] hover:bg-[#EFE6DA]/10 hover:text-[#EFE6DA] backdrop-blur-sm"
                  asChild
                >
                  <Link href="/formulare">Formulare</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent text-[#EFE6DA] border-[#EFE6DA] hover:bg-[#EFE6DA]/10 hover:text-[#EFE6DA] backdrop-blur-sm"
                  asChild
                >
                  <Link href="/about">Über Uns</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}