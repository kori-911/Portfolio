import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactDrawer from "@/components/ContactDrawer";
import ScrambleText from "@/components/ScrambleText";
import PageWrapper from "@/components/PageWrapper";

const skills = [
  "Enterprise UX", "Systems Thinking", "AI-Integrated Workflows", "Data Visualization",
  "Dashboard Architecture", "Interaction Design", "Design Systems", "User Interviews",
  "Contextual Inquiry", "Usability Testing", "Journey Mapping", "WCAG 2.1",
];

const experience = [
  { period: "JUN 2021 — PRESENT", role: "UX Designer", company: "O9 SOLUTIONS INC.", description: "Designed and optimized complex end-to-end enterprise user flows across modules. Architected scalable interaction models and information hierarchies for multi-tenant environments." },
  { period: "JAN 2021 — MAY 2021", role: "UX Design Intern", company: "FAMWORK", description: "Designed user experiences for Electronic Health Record (EHR) systems." },
  { period: "NOV 2020 — JAN 2021", role: "UX Design Intern", company: "DAILY OBJECTS", description: "Contributed to B2C commerce user experience and interface design." },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const About = () => {
  return (
    <PageWrapper className="bg-background">
      <div className="max-w-3xl mx-auto px-8 pt-32 pb-24">
        {/* Bio */}
        <motion.section className="mb-24" {...fadeIn}>
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6"><ScrambleText text="ABOUT" /></h1>
          <div className="h-[2px] w-12 bg-primary mb-12" />
          <p className="font-sans text-base text-foreground leading-[1.72] mb-6">
            I came to UX from mechanical engineering — trained at NIFT New Delhi, started designing for healthcare and commerce, and spent the last four years deep in enterprise supply chain software at o9 Solutions.
          </p>
          <p className="font-sans text-base text-foreground leading-[1.72] mb-6">
            The problems I find interesting are the ones nobody wants to draw: fragmented multi-step workflows, data-dense dashboards with twelve stakeholder opinions, systems that have to work for a first-time user and a power user simultaneously.
          </p>
          <p className="font-sans text-base text-foreground leading-[1.72]">
            Outside work: photography and scale model building — both are about patience, precision, and caring about things that are almost too small to matter.
          </p>
        </motion.section>

        {/* Philosophy */}
        <motion.section className="mb-24 border-t border-border pt-12" {...fadeIn}>
          <span className="font-mono text-[10px] font-medium text-muted-foreground uppercase tracking-widest block mb-8">Design Philosophy</span>
          <blockquote className="font-display text-3xl md:text-4xl text-foreground leading-tight">
            "SYSTEMS OVER SCREENS. ACCESSIBILITY AS STANDARD."
          </blockquote>
        </motion.section>

        {/* Skills */}
        <motion.section className="mb-24 border-t border-border pt-12" {...fadeIn}>
          <span className="font-mono text-[10px] font-medium text-muted-foreground uppercase tracking-widest block mb-8">Skills</span>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-[9.5px] font-medium uppercase tracking-[0.5px] text-muted-foreground bg-surface border border-border px-3 py-1.5 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section className="mb-24 border-t border-border pt-12" {...fadeIn}>
          <span className="font-mono text-[10px] font-medium text-muted-foreground uppercase tracking-widest block mb-8">Experience</span>
          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={exp.period} className="border-l-[3px] border-primary bg-surface py-4 px-6 rounded-r-md">
                <span className="font-mono text-[10px] font-medium text-primary uppercase tracking-widest block mb-2">{exp.period}</span>
                <h3 className="font-sans text-lg font-bold text-foreground mb-1">{exp.role}</h3>
                <span className="font-mono text-[10px] text-muted-foreground block mb-3 uppercase tracking-widest">{exp.company}</span>
                <p className="font-sans text-sm text-[#555] leading-[1.65]">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Resume + Contact */}
        <motion.section className="border-t border-border pt-12" {...fadeIn}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/resume"
              className="border border-border px-6 py-3 font-mono text-[10px] font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground hover:border-foreground transition-colors text-center"
            >
              View Full Resume →
            </Link>
            <ContactDrawer 
              buttonClassName="border border-primary bg-primary text-primary-foreground px-6 py-3 font-mono text-[10px] font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors text-center cursor-pointer w-full sm:w-auto" 
            />
          </div>
        </motion.section>
      </div>
    </PageWrapper>
  );
};

export default About;
