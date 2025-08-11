'use client'

import { useState } from 'react'

const people = ['Chaima', 'Erton', 'Agathe', 'Mathis']
const installments = [1,2,3,4]

export default function Payments() {
  const [payments, setPayments] = useState(() => (
    people.map(p => installments.map(i => ({ person: p, installment: i, paid: false })))
  ))

  const toggle = (pIdx: number, iIdx: number) => {
    const newData = payments.map(arr => arr.slice())
    newData[pIdx][iIdx].paid = !newData[pIdx][iIdx].paid
    setPayments(newData)
  }

  return (
    <div className="relative w-full min-h-[60vh] flex flex-col items-center justify-center">
      {/* Fond illustré */}
      <div className="absolute inset-0 w-full h-[320px] md:h-[400px] overflow-hidden rounded-3xl">
        <img
          src="/accommodation-copenhagen.jpg"
          alt="Paiements Copenhague"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: 'brightness(0.85) blur(2px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-transparent dark:from-gray-900/80 dark:via-gray-900/30 dark:to-transparent rounded-3xl" />
      </div>
      <div className="relative z-10 w-full max-w-2xl mx-auto pt-16 pb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center drop-shadow-lg">
          Suivi des paiements logement
        </h1>
        <div className="space-y-6">
          {people.map((person, pIdx) => (
            <div key={person} className="card rounded-2xl p-6 flex flex-col gap-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg font-semibold text-gray-900 dark:text-white drop-shadow">{person}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {installments.map((n, iIdx) => (
                  <label key={n} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 shadow-apple text-gray-800 dark:text-gray-100 text-sm font-medium ios-hover smooth cursor-pointer">
                    <input
                      type="checkbox"
                      checked={payments[pIdx][iIdx].paid}
                      onChange={() => toggle(pIdx, iIdx)}
                      className="accent-blue-600 h-5 w-5 rounded-full"
                    />
                    Versement {n}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
