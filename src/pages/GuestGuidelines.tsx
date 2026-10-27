import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { FAQAccordion } from '@/components/FAQAccordion';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQS } from '@/data/content';
import { IMAGES } from '@/data/images';
import { useDocumentTitle } from '@/hooks/useScrollToTop';
import { CalendarCheck, Clock, FileText, CreditCard, Stethoscope, Utensils, Home, Cigarette, Car, XCircle } from 'lucide-react';

export function GuestGuidelines() {
  useDocumentTitle('Guest Guidelines — Nowal NatureCare', 'Everything you need to know about staying at Nowal NatureCare — booking, check-in, policies, and what to expect.');

  const guidelines = [
    { icon: CalendarCheck, title: 'Booking & Confirmation', text: 'Submit an enquiry through our website or contact us directly. Your reservation is confirmed once availability is verified and advance payment is received.' },
    { icon: Clock, title: 'Check-in & Check-out', text: 'Check-in from 2:00 PM. Check-out by 11:00 AM. Early arrival or late departure can be arranged subject to availability.' },
    { icon: FileText, title: 'Identification', text: 'Please carry a valid government-issued photo ID for each guest at check-in. This is required for registration purposes.' },
    { icon: CreditCard, title: 'Payment Terms', text: 'An advance payment is required to confirm your reservation. The balance is settled at check-in or check-out. We accept bank transfers and major credit cards.' },
    { icon: Stethoscope, title: 'Medical Consultation', text: 'A wellness consultation is conducted on arrival to personalise your programme. Please share any relevant medical information at this time.' },
    { icon: Utensils, title: 'Meal Schedule', text: 'Meals are served at scheduled times in the dining hall. Please inform us of any dietary requirements in advance so our kitchen can prepare accordingly.' },
    { icon: Home, title: 'Accommodation Rules', text: 'Rooms are assigned based on your booking. Please respect quiet hours to maintain the retreat environment for all guests.' },
    { icon: Cigarette, title: 'Smoking & Alcohol', text: 'Nowal NatureCare is a wellness retreat. Smoking and alcohol are not permitted anywhere on the property.' },
    { icon: Car, title: 'Transport', text: 'Airport transfers can be arranged from Pune Airport. Please provide your flight details in advance. Ample parking is available for guests arriving by car.' },
  ];

  return (
    <>
      <PageHero
        image={IMAGES.welcomeResort}
        title="Guest Guidelines"
        subtitle="Everything you need to know to prepare for a restful and restorative stay."
        eyebrow="Before You Arrive"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Guest Guidelines' }]} />

      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <Reveal className="mb-12">
            <SectionHeading
              eyebrow="Welcome"
              title="Preparing for Your Stay"
              subtitle="To help you make the most of your retreat, here are the key guidelines and policies. If you have any questions, please don't hesitate to contact us."
            />
          </Reveal>

          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guidelines.map((g) => (
              <StaggerItem key={g.title}>
                <div className="rounded-2xl border border-sage-200 bg-white p-7 h-full">
                  <g.icon className="h-7 w-7 text-forest mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-forest">{g.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-400 leading-relaxed">{g.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Visitor & Pet policies */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-wide grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl bg-white border border-sand-200 p-7">
              <XCircle className="h-7 w-7 text-earth-600 mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-lg text-forest">Visitor Policy</h3>
              <p className="mt-2 text-sm text-charcoal-400 leading-relaxed">To preserve the retreat environment, day visitors are generally not permitted. Please contact us if you have special circumstances.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white border border-sand-200 p-7">
              <XCircle className="h-7 w-7 text-earth-600 mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-lg text-forest">Pet Policy</h3>
              <p className="mt-2 text-sm text-charcoal-400 leading-relaxed">We are unable to accommodate pets. Please contact us if you need assistance with local pet-care arrangements.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cancellation summary */}
      <section className="py-16 lg:py-24">
        <div className="container-prose">
          <SectionHeading eyebrow="Cancellation" title="Cancellation & Refund Policy" className="mb-6" />
          <p className="text-charcoal-400 leading-relaxed">
            Cancellation terms vary by programme, season, and length of stay. Generally, cancellations made well in advance may qualify for a partial refund of your advance payment. Cancellations close to the arrival date or no-shows may not be eligible for refund.
          </p>
          <p className="mt-4 text-charcoal-400 leading-relaxed">
            For the full policy, please visit our <a href="/booking-policy" className="text-forest underline">Cancellation and Booking Policy</a> page or contact us directly.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-prose">
          <SectionHeading eyebrow="Questions" title="Frequently Asked" align="center" className="mb-10" />
          <FAQAccordion categories={FAQS.filter((c) => c.category === 'Guest Guidelines' || c.category === 'Accommodation' || c.category === 'Food & Dietary Requirements')} />
        </div>
      </section>

      <BookingCTA title="Ready to Visit?" subtitle="If you have any questions not covered here, our team is happy to help." />
    </>
  );
}

export default GuestGuidelines;
