'use client'

import dynamic from 'next/dynamic'

const ReactApp = dynamic(() => import('../../client/ReactApp'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
})

export default function CatchAllPage() {
  return <ReactApp />
}
