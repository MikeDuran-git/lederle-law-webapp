import { sendTestEmail } from '@/app/actions/send-test-email'
import { NextResponse } from 'next/server'

export async function GET() {
  const result = await sendTestEmail()
  
  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 500 })
  }
  
  return NextResponse.json({ message: 'Test-Email wurde gesendet' })
}