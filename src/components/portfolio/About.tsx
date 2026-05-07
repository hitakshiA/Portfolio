const About = () => {
  return (
    <section id="about" className="bg-card">
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <p className="text-eyebrow font-display text-foreground mb-4">About</p>
        <h2 className="text-section font-display text-foreground mb-12 max-w-3xl">
          A computer science undergraduate with a bias toward shipping.
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5 text-body-lg text-muted-foreground max-w-xl">
            <p>
              I'm specializing in <span className="text-foreground">Data Science</span> at SRM
              Institute of Science and Technology, with a focus on building products that solve
              real problems — from mobile apps to developer tools.
            </p>
            <p>
              I care about clean architecture, calm interfaces, and code you can read on a
              Monday morning. Currently seeking full-time opportunities where I can contribute
              to thoughtful, impactful work.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="surface-recessed p-7">
              <p className="text-caption uppercase tracking-wider text-muted-foreground mb-2">Currently Learning</p>
              <p className="text-[17px] text-foreground">System Design · Advanced DSA · Cloud Architecture</p>
            </div>
            <div className="surface-recessed p-7">
              <p className="text-caption uppercase tracking-wider text-muted-foreground mb-2">Education</p>
              <p className="text-[17px] text-foreground">B.Tech in Computer Science (Data Science)</p>
              <p className="text-[14px] text-muted-foreground mt-1">SRM Institute of Science and Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
