export function FAQs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <details className="border rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">What should I pack for my stay?</summary>
          <p className="mt-2 text-muted-foreground">
            Comfortable clothing, personal toiletries, and any prescribed medications.
          </p>
        </details>
        <details className="border rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">How do I book a retreat?</summary>
          <p className="mt-2 text-muted-foreground">
            You can book online via the Plan Your Retreat page or contact us directly.
          </p>
        </details>
        <details className="border rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">What is the cancellation policy?</summary>
          <p className="mt-2 text-muted-foreground">
            Please refer to our Booking Policy page for full details.
          </p>
        </details>
      </div>
    </div>
  );
}