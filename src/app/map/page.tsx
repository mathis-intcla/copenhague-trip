'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'

const MapContainer = dynamic<any>(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })
const TileLayer = dynamic<any>(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })
const Marker = dynamic<any>(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false })
const Popup = dynamic<any>(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false })

interface Place {
  position: [number, number]
  name: string
}

export default function MapPage() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => { setIsClient(true) }, [])

  const places: Place[] = [
    { position: [55.6761, 12.5683], name: 'Centre-ville' },
    { position: [55.67394, 12.56553], name: 'Steel House Copenhagen' },
    { position: [55.6839, 12.5948], name: 'Noma' },
    { position: [55.6733, 12.5681], name: 'Tivoli Gardens' },
  ]

  if (!isClient) return null

  return (
    <div className="relative w-full min-h-[60vh] flex flex-col items-center justify-center">
      {/* Fond illustré */}
      <div className="absolute inset-0 w-full h-[320px] md:h-[400px] overflow-hidden rounded-3xl shadow-apple">
        <img
          src="/hero-copenhagen.jpg"
          alt="Carte Copenhague"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: 'brightness(0.85) blur(2px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-transparent dark:from-gray-900/80 dark:via-gray-900/30 dark:to-transparent backdrop-blur-xl rounded-3xl" />
      </div>
      <div className="relative z-10 w-full max-w-2xl mx-auto pt-16 pb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center drop-shadow-lg">
          Carte des lieux
        </h1>
        <div className="glass dark:glass-dark rounded-3xl shadow-apple p-4 animate-fade-in">
          <MapContainer center={[55.6761, 12.5683]} zoom={13} style={{ height: '400px', width: '100%', borderRadius: '1.5rem', overflow: 'hidden' }}>
            <TileLayer
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.map((p, idx) => (
              <Marker position={p.position} key={idx}>
                <Popup>{p.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  )
}
