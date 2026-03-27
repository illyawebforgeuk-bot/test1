import React from 'react';
import { Hero } from '../../sections/Hero/Hero';
import { TrustWall } from '../../sections/TrustWall/TrustWall';
import { ValueProposition } from '../../sections/ValueProposition/ValueProposition';

import { Process } from '../../sections/Process/Process';
import { Pricing } from '../../sections/Pricing/Pricing';
import { StripeIntegration } from '../../sections/StripeIntegration/StripeIntegration';
import { CaseStudies } from '../../sections/CaseStudies/CaseStudies';
import { Testimonials } from '../../sections/Testimonials/Testimonials';
import { FAQ } from '../../sections/FAQ/FAQ';

export const Home = () => {
  return (
    <main>
      <Hero />
      <TrustWall />
      <ValueProposition />

      <Process />
      <Pricing />
      <StripeIntegration />
      <CaseStudies />
      <Testimonials />
      <FAQ />
    </main>
  );
};
