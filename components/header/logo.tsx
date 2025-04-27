"use client"

import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <span className="font-semibold text-xl">ANWALTSKANZLEI LEDERLE</span>
    </Link>
  )
}