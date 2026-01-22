import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Helmet>
        <title>Page Not Found | Print Mega Store</title>
        <meta name="description" content="The page you're looking for could not be found. Browse our selection of HP printers, inkjet printers, laser printers, and document scanners." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="inline-block mt-4 text-[#33cccc] hover:underline text-sm font-medium">
            Return to Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
