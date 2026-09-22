import { IntroReveal } from '@/components/IntroReveal';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { TerminalDemo } from '@/components/TerminalDemo';
import { FeatureGrid } from '@/components/FeatureGrid';
import { UseCaseSelector } from '@/components/UseCaseSelector';
import { CaseStudies } from '@/components/CaseStudies';
import { Benchmarks } from '@/components/Benchmarks';
import { FAQ } from '@/components/FAQ';
import { CTAFooter } from '@/components/CTAFooter';

export default function Page() {
  return <>
    <IntroReveal />
    <Nav />
    <main>
      <Hero />
      <HowItWorks />
      <TerminalDemo />
      <FeatureGrid />
      <UseCaseSelector />
      <CaseStudies />
      <Benchmarks />
      <FAQ />
    </main>
    <CTAFooter />
  </>;
}
