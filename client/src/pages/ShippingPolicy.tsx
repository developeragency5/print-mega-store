import { motion } from "framer-motion";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8" data-testid="heading-shipping-policy">
              Shipping Policy
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
                <h2 className="text-2xl font-bold text-black mb-4">Shipping Overview</h2>
                <p>
                  At Print Mega Store, we are committed to delivering your printers, scanners, and printing equipment safely and efficiently. We partner with reliable shipping carriers to ensure your order arrives in excellent condition. This Shipping Policy outlines our shipping methods, delivery timeframes, and related information to help you understand what to expect when you place an order with us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Shipping Methods & Delivery Times</h2>
                <p className="mb-4">We offer the following shipping options for orders within the United States:</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200 mb-4">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Shipping Method</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Estimated Delivery</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-black">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Standard Shipping</td>
                        <td className="border border-gray-200 px-4 py-3">5-7 Business Days</td>
                        <td className="border border-gray-200 px-4 py-3">FREE on orders over $50</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3">Expedited Shipping</td>
                        <td className="border border-gray-200 px-4 py-3">3-5 Business Days</td>
                        <td className="border border-gray-200 px-4 py-3">$9.99</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Express Shipping</td>
                        <td className="border border-gray-200 px-4 py-3">1-2 Business Days</td>
                        <td className="border border-gray-200 px-4 py-3">$19.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500">
                  * Delivery times are estimates and begin from the date of shipment, not the order date. Actual delivery times may vary based on carrier performance, weather conditions, and other factors beyond our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Free Shipping</h2>
                <p>
                  We offer FREE standard shipping on all orders over $50 within the continental United States. This promotion applies automatically at checkout when your order subtotal meets the minimum threshold. Free shipping is not available for expedited or express shipping options, Alaska, Hawaii, Puerto Rico, or international destinations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Order Processing Time</h2>
                <p className="mb-4">
                  All orders are processed within 1-2 business days (Monday through Friday, excluding holidays). Orders placed after 2:00 PM EST may be processed the following business day. You will receive an email confirmation with tracking information once your order has shipped.
                </p>
                <p>
                  During peak seasons, holidays, or promotional periods, processing times may be extended. We will notify you via email if there are any significant delays with your order.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Shipping Carriers</h2>
                <p>
                  We work with major shipping carriers including UPS, FedEx, and USPS to deliver your orders. The carrier used for your shipment may vary based on the size and weight of your order, delivery destination, and shipping method selected. We reserve the right to choose the carrier that best suits each shipment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Shipping Restrictions</h2>
                <p className="mb-4">Currently, Print Mega Store ships to the following locations:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Continental United States:</strong> All 48 contiguous states</li>
                  <li><strong>Alaska & Hawaii:</strong> Additional shipping charges may apply</li>
                  <li><strong>U.S. Territories:</strong> Puerto Rico, Guam, U.S. Virgin Islands (additional charges may apply)</li>
                </ul>
                <p>
                  We do not currently ship to international destinations, APO/FPO addresses, or P.O. Boxes for large items. If you require international shipping, please contact our customer support team to discuss available options.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Order Tracking</h2>
                <p>
                  Once your order ships, you will receive a shipping confirmation email containing your tracking number and a link to track your package. You can also track your order by logging into your account on our website. Please allow 24-48 hours for tracking information to become active after receiving your shipping confirmation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Delivery Issues</h2>
                <p className="mb-4">If you experience any of the following issues with your delivery, please contact us within 48 hours:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Missing Package:</strong> If tracking shows delivered but you haven't received your package</li>
                  <li><strong>Damaged Package:</strong> If your package arrives visibly damaged</li>
                  <li><strong>Wrong Item:</strong> If you received an incorrect item</li>
                  <li><strong>Incomplete Order:</strong> If items are missing from your order</li>
                </ul>
                <p className="mt-4">
                  Please retain all original packaging materials until the issue is resolved. We may require photos of damaged items or packaging to process your claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Signature Requirements</h2>
                <p>
                  For orders over $200 or containing high-value items, we may require a signature upon delivery for security purposes. If you are not available to sign for your package, the carrier will typically leave a delivery notice with instructions for rescheduling or picking up your package at a local facility.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Address Accuracy</h2>
                <p>
                  Please ensure your shipping address is complete and accurate before placing your order. Print Mega Store is not responsible for packages delivered to incorrect addresses due to customer error. If you need to change your shipping address after placing an order, please contact us immediately. We cannot guarantee address changes once an order has been processed or shipped. Additional fees may apply for address corrections or package rerouting.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Holiday & Peak Season Shipping</h2>
                <p>
                  During holiday seasons and major sales events, shipping carriers may experience higher volumes that can affect delivery times. We recommend placing orders early during these periods to ensure timely delivery. We will update our website with any relevant shipping deadlines for holiday delivery.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                <p>
                  If you have any questions about our Shipping Policy or need assistance with your order, please contact us:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong> support@printmegastore.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST<br />
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
