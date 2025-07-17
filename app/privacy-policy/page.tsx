import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 mb-8 transition-colors"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bebas mb-8 text-brand-teal">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-teal max-w-none">
          <p className="text-white/80 mb-6">
            Please note: The full privacy policy content from "SG Privacy Policy.docx" needs to be added here.
            Contact the development team to have the Word document content converted and inserted.
          </p>
          
          <div className="bg-brand-teal/10 border border-brand-teal/30 rounded-lg p-6 mt-8">
            <p className="text-sm text-white/70">
              This page is a placeholder. The actual privacy policy content from the provided Word document 
              needs to be manually converted and added to this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}