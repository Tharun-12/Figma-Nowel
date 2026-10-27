import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TARIFFS } from '@/data/content';
import { IMAGES } from '@/data/images';
import { useDocumentTitle } from '@/hooks/useScrollToTop';
import { Check, X } from 'lucide-react';

export function TariffsPackages() {
  useDocumentTitle('Tariffs & Packages — Nowal NatureCare', 'Accommodation tariffs, wellness programme packages, and stay options at Nowal NatureCare.');

  return (
    <>
      <PageHero
        image={IMAGES.roomView}
        title="Tariffs & Packages"
        subtitle="Accommodation rates and curated wellness packages for your retreat."
        eyebrow="Pricing"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Tariffs & Packages' }]} />

      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <Reveal className="mb-10">
            <SectionHeading
              eyebrow="Overview"
              title="Stay & Programme Options"
              subtitle="Below are our accommodation rates and wellness packages. For current pricing, please contact us directly — rates may vary by season and programme customisation."
            />
          </Reveal>

          <StaggerGroup className="grid gap-6 lg:grid-cols-2">
            {TARIFFS.map((pkg) => (
              <StaggerItem key={pkg.title}>
                <div className="h-full rounded-2xl border border-sage-200 bg-white p-7">
                  <span className="eyebrow text-earth-500">{pkg.type}</span>
                  <h3 className="mt-2 font-serif text-2xl text-forest">{pkg.title}</h3>
                  <p className="mt-1 text-sm text-charcoal-400">{pkg.duration}</p>
                  <p className="mt-4 font-serif text-xl text-forest">{pkg.priceNote}</p>

                  <div className="mt-5 border-t border-sage-200 pt-5">
                    <h4 className="text-sm font-medium text-forest mb-3">Included</h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm">
                          <Check className="h-4 w-4 shrink-0 text-sage-500 mt-0.5" strokeWidth={2} />
                          <span className="text-charcoal-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.excludes.length > 0 && (
                    <div className="mt-5 border-t border-sage-200 pt-5">
                      <h4 className="text-sm font-medium text-charcoal-400 mb-3">Not Included</h4>
                      <ul className="space-y-2">
                        {pkg.excludes.map((item) => (
                          <li key={item} className="flex gap-2.5 text-sm">
                            <X className="h-4 w-4 shrink-0 text-charcoal-400/50 mt-0.5" strokeWidth={2} />
                            <span className="text-charcoal-400/70">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Booking conditions */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-prose">
          <SectionHeading eyebrow="Good to Know" title="Booking Conditions" className="mb-8" />
          <div className="space-y-5 text-charcoal-400 leading-relaxed">
            <p><strong className="text-forest">Pricing:</strong> All rates are indicative and may vary based on season, programme customisation, and room availability. Please contact us for a personalised quote.</p>
            <p><strong className="text-forest">Additional Treatments:</strong> Specific therapies not included in your package can be added based on consultation. Charges are confirmed during your stay.</p>
            <p><strong className="text-forest">Seasonal Offers:</strong> From time to time, we offer seasonal packages. Please check with our team for any current offers.</p>
            <p><strong className="text-forest">Cancellation:</strong> Cancellation terms vary by programme and season. Please refer to our <a href="/booking-policy" className="text-forest underline">Cancellation and Booking Policy</a> or contact us for details.</p>
          </div>
        </div>
      </section>

      <BookingCTA title="Get a Personalised Quote" subtitle="Contact us for current pricing and a tailored package that suits your wellness goals." />
    </>
  );
}

export default TariffsPackages;
