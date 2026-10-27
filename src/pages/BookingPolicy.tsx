export function BookingPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Booking Policy</h1>
      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Reservations</h2>
          <p>
            Reservations are confirmed upon receipt of a 30% advance deposit. The
            balance is payable on arrival.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Cancellations</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>More than 30 days before arrival: full refund minus admin fee.</li>
            <li>15–30 days before arrival: 50% refund.</li>
            <li>Less than 15 days before arrival: no refund.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Rescheduling</h2>
          <p>
            One free reschedule is allowed if notified at least 15 days prior to the
            check-in date.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Check-in / Check-out</h2>
          <p>
            Check-in: 2:00 PM · Check-out: 11:00 AM. Early check-in and late check-out
            are subject to availability.
          </p>
        </section>
      </div>
    </div>
  );
}