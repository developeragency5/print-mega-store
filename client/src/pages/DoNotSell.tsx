import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function DoNotSell() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Do Not Sell My Personal Information | Print Mega Store</title>
        <meta name="description" content="Exercise your California privacy rights under CCPA. Learn how Print Mega Store handles personal information and how to opt out of data sharing." />
        <meta property="og:title" content="Do Not Sell My Personal Information | Print Mega Store" />
        <meta property="og:url" content="https://www.printmegastore.net/do-not-sell" />
        <link rel="canonical" href="https://www.printmegastore.net/do-not-sell" />
      </Helmet>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4" data-testid="heading-do-not-sell">
              Do Not Sell My Personal Information (CCPA)
            </h1>
            <p className="text-xl text-gray-600 mb-2">Print Mega Store — California Privacy Rights</p>
            <p className="text-gray-600 mb-8">Last Updated: January 2026</p>

            <p className="text-gray-600 mb-4">
              This page explains how residents of California can exercise their rights under the California Consumer Privacy Act (CCPA) regarding the collection and use of their personal information when visiting or purchasing from www.printmegastore.net ("Website").
            </p>
            <p className="text-gray-600 mb-8">
              If you are a California resident, you have specific rights regarding your personal information, including the right to opt out of the sale or sharing of your personal data. Print Mega Store does not knowingly sell personal information without consent.
            </p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">1. Personal Information We Collect</h2>
                <p className="mb-2">
                  We may collect the following categories of personal information when you interact with our Website or make a purchase:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Contact details (e.g., name, email address)</li>
                  <li>Order information (products purchased, transaction data)</li>
                  <li>Shipping and billing address</li>
                  <li>Payment method details (processed securely by third parties)</li>
                  <li>Website usage data, cookies & analytics data</li>
                </ul>
                <p>
                  For details on how we use and protect this information, please see our <a href="/privacy" className="text-[#33cccc] hover:underline">Privacy Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">2. California Consumer Rights Under CCPA</h2>
                <p className="mb-4">If you are a California resident, you may have the following rights:</p>
                
                <h3 className="text-xl font-semibold text-black mb-2">Right to Know</h3>
                <p className="mb-4">
                  You can request information about the personal data we collect, use, disclose, and retain.
                </p>

                <h3 className="text-xl font-semibold text-black mb-2">Right to Access</h3>
                <p className="mb-4">
                  You can request access to the personal information we have collected about you.
                </p>

                <h3 className="text-xl font-semibold text-black mb-2">Right to Delete</h3>
                <p className="mb-4">
                  You can request that we delete personal information we have collected, subject to certain legal exceptions.
                </p>

                <h3 className="text-xl font-semibold text-black mb-2">Right to Opt-Out of Sale/Sharing</h3>
                <p className="mb-4">
                  Under the CCPA, you have the right to opt out of the sale or sharing of your personal information.
                </p>
                <p>
                  Print Mega Store does not sell personal information unless you explicitly request data sharing with carefully selected partners for marketing — and you can opt out at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">3. Exercise Your Rights / Contact Us</h2>
                <p className="mb-2">To request any of the following:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Access</li>
                  <li>Disclosure</li>
                  <li>Deletion</li>
                  <li>Opt-Out</li>
                </ul>
                <p className="mb-4">
                  Send an email to: <a href="mailto:info@printmegastore.com" className="text-[#33cccc] hover:underline">info@printmegastore.com</a>
                </p>
                <p className="mb-2">Please include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Your full name</li>
                  <li>Email address or contact information</li>
                  <li>Description of the request (access, delete, do not sell)</li>
                </ul>
                <p>
                  We will verify your identity before processing your request.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">4. How to Opt-Out of Sale / Sharing</h2>
                <p className="mb-2">
                  Print Mega Store does not sell personal information without consent. However, we may share certain information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Marketing partners (for advertising, if you opt in)</li>
                  <li>Analytics platforms (to improve your experience)</li>
                </ul>
                <p className="mb-2">If you want to opt out of interest-based advertising across platforms:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#33cccc] hover:underline">Google Ads Settings</a></li>
                  <li><a href="https://privacy.microsoft.com/choices" target="_blank" rel="noopener noreferrer" className="text-[#33cccc] hover:underline">Microsoft Privacy Dashboard</a></li>
                  <li><a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-[#33cccc] hover:underline">Meta (Facebook/Instagram) Ad Preferences</a></li>
                  <li><a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-[#33cccc] hover:underline">Industry-wide opt-out</a></li>
                </ul>
                <p className="mb-4">
                  You can also email <a href="mailto:info@printmegastore.com" className="text-[#33cccc] hover:underline">info@printmegastore.com</a> requesting that we disable all marketing data sharing.
                </p>
                <p>
                  Your request will be processed within the timeframes required by the CCPA.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">5. No Discrimination</h2>
                <p className="mb-2">
                  We will not discriminate against you for exercising your privacy rights under the CCPA, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Denying goods or services</li>
                  <li>Charging different prices</li>
                  <li>Providing different quality of services</li>
                  <li>Retaliating in any other manner</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">6. Updates to This Page</h2>
                <p>
                  This Do Not Sell My Personal Information page may be updated periodically. The "Last Updated" date at the top will reflect changes.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
