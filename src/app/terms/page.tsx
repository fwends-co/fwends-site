/* DRAFT — needs legal review before app launch. */

import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of service",
  description:
    "The terms that apply when you use the FWENDS website and, once it launches, the FWENDS app, operated by Fwends LLC.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of service" updated="October 8, 2026">
      <p>
        These terms apply to the FWENDS website at fwends.co and, once it launches, the FWENDS app
        (together, the &ldquo;Service&rdquo;), operated by Fwends LLC, an Arizona limited liability
        company (&ldquo;Fwends,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By using the Service you
        agree to them. If you do not agree, please do not use it.
      </p>

      <h2>Pre-launch</h2>
      <p>
        FWENDS is not yet available. Joining the waitlist does not create an account, guarantee
        access, or promise a launch date. Features described on the website may change before launch
        or may not ship.
      </p>

      <h2>Who can use FWENDS</h2>
      <p>
        You must be at least 13 years old (or the minimum age in your country) and able to form a
        binding agreement. If you are under 18, you need a parent or guardian&rsquo;s permission.
      </p>

      <h2>Your account (app)</h2>
      <p>
        You are responsible for your account and for keeping your login details secure. Give us
        accurate information, and tell us if you think someone else is using your account.
      </p>

      <h2>Meeting in person, safely</h2>
      <p>
        FWENDS is built around meeting people in real life. You are responsible for your own safety
        and conduct when you meet anyone. Use good judgment, meet in public places when you do not
        know someone, and never put yourself or others at risk to earn or collect anything in the
        app. We do not screen or vouch for the people you meet.
      </p>

      <h2>Location and proximity</h2>
      <p>
        To create shared blocks, the app uses location and nearby-device signals as described in our
        Privacy Policy. You may not fake, spoof or manipulate this data, or use the Service to
        follow, track or harass anyone.
      </p>

      <h2>Blocks, items and virtual currency</h2>
      <p>
        Blocks, items and any in-game currency are virtual goods with no cash value. They are
        licensed to you for use in the Service, not sold, and may not be traded, sold or transferred
        for real money outside the Service unless we expressly allow it. We may change, rebalance,
        reset or remove virtual goods as the game evolves.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Break the law, or harass, threaten or discriminate against anyone.</li>
        <li>Impersonate others, or create accounts in bulk or by automated means.</li>
        <li>Cheat, exploit bugs, or interfere with or reverse engineer the Service.</li>
        <li>Upload content that is unlawful, infringing, or that you do not have the right to share.</li>
      </ul>

      <h2>Your content</h2>
      <p>
        You keep ownership of what you submit. You give Fwends a worldwide, non-exclusive license to
        host, display and use that content to operate and improve the Service, including showing it
        to the fwends you share a block with.
      </p>

      <h2>Our property</h2>
      <p>
        The FWENDS name, logo, software and design belong to Fwends LLC and are protected by law. You
        may not use them without our written permission.
      </p>

      <h2>Ending your use</h2>
      <p>
        You can stop using the Service at any time. We may suspend or end access if you break these
        terms or if we need to protect the Service or other people.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without
        warranties of any kind, to the extent the law allows. We do not guarantee that it will be
        uninterrupted, error-free or that location features will always be accurate.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent the law allows, Fwends LLC is not liable for indirect, incidental or
        consequential damages, or for anything that happens between you and other people you meet.
        Our total liability for any claim is limited to the greater of the amount you paid us in the
        past 12 months or $100.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Arizona, without regard to conflict-of-law
        rules. Disputes will be brought in the state or federal courts located in Arizona, unless the
        law requires otherwise.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. We will change the date above and, for material changes, tell you
        in the app or by email. Continuing to use the Service means you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Fwends LLC, Arizona, United States. Email:{" "}
        <a href="mailto:hello@fwends.co" className="link-chip">
          hello@fwends.co
        </a>
      </p>
    </LegalPage>
  );
}
