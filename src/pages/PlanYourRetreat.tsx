export function PlanYourRetreat() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Plan Your Retreat</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Let us help you design the perfect wellness journey. Fill in your details and our
        team will reach out within 24 hours.
      </p>
      <form className="max-w-xl space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-2"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full border rounded-lg px-4 py-2"
        />
        <select className="w-full border rounded-lg px-4 py-2">
          <option value="">Select Programme</option>
          <option value="naturopathy">Naturopathy</option>
          <option value="ayurveda">Ayurveda</option>
          <option value="yoga-meditation">Yoga & Meditation</option>
        </select>
        <textarea
          placeholder="Tell us about your wellness goals"
          rows={5}
          className="w-full border rounded-lg px-4 py-2"
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}