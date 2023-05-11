import type { NextPage } from 'next'
import { Suspense } from 'react'

import Counter from './Counter'
import PostsList from './PostsList'
import UsersList from './UsersList'

const Test: NextPage = () => {
  return (
    <>
      <h1 className="text-xl font-bold">Testページ</h1>
      <Counter />
      <Suspense fallback={<p className="mt-4">ユーザデータ Loading...</p>}>
        <UsersList />
      </Suspense>
      <Suspense fallback={<p className="mt-4">記事データ Loading...</p>}>
        <PostsList />
      </Suspense>
    </>
  )
}

export default Test
