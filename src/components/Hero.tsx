export default function Hero() {
  return (
    <section className="section pt-32 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-fluid">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-primary-700 px-3 py-2 rounded-md text-sm font-semibold shadow-sm">
              <span className="hub-badge">Nové</span>
              Event infrastruktura nové generace
            </div>

            <h1 className="font-display text-5xl md:text-[56px] font-bold leading-[1.02] tracking-[-0.045em]">
              Infrastruktura pro pořadatele <span className="text-primary-600">akcí</span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
              Platby, vstupenky, data a provoz v jednom ekosystému. Vše, co potřebuješ pro moderní akce.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="btn-primary">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 12h8M12 8l4 4-4 4"/><rect x="3" y="3" width="18" height="18" rx="4"/></svg>
                Poptat řešení
              </button>
              <button className="btn-secondary">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19V9m5 10V5m5 14v-7m5 7V3"/></svg>
                Ukázat NFCtron Hub
              </button>
            </div>

            <p className="text-sm text-gray-500 pt-4">
              ✓ Používáno na 500+ akcích • ✓ 10M+ transakcí ročně • ✓ Trusted by Live Nation
            </p>
          </div>

          {/* Right - Visual */}
          <div className="relative h-96 md:h-full rounded-md border border-primary-200 bg-gray-50 overflow-hidden shadow-sm p-4">
            <div className="h-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
              <div className="h-12 bg-primary-900 px-4 flex items-center justify-between text-white">
                <span className="font-display text-sm font-semibold">NFCtron Hub</span>
                <span className="rounded bg-white/10 px-2 py-1 text-[9px] text-white/75">Přehled akce</span>
              </div>
              <div className="border-b border-gray-200 bg-primary-600 px-4 py-2 text-[10px] text-white/90">
                Data vaší akce v reálném čase
              </div>
              <div className="p-4">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    ['Tržba akce', '132 690 Kč'],
                    ['Objednávky', '3 374'],
                    ['Zůstatek na čipech', '10,03 mil. Kč'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded border border-gray-200 bg-white p-3">
                      <p className="text-[9px] text-gray-400">{label}</p>
                      <p className="font-display mt-1 text-xs font-bold text-gray-900">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded border border-gray-200 p-3">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="font-display text-[11px] font-semibold">Všechny objednávky</span>
                    <span className="rounded bg-gray-100 px-2 py-1 text-[8px]">Celé období</span>
                  </div>
                  <div className="mt-4 flex h-28 items-end gap-1 border-b border-gray-200">
                    {[8, 10, 7, 12, 9, 14, 18, 16, 24, 21, 34, 48, 66, 88].map((height, index) => (
                      <span key={index} className="flex-1 rounded-t-[2px] bg-primary-500" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-end gap-3 text-[8px] text-gray-400">
                    <span><i className="mr-1 inline-block h-2 w-2 bg-primary-500" />Objednávky</span>
                    <span><i className="mr-1 inline-block h-2 w-2 bg-green-500" />Transakce</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
