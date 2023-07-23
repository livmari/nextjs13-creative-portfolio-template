import { gql } from '@apollo/client'

import { getClient } from '@/lib/client'

const query = gql`
  query Now {
    now(id: "1")
  }
`

export default async function Page() {
  const { data } = await getClient().query({ query })

  return <main>{data.now}</main>
}
