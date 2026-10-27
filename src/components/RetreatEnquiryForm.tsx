import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { ROOMS, PROGRAMMES } from '@/data/content';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  city: z.string().optional(),
  arrivalDate: z.string().min(1, 'Please select an arrival date'),
  departureDate: z.string().min(1, 'Please select a departure date'),
  numberOfGuests: z.string().min(1, 'Please select number of guests'),
  accommodationPreference: z.string().optional(),
  wellnessInterests: z.array(z.string()).optional(),
  additionalRequirements: z.string().optional(),
  consent: z.boolean().refine((v) => v, 'You must agree to be contacted'),
});

type FormData = z.infer<typeof schema>;

const STEPS = ['Guest Information', 'Travel Dates', 'Guests & Accommodation', 'Wellness Interests', 'Additional Details', 'Review & Submit'];

const WELLNESS_OPTIONS = PROGRAMMES.map((p) => p.title);
const ROOM_OPTIONS = ROOMS.map((r) => r.title);

export function RetreatEnquiryForm() {
  const [step, setStep] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const {
    register, handleSubmit, trigger, reset, watch, formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { wellnessInterests: [] } });

  const formData = watch();

  const next = async () => {
    const fieldsToValidate: (keyof FormData)[][] = [
      ['name', 'email', 'phone'],
      ['arrivalDate', 'departureDate'],
      ['numberOfGuests'],
      [],
      ['consent'],
      [],
    ];
    const valid = await trigger(fieldsToValidate[step]);
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading');
    try {
      const { error } = await supabase.from('enquiries').insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city || null,
        enquiry_type: 'Retreat Booking',
        preferred_dates: `${data.arrivalDate} to ${data.departureDate}`,
        number_of_guests: parseInt(data.numberOfGuests, 10),
        accommodation_preference: data.accommodationPreference || null,
        wellness_interests: selectedInterests.join(', '),
        additional_requirements: data.additionalRequirements || null,
        message: `Retreat enquiry: ${data.arrivalDate} to ${data.departureDate}, ${data.numberOfGuests} guest(s)`,
        consent: data.consent,
      });
      if (error) throw error;
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    }
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  if (submitStatus === 'success') {
    return (
      <div className="rounded-2xl border border-sage-200 bg-sage-100 p-8 lg:p-12 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-forest" strokeWidth={1.5} />
        <h3 className="mt-6 font-serif text-3xl text-forest">Your Enquiry Is Received</h3>
        <p className="mt-3 max-w-md mx-auto text-charcoal-400 leading-relaxed">
          Thank you, {formData.name}. Our wellness team will review your preferences and contact you within 24 hours to help plan your retreat.
        </p>
        <p className="mt-4 text-sm text-charcoal-400">A confirmation has been sent to {formData.email}.</p>
        <button
          onClick={() => { reset(); setStep(0); setSelectedInterests([]); setSubmitStatus('idle'); }}
          className="mt-8 btn-secondary"
        >
          Start a New Enquiry
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {STEPS.map((label, i) => (
            <div key={label} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                    i < step ? 'bg-forest text-ivory' : i === step ? 'bg-forest text-ivory ring-4 ring-sage-200' : 'bg-sage-200 text-charcoal-400'
                  }`}
                >
                  {i < step ? <Check className="h-4 w-4" strokeWidth={2} /> : i + 1}
                </div>
                <span className={`mt-2 hidden text-xs sm:block ${i <= step ? 'text-forest font-medium' : 'text-charcoal-400'}`}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`mx-2 h-0.5 flex-1 transition-colors ${i < step ? 'bg-forest' : 'bg-sage-200'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[280px]"
          >
            {step === 0 && (
              <div className="space-y-5">
                <h3 className="font-serif text-2xl text-forest">Tell us about yourself</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Full Name" error={errors.name?.message} required>
                    <input {...register('name')} className={inputClass(errors.name)} placeholder="Your name" />
                  </FormField>
                  <FormField label="Email" error={errors.email?.message} required>
                    <input {...register('email')} type="email" className={inputClass(errors.email)} placeholder="you@email.com" />
                  </FormField>
                  <FormField label="Phone" error={errors.phone?.message} required>
                    <input {...register('phone')} type="tel" className={inputClass(errors.phone)} placeholder="+91 …" />
                  </FormField>
                  <FormField label="City" error={errors.city?.message}>
                    <input {...register('city')} className={inputClass(errors.city)} placeholder="Your city" />
                  </FormField>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h3 className="font-serif text-2xl text-forest">When would you like to visit?</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Arrival Date" error={errors.arrivalDate?.message} required>
                    <input {...register('arrivalDate')} type="date" className={inputClass(errors.arrivalDate)} />
                  </FormField>
                  <FormField label="Departure Date" error={errors.departureDate?.message} required>
                    <input {...register('departureDate')} type="date" className={inputClass(errors.departureDate)} />
                  </FormField>
                </div>
                <p className="text-sm text-charcoal-400">These dates are a preference. We'll confirm availability when we respond.</p>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h3 className="font-serif text-2xl text-forest">How many guests and where would you stay?</h3>
                <FormField label="Number of Guests" error={errors.numberOfGuests?.message} required>
                  <select {...register('numberOfGuests')} className={inputClass(errors.numberOfGuests)}>
                    <option value="">Select…</option>
                    {[1,2,3,4,5,6].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                  </select>
                </FormField>
                <FormField label="Accommodation Preference">
                  <select {...register('accommodationPreference')} className={inputClass()}>
                    <option value="">No preference</option>
                    {ROOM_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </FormField>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h3 className="font-serif text-2xl text-forest">What are you interested in?</h3>
                <p className="text-sm text-charcoal-400">Select any that appeal to you. We'll personalise your programme accordingly.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {WELLNESS_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleInterest(opt)}
                      className={`flex items-center gap-3 rounded-xl border p-4 text-left text-sm transition-colors ${
                        selectedInterests.includes(opt)
                          ? 'border-forest bg-sage-100 text-forest'
                          : 'border-sage-200 bg-white text-charcoal-400 hover:border-sage-400'
                      }`}
                    >
                      <div className={`flex h-5 w-5 items-center justify-center rounded border ${
                        selectedInterests.includes(opt) ? 'border-forest bg-forest text-ivory' : 'border-sage-300'
                      }`}>
                        {selectedInterests.includes(opt) && <Check className="h-3 w-3" strokeWidth={2.5} />}
                      </div>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-5">
                <h3 className="font-serif text-2xl text-forest">Anything else we should know?</h3>
                <FormField label="Additional Requirements or Notes">
                  <textarea {...register('additionalRequirements')} rows={5} className={inputClass()} placeholder="Dietary needs, accessibility, health conditions, special occasions…" />
                </FormField>
                <label className="flex items-start gap-3">
                  <input type="checkbox" {...register('consent')} className="mt-1 h-4 w-4 rounded border-sage-300 text-forest focus:ring-forest" />
                  <span className="text-sm text-charcoal-400">
                    I agree to be contacted by Nowal NatureCare regarding this enquiry and have read the Privacy Policy.
                  </span>
                </label>
                {errors.consent && <p className="text-sm text-red-600">{errors.consent.message}</p>}
              </div>
            )}

            {step === 5 && (
              <div className="space-y-5">
                <h3 className="font-serif text-2xl text-forest">Review your enquiry</h3>
                <div className="rounded-2xl border border-sage-200 bg-sand-100 p-6 space-y-3">
                  <ReviewRow label="Name" value={formData.name} />
                  <ReviewRow label="Email" value={formData.email} />
                  <ReviewRow label="Phone" value={formData.phone} />
                  <ReviewRow label="City" value={formData.city || '—'} />
                  <ReviewRow label="Dates" value={`${formData.arrivalDate || '—'} → ${formData.departureDate || '—'}`} />
                  <ReviewRow label="Guests" value={formData.numberOfGuests || '—'} />
                  <ReviewRow label="Accommodation" value={formData.accommodationPreference || 'No preference'} />
                  <ReviewRow label="Wellness Interests" value={selectedInterests.length ? selectedInterests.join(', ') : 'None selected'} />
                  <ReviewRow label="Notes" value={formData.additionalRequirements || '—'} />
                </div>
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-600">Something went wrong submitting your enquiry. Please try again.</p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {step > 0 ? (
            <button type="button" onClick={back} className="btn-ghost">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          ) : <span />}

          {step < STEPS.length - 1 ? (
            <button type="button" onClick={next} className="btn-primary">
              Next <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button type="submit" disabled={submitStatus === 'loading'} className="btn-primary disabled:opacity-60">
              {submitStatus === 'loading' ? <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</> : 'Submit Enquiry'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function FormField({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-charcoal mb-1.5">
        {label} {required && <span className="text-earth-600">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 text-sm">
      <span className="w-40 shrink-0 text-charcoal-400">{label}</span>
      <span className="text-charcoal font-medium">{value}</span>
    </div>
  );
}

function inputClass(error?: { message?: string }): string {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-400/50 transition-colors focus:outline-none focus:ring-1 ${
    error ? 'border-red-300 focus:border-red-400 focus:ring-red-400' : 'border-sage-200 focus:border-forest focus:ring-forest'
  }`;
}
