export function NncFoundingQuote() {
  return (
    <section className="nnc-founding bg-white px-4 py-10 sm:py-14">
      <figure className="nnc-founding__figure mx-auto flex max-w-xl items-start gap-4 text-center">
        <span aria-hidden className="nnc-founding__mark select-none font-serif text-5xl leading-none text-[#c9c4b4]">“</span>
        <div className="flex-1">
          <blockquote className="nnc-founding__text text-base leading-relaxed text-[#3b4540] sm:text-lg">
            Healing begins when you return to yourself — in rhythm with nature and nurtured by care.
          </blockquote>
          <figcaption className="nnc-founding__cite mt-1 text-sm text-[#3b4540] sm:text-base">— Our Founding Belief</figcaption>
        </div>
      </figure>
    </section>
  );
}