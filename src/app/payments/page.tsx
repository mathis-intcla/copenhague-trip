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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Suivi des paiements logement</h1>
      <table className="min-w-full border divide-y">
        <thead>
          <tr>
            <th className="px-2 py-1">Personne</th>
            {installments.map(n => (
              <th key={n} className="px-2 py-1">Versement {n}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {payments.map((row, pIdx) => (
            <tr key={people[pIdx]} className="text-center">
              <td className="border px-2 py-1">{people[pIdx]}</td>
              {row.map((it, iIdx) => (
                <td key={iIdx} className="border px-2 py-1">
                  <input type="checkbox" checked={it.paid} onChange={() => toggle(pIdx, iIdx)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
