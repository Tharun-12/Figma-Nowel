export function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
          <p>
            By using our website and services, you agree to comply with these terms and
            any applicable laws.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-2">2. Bookings & Payments</h2>
          <p>
            All bookings are subject to availability and confirmation. Payment terms
            will be provided at the time of reservation.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-2">3. Health Disclaimer</h2>
          <p>
            Our wellness programmes complement, but do not replace, professional medical
            advice. Consult your physician before commencing any programme.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-2">4. Conduct</h2>
          <p>
            Guests are expected to respect the retreat's peaceful environment and
            follow house guidelines.
          </p>
        </section>
      </div>
    </div>
  );
}