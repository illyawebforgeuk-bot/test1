import { useEffect } from 'react';
import { Section } from '../../components/Section/Section';
import { Link } from 'react-router-dom';
import { LegalLayout, LegalSection } from './LegalComponents';

export const Refund = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Section id="refund-policy">
        <div className="container">
          <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>&larr; Back to Home</Link>
          <LegalLayout title="Refund, Cancellation & Chargeback Policy" lastUpdated="March 19, 2026">
            <LegalSection index={1} title="Nature of Bespoke Digital Services">
              <p>1.1. <strong>WebForge LTD</strong> provides high-value professional engineering, architectural consulting, and custom UI/UX design. All Services provided are non-tangible, bespoke "digital goods" or "labor-based services" which cannot be returned or resold.</p>
              <p>1.2. Consequently, once work has been booked or initiated, we maintain a strict <strong>No-Refund Policy</strong> as defined in this document.</p>
            </LegalSection>

            <LegalSection index={2} title="Consultation and Discovery Fee ($250)">
              <p>2.1. The initial "Strategy & Discovery" consultation fee is <strong>strictly non-refundable</strong>.</p>
              <p>2.2. This fee compensates the Provider for (a) the immediate allocation of senior engineering bandwidth, (b) pre-call project analysis, and (c) the delivery of a bespoke technical roadmap. Absence or late cancellation (within 24 hours of the call) results in the permanent forfeiture of this fee.</p>
            </LegalSection>

            <LegalSection index={3} title="Project Milestone Refunds">
              <p>3.1. <strong>Deposits:</strong> Project deposits (typically 50% of the SOW) are non-refundable once the discovery phase has concluded and engineering work has commenced.</p>
              <p>3.2. <strong>Completed Milestones:</strong> Any milestone payment made by the Client constitutes formal acceptance of the Deliverables associated with that milestone and is non-refundable.</p>
            </LegalSection>

            <LegalSection index={4} title="Exceptions and Partial Refunds">
              <p>4.1. <strong>Non-Commencement:</strong> If WebForge LTD terminates the project before any professional labor has been expended, the Client may be eligible for a full refund (minus any Stripe processing fees which are retained by Stripe Inc).</p>
              <p>4.2. <strong>Discretionary Refunds:</strong> Any partial refund issued in exceptional circumstances is granted solely at the absolute discretion of the Provider and does not constitute a legal admission of liability.</p>
            </LegalSection>

            <LegalSection index={5} title="Subscription and Retainer Cancellations">
              <p>5.1. Ongoing "Maintenance & Support" retainers are billed monthly via <strong>Stripe Billing</strong>. The Client may cancel their subscription at any time via the Stripe Customer Portal.</p>
              <p>5.2. Cancellations prevent future billing cycles but do not generate a pro-rated refund for the current, active cycle.</p>
            </LegalSection>

            <LegalSection index={6} title="Handling Errors and Payment Discrepancies">
              <p>6.1. In the event of a genuine technical error (e.g., duplicated Stripe transactions), the Client must notify <strong>billing@webforgeltd.co.uk</strong> within forty-eight (48) hours. We will initiate a reversal of the erroneous transaction via Stripe immediately upon verification.</p>
            </LegalSection>

            <LegalSection index={7} title="Disputes and Chargebacks (Stripe Compliance)">
              <p>7.1. We prioritize amicable dispute resolution. Before initiating a credit card chargeback or Stripe dispute, the Client <strong>must</strong> first contact the Provider in writing to attempt a resolution.</p>
              <p>7.2. <strong>False Chargebacks:</strong> Any bad-faith or "friendly fraud" chargeback initiated by the Client will be defended with full evidentiary logs including signed SOWs, IP access logs, GitHub commit timestamps, and communication records.</p>
              <p>7.3. <strong>Chargeback Penalties:</strong> If a chargeback is subsequently decided in favor of the Provider, the Client shall be liable for an administrative penalty of <strong>£100 ($125)</strong> per dispute to cover Stripe’s penalty fees and internal labor costs.</p>
            </LegalSection>

            <LegalSection index={8} title="Project Delays and Refunds">
              <p>8.1. Delays caused by the Client's failure to provide "Necessary Assets" (graphics, copy, access) do not constitute grounds for a refund. We reserve the right to prioritize other active client work while the project is in a stalled state.</p>
            </LegalSection>

            <LegalSection index={9} title="Third-Party Hard Costs">
              <p>9.1. Fees paid on behalf of the Client for third-party assets (e.g., specific domain names, premium Typeface licenses, Vercel hosting credits) are <strong>universally non-refundable</strong>.</p>
            </LegalSection>

            <LegalSection index={10} title="Governing Jurisdiction">
              <p>10.1. This Refund Policy is governed by the laws of <strong>England and Wales</strong>. By completing a transaction via Stripe, the Client acknowledges and explicitly accepts this Policy in its entirety.</p>
            </LegalSection>
          </LegalLayout>
        </div>
      </Section>
    </main>
  );
};
