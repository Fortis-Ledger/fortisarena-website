import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ArrowLeft, Mail, Globe } from 'lucide-react'

function TermsOfService({ onNavigateBack }) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={onNavigateBack}>
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </Button>
              <div className="text-2xl font-bold">FortisArena</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-300">Effective Date: 08/30/2025</p>
          </div>

          {/* Main Content */}
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-8 space-y-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed">
                  Welcome to FortisArena ("we," "our," or "us"). By accessing or using our mobile app, website, or related services (collectively, the "Platform"), you agree to these Terms of Service ("Terms"). If you do not agree, do not use the Platform.
                </p>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">1. Use of the Platform</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>You must be 13 years or older to use FortisArena.</li>
                    <li>You agree to use the Platform only for lawful purposes and in accordance with these Terms.</li>
                    <li>You are responsible for maintaining the security of your account and wallet credentials.</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">2. Account Registration</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>You may need to create an account to access certain features.</li>
                    <li>Provide accurate and up-to-date information.</li>
                    <li>You are responsible for all activity under your account.</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">3. User Content & Conduct</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Users may interact with others via chat, forums, or competitions.</li>
                    <li>You agree not to post offensive, illegal, or harmful content.</li>
                    <li>We reserve the right to remove content or suspend accounts that violate these Terms.</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">4. Tokens & Rewards</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>The Platform may provide ecosystem tokens or reward tokens.</li>
                    <li>Tokens are subject to availability and may have rules for use or claiming.</li>
                    <li>Blockchain transactions are public, and you are responsible for your private keys.</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>All FortisArena content, logos, designs, and software are our property or licensed to us.</li>
                    <li>You may not copy, modify, or distribute our content without permission.</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>FortisArena is provided "as-is".</li>
                    <li>We are not liable for any losses, damages, or issues arising from using the Platform, including token value fluctuations or technical errors.</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>We may suspend or terminate your account at our discretion for violations of these Terms.</li>
                    <li>You may close your account at any time by contacting us.</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>We may update these Terms from time to time.</li>
                    <li>Updates take effect immediately upon posting.</li>
                    <li>Continued use of the Platform after updates constitutes acceptance.</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
                  <p className="text-gray-300 mb-4">For questions about these Terms, contact us at:</p>
                  
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl font-bold text-white">FortisArena</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-cyan-400" />
                        <a href="mailto:admin@fortisarena.io" className="text-cyan-400 hover:text-cyan-300 underline">admin@fortisarena.io</a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-cyan-400" />
                        <a href="https://fortisarena.io" className="text-cyan-400 hover:text-cyan-300 underline">https://fortisarena.io</a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
