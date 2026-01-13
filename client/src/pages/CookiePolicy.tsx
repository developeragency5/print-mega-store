import { motion } from "framer-motion";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4" data-testid="heading-cookie-policy">
              Cookies Policy
            </h1>
            <p className="text-xl text-gray-600 mb-2">Print Mega Store</p>
            <p className="text-gray-600 mb-8">Last updated: January 2026</p>

            <p className="text-gray-600 mb-8">
              This Cookies Policy explains how Print Mega Store ("we," "us," or "our") uses cookies and similar tracking technologies when you visit www.printmegastore.net ("Website"). By using this Website, you agree that we can store and access cookies on your device as described in this policy.
            </p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">1. What Are Cookies</h2>
                <p className="mb-4">
                  Cookies are small text files stored on your browser or device when you visit a website. Cookies help the site recognize your device and remember your preferences, improve performance, and support advertising and analytics.
                </p>
                <p className="mb-2">Cookies may be:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Session cookies (expire when you close your browser)</li>
                  <li>Persistent cookies (stay on your device until they expire)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">2. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold text-black mb-3 mt-6">A. Essential Cookies</h3>
                <p className="mb-2">
                  These cookies are necessary for the Website to operate correctly. They enable functions such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Shopping cart</li>
                  <li>Checkout process</li>
                  <li>Login and security</li>
                  <li>Preventing fraud</li>
                </ul>
                <p>Essential cookies cannot be disabled through this policy.</p>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">B. Performance & Analytics Cookies</h3>
                <p className="mb-2">
                  These cookies help us understand how visitors use our Website, so we can improve performance and user experience.
                </p>
                <p className="mb-2">We may use:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Google Analytics to collect anonymous data about site usage</li>
                  <li>Google Tag Manager to manage tags and tracking scripts</li>
                </ul>
                <p className="mb-2">Analytics cookies collect information such as:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Number of visitors</li>
                  <li>Clicks and interactions</li>
                </ul>
                <p>This data is aggregated and does not personally identify you.</p>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">C. Marketing & Advertising Cookies</h3>
                <p className="mb-4">
                  These cookies are used to deliver relevant advertisements when you browse other websites. They help measure the effectiveness of advertising campaigns.
                </p>
                <p className="mb-2">Marketing cookies we use include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Google Ads:</strong> Used to display ads and measure conversions based on visits to our Website.</li>
                  <li><strong>Microsoft Advertising (Bing Ads):</strong> Used to serve ads on Microsoft and partner sites based on interaction with our Website.</li>
                  <li><strong>Meta Pixel (Facebook & Instagram):</strong> Used to track ad performance and serve relevant ads on Meta properties.</li>
                </ul>
                <p>These cookies may track your activity across different websites.</p>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">D. Functional Cookies</h3>
                <p>
                  These cookies remember your preferences and settings, such as language or region, to enhance your experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Cookies</h2>
                <p className="mb-2">We use cookies for purposes including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Enabling essential site functionality</li>
                  <li>Analyzing and improving website performance</li>
                  <li>Personalizing your experience</li>
                  <li>Delivering targeted advertisements</li>
                  <li>Measuring campaign effectiveness</li>
                </ul>
                <p>
                  We do not use cookies to collect information that directly identifies you without your consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">4. Third-Party Cookies</h2>
                <p className="mb-2">Third parties may also set cookies when you visit our Website, including:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Google</li>
                  <li>Microsoft</li>
                  <li>Meta</li>
                  <li>Analytics and advertising partners</li>
                </ul>
                <p>
                  We do not control these cookies. Their use is subject to the privacy policies of the respective third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">5. Your Cookie Choices</h2>
                <p className="mb-4">You can control cookies in the following ways:</p>
                
                <h3 className="text-xl font-semibold text-black mb-3 mt-4">Browser Settings</h3>
                <p className="mb-2">You can usually adjust your browser settings to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Block cookies</li>
                  <li>Delete cookies</li>
                  <li>Notify you when cookies are set</li>
                </ul>
                <p className="mb-4">Disabling cookies may affect Website functionality (e.g., cart, checkout, login).</p>

                <h3 className="text-xl font-semibold text-black mb-3 mt-4">Opt-Out Tools</h3>
                <p className="mb-2">You can opt out of personalized advertising using these tools:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#33cccc] hover:underline">Google Ads Settings</a></li>
                  <li><a href="https://privacy.microsoft.com/en-us/choices" target="_blank" rel="noopener noreferrer" className="text-[#33cccc] hover:underline">Microsoft Advertising Privacy Dashboard</a></li>
                  <li><a href="https://www.facebook.com/adpreferences/" target="_blank" rel="noopener noreferrer" className="text-[#33cccc] hover:underline">Meta (Facebook) Ad Preferences</a></li>
                  <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-[#33cccc] hover:underline">Industry-wide opt-out (DAA Consumer Choice)</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">6. Do Not Sell My Personal Information</h2>
                <p>
                  If you are a California resident, you may visit our <a href="/do-not-sell" className="text-[#33cccc] hover:underline">Do Not Sell My Info</a> page for rights under the California Consumer Privacy Act (CCPA).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">7. Changes to This Policy</h2>
                <p className="mb-2">We may update this Cookies Policy to reflect changes in:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Website technology</li>
                  <li>Legal requirements</li>
                  <li>Advertising partnerships</li>
                </ul>
                <p>
                  The "Last updated" date at the top will be revised when changes are made.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">8. Contact Us</h2>
                <p className="mb-4">For questions about this Cookies Policy or how we use cookies:</p>
                <p>
                  Email: <a href="mailto:info@printmegastore.com" className="text-[#33cccc] hover:underline">info@printmegastore.com</a>
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Print Mega Store — Independent Online Retailer
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
