import Link from 'next/link'

interface ProjectCardProps {
  title: string
  imageUrl: string
  slug: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, slug }) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className={'flex flex-col gap-4 group'}>
        <h3
          className={
            'font-semibold text-lg tracking-wide group-hover:underline'
          }
        >
          {title}
        </h3>
        <img src={imageUrl} alt={title} className={'image aspect-square'} />
      </div>
    </Link>
  )
}

export default ProjectCard
