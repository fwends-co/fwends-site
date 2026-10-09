import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Fwends LLC collects, uses and protects your information, including location and proximity data used to confirm when fwends meet.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="October 9, 2026">
      <p>
        <strong>The short version:</strong> Fwends LLC operates FWENDS. We collect only what we need
        to run the app, manage the waitlist, and confirm real-world meetups. We never sell your data
        or share your phone number for marketing, and you can delete your account in the app at any
        time.
      </p>
      <p>Effective October 9, 2026.</p>

      <h2>Who we are</h2>
      <p>
        FWENDS (the &ldquo;App&rdquo;) and the website at fwends.co (the &ldquo;Site&rdquo;) are
        operated by <strong>Fwends LLC</strong>, an Arizona limited liability company (&ldquo;Fwends
        LLC&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). Fwends LLC is
        responsible for the personal information described in this policy.
      </p>
      <p>
        Contact:{" "}
        <a href="mailto:hello@fwends.co" className="link-chip">
          hello@fwends.co
        </a>
      </p>

      <h2>What this policy covers</h2>
      <p>
        This policy explains what information we collect through the Site and through the App,
        including when you join the FWENDS waitlist in the App. It also explains how we use that
        information, who we share it with, and the choices you have.
      </p>

      <h2>Information we collect on the Site</h2>
      <h3>Messages you send us</h3>
      <p>
        The Site has no sign-up forms and does not collect personal information on its own. When you
        email us, we receive your email address, your name if you include it, and anything you write
        in your message. We use it to reply to you and to keep a record of our correspondence.
      </p>
      <h3>Analytics and logs</h3>
      <p>
        The Site does not currently use advertising cookies, tracking pixels, or third-party
        analytics. Our hosting provider automatically processes basic technical information such as
        IP address, browser type, and the pages requested, so it can deliver the Site and keep it
        secure. If we add privacy-respecting analytics in future, we will use it only to understand
        overall traffic (for example, which pages are visited) and will update this policy first.
      </p>

      <h2>Information we collect in the App</h2>
      <p>We collect the following when you use the App, including before it is generally available:</p>
      <h3>Waitlist information</h3>
      <p>
        You join the FWENDS waitlist in the App by entering your mobile phone number. We may send a
        one-time code by text message to confirm that the number is yours. We collect:
      </p>
      <ul>
        <li>Your mobile phone number.</li>
        <li>The date and time you joined.</li>
      </ul>
      <p>
        We use your phone number to confirm it, to hold your place on the waitlist, and, when you
        are let in, to sign you in to your account. We do not send waitlist updates or announcements
        by text message. Joining the waitlist does not create a public profile, and other users
        cannot see that you joined. Joining the waitlist does not guarantee access to the App.
      </p>
      <p>
        By submitting a phone number, you confirm that you are the subscriber or authorised user of
        that number and that you are at least 13 years old. If your number changes or you stop using
        it, please tell us so we can update or remove it.
      </p>
      <h3>Account information</h3>
      <ul>
        <li>Your phone number, used to sign you in with a one-time code.</li>
        <li>Your username and the appearance you choose for your in-app character.</li>
      </ul>
      <h3>Social information</h3>
      <ul>
        <li>
          The people you connect with, friend requests you send and receive, and people you remove
          or block.
        </li>
        <li>
          Your meetups: when they happened, who took part, and any notes you add to a memory block.
        </li>
        <li>The collectible items you earn.</li>
      </ul>
      <h3>Location and proximity information</h3>
      <p>
        FWENDS exists to recognise when people meet in person. To confirm a meetup, the App may use
        a code that is scanned between two nearby phones, and, with your permission, your
        device&rsquo;s location or proximity signals at the moment you link up. We use this
        information only to confirm that the people in a meetup were together, to prevent fake
        meetups, and to record the meetup in your memory block.
      </p>
      <ul>
        <li>
          We will ask for permission before accessing location, and you can turn it off at any time
          in your device settings.
        </li>
        <li>We do not track your location in the background, and we do not sell location data.</li>
        <li>Your precise location is never shown to other users.</li>
      </ul>
      <h3>Device and diagnostic information</h3>
      <p>
        Basic information such as device model, operating system version, app version, and crash
        reports, used to keep the App working and fix problems.
      </p>

      <h2>Text messages</h2>
      <p>
        We use text messages only to send one-time sign-in and verification codes. When you enter
        your phone number in the App and request a code, you consent to receive that code by text
        message from Fwends LLC at that number.
      </p>
      <ul>
        <li>
          <strong>Only when you ask:</strong> we send a code only when you request one, for example
          when you join the waitlist or sign in. We do not send marketing, promotional, or other
          messages by text.
        </li>
        <li>
          <strong>Cost:</strong> message and data rates may apply, according to your mobile plan.
        </li>
        <li>
          <strong>Opting out:</strong> you can stop receiving codes by not requesting them. If you
          reply <strong>STOP</strong> to a code message, you will not receive further codes at that
          number, which means you will not be able to sign in with it.
        </li>
        <li>Consent to receive text messages is not a condition of any purchase.</li>
        <li>Mobile carriers are not liable for delayed or undelivered messages.</li>
      </ul>
      <p>
        <strong>
          We do not sell, rent, or share your phone number or text-message consent with third
          parties or affiliates for their marketing or promotional purposes.
        </strong>{" "}
        We share your phone number only with the service providers that deliver our sign-in codes
        and run our sign-in system, and only so they can provide those services to us.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To provide, operate, and secure the App and the Site.</li>
        <li>To sign you in and keep your account safe.</li>
        <li>To confirm in-person meetups and create memory blocks and collectibles.</li>
        <li>To respond to your messages and provide support.</li>
        <li>
          To manage the waitlist, and to send you sign-in and verification codes when you request
          them.
        </li>
        <li>
          To prevent fraud, abuse, and violations of our <Link href="/terms">Terms of Service</Link>,
          and to comply with law.
        </li>
      </ul>
      <p>We do not sell your personal information, and we do not use it for third-party advertising.</p>

      <h2>How we share information</h2>
      <ul>
        <li>
          <strong>With other users you choose.</strong> Your username and character are visible to
          people you connect with. A memory block is shared with the people who were at that
          meetup.
        </li>
        <li>
          <strong>With service providers.</strong> We use trusted providers to host our website and
          databases, authenticate accounts, and send sign-in codes by text message. They may only
          use your information to provide services to us and are not permitted to use it for their
          own marketing.
        </li>
        <li>
          <strong>For legal reasons.</strong> If required by law, or to protect the rights, safety,
          and property of our users, the public, or Fwends LLC.
        </li>
        <li>
          <strong>In a business transfer.</strong> If Fwends LLC is involved in a merger,
          acquisition, or sale of assets, subject to this policy.
        </li>
      </ul>

      <h2>How long we keep it</h2>
      <p>
        We keep personal information for as long as your account is active or as needed to provide
        the service. You can delete your account at any time in the App, from Settings. Deletion is
        immediate and permanent: your account, profile, character, memory blocks, connections,
        requests, and phone number are deleted. Other people who were at a meetup with you keep
        their own memory block of it, but it no longer identifies you. Copies in our service
        providers&rsquo; routine backups are removed as those backups expire. We may keep limited
        information where we must to meet legal obligations, resolve disputes, or enforce our Terms.
        If you join the waitlist, we keep your phone number and consent record while you are on the
        waitlist. When you create an account, your phone number becomes part of your account. If you
        ask us to remove you from the waitlist, we delete your phone number within a reasonable
        period, except anything we must keep to meet legal obligations.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        You can delete your account and its personal information yourself at any time in the App,
        from Settings. You can also ask us to access, correct, or export your personal information,
        or to remove your phone number from the waitlist, by emailing{" "}
        <a href="mailto:hello@fwends.co" className="link-chip">
          hello@fwends.co
        </a>
        . Depending on where you live, you may have additional rights under local law, and we will
        honour them. We will not discriminate against you for exercising your rights.
      </p>
      <p>
        You can turn off location access, notifications, and other device permissions at any time in
        your device settings.
      </p>

      <h2>Children</h2>
      <p>
        FWENDS is not directed to children under 13, and we do not knowingly collect personal
        information from them. If you believe a child under 13 has given us information, contact us
        at{" "}
        <a href="mailto:hello@fwends.co" className="link-chip">
          hello@fwends.co
        </a>{" "}
        and we will delete it.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable technical and organisational measures to protect personal information,
        including encryption in transit. No system is completely secure, so we cannot guarantee
        absolute security.
      </p>

      <h2>Where data is processed</h2>
      <p>
        Fwends LLC is based in the United States, and your information is processed and stored in
        the United States.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. When we do, we will change the &ldquo;Last
        updated&rdquo; date above, and for material changes we will give notice on the Site or in
        the App.
      </p>

      <h2>Contact us</h2>
      <p>
        Fwends LLC
        <br />
        Email:{" "}
        <a href="mailto:hello@fwends.co" className="link-chip">
          hello@fwends.co
        </a>
        <br />
        Website: <Link href="/">fwends.co</Link>
      </p>
    </LegalPage>
  );
}
