import Link from 'next/link'

export function Map() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=48.573498,7.805743"

  return (
    <div className="mt-8 w-full h-64 rounded-lg overflow-hidden relative">
      <Link href={googleMapsUrl} target="_blank" className="block w-full h-full relative group">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=7.803743%2C48.571498%2C7.807743%2C48.575498&amp;layer=mapnik&amp;marker=48.573498%2C7.805743"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-lg"
        />
      </Link>
    </div>
  )
}