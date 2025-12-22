import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-foreground mb-8">About</h2>
        <Separator className="mb-8" />
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a Computer Science undergraduate specializing in Data Science at SRM Institute of Science and Technology. 
            My curiosity drives me to explore the intersection of software development and data engineering.
          </p>
          <p>
            I enjoy building products that solve real problems — from mobile applications that connect students 
            with mentors to developer tools that automate security checks. I'm passionate about writing clean, 
            maintainable code and learning new technologies.
          </p>
          <p>
            Currently, I'm looking for full-time opportunities where I can contribute to impactful projects 
            and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
