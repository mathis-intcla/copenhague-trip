'use client'

import { useEffect, useState } from 'react'

interface WeatherDay {
  date: string
  tmin: number
  tmax: number
  rain: number
}

export default function WeatherPage() {
  const [data, setData] = useState<WeatherDay[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    
    fetch('https://api.open-meteo.com/v1/forecast?latitude=55.6761&longitude=12.5683&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_mean&timezone=Europe%2FCopenhagen')
      .then(res => {
        if (!res.ok) {
          throw new Error('Erreur lors de la récupération des données météo')
        }
        return res.json()
      })
      .then(json => {
        const days = json.daily
        const arr: WeatherDay[] = days.time.map((t: string, idx: number) => ({
          date: t,
          tmin: days.temperature_2m_min[idx],
          tmax: days.temperature_2m_max[idx],
          rain: days.precipitation_probability_mean[idx],
        }))
        setData(arr)
      })
      .catch((err) => {
        setError(err.message || 'Une erreur est survenue')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Chargement des données météo...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Météo prévue</h1>
      <table className="min-w-full divide-y">
        <thead>
          <tr>
            <th className="px-2 py-1">Date</th>
            <th className="px-2 py-1">Min °C</th>
            <th className="px-2 py-1">Max °C</th>
            <th className="px-2 py-1">Pluie %</th>
          </tr>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={d.date} className="text-center border-t">
              <td className="px-2 py-1">{d.date}</td>
              <td className="px-2 py-1">{d.tmin}</td>
              <td className="px-2 py-1">{d.tmax}</td>
              <td className="px-2 py-1">{d.rain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
