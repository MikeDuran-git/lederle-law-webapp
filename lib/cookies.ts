'use client'

import Cookies from 'js-cookie'

export type CookieConsent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const COOKIE_NAMES = {
  CONSENT: 'cookie-consent',
  LANGUAGE: 'language',
  THEME: 'theme',
} as const

export const getCookieConsent = (): CookieConsent | null => {
  const consent = Cookies.get(COOKIE_NAMES.CONSENT)
  return consent ? JSON.parse(consent) : null
}

export const setCookieConsent = (consent: CookieConsent) => {
  Cookies.set(COOKIE_NAMES.CONSENT, JSON.stringify(consent), { expires: 365 })
}

// Client-side cookie operations
export const getClientCookie = (name: string) => {
  return Cookies.get(name)
}

export const setClientCookie = (name: string, value: string, options?: Cookies.CookieAttributes) => {
  Cookies.set(name, value, options)
}

export const deleteClientCookie = (name: string) => {
  Cookies.remove(name)
}