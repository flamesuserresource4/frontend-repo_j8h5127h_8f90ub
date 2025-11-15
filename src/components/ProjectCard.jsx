import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, tags = [], image, link }) {
  return (
    <motion.a
      href={link || '#'}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition"
    >
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-white/5">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/>
        ) : (
          <div className="h-full w-full grid place-items-center text-white/40">No image</div>
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-white font-semibold tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/70">{t}</span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
