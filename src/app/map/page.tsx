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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Carte des lieux</h1>
      <MapContainer center={[55.6761, 12.5683]} zoom={13} style={{ height: '500px', width: '100%' }}>
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
  )
}
