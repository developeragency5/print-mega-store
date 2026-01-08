import { motion } from "framer-motion";

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8" data-testid="heading-return-policy">
              Return & Refund Policy
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
                <h2 className="text-2xl font-bold text-black mb-4">Return Policy Overview</h2>
                <p>
                  At Print Mega Store, we want you to be completely satisfied with your purchase. If for any reason you are not satisfied with your printer, scanner, or other printing equipment, we offer a comprehensive return and refund policy. Please read this policy carefully to understand your rights and the conditions for returns.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">30-Day Return Window</h2>
                <p className="mb-4">
                  You may return most new, unopened items within <strong>30 days of delivery</strong> for a full refund of the purchase price. Opened items may be returned within <strong>30 days</strong> if they are defective or not as described. The 30-day period begins from the date your order is delivered, as indicated by the carrier's tracking information.
                </p>
                <p>
                  To be eligible for a return, items must be in their original packaging with all accessories, manuals, and documentation included. Items that have been damaged by the customer, modified, or are missing parts may not be eligible for a full refund.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Items Eligible for Return</h2>
                <p className="mb-4">The following items are eligible for return within the 30-day window:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Printers (inkjet, laser, all-in-one, photo printers)</li>
                  <li>Document scanners and photo scanners</li>
                  <li>Multifunction devices</li>
                  <li>Printer accessories and cables</li>
                  <li>Defective or damaged items (within warranty period)</li>
                  <li>Items that do not match the product description</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Non-Returnable Items</h2>
                <p className="mb-4">The following items cannot be returned:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ink cartridges and toner cartridges (due to potential tampering)</li>
                  <li>Opened software or digital products</li>
                  <li>Items purchased more than 30 days ago</li>
                  <li>Items damaged due to misuse, neglect, or unauthorized modifications</li>
                  <li>Items without original packaging or missing accessories</li>
                  <li>Clearance or final sale items (unless defective)</li>
                  <li>Gift cards</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">How to Initiate a Return</h2>
                <p className="mb-4">To start a return, please follow these steps:</p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Contact Customer Support:</strong> Email us at support@printmegastore.com or call +1 (555) 123-4567 with your order number and reason for return.
                  </li>
                  <li>
                    <strong>Receive Return Authorization:</strong> Our team will review your request and provide a Return Merchandise Authorization (RMA) number within 1-2 business days.
                  </li>
                  <li>
                    <strong>Pack Your Item:</strong> Securely pack the item in its original packaging with all accessories and documentation. Include the RMA number on the outside of the package.
                  </li>
                  <li>
                    <strong>Ship Your Return:</strong> Ship the package to the address provided in your return authorization. We recommend using a trackable shipping method.
                  </li>
                  <li>
                    <strong>Receive Your Refund:</strong> Once we receive and inspect your return, we will process your refund within 5-7 business days.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Return Shipping Costs</h2>
                <p className="mb-4">
                  <strong>Defective or Incorrect Items:</strong> If you received a defective, damaged, or incorrect item, Print Mega Store will cover the return shipping costs. We will provide a prepaid return shipping label.
                </p>
                <p className="mb-4">
                  <strong>Change of Mind Returns:</strong> If you are returning an item because you changed your mind or no longer need it, you are responsible for return shipping costs. The original shipping cost (if any) is non-refundable.
                </p>
                <p>
                  We recommend using a trackable shipping service and purchasing shipping insurance for returns, especially for high-value items. Print Mega Store is not responsible for items lost or damaged during return shipping.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Refund Process</h2>
                <p className="mb-4">
                  Once we receive your returned item, our team will inspect it within 3-5 business days. After inspection, we will notify you via email about the status of your refund.
                </p>
                <p className="mb-4">
                  <strong>Approved Refunds:</strong> If approved, your refund will be processed to your original payment method within 5-7 business days. Depending on your bank or credit card company, it may take additional time for the refund to appear on your statement.
                </p>
                <p>
                  <strong>Partial Refunds:</strong> In some cases, we may issue a partial refund if the item shows signs of use, is missing parts, or is not in its original condition. We will notify you of the refund amount before processing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Exchanges</h2>
                <p>
                  If you received a defective item or would like to exchange for a different product, please contact our customer support team. We will arrange for the return of your original item and ship the replacement as quickly as possible. Exchanges are subject to product availability. If the replacement item has a different price, we will charge or refund the difference accordingly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Damaged or Defective Items</h2>
                <p className="mb-4">
                  If you receive an item that is damaged during shipping or is defective, please contact us within 48 hours of delivery. Please provide the following information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your order number</li>
                  <li>Photos of the damaged item and packaging</li>
                  <li>A description of the damage or defect</li>
                </ul>
                <p className="mt-4">
                  We will work with you to resolve the issue as quickly as possible, either by sending a replacement or issuing a full refund including shipping costs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Warranty Claims</h2>
                <p className="mb-4">
                  Many products sold by Print Mega Store include manufacturer warranties. Warranty coverage and duration vary by product and manufacturer. For warranty claims, you may need to contact the manufacturer directly. However, our customer support team can assist you in understanding your warranty options and provide guidance on the claims process.
                </p>
                <p>
                  Print Mega Store is not the manufacturer of the products we sell and cannot extend or modify manufacturer warranty terms. Please refer to the product documentation for specific warranty information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Restocking Fees</h2>
                <p>
                  We do not charge restocking fees for returns that meet our return policy conditions. However, items returned without original packaging, missing accessories, or showing signs of use may be subject to a restocking fee of up to 15% of the purchase price. You will be notified of any applicable fees before your refund is processed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Cancellations</h2>
                <p>
                  If you need to cancel your order, please contact us as soon as possible. Orders that have not yet been shipped can be cancelled for a full refund. Once an order has shipped, it cannot be cancelled and must be returned according to our return policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                <p>
                  If you have any questions about our Return & Refund Policy, please contact our customer support team:
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
