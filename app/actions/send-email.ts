"use server"

import { Resend } from 'resend'

const resend = new Resend('re_1Ac1pVMN_CR9acF3AeNgYLR13ps5o6UUe')

export async function sendEmail(formData: FormData) {
  try {
    // Validate required fields
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    if (!firstName || !lastName || !email || !subject || !message) {
      return { error: 'Bitte füllen Sie alle erforderlichen Felder aus.' }
    }

    // Get optional fields
    const company = formData.get('company')
    const phone = formData.get('phone')
    const callbackRequested = formData.get('callbackRequested') === 'true'
    const emailContactRequested = formData.get('emailContactRequested') === 'true'

    // Format the email content
    const emailContent = `
Hallo,

Sie haben eine Formularnachricht über Ihre Website https://www.lederlelaw.com/kontakt/ erhalten.

Folgende Daten wurden übermittelt:
--------------------------------

Name:
${firstName} ${lastName}

Firma:
${company || '-'}

E-Mail-Adresse:
${email}

Telefon/Fax:
${phone || '-'}

${callbackRequested ? '[X]' : '[ ]'} Bitte rufen Sie mich zurück
${emailContactRequested ? '[X]' : '[ ]'} Bitte nehmen Sie per Mail Kontakt mit mir auf

Betreff:
${subject}

Nachricht:
${message}
`

    const { data, error } = await resend.emails.send({
      from: 'contact@resend.dev',
      to: ['kanzlei@lederlelaw.com'],
      reply_to: email as string,
      subject: `Neue Kontaktanfrage: ${subject}`,
      text: emailContent.trim(),
    })

    if (error) {
      console.error('Resend API Error:', error)
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    console.error('Email sending error:', error)
    return { 
      error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.' 
    }
  }
}