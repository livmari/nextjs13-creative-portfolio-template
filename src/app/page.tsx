import { gql } from '@apollo/client'
import Link from 'next/link'
import { nanoid } from 'nanoid'

import { getClient } from '@/lib/client'

const query = gql`
  query Projects {
    projects {
      title
      slug
    }
  }
`

const HomePage = async () => {
  const { data } = await getClient().query({ query })

  return (
    <main>
      <section>
        <div>
          {data.projects.map((project: { title: string; slug: string }) => (
            <Link key={nanoid()} href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
