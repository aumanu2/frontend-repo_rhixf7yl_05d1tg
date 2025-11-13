import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ title, description, tags = [], image, link }) {
  return (
    <a href={link || '#'} target={link ? '_blank' : '_self'} rel="noreferrer"
      className="group block rounded-2xl overflow-hidden bg-white/70 dark:bg-neutral-900/60 ring-1 ring-black/5 dark:ring-white/10 hover:ring-black/10 transition">
      <div className="aspect-[16/10] w-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
        {image && (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        )}
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
          </div>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <ArrowUpRight size={16} />
          </span>
        </div>
        {tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-black/5 dark:bg-white/10">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  )
}
