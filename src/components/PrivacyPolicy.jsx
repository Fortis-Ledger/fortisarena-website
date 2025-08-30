import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ArrowLeft, Mail, Globe } from 'lucide-react'

function PrivacyPolicy({ onNavigateBack }) {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300">Effective Date: 08/30/2025</p>
          </div>

          {/* Main Content */}
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-8 space-y-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed">
                  FortisArena ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you access or use our mobile app, website, and related services (collectively, the "Platform"). By using the Platform, you agree to the terms of this Privacy Policy.
                </p>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                  <p className="text-gray-300 mb-4">We may collect the following information from you:</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">1.1 Account Information</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Name, email address, gamer tag, avatar, and password</li>
                        <li>Web3 wallet address for token rewards and transactions</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">1.2 Usage Data</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Game activity, scores, leaderboard ranking</li>
                        <li>Participation in tournaments, referrals, or promotions</li>
                        <li>Device type, operating system, IP address, and app usage metrics</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">1.3 Communications</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Messages you send through the Platform</li>
                        <li>Email notifications and preferences</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">1.4 Cookies and Analytics</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>We may use cookies or similar technologies to enhance your experience, track user behavior, and analyze platform performance.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-300 mb-4">We use your information to:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Provide, maintain, and improve the Platform</li>
                    <li>Enable transactions and token rewards</li>
                    <li>Personalize user experience and game recommendations</li>
                    <li>Communicate important updates, promotions, or notifications</li>
                    <li>Monitor platform usage and prevent fraudulent or unauthorized activity</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">3. How We Share Your Information</h2>
                  <p className="text-gray-300 mb-4">
                    We respect your privacy and will <strong className="text-white">never sell your personal information</strong>. We may share information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>With service providers who help us operate the Platform (e.g., hosting, analytics, payment processing)</li>
                    <li>When required by law or legal process</li>
                    <li>To protect rights, safety, or property of FortisArena or its users</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">4. Blockchain / Web3 Disclaimer</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Blockchain transactions are <strong className="text-white">public by nature</strong>. Any activity involving blockchain, tokens, or NFTs may be visible on public ledgers and cannot be fully removed.</li>
                    <li>You are responsible for the security of your private keys and wallet credentials.</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>We implement reasonable technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.</li>
                    <li>No method of transmission over the Internet or electronic storage is completely secure, so we cannot guarantee absolute security.</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                  <p className="text-gray-300 mb-4">Depending on your jurisdiction, you may have the right to:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Access or request a copy of your personal information</li>
                    <li>Correct or update your information</li>
                    <li>Delete your account or personal data</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    To exercise your rights, contact us at: <a href="mailto:admin@fortisarena.io" className="text-cyan-400 hover:text-cyan-300 underline">admin@fortisarena.io</a>
                  </p>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">7. Children's Privacy</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>The Platform is <strong className="text-white">not intended for users under 13</strong>.</li>
                    <li>We do not knowingly collect information from children under 13. If we discover such data, we will delete it promptly.</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Our Platform may contain links to third-party websites or services. We are <strong className="text-white">not responsible for the privacy practices</strong> of these third parties.</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">9. Changes to this Privacy Policy</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>We may update this Privacy Policy from time to time.</li>
                    <li>Changes will be effective immediately upon posting, with the updated date noted at the top.</li>
                    <li>We encourage you to review this Privacy Policy periodically.</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                  <p className="text-gray-300 mb-4">If you have questions or concerns regarding this Privacy Policy, please contact us at:</p>
                  
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

export default PrivacyPolicy
