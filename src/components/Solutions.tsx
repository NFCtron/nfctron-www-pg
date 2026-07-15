import Link from 'next/link';

interface Solution {
  icon: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  color: 'purple' | 'aqua' | 'violet' | 'orange';
}

const solutions: Solution[] = [
  {
    icon: '🎪',
    title: 'Pro pořadatele',
    description: 'Úplná kontrola nad vašimi akcemi, jednoduchý provoz a reálné analytics.',
    cta: 'Prozkoumat',
    href: '/for-organizers',
    color: 'purple',
  },
  {
    icon: '🛍️',
    title: 'Pro prodejce',
    description: 'SoftPOS, Nautilus a mobile řešení pro mobilní prodej.',
    cta: 'Prozkoumat',
    href: '/for-retailers',
    color: 'aqua',
  },
  {
    icon: '👥',
    title: 'Pro návštěvníky',
    description: 'Seamless experience — QR kódy, RFID wristbandy, bezpečné platby.',
    cta: 'Prozkoumat',
    href: '/for-visitors',
    color: 'violet',
  },
  {
    icon: '🔗',
    title: 'Pro partnery',
    description: 'API, Marketplace, a integrační příležitosti pro tech partnery.',
    cta: 'Prozkoumat',
    href: '/partners',
    color: 'orange',
  },
];

const colorClasses = {
  purple: 'bg-primary-50 border-primary-200 hover:border-primary-300',
  aqua: 'bg-aqua-50 border-aqua-200 hover:border-aqua-500',
  violet: 'bg-primary-100/60 border-primary-200 hover:border-primary-500',
  orange: 'bg-accent-50 border-accent-200 hover:border-accent-500',
};

export default function Solutions() {
  return (
    <section className="section bg-white">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="section-title">Řešení pro všechny</h2>
          <p className="section-subtitle">
            Nezávisle na vaší roli, máme řešení pro vás
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, idx) => (
            <Link
              key={idx}
              href={solution.href}
              className={`${colorClasses[solution.color]} rounded-md border p-7 transition-all duration-300 hover:shadow-md group`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {solution.description}
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-primary-600 group-hover:gap-3 transition-all">
                {solution.cta}
                <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
