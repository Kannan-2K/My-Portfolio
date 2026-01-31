import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-2 px-4 relative">
      {""}
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & UI/UX Designer
            </h3>
            <p className="text-muted-foreground">
              I'm a passionate React and UI/UX designer with a fresh perspective
              and a strong foundation in modern web technologies. I specialize
              in crafting clean, responsive interfaces with a focus on
              user-centered design. Eager to collaborate, learn, and contribute
              to impactful digital experiences.
            </p>
            <p className="text-muted-foreground">
              I have hands-on experience with React.js for building dynamic web
              applications and designing intuitive user interfaces. My UI/UX
              skills include wireframing, prototyping, and creating
              user-friendly designs using tools like Figma. I'm continuously
              learning to bridge the gap between design and development for
              seamless user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

       <a
  href="/Kannan_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download
>
  Download CV
</a>

            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Developement</h4>
                  <p className="text-muted-foreground">
                    I have a solid understanding of React.js, including
                    components, props, state, and hooks. I can build responsive,
                    reusable UI components and manage application state
                    effectively. I'm also familiar with JSX, React Router, and
                    basic integration with APIs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    I specialize in UI/UX design with a focus on creating clean,
                    user-friendly interfaces. I'm proficient in tools like Figma
                    and Adobe XD for wireframing, prototyping, and high-fidelity
                    designs. I follow user-centered design principles to ensure
                    intuitive and accessible user experiences
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Graphic Designing</h4>
                  <p className="text-muted-foreground">
                    I have a strong foundation in graphic design, with skills in
                    creating logos, social media creatives, and marketing
                    materials. I'm proficient in tools like Adobe Photoshop,
                    Illustrator, and Canva. I focus on visual consistency, color
                    theory, and typography to create impactful designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
