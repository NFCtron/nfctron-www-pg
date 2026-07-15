import Header from '@/components/Header.tsx';
import Hero from '@/components/Hero.tsx';
import Stats from '@/components/Stats.tsx';
import Products from '@/components/Products.tsx';
import Solutions from '@/components/Solutions.tsx';
import CaseStudies from '@/components/CaseStudies.tsx';
import CTA from '@/components/CTA.tsx';
import Footer from '@/components/Footer.tsx';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Solutions />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
