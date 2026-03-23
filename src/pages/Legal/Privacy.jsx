import { useEffect } from 'react';
import { Section } from '../../components/Section/Section';
import { Link } from 'react-router-dom';
import { LegalLayout, LegalSection } from './LegalComponents';

export const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Section id="privacy-policy">
        <div className="container">
          <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>&larr; Back to Home</Link>
          <LegalLayout title="Privacy & Data Protection Policy" lastUpdated="March 23, 2026">
            <LegalSection index={1} title="Data Controller Identification">
              <p>1.1. <strong>Webforge LTD</strong>, a company registered in England and Wales (Company No: 16685746), acts as the <strong>"Data Controller"</strong> for any personal data processed under this Privacy Policy. For any data protection inquiries, contact our Data Protection Officer at privacy@webforgeltd.co.uk.</p>
            </LegalSection>

            <LegalSection index={2} title="Scope and Applicability">
              <p>2.1. This Policy applies across our website (webforgeltd.co.uk) and all professional digital service engagements. We are committed to protecting our Clients' privacy in accordance with <strong>UK-GDPR</strong> and the <strong>Data Protection Act 2018</strong>.</p>
            </LegalSection>

            <LegalSection index={3} title="Information Collected Directly">
              <p>3.1. We collect personal identifiers including full names, professional email addresses, phone numbers, and corporate titles when the Client initiates inquiries, books a technical consultation, or executes a Statement of Work.</p>
            </LegalSection>

            <LegalSection index={4} title="Information Collected Automatically (Cookie Policy)">
              <p>4.1. Our servers use technical cookies to maintain site security and session integrity. With explicit consent, we may use performance cookies (Google Analytics, Hotjar) to record browser types, IP mapping, and referral URLs. The Client can adjust their <strong>Cookie Preferences</strong> via the site banner at any time.</p>
            </LegalSection>

            <LegalSection index={5} title="Financial Data and Stripe Integration">
              <p>5.1. <strong>Stripe Processing:</strong> All payments are processed via Stripe Inc. Webforge LTD does not store full credit card numbers or raw bank credentials on our infrastructure. Stripe acts as an independent Data Controller for the financial processing aspect. We only process tokenised confirmation of payments made.</p>
            </LegalSection>

            <LegalSection index={6} title="Lawful Basis for Processing">
              <p>6.1. Under UK-GDPR, we process data under the following lawful bases:</p>
              <ul>
                <li><strong>Contractual Necessity:</strong> To deliver the Bespoke Services and Deliverables.</li>
                <li><strong>Legal Obligation:</strong> For UK tax, VAT, and accounting compliance.</li>
                <li><strong>Legitimate Interests:</strong> For technical debugging, site security, and B2B relationship management.</li>
                <li><strong>Explicit Consent:</strong> For non-essential marketing communications.</li>
              </ul>
            </LegalSection>

            <LegalSection index={7} title="Data Use and Categorisation">
              <p>7.1. We categorise and use personal data strictly for:</p>
              <ul>
                <li>Architecting software and managing GitHub/Cloud infrastructure access.</li>
                <li>Processing Stripe invoices and milestone payments.</li>
                <li>Providing 30-day post-launch technical warranty support.</li>
              </ul>
            </LegalSection>

            <LegalSection index={8} title="International Data Transfers (Third Countries)">
              <p>8.1. Data may be stored on international cloud servers (AWS, Vercel, Supabase). Transfers to countries outside the UK/EEA are conducted exclusively under <strong>Standard Contractual Clauses</strong> (SCCs) or UK-equivalent Addendums to ensure an adequate level of protection.</p>
            </LegalSection>

            <LegalSection index={9} title="Data Retention and Lifecycle">
              <p>9.1. We retain Client project data for the duration of the engagement and up to <strong>seven (7) years</strong> thereafter to comply with UK HMRC tax and audit requirements. Marketing identifiers are purged after thirty-six (36) months of inactivity.</p>
            </LegalSection>

            <LegalSection index={10} title="Data Sharing and Sub-Processors">
              <p>10.1. We do not sell or lease personal data. We share data only with the following sub-processors:</p>
              <ul>
                <li>Stripe Inc (Payment processing).</li>
                <li>Amazon Web Services / Vercel (Hosting infrastructure).</li>
                <li>GitHub Inc (Source code management).</li>
              </ul>
            </LegalSection>

            <LegalSection index={11} title="Individual Data Subject Rights">
              <p>11.1. Under UK-GDPR, the Client has the right to: (a) <strong>The Right of Access</strong> (Subject Access Requests), (b) <strong>The Right to Erasure</strong> ("Right to be Forgotten"), (c) <strong>The Right to Rectification</strong>, and (d) <strong>The Right to Object</strong> to processing based on legitimate interests. To exercise these rights, please contact us via our registered email.</p>
            </LegalSection>

            <LegalSection index={12} title="Security and Technical Safeguards">
              <p>12.1. We implement rigorous technical measures including end-to-end TLS encryption, Multi-Factor Authentication (MFA) for our engineering stack, and encrypted environment variables for all API keys and secrets.</p>
            </LegalSection>

            <LegalSection index={13} title="Data Breaches and Notifications">
              <p>13.1. In the event of a high-risk data breach affecting the Client's personal data, we commit to notifying the Client and the <strong>Information Commissioner's Office (ICO)</strong> within <strong>72 hours</strong> of discovery.</p>
            </LegalSection>

            <LegalSection index={14} title="External Links and Jurisdictions">
              <p>14.1. Our website may contain links to external project management tools (Slack, Linear, Jira). We are not responsible for the privacy practices of these third-party platforms once the Client exits our domain.</p>
            </LegalSection>

            <LegalSection index={15} title="Modifications and Governing Law">
              <p>15.1. This Privacy Policy is governed by the laws of England and Wales. We reserve the right to update this policy as regulatory frameworks evolve. Continuing to engage our services after such updates constitute consent to the revised Policy.</p>
            </LegalSection>
          </LegalLayout>
        </div>
      </Section>
    </main>
  );
};
