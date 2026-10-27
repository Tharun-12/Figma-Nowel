import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  city: z.string().optional(),
  enquiryType: z.string().min(1, 'Please select an enquiry type'),
  preferredDates: z.string().optional(),
  numberOfGuests: z.string().optional(),
  message: z.string().min(10, 'Please tell us a bit more (at least 10 characters)'),
  consent: z.boolean().refine((v) => v, 'You must agree to be contacted'),
});

type FormData = z.infer<typeof schema>;

const ENQUIRY_TYPES = ['General Enquiry', 'Booking & Reservation', 'Wellness Programme', 'Accommodation', 'Treatment', 'Other'];

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading');
    try {
      const { error } = await supabase.from('enquiries').insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        city: data.city || null,
        enquiry_type: data.enquiryType,
        preferred_dates: data.preferredDates || null,
        number_of_guests: data.numberOfGuests ? parseInt(data.numberOfGuests, 10) : null,
        message: data.message,
        consent: data.consent,
      });
      if (error) throw error;
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="rounded-2xl border border-sage-200 bg-sage-100 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-forest" strokeWidth={1.5} />
        <h3 className="mt-4 font-serif text-2xl text-forest">Thank You</h3>
        <p className="mt-2 text-charcoal-400">
          Your enquiry has been received. Our team will respond within 24 hours.
        </p>
        <button onClick={() => setSubmitStatus('idle')} className="mt-6 btn-secondary">
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {submitStatus === 'error' && (
        <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" strokeWidth={1.5} />
          <p className="text-sm text-red-700">
            We couldn't submit your enquiry. Please check your connection and try again, or email us directly.
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message} required>
          <input {...register('name')} type="text" className={inputClass(errors.name)} placeholder="Your name" />
        </Field>
        <Field label="Email" error={errors.email?.message} required>
          <input {...register('email')} type="email" className={inputClass(errors.email)} placeholder="you@email.com" />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input {...register('phone')} type="tel" className={inputClass(errors.phone)} placeholder="+91 …" />
        </Field>
        <Field label="City" error={errors.city?.message}>
          <input {...register('city')} type="text" className={inputClass(errors.city)} placeholder="Your city" />
        </Field>
      </div>

      <Field label="Enquiry Type" error={errors.enquiryType?.message} required>
        <select {...register('enquiryType')} className={inputClass(errors.enquiryType)}>
          <option value="">Select a type…</option>
          {ENQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Preferred Dates" error={errors.preferredDates?.message}>
          <input {...register('preferredDates')} type="text" className={inputClass(errors.preferredDates)} placeholder="e.g. 15–22 Dec 2025" />
        </Field>
        <Field label="Number of Guests" error={errors.numberOfGuests?.message}>
          <input {...register('numberOfGuests')} type="number" min="1" className={inputClass(errors.numberOfGuests)} placeholder="1" />
        </Field>
      </div>

      <Field label="Message" error={errors.message?.message} required>
        <textarea {...register('message')} rows={5} className={inputClass(errors.message)} placeholder="How can we help you?" />
      </Field>

      <label className="flex items-start gap-3">
        <input type="checkbox" {...register('consent')} className="mt-1 h-4 w-4 rounded border-sage-300 text-forest focus:ring-forest" />
        <span className="text-sm text-charcoal-400">
          I agree to be contacted by Nowal NatureCare regarding my enquiry and have read the Privacy Policy.
        </span>
      </label>
      {errors.consent && <p className="text-sm text-red-600 -mt-3">{errors.consent.message}</p>}

      <button
        type="submit"
        disabled={submitStatus === 'loading'}
        className="btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        {submitStatus === 'loading' ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
        ) : (
          'Send Enquiry'
        )}
      </button>
    </form>
  );
}

function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
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

function inputClass(error?: { message?: string }): string {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-400/50 transition-colors focus:outline-none focus:ring-1 ${
    error ? 'border-red-300 focus:border-red-400 focus:ring-red-400' : 'border-sage-200 focus:border-forest focus:ring-forest'
  }`;
}
