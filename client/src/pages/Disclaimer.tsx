import { motion } from "framer-motion";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8" data-testid="heading-disclaimer">
              Disclaimer
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated: January 2026
            </p>

            <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
              <p className="text-gray-700">
                <strong>Business Name:</strong> Print Mega Store<br />
                <strong>Email:</strong> support@printmegastore.com<br />
                <strong>Phone:</strong> +1 (555) 123-4567<br />
                <strong>Address:</strong> 123 Printer Avenue, Tech District, NY 10001, United States
              </p>
            </div>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">General Disclaimer</h2>
                <p>
                  The information provided on the Print Mega Store website (www.printmegastore.com) is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Independent Retailer Status</h2>
                <p className="mb-4">
                  <strong>Print Mega Store is an independent online retailer.</strong> We are not affiliated with, endorsed by, sponsored by, or in any way officially connected with HP Inc., Hewlett-Packard Company, Canon Inc., Epson Corporation, Brother Industries, or any other printer or scanner manufacturer.
                </p>
                <p className="mb-4">
                  All product names, logos, brands, trademarks, and registered trademarks are the property of their respective owners. The use of these names, logos, and brands does not imply endorsement or affiliation. We use manufacturer names and product names solely for the purpose of identifying the products we sell.
                </p>
                <p>
                  Any reference to specific manufacturers, products, or services does not constitute or imply an endorsement, recommendation, or affiliation unless explicitly stated otherwise.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Product Information Disclaimer</h2>
                <p className="mb-4">
                  We make every effort to display accurate product information, including descriptions, specifications, images, and pricing. However, we do not warrant that product descriptions or other content on our website is accurate, complete, reliable, current, or error-free.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Product Images:</strong> Product images are provided for illustrative purposes only. Actual products may vary slightly from images shown due to lighting, photography, or monitor display differences.</li>
                  <li><strong>Specifications:</strong> Product specifications are provided by manufacturers and may be updated without notice. Please verify specifications with the manufacturer before making a purchase decision.</li>
                  <li><strong>Pricing:</strong> Prices are subject to change without notice. While we strive to maintain accurate pricing, errors may occur. We reserve the right to correct pricing errors and cancel orders placed at incorrect prices.</li>
                  <li><strong>Availability:</strong> Product availability is subject to change without notice. We cannot guarantee that all products displayed on our website are in stock at all times.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Trademark Disclaimer</h2>
                <p className="mb-4">
                  The following trademarks are the property of their respective owners and are used on our website for product identification purposes only:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>HP, LaserJet, OfficeJet, DeskJet, ENVY, and related trademarks are registered trademarks of HP Inc.</li>
                  <li>Canon, PIXMA, imageCLASS, and related trademarks are registered trademarks of Canon Inc.</li>
                  <li>Epson, EcoTank, WorkForce, and related trademarks are registered trademarks of Seiko Epson Corporation.</li>
                  <li>Brother and related trademarks are registered trademarks of Brother Industries, Ltd.</li>
                  <li>All other trademarks are the property of their respective owners.</li>
                </ul>
                <p className="mt-4">
                  The use of these trademarks does not imply any affiliation with or endorsement by the trademark owners. Print Mega Store is solely responsible for the content of this website and the products and services we offer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">No Professional Advice</h2>
                <p>
                  The content on our website, including product descriptions, buying guides, and blog articles, is provided for general informational purposes only. It does not constitute professional advice of any kind, including but not limited to technical, legal, or financial advice. You should consult with appropriate professionals before making purchasing decisions based on your specific needs and circumstances.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Limitation of Liability</h2>
                <p className="mb-4">
                  To the fullest extent permitted by applicable law, Print Mega Store and its owners, officers, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Loss of profits, revenue, or business opportunities</li>
                  <li>Loss of data or information</li>
                  <li>Personal injury or property damage</li>
                  <li>Any damages arising from the use or inability to use our website or products</li>
                  <li>Any damages arising from unauthorized access to or alteration of your transmissions or data</li>
                </ul>
                <p className="mt-4">
                  This limitation of liability applies regardless of the legal theory upon which the claim is based, whether in contract, tort, negligence, strict liability, or otherwise, even if we have been advised of the possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">External Links Disclaimer</h2>
                <p>
                  Our website may contain links to external websites that are not operated or controlled by Print Mega Store. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We do not warrant the accuracy, completeness, or usefulness of any information provided by external websites. Visiting external links is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Manufacturer Warranties</h2>
                <p>
                  Products sold by Print Mega Store may be covered by manufacturer warranties. Print Mega Store is not the manufacturer of the products we sell and does not provide manufacturer warranties. All warranty claims should be directed to the respective manufacturers according to their warranty terms and conditions. We can assist customers in understanding warranty coverage and provide guidance on contacting manufacturers for warranty service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Fair Use Notice</h2>
                <p>
                  Product images, logos, and other materials displayed on our website may be protected by copyright and are used in accordance with fair use principles for the purpose of product identification and consumer information. This use is intended for criticism, comment, news reporting, teaching, and research purposes and does not constitute copyright infringement under 17 U.S.C. Section 107.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Accuracy of Information</h2>
                <p>
                  We do not guarantee that the information on our website is accurate, complete, or current. The material on our website is provided for general information only and should not be relied upon or used as the sole basis for making decisions. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Changes to This Disclaimer</h2>
                <p>
                  We reserve the right to update or modify this Disclaimer at any time without prior notice. Changes will be effective immediately upon posting to our website. Your continued use of our website after any changes to this Disclaimer constitutes your acceptance of the revised terms. We encourage you to review this Disclaimer periodically for any updates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Governing Law</h2>
                <p>
                  This Disclaimer shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. Any disputes arising from or related to this Disclaimer shall be subject to the exclusive jurisdiction of the courts located in New York County, New York.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Disclaimer, please contact us:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong> support@printmegastore.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> 123 Printer Avenue, Tech District, NY 10001, United States
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
