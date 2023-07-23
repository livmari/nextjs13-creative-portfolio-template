import Link from 'next/link'
import { nanoid } from 'nanoid'

import { routes, RouteType } from '@/lib/routes'

const PageNav: React.FC = () => {
  return (
    <nav>
      <ul>
        {routes.map((route: RouteType) => (
          <li key={nanoid()}>
            <Link href={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PageNav
