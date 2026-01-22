import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Shipping Policy | Print Mega Store</title>
        <meta name="description" content="Learn about Print Mega Store's shipping policy including delivery times, shipping methods, and tracking for printers and scanners." />
        <meta property="og:title" content="Shipping Policy | Print Mega Store" />
        <meta property="og:url" content="https://www.printmegastore.net/shipping" />
        <link rel="canonical" href="https://www.printmegastore.net/shipping" />
      </Helmet>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4" data-testid="heading-shipping-policy">
              Shipping Policy
            </h1>
            <p className="text-xl text-gray-600 mb-2">Print Mega Store</p>
            <p className="text-gray-600 mb-8">Last updated: January 2026</p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">1. Order Processing</h2>
                <p className="mb-4">
                  Orders are typically processed within 1–2 business days after your order is placed. Processing time refers to the time it takes to prepare your items for shipment — it does not include delivery time.
                </p>
                <p>
                  Orders placed on weekends or U.S. national holidays will be processed on the next business day.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">2. Shipping Methods & Delivery Times</h2>
                <p className="mb-4">We offer the following standard shipping options for customers in the United States:</p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Shipping Method</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Typical Delivery Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Standard Shipping</td>
                        <td className="border border-gray-200 px-4 py-3">5–7 business days</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3">Expedited Shipping</td>
                        <td className="border border-gray-200 px-4 py-3">2–4 business days</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Priority/Express Shipping</td>
                        <td className="border border-gray-200 px-4 py-3">1–2 business days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mb-4">
                  Delivery times are estimates and begin after your order is processed. Carriers can be delayed due to weather, carrier volume, or other factors beyond our control.
                </p>
                <p>
                  Tracking information will be sent to the email you provide during checkout once the shipment is created.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">3. Shipping Costs</h2>
                <p className="mb-4">
                  Shipping charges are calculated at checkout based on your selected method and delivery address.
                </p>
                <p className="mb-2">You may see:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>A flat shipping rate</li>
                  <li>Free standard shipping (if eligible, e.g., orders over a minimum amount)</li>
                </ul>
                <p>
                  Any promotional free shipping offers will be displayed clearly at checkout.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">4. Order Tracking</h2>
                <p className="mb-2">Once your order has been shipped, you will receive a shipment confirmation email containing:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Carrier name</li>
                  <li>Tracking number</li>
                  <li>A tracking link</li>
                </ul>
                <p>
                  If you do not receive tracking information within 48 hours of placing your order, please contact us at <a href="mailto:info@printmegastore.com" className="text-[#33cccc] hover:underline">info@printmegastore.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">5. Shipping Restrictions</h2>
                <p className="mb-4">
                  Currently, Print Mega Store ships only within the United States (48 contiguous states, Alaska, and Hawaii).
                </p>
                <p className="mb-2">We do not ship to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>APO/FPO addresses (unless otherwise stated)</li>
                  <li>U.S. territories not listed above</li>
                  <li>International destinations</li>
                </ul>
                <p>
                  If you attempt to place an order outside our supported region, your order may be canceled and refunded.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">6. Lost, Stolen, or Damaged Packages</h2>
                <p className="mb-4">If your package appears as delivered but you did not receive it, or if it arrives damaged:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>Check with the carrier first to confirm delivery details.</li>
                  <li>If the carrier confirms loss or damage, contact us at <a href="mailto:info@printmegastore.com" className="text-[#33cccc] hover:underline">info@printmegastore.com</a> with your order number, and we will assist you.</li>
                </ol>
                <p>
                  Please keep images of packaging and items if damaged — this helps with claims.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">7. Backorders & Out-of-Stock Items</h2>
                <p className="mb-2">If an item becomes out of stock after you place an order:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>We will notify you by email</li>
                  <li>You may choose to wait for restock or cancel the item for a full refund</li>
                </ul>
                <p>
                  Items shown as "in stock" should match actual availability at the time of order.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">8. Delivery Delays</h2>
                <p className="mb-2">Delivery estimates are not guaranteed. Carriers may experience delays due to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Weather events</li>
                  <li>High volume periods (holidays, sales)</li>
                  <li>Address issues</li>
                  <li>Customs or other carriers' factors</li>
                </ul>
                <p>
                  Print Mega Store is not responsible for delays caused by carriers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">9. Shipping Policy Changes</h2>
                <p>
                  We may update this Shipping Policy at any time. Changes take effect when posted on this page, and the "Last updated" date will be changed accordingly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">10. Contact Us (Shipping Help)</h2>
                <p className="mb-4">If you have questions about shipping or delivery, contact us at:</p>
                <p>
                  Email: <a href="mailto:info@printmegastore.com" className="text-[#33cccc] hover:underline">info@printmegastore.com</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
