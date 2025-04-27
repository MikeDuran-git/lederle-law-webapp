"use client"

import { useEffect, useState } from 'react'

interface CaptchaProps {
  onValidate: (isValid: boolean) => void
}

export function Captcha({ onValidate }: CaptchaProps) {
  const [captchaText, setCaptchaText] = useState('')
  const [userInput, setUserInput] = useState('')

  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  useEffect(() => {
    setCaptchaText(generateCaptcha())
  }, [])

  const handleInputChange = (value: string) => {
    setUserInput(value)
    onValidate(value.toUpperCase() === captchaText)
  }

  const refreshCaptcha = () => {
    setCaptchaText(generateCaptcha())
    setUserInput('')
    onValidate(false)
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <div className="bg-gray-100 p-4 rounded-lg font-mono text-lg tracking-wider select-none">
          {captchaText}
        </div>
        <button
          type="button"
          onClick={refreshCaptcha}
          className="text-primary hover:text-primary/80"
        >
          ↻ Neu laden
        </button>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Captcha-Code eingeben"
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  )
}