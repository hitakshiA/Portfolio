import { ArrowUpRight } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Hedera Apex Hackathon 2026",
      highlight: "3rd Place - Sustainability Track",
      description:
        "Built Hestia under Miny Labs - a wildfire-risk credit ledger on Hedera Guardian that translates wildfire exposure into auditable, on-chain credit data institutions can trust.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7470097398459961345/",
    },
    {
      title: "Novartis NEST 2.0",
      highlight: "Runner-Up - Grand Finale",
      description:
        "Led NEXUS CDM, a 5-agent clinical data management platform making pharma data workflows faster, smarter, and more reliable through coordinated AI agents.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7468185880160092161/",
    },
    {
      title: "SF Agentic Commerce x402",
      highlight: "1st Place - SKALE Track",
      description:
        "PIXIE, an encrypted AI trading arena where ten autonomous agents execute real DEX swaps with every strategy sealed end-to-end through BITE threshold encryption.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7467592677568446464/",
    },
    {
      title: "DomainFi Challenge",
      highlight: "Track Winner - DoraHacks",
      description:
        "Won the Trait Scoring & Analytics track with Bella (Project Peter) - an AI intelligence layer using Doma's on-chain data for real-time domain valuations and rarity analytics.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7462147931119382528/",
    },
    {
      title: "Research Publication",
      highlight: "Cloud Computing",
      description:
        "Co-authored a research paper on privacy preservation techniques in cloud computing.",
      link: "https://www.researchgate.net/publication/400601859_A_Memetic-Enhanced_Glowworm_Swarm_Optimization_Algorithm_with_Adaptive_Particle_Refinement_for_Secure_and_Privacy-Aware_Medical_Cloud_Computing",
    },
    {
      title: "Pirates of the Coral-Bean Hackathon",
      highlight: "Track 1 Winner",
      description:
        "Won Track 1 with Manthan, an autonomous agent that resolves B2B chargebacks in under 60 seconds by reading Stripe, CRM, product logs, and support inbox in parallel with one-click approval.",
      link: "https://x.com/WeMakeDevs/status/2065792381019128011?s=20",
    },
  ];

  return (
    <section id="achievements" className="bg-card">
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <p className="text-eyebrow font-display text-foreground mb-4">Achievements</p>
        <h2 className="text-section font-display text-foreground mb-12 max-w-3xl">
          Recognition along the way.
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {achievements.map((a) => (
            <div key={a.title} className="surface-recessed p-8 flex flex-col">
              <p className="text-caption uppercase tracking-wider text-[hsl(211,100%,40%)] mb-3 min-h-[2.25rem] md:min-h-[2.25rem]">{a.highlight}</p>
              <h3 className="font-display text-[24px] font-semibold tracking-tight text-foreground mb-3 min-h-[4rem] leading-tight">
                {a.title}
              </h3>
              <p className="text-[17px] text-muted-foreground leading-snug flex-1">{a.description}</p>
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-[14px] text-[hsl(211,100%,40%)] hover:underline mt-5"
                >
                  View <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
