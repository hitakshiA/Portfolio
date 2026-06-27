import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Resume — Hitakshi Arora</title>
        <meta
          name="description"
          content="Professional resume of Hitakshi Arora — AI agent engineer and software developer. View experience, skills, and projects."
        />
        <link rel="canonical" href="https://hitakshii.lovable.app/resume" />
        <meta property="og:title" content="Resume — Hitakshi Arora" />
        <meta
          property="og:description"
          content="Professional resume of Hitakshi Arora — AI agent engineer and software developer."
        />
        <meta property="og:url" content="https://hitakshii.lovable.app/resume" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "Hitakshi Arora",
              jobTitle: "AI Agent Engineer & Software Developer",
              url: "https://hitakshii.lovable.app/resume",
              sameAs: [
                "https://linkedin.com/in/hitakshiaroraa",
                "https://github.com/hitakshiA",
              ],
            },
          })}
        </script>
      </Helmet>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card">
        <Link
          to="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Portfolio</span>
        </Link>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      <h1 className="sr-only">Professional Resume — Hitakshi Arora</h1>

      {/* PDF Viewer */}
      <div className="flex-1 w-full">
        <iframe
          src="/resume.pdf"
          className="w-full h-[calc(100vh-65px)]"
          title="Resume - Hitakshi Arora"
        />
      </div>
    </div>
  );
};

export default Resume;
