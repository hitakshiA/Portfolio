import { useState } from "react";
import projectPeterImg from "@/assets/project-peter.png";
import aasoScreenshot from "@/assets/aaso-screenshot.png";
import bigbuddyLogin from "@/assets/bigbuddy-login.png";
import bigbuddySearch from "@/assets/bigbuddy-search.png";
import bigbuddySchedule from "@/assets/bigbuddy-schedule.png";
import bigbuddyReviews from "@/assets/bigbuddy-reviews.png";
import manthanScreenshotAsset from "@/assets/manthan-screenshot-v2.png.asset.json";
const manthanScreenshot = manthanScreenshotAsset.url;
import loanDemoScreenshotAsset from "@/assets/loan-demo-screenshot.png.asset.json";
const loanDemoScreenshot = loanDemoScreenshotAsset.url;
import id3aScreenshot from "@/assets/id3a-screenshot.png";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

const BigBuddyCarousel = ({
  images,
  title,
  onOpen,
}: {
  images: string[];
  title: string;
  onOpen: (src: string, alt: string) => void;
}) => {
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({ 0: true });
  const change = (next: number) => {
    if (!loaded[next]) {
      // preload
      const img = new Image();
      img.src = images[next];
      img.onload = () => setLoaded((l) => ({ ...l, [next]: true }));
    }
    setIdx(next);
  };
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    change((idx - 1 + images.length) % images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    change((idx + 1) % images.length);
  };
  const isLoading = !loaded[idx];
  return (
    <div className="relative h-full w-full group/carousel bg-background flex items-center justify-center">
      <img
        src={images[idx]}
        alt={`${title} screenshot ${idx + 1}`}
        onClick={() => onOpen(images[idx], `${title} ${idx + 1}`)}
        onLoad={() => setLoaded((l) => ({ ...l, [idx]: true }))}
        className={`w-auto h-72 md:h-[420px] max-w-full object-contain cursor-pointer transition-opacity duration-200 ${isLoading ? "opacity-0" : "opacity-100"}`}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-foreground/20 border-t-foreground animate-spin" />
        </div>
      )}
      <button
        onClick={prev}
        aria-label="Previous screenshot"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 backdrop-blur flex items-center justify-center text-foreground opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next screenshot"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 backdrop-blur flex items-center justify-center text-foreground opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              change(i);
            }}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-6 bg-foreground" : "w-1.5 bg-foreground/40 hover:bg-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const projects = [
    {
      title: "Manthan",
      category: "AI Agent",
      tech: ["TypeScript", "FastAPI", "AI Agent", "Data Analysis"],
      description: "Billing Ops Agent for Enterprises. Connects to your Stripe, CRM, and Customer Support to automate billing disputes.",
      github: "https://github.com/hitakshiA/Manthan",
      liveUrl: "https://manthan-ui.vercel.app",
      image: manthanScreenshot,
    },
    {
      title: "Loan Demo",
      category: "Voice AI",
      tech: ["TypeScript", "Voice AI", "Video Avatar", "Computer Vision"],
      description: "Conversational, video-based loan application demo. Customers join a video call with an AI agent named Priya, speak naturally in Hindi, show their PAN card to camera for verification, and receive a personalized loan offer - all in under 7 minutes. No forms, no document uploads, no branch visits.",
      github: "https://github.com/hitakshiA/ai-video-loan-onboarding",
      liveUrl: null,
      image: loanDemoScreenshot,
    },
    {
      title: "id3a",
      category: "Multi Modal AI",
      tech: ["Next.js", "TypeScript", "AI/ML", "Video Generation"],
      description: "Type one sentence. Get a 60-second narrated pitch video - slides, b-roll, voice, music. Wizard-driven editor with a locked styleSheet, async background renders, and the share link delivered by email.",
      github: "https://github.com/hitakshiA/id3a",
      liveUrl: null,
      image: id3aScreenshot,
    },
    {
      title: "Project P.E.T.E.R.",
      category: "Next.js",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Prisma", "AI/ML"],
      description: "An AI-powered domain intelligence platform built for the Doma Protocol ecosystem. Combines traditional Web2 metrics with unique on-chain data.",
      github: "https://github.com/Project-Peter-Doma",
      liveUrl: "https://www.projectpeter.xyz",
      image: projectPeterImg,
    },
    {
      title: "BigBuddy",
      category: "Kotlin",
      tech: ["Java", "Android SDK", "XML", "Android Studio"],
      description: "A mentorship and guidance mobile application bridging users with domain experts in mental health, career planning, and skill development.",
      github: "https://github.com/hitakshiA/BIGBUDDY",
      liveUrl: null,
      image: bigbuddyLogin,
      images: [bigbuddyLogin, bigbuddySearch, bigbuddySchedule, bigbuddyReviews],
    },
    {
      title: "AASO",
      category: "TypeScript",
      tech: ["TypeScript", "VS Code API", "Node.js", "Snyk", "SonarQube"],
      description: "Automated Application Security Optimizer - a VS Code extension that helps developers identify and fix vulnerabilities using Snyk, SonarQube, and AI-powered analysis with Gemini.",
      github: "https://github.com/hitakshiA/AASO_Extension",
      liveUrl: null,
      image: aasoScreenshot,
    },
  ];

  return (
    <section id="projects" className="bg-background">
      <ImageLightbox
        src={lightboxImage?.src || ""}
        alt={lightboxImage?.alt || ""}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <p className="text-eyebrow font-display text-foreground mb-4">Projects</p>
        <h2 className="text-section font-display text-foreground mb-14 max-w-3xl">
          Selected work.
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article key={project.title} className="surface-card overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0 items-stretch">
                <div
                  className={`bg-background order-1 ${project.images && project.images.length > 1 ? '' : 'cursor-pointer'} ${index % 2 === 1 ? 'md:order-2' : ''}`}
                  onClick={() => {
                    if (project.images && project.images.length > 1) return;
                    if (project.image) setLightboxImage({ src: project.image, alt: project.title });
                  }}
                >
                  {project.images && project.images.length > 1 ? (
                    <BigBuddyCarousel
                      images={project.images}
                      title={project.title}
                      onOpen={(src, alt) => setLightboxImage({ src, alt })}
                    />
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 md:h-full md:min-h-[420px] object-cover object-top"
                    />
                  ) : null}
                </div>

                <div className={`p-8 md:p-12 flex flex-col justify-center order-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="text-caption uppercase tracking-wider text-muted-foreground mb-3">
                    0{index + 1} - {project.category}
                  </p>
                  <h3 className="font-display text-[32px] md:text-[40px] font-bold tracking-tight text-foreground mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[17px] text-muted-foreground leading-relaxed mb-6 max-w-md">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-7">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[12px] text-muted-foreground bg-background rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 items-center">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-azure"
                      >
                        Visit
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      Source <ArrowUpRight className="w-4 h-4 ml-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
