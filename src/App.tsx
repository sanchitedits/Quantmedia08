/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TwoCardsSection } from './components/TwoCardsSection';
import { NewWaySection } from './components/NewWaySection';
import { StrugglesSection } from './components/StrugglesSection';
import { WhatsInsideSection } from './components/WhatsInsideSection';
import { FourWeeksSection } from './components/FourWeeksSection';
import { PricingSection } from './components/PricingSection';
import { ForYouSection } from './components/ForYouSection';
import { TypeformSection } from './components/TypeformSection';
import { Footer } from './components/Footer';
import { SaasSolutionsSection } from './components/SaasSolutionsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans selection:bg-neutral-200">
      <Header />
      
      <main className="w-full pb-0">
        <Hero />
        <TwoCardsSection />
        <NewWaySection />
        <StrugglesSection />
        <WhatsInsideSection />
        <FourWeeksSection />
        <SaasSolutionsSection />
        <PricingSection />
        <ForYouSection />
        <TypeformSection />
      </main>
      <Footer />
    </div>
  );
}
