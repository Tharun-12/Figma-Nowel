import { Leaf } from 'lucide-react';

export function LoadingState() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Leaf className="h-8 w-8 animate-pulse text-forest" strokeWidth={1.5} />
        <p className="text-sm text-charcoal-400">Loading…</p>
      </div>
    </div>
  );
}

export function ErrorState({ message = 'Something went wrong. Please try again later.' }: { message?: string }) {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="font-serif text-2xl text-forest">{message}</p>
      </div>
    </div>
  );
}
