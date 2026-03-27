import { useEffect } from 'react';
import { Section } from '../../components/Section/Section';
import { Link } from 'react-router-dom';
import { LegalLayout, LegalSection } from './LegalComponents';

export const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Section id="terms-of-service">
        <div className="container">
          <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>&larr; Back to Home</Link>
          <LegalLayout title="Terms & Conditions of Service" lastUpdated="March 23, 2026">
            <LegalSection index={1} title="Interpretation and Definitions">
              <p>1.1. In these Terms and Conditions ("the Agreement"), the following expressions shall have the following meanings:</p>
              <ul>
                <li><strong>"The Provider"</strong> refers to Webforge LTD, a company registered in England and Wales (Company No: 16685746).</li>
                <li><strong>"The Client"</strong> refers to any individual, firm, or corporate entity engaging the services of the Provider.</li>
                <li><strong>"The Services"</strong> refers to the web development, UI/UX design, technical architecture, and consulting services provided.</li>
                <li><strong>"The Deliverables"</strong> refers to the final source code, design assets, and documentation produced by the Provider for the Client.</li>
              </ul>
            </LegalSection>

            <LegalSection index={2} title="Basis of Engagement">
              <p>2.1. These Terms apply to all professional engagements between the Provider and the Client to the exclusion of any other terms that the Client seeks to impose or incorporate.</p>
              <p>2.2. A formal "Statement of Work" (SOW) or "Proposal" will be issued for each project. The Client's acceptance of the SOW, whether via signature or payment of a deposit, constitutes a legally binding contract under the laws of England and Wales.</p>
            </LegalSection>

            <LegalSection index={3} title="Professional Fees and Payment Structure">
              <p>3.1. All fees are quoted in Euro (€) or GBP (£) as specified in the SOW. VAT will be applied at the prevailing UK rate where applicable.</p>
              <p>3.2. <strong>Consultation Strategy Fee:</strong> The initial €100 discovery fee is a non-refundable professional consultation fee. This fee reserves a dedicated engineering time-slot and covers the cost of pre-project technical research.</p>
              <p>3.3. <strong>Stripe Payments:</strong> All digital transactions are processed through Stripe Inc. By engaging our services, the Client agrees to be bound by the Stripe Services Agreement and facilitates the Provider to securely tokenise their payment methods for milestone billing.</p>
            </LegalSection>

            <LegalSection index={4} title="Milestones and Performance">
              <p>4.1. Projects are typically divided into three (3) primary milestones: (a) Deposit/Discovery, (b) Beta/Development, and (c) Final Delivery.</p>
              <p>4.2. Timeline estimates provided in the SOW are given in good faith but do not constitute a "time is of the essence" clause. The Provider shall not be liable for reasonable delays caused by technical complexity or third-party API dependencies.</p>
            </LegalSection>

            <LegalSection index={5} title="Client Obligations and Material Provision">
              <p>5.1. The Client must provide all "Necessary Assets" (logos, copy, API keys, credentials) within five (5) working days of the Provider's request. Failure to do so may result in the project being moved to a "Hibernation State," requiring a reactivation fee of £500.</p>
              <p>5.2. The Client is responsible for ensuring all provided content does not infringe on third-party intellectual property rights.</p>
            </LegalSection>

            <LegalSection index={6} title="Intellectual Property Rights (IPR)">
              <p>6.1. <strong>Transfer of Ownership:</strong> All copyright and IPR in the unique Deliverables created for the Client shall remain the property of the Provider until all outstanding invoices related to those Deliverables have been paid in full and cleared.</p>
              <p>6.2. <strong>Provider Background IP:</strong> The Provider retains all rights to its background codebases, boilerplates, and modular libraries. The Client is granted a perpetual, non-exclusive, non-transferable license to use such background IP as part of the Deliverables.</p>
              <p>6.3. <strong>Portfolio Rights:</strong> Unless explicitly prohibited via a separate Non-Disclosure Agreement (NDA), the Provider reserves the right to display the project in its professional portfolio and case studies.</p>
            </LegalSection>

            <LegalSection index={7} title="Revisions and Change Management">
              <p>7.1. Each SOW includes a specified number of "Revision Cycles" (typically two). A "Revision" is defined as a minor adjustment to an existing element that does not fundamentally alter the agreed-upon technical architecture.</p>
              <p>7.2. "Scope Creep"—defined as requests for new features, pages, or logic not in the original SOW—will be billed at the Provider's prevailing hourly rate of £150 / hour.</p>
            </LegalSection>

            <LegalSection index={8} title="Warranties and Technical Support">
              <p>8.1. The Provider warrants that the Deliverables will perform materially in accordance with the SOW for a period of thirty (30) days post-launch ("The Warranty Period").</p>
              <p>8.2. This warranty is void if the Client or a third party modifies the source code after delivery. Ongoing technical support requires a separate "Maintenance Retainer."</p>
            </LegalSection>

            <LegalSection index={9} title="Limitation of Liability">
              <p>9.1. To the fullest extent permitted by law, the Provider's total aggregate liability for any claim arising out of this Agreement shall be strictly limited to the total fees paid by the Client for the specific phase of work in dispute.</p>
              <p>9.2. The Provider shall not be liable for any loss of profits, loss of anticipated savings, or any indirect or consequential loss arising from technical outages or software bugs.</p>
            </LegalSection>

            <LegalSection index={10} title="Termination and Project Abandonment">
              <p>10.1. Either party may terminate this Agreement with fourteen (14) days' written notice if the other party commits a "Material Breach" that remains uncured.</p>
              <p>10.2. A project is deemed "Abandoned" if the Client fails to communicate for thirty (30) consecutive days. In such cases, all paid fees are forfeited, and the Agreement is terminated for cause.</p>
            </LegalSection>

            <LegalSection index={11} title="Force Majeure">
              <p>11.1. Neither party shall be in breach for delays or failures in performance resulting from circumstances beyond their reasonable control, including but not limited to global cloud infrastructure outages, civil unrest, or pandemics.</p>
            </LegalSection>

            <LegalSection index={12} title="Confidentiality and Data Protection">
              <p>12.1. Both parties agree to maintain strict confidentiality regarding proprietary business logic, non-public APIs, and trade secrets for a period of five (5) years following the termination of this Agreement.</p>
              <p>12.2. Processing of personal data shall be governed by our Privacy Policy and the UK-GDPR.</p>
            </LegalSection>

            <LegalSection index={13} title="Third-Party Dependencies">
              <p>13.1. The performance of the Deliverables may depend on third-party tools (e.g., AWS, Stripe, GitHub). The Provider is not responsible for any downtime or API changes initiated by these third parties.</p>
            </LegalSection>

            <LegalSection index={14} title="Miscellaneous Provisions">
              <p>14.1. <strong>Severability:</strong> If any provision of this Agreement is found to be unenforceable, the remainder of the Agreement shall remain in full force and effect.</p>
              <p>14.2. <strong>No Waiver:</strong> A failure to exercise any right under this Agreement does not constitute a waiver of that right.</p>
            </LegalSection>

            <LegalSection index={15} title="Governing Law and Jurisdiction">
              <p>15.1. This Agreement and any dispute or claim arising out of it shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>.</p>
              <p>15.2. The parties irrevocably agree that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim.</p>
            </LegalSection>
          </LegalLayout>
        </div>
      </Section>
    </main>
  );
};
