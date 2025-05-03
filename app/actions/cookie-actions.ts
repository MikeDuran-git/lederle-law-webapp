'use server'

import { cookies } from 'next/headers'

export const getServerCookie = (name: string) => {
  const cookieStore = cookies()
  return cookieStore.get(name)?.value
}

export const setServerCookie = (name: string, value: string, options?: { expires?: Date }) => {
  const cookieStore = cookies()
  cookieStore.set(name, value, options)
}

export const deleteServerCookie = (name: string) => {
  const cookieStore = cookies()
  cookieStore.delete(name)
}