import { gql } from '@apollo/client'
import Link from 'next/link'
import { nanoid } from 'nanoid'

import { getClient } from '@/lib/client'
import { ProjectCard } from '@/components'

const query = gql`
  query Projects {
    projects {
      title
      slug
      coverImage {
        url
      }
    }
  }
`

interface ProjectType {
  title: string
  slug: string
  coverImage: { url: string }
}

const HomePage = async () => {
  const { data } = await getClient().query({ query })

  return (
    <main className={'page-section-px'}>
      <section>
        <div>
          {data.projects.map((project: ProjectType) => (
            <ProjectCard
              key={nanoid()}
              title={project.title}
              imageUrl={project.coverImage.url}
              slug={project.slug}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
