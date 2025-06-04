'use client'

import { useState } from 'react'

const defaultItems = [
  'Passeport',
  'Billets d\'avion',
  'Vêtements chauds',
  'Chargeur',
  'Adaptateur prise',
]

export default function PackingList() {
  const [items, setItems] = useState(defaultItems.map(i => ({ name: i, checked: false })))

  const toggle = (idx: number) => {
    const newItems = [...items]
    newItems[idx].checked = !newItems[idx].checked
    setItems(newItems)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Liste de choses à emporter</h1>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <input type="checkbox" checked={item.checked} onChange={() => toggle(idx)} />
            <span className={item.checked ? 'line-through' : ''}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
