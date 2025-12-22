import { Separator } from "@/components/ui/separator";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Contact</h2>
        <Separator className="mb-8" />
        <p className="text-muted-foreground mb-6">
          I'm currently looking for full-time opportunities. Feel free to reach out if you'd like to connect.
        </p>
        <div className="flex flex-wrap gap-6 text-sm">
          <a
            href="mailto:hitakshi@example.com"
            className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            hitakshi@example.com
          </a>
          <a
            href="https://linkedin.com/in/hitakshiarora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Project-Peter-Doma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
