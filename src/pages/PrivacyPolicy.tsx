export function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-2">1. Information We Collect</h2>
          <p>
            We collect personal information such as your name, email, phone number and
            wellness preferences when you enquire or book a retreat with us.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-2">2. How We Use Your Information</h2>
          <p>
            Your information is used to process bookings, personalise your wellness
            programme, and communicate updates about your stay.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-2">3. Data Sharing</h2>
          <p>
            We do not sell your data. We may share it with trusted partners strictly for
            delivering the services you requested.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-2">4. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal data by
            contacting us.
          </p>
        </section>
      </div>
    </div>
  );
}