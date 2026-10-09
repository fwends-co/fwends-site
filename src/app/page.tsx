import Logo from "@/components/Logo";
import WaitlistForm from "@/components/WaitlistForm";
import BlockMotif, { type BlockScene } from "@/components/BlockMotif";

const steps: { scene: BlockScene; title: string; body: string }[] = [
  {
    scene: "meet",
    title: "Meet someone in person",
    body: "Be in the same place as another fwend. No texting, no swiping. You just have to show up.",
  },
  {
    scene: "share",
    title: "Create a shared block",
    body: "When you are near each other, the app makes one block between you. It is proof that you were there together.",
  },
  {
    scene: "collect",
    title: "Collect it and use it",
    body: "The block becomes a memory you keep. It can also become an item or currency in the game world.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section text-center" aria-labelledby="hero-title">
        <div className="container-text flex flex-col items-center">
          <Logo priority className="w-full max-w-[360px] sm:max-w-[520px]" />
          <h1 id="hero-title" className="t-hero mt-12 max-w-[760px]">
            Meet in real life. Keep what you make together.
          </h1>
          <p className="t-lead-airy mt-6 max-w-[640px]">
            FWENDS rewards you for showing up. Every time two fwends meet, they make something
            real.
          </p>
          <div id="waitlist" className="mt-10 w-full max-w-[520px] text-left">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" aria-labelledby="how-title">
        <div className="container-grid">
          <p className="t-eyebrow">How it works</p>
          <h2 id="how-title" className="t-display mt-3 max-w-[720px]">
            Three steps. One of them is leaving the house.
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="card flex flex-col gap-6">
                <BlockMotif scene={step.scene} />
                <div>
                  <p className="t-eyebrow">Step {i + 1}</p>
                  <h3 className="t-tagline mt-2">{step.title}</h3>
                  <p className="mt-3">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why IRL matters: the one Nightgrass exception, inset on the snow field */}
      <section className="px-6 py-6" aria-labelledby="why-title">
        <div className="dark-block on-dark container-grid px-6 py-20 sm:px-12 sm:py-24">
          <div className="container-text text-center">
            <p className="t-eyebrow">Why it matters</p>
            <h2 id="why-title" className="sr-only">
              Why meeting in real life matters
            </h2>
            <blockquote className="mx-auto mt-6 max-w-[820px]">
              <p className="t-display" style={{ color: "var(--color-body-on-dark)" }}>
                The best memories aren&rsquo;t posted. They&rsquo;re shared.
              </p>
            </blockquote>
            <p
              className="t-lead-airy mx-auto mt-8 max-w-[640px]"
              style={{ color: "var(--color-body-muted)" }}
            >
              Phones are good at keeping in touch and bad at being there. FWENDS only counts the
              time you spend in the same place, with someone real.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist again */}
      <section className="section text-center" aria-labelledby="join-title">
        <div className="container-text flex flex-col items-center">
          <h2 id="join-title" className="t-display max-w-[640px]">
            Be there when it opens.
          </h2>
          <p className="t-lead-airy mt-4 max-w-[560px]">
            Join the waitlist and we&rsquo;ll tell you the day FWENDS is ready.
          </p>
          <div className="mt-8 w-full max-w-[520px] text-left">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}
