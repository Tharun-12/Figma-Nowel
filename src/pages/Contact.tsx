export function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-2">📍 123 Wellness Lane, Serenity Valley</p>
          <p className="text-muted-foreground mb-2">📞 +91 98765 43210</p>
          <p className="text-muted-foreground mb-2">✉️ hello@wellnessretreat.com</p>
          <p className="text-muted-foreground">🕐 Mon – Sun: 8:00 AM – 8:00 PM</p>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}