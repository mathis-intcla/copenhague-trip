'use client'

import { useEffect, useState } from 'react'

interface Article {
  title: string
  url: string
}

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search?query=copenhagen')
      .then(r => r.json())
      .then(json => {
        const arr = json.hits.slice(0,5).map((h: any) => ({ title: h.title, url: h.url }))
        setArticles(arr)
      })
      .catch(() => {})
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Actualités récentes</h1>
      <ul className="list-disc pl-5 space-y-2">
        {articles.map((a, idx) => (
          <li key={idx}>
            <a href={a.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              {a.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
