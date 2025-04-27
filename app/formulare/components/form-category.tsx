"use client"

import { FileDown } from 'lucide-react'

interface Form {
  name: string
  fileName: string
  size: string
  description?: string
}

interface FormCategoryProps {
  title: string
  forms: Form[]
}

export function FormCategory({ title, forms }: FormCategoryProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid gap-4">
        {forms.map((form) => (
          <div 
            key={form.fileName}
            className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-1">{form.name}</h3>
                {form.description && (
                  <p className="text-gray-600 text-sm mb-2">{form.description}</p>
                )}
                <p className="text-sm text-gray-500">Dateigröße: {form.size}</p>
              </div>
              <button 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={() => window.open(`/forms/${form.fileName}`, '_blank')}
              >
                <FileDown className="h-4 w-4 mr-2" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}