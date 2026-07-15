export default function CTA() {
  return (
    <section className="section bg-gradient-to-r from-[#06070a] via-primary-900 to-primary-700 text-white">
      <div className="container-fluid text-center">
        <div className="hub-badge mb-5">Poptávka</div>
        <h2 className="font-display text-3xl md:text-4xl tracking-[-0.035em] font-bold mb-4">
          Připraveni začít?
        </h2>
        <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          Pojďme si promluvit o tom, jak NFCtron může zlepšit vaše akce.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn bg-white text-primary-900 hover:bg-primary-100 shadow-lg">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 12h8M12 8l4 4-4 4"/><rect x="3" y="3" width="18" height="18" rx="4"/></svg>
            Poptat ukázku
          </button>
          <button className="btn border border-white/20 bg-white/10 text-white hover:bg-white/15">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4m8-4v4M3 10h18"/></svg>
            Rezervovat konzultaci
          </button>
        </div>

        <p className="text-sm text-primary-100 mt-8">
          Obvyklá odezva během 24 hodin. Bez závazků.
        </p>
      </div>
    </section>
  );
}
