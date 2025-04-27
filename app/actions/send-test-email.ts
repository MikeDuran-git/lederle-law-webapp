"use server"

import { Resend } from 'resend'

const resend = new Resend('re_1Ac1pVMN_CR9acF3AeNgYLR13ps5o6UUe')

export async function sendTestEmail() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'contact@resend.dev',
      to: ['kanzlei@lederlelaw.com'],
      subject: 'Test Email - Kontaktformular',
      text: `
Hallo,

Dies ist eine Test-Email vom Kontaktformular.

Mit freundlichen Grüßen,
Ihr Webseiten-Team
      `.trim(),
    })

    if (error) {
      console.error('Resend API Error:', error)
      return { error: 'Fehler beim Senden der Test-Email' }
    }

    return { success: true }
  } catch (error) {
    console.error('Email sending error:', error)
    return { error: 'Ein unerwarteter Fehler ist aufgetreten' }
  }
}