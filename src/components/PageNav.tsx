import Link from 'next/link'
import { nanoid } from 'nanoid'

import { routes, RouteType } from '@/lib/routes'

const PageNav: React.FC = () => {
  return (
    <nav>
      <ul className={'flex flex-row gap-4'}>
        {routes.map((route: RouteType) => (
          <li key={nanoid()}>
            <Link href={route.path} className={'link-text'}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PageNav
