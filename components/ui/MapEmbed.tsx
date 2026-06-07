interface MapEmbedProps {
  query: string
  title?: string
  height?: number
}

export default function MapEmbed({ query, title, height = 300 }: MapEmbedProps) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`

  return (
    <iframe
      src={src}
      title={title ?? query}
      width="100%"
      height={height}
      className="w-full rounded-lg border border-neutral-200"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
