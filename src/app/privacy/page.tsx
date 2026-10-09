/* DRAFT — needs legal review before app launch. */

import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Fwends LLC collects, uses and protects your information, including location and proximity data used to detect when fwends meet.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="October 8, 2026">
      <p>
        FWENDS is operated by Fwends LLC, an Arizona limited liability company (&ldquo;Fwends,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us&rdquo;). This policy explains what we collect, why, and the
        choices you have. It covers the website at fwends.co and, once it launches, the FWENDS app.
      </p>
      <p>
        FWENDS has not launched yet. Right now we only collect what is described under
        &ldquo;Waitlist&rdquo; and &ldquo;Website analytics.&rdquo; The other sections describe what
        we expect to collect when the app opens, so you can see our plans in advance.
      </p>

      <h2>Waitlist</h2>
      <p>
        If you join the waitlist, we collect your email address. We use it to tell you when FWENDS
        is ready and to send occasional updates about the launch. You can ask us to remove you at any
        time by emailing hello@fwends.co.
      </p>

      <h2>Website analytics</h2>
      <p>
        We may use privacy-minded analytics to understand how people use the website, such as which
        pages are visited, the device and browser type, and the approximate region. We do not use
        this data to identify you personally. Where the law requires it, we will ask for your consent
        before using non-essential cookies or similar technologies.
      </p>

      <h2>Account data (app)</h2>
      <p>When you create an account in the app, we expect to collect:</p>
      <ul>
        <li>Your email address or phone number, and a username you choose.</li>
        <li>Profile details you add, such as a display name or photo.</li>
        <li>Your fwends, the blocks you create, and the items you collect or use.</li>
        <li>Messages and reports you send to us, such as support requests.</li>
      </ul>

      <h2>Location and proximity data (app)</h2>
      <p>
        FWENDS works by detecting when two people are physically near each other. To do that, the app
        will ask for permission to use your device&rsquo;s location and nearby-device signals (such
        as Bluetooth). We use this data to:
      </p>
      <ul>
        <li>Detect that you and another fwend are in the same place at the same time.</li>
        <li>Create the shared block that records that meeting.</li>
        <li>Prevent cheating and abuse, such as fake or repeated meetings.</li>
      </ul>
      <p>
        We design the app to collect only what is needed to confirm a meeting. Location access is
        always optional and controlled by your device settings; if you turn it off, you will not be
        able to create blocks. A shared block records that a meeting happened and, where we choose to
        show it, a general place or time. We do not sell your location data. We will describe exact
        retention periods and any background-location behavior here before launch.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To run, secure and improve the website and the app.</li>
        <li>To create and show blocks, memories and items.</li>
        <li>To communicate with you about the waitlist, your account and important changes.</li>
        <li>To investigate abuse, enforce our Terms and comply with the law.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We share it only with:
      </p>
      <ul>
        <li>
          Other fwends, to the extent a shared block involves them (for example, they can see that
          you made a block together).
        </li>
        <li>
          Service providers that help us operate FWENDS, such as hosting, database, email and
          analytics providers, under contracts that limit how they can use your data.
        </li>
        <li>
          Authorities or other parties when the law requires it, or to protect people&rsquo;s safety
          and our rights.
        </li>
        <li>A successor, if Fwends LLC is part of a merger, sale or similar transaction.</li>
      </ul>

      <h2>Retention</h2>
      <p>
        We keep waitlist emails until the app launches and a reasonable time after, or until you ask
        us to delete them. We keep account data while your account is active and delete or anonymize
        it afterwards, except where we must keep it for legal or security reasons.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        You can ask to access, correct, export or delete your information, and you can withdraw
        consent where we rely on it. Depending on where you live, you may have additional rights under
        laws such as the CCPA/CPRA or the GDPR. Email hello@fwends.co and we will respond within a
        reasonable time. You can also control location and Bluetooth permissions in your device
        settings.
      </p>

      <h2>Children</h2>
      <p>
        FWENDS is not intended for children under 13 (or the higher minimum age in your country). We
        do not knowingly collect personal information from them. If you believe a child has given us
        information, contact us and we will delete it.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect your information. No
        system is perfectly secure, so we cannot guarantee absolute security.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy as FWENDS develops. We will change the date above and, for material
        changes, tell you in the app or by email.
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
