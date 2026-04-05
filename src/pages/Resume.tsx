import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResumeButton from "@/components/ResumeButton";
import PageWrapper from "@/components/PageWrapper";
import CertLightbox from "@/components/CertLightbox";

const experience = [
  {
    role: "UX Designer",
    company: "O9 SOLUTIONS INC.",
    period: "June 2021 — Present",
    description: [
      "Designed and optimized complex end-to-end enterprise user flows across modules, ensuring logical continuity across interconnected systems.",
      "Architected scalable interaction models and information hierarchies for multi-tenant, data-intensive environments.",
      "Led workflow decomposition sessions with product and engineering to translate dense business requirements into structured, intuitive system behaviors.",
      "Designed advanced data visualization frameworks and analytical dashboards aligned with real-world planning and forecasting scenarios.",
      "Strengthened platform usability through accessibility-aligned interaction patterns, including keyboard navigation, semantic structure, ARIA labeling, and WCAG 2.1 compliance considerations.",
      "Contributed to the evolution of the internal Design System with reusable enterprise components and standardized interaction patterns."
    ],
    recognition: [
      { text: "Q4 2025 Business Milestone Award – SRM platform release (S2C, D2S, P2P, Supplier Onboarding)", cert: "/assets/cert-q4-2025.pdf" },
      { text: "Q4 2024 Business Milestone Award – UI scalability enhancements including \"Always on Pane\" (Samsung)", cert: "/assets/cert-q4-2024.pdf" },
      { text: "Performer of the Quarter (Q4 2023)", cert: "/assets/cert-q4-2023.pdf" },
    ]
  },
  {
    role: "UX Design Intern",
    company: "Famwork",
    period: "Jan 2021 — May 2021",
    description: [
      "Designed user flows and screen states for Electronic Health Record (EHR) modules, focusing on clinical data entry and appointment management."
    ]
  },
  {
    role: "UX Design Intern",
    company: "Daily Objects",
    period: "Nov 2020 — Jan 2021",
    description: [
      "Contributed to product listing, cart, and checkout UX for a D2C accessories brand, with emphasis on mobile-first interaction patterns."
    ]
  },
];

const education = [
  {
    degree: "Master of Design (Experience Design)",
    school: "NIFT, New Delhi",
  },
  {
    degree: "Bachelor of Technology (Mechanical Engineering)",
    school: "PDPU, Gujarat",
  },
];

export default function Resume() {
  const [lightboxCert, setLightboxCert] = useState<string | null>(null);

  return (
    <PageWrapper className="min-h-screen bg-background pt-24 px-8 md:px-16 pb-24">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-border pb-8">
          <div>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4">P. SOURABH KORI</h1>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary max-w-md mb-2">
              UX DESIGNER
            </p>
            <p className="font-sans text-sm text-muted-foreground max-w-md">
              A chronological record of professional experience, education, and capabilities.
            </p>
          </div>
          <ResumeButton />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content (Experience) */}
          <div className="lg:col-span-8">
            <h2 className="font-mono text-[10px] font-medium text-primary uppercase tracking-widest mb-8">
              EXPERIENCE
            </h2>
            <div className="flex flex-col gap-12">
              {experience.map((job, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                    <h3 className="font-display text-3xl text-foreground group-hover:text-primary transition-colors">
                      {job.role}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <div className="font-sans text-base font-medium text-foreground mb-4 opacity-80">
                    {job.company}
                  </div>
                  {Array.isArray(job.description) ? (
                    <ul className="list-none space-y-2 font-sans text-[14.5px] text-[#3a3a3a] leading-[1.65]">
                      {job.description.map((desc, i) => (
                        <li key={i} className="flex gap-3"><span className="text-primary">→</span> <span>{desc}</span></li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-sans text-[14.5px] text-[#3a3a3a] leading-[1.65]">
                      {job.description}
                    </p>
                  )}
                  {job.recognition && (
                    <div className="mt-6 bg-surface border border-border p-6 rounded-lg">
                      <h4 className="font-mono text-[10px] uppercase tracking-widest text-foreground mb-3">RECOGNITION:</h4>
                      <ul className="list-none space-y-2 font-sans text-[14px] text-[#555] leading-[1.65]">
                        {job.recognition.map((rec, i) => (
                          <li
                            key={i}
                            className="flex gap-3 cursor-pointer group"
                            onClick={() => setLightboxCert(rec.cert)}
                          >
                            <span className="text-primary shrink-0">→</span>
                            <span className="decoration-muted-foreground group-hover:underline group-hover:underline-offset-4 group-hover:decoration-foreground group-hover:text-foreground transition-colors">
                              {rec.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar (Education & Skills) */}
          <div className="lg:col-span-4 flex flex-col gap-16">
            <div>
              <h2 className="font-mono text-[10px] font-medium text-primary uppercase tracking-widest mb-8">
                EDUCATION
              </h2>
              <div className="flex flex-col gap-8">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-display text-xl text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {edu.school}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-mono text-[10px] font-medium text-primary uppercase tracking-widest mb-8">
                SKILLS & ABILITIES
              </h2>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-sans text-[15px] font-bold text-foreground mb-2">Design & Strategy</h3>
                  <p className="font-sans text-[14px] text-[#555] leading-[1.65]">Enterprise UX, Systems Thinking, AI-Integrated Workflows, Data Visualization, Dashboard Architecture, Interaction Design, Design Systems</p>
                </div>
                <div>
                  <h3 className="font-sans text-[15px] font-bold text-foreground mb-2">Research</h3>
                  <p className="font-sans text-[14px] text-[#555] leading-[1.65]">User Interviews, Contextual Inquiry, Usability Testing, Heuristic Evaluation, Journey Mapping, A/B Testing</p>
                </div>
                <div>
                  <h3 className="font-sans text-[15px] font-bold text-foreground mb-2">Accessibility</h3>
                  <p className="font-sans text-[14px] text-[#555] leading-[1.65]">WCAG 2.1, Keyboard Accessibility, Screen Reader Annotation, ARIA Labels, Color Contrast Testing</p>
                </div>
                <div>
                  <h3 className="font-sans text-[15px] font-bold text-foreground mb-2">Tools</h3>
                  <p className="font-sans text-[14px] text-[#555] leading-[1.65]">Figma, Sketch, Adobe XD, Framer, Miro, Adobe Illustrator, After Effects</p>
                </div>
                <div>
                  <h3 className="font-sans text-[15px] font-bold text-foreground mb-2">Collaboration</h3>
                  <p className="font-sans text-[14px] text-[#555] leading-[1.65]">Stakeholder Workshops, Agile Methodologies, Developer Handoff, Design Documentation</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-mono text-[10px] font-medium text-primary uppercase tracking-widest mb-8">
                ACTIVITIES & INTERESTS
              </h2>
              <p className="font-sans text-[14px] text-[#555] leading-[1.65]">
                Photography, Scale Model Collecting
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <CertLightbox cert={lightboxCert} onClose={() => setLightboxCert(null)} />
    </PageWrapper>
  );
}
