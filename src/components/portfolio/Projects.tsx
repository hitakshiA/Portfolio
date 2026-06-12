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
import { ArrowUpRight } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

const Projects = () => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const projects = [
    {
      title: "Manthan",
      category: "AI Agent",
      tech: ["TypeScript", "FastAPI", "AI Agent", "Data Analysis"],
      description: "Billing Ops Agent for Enterprises. Connects to your Stripe, CRM, and Customer Support to automate billing disputes.",
      github: "https://github.com/hitakshiA/Manthan",
      liveUrl: "https://manthan.quest",
      image: manthanScreenshot,
    },
    {
      title: "Loan Demo",
      category: "Voice AI",
      tech: ["TypeScript", "Voice AI", "Video Avatar", "Computer Vision"],
      description: "Conversational, video-based loan application demo. Customers join a video call with an AI agent named Priya, speak naturally in Hindi, show their PAN card to camera for verification, and receive a personalized loan offer - all in under 7 minutes. No forms, no document uploads, no branch visits.",
      github: "https://github.com/hitakshiA/ai-video-loan-onboarding",
      liveUrl: "https://loandemo.vercel.app",
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
      category: "Java",
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
                  className={`bg-background cursor-pointer order-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}
                  onClick={() => project.image && setLightboxImage({ src: project.image, alt: project.title })}
                >
                  {project.images && project.images.length > 1 ? (
                    <div className="grid grid-cols-2 gap-0.5 bg-border h-full">
                      {project.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="bg-background cursor-pointer overflow-hidden"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxImage({ src: img, alt: `${project.title} ${imgIndex + 1}` });
                          }}
                        >
                          <img
                            src={img}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-48 md:h-64 object-cover object-top"
                          />
                        </div>
                      ))}
                    </div>
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
