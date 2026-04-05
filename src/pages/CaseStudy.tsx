import { useParams, Navigate, Link } from "react-router-dom";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ReadingProgress from "@/components/ReadingProgress";
import CaseStudyNav from "@/components/CaseStudyNav";
import NextSteps from "@/components/NextSteps";
import ScrambleText from "@/components/ScrambleText";
import PageWrapper from "@/components/PageWrapper";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";

const Section = ({ id, label, title, children, isDark = false }: { id: string; label: string; title: string; children: React.ReactNode; isDark?: boolean }) => (
  <motion.section
    id={id}
    className={`py-[72px] border-b border-border ${isDark ? 'bg-foreground text-white' : ''}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-[680px]">
      <span className={`font-mono text-[10.5px] font-medium uppercase tracking-[3px] block mb-4 ${isDark ? 'text-[#e07a6c]' : 'text-primary'}`}>
        {label}
      </span>
      <h2 className={`font-display text-3xl md:text-4xl mb-4 ${isDark ? 'text-white' : 'text-foreground'}`}>
        {title}
      </h2>
      <div className={`h-[2px] w-12 mb-6 ${isDark ? 'bg-[#e07a6c]' : 'bg-primary'}`} />
      <div className={`font-sans text-[15.5px] leading-[1.72] ${isDark ? 'text-white/72' : 'text-[#3a3a3a]'}`}>
        {children}
      </div>
    </div>
  </motion.section>
);

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const adjacent = slug ? getAdjacentProjects(slug) : { prev: null, next: null };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/work" replace />;

  return (
    <PageWrapper className="bg-background relative">
      <ReadingProgress />
      <CaseStudyNav />

      {/* Hero */}
      <div className="w-full relative border-b border-border pt-32 pb-20 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-[820px]">
          <Link
            to="/work"
            className="font-mono text-[10px] text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors block mb-8"
          >
            ← Back to Work
          </Link>
          <div className="font-mono text-[10px] tracking-[3px] uppercase text-primary mb-4">Case Study</div>
          <h1 className="font-display text-[42px] md:text-6xl leading-[1.08] text-foreground mb-4">
            {project.title}
          </h1>
          <p className="font-sans text-base text-muted-foreground max-w-[600px]">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 pb-24">
        {/* Metadata */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5 py-8 mb-12 max-w-[680px]">
          <div>
            <span className="font-mono text-[9.5px] font-medium text-muted-foreground uppercase tracking-[2px] block mb-1">Timeline</span>
            <span className="font-sans text-[13.5px] font-semibold text-foreground">{project.year}</span>
          </div>
          <div>
            <span className="font-mono text-[9.5px] font-medium text-muted-foreground uppercase tracking-[2px] block mb-1">Client</span>
            <span className="font-sans text-[13.5px] font-semibold text-foreground">{project.client}</span>
          </div>
          <div>
            <span className="font-mono text-[9.5px] font-medium text-muted-foreground uppercase tracking-[2px] block mb-1">Role</span>
            <span className="font-sans text-[13.5px] font-semibold text-foreground">{project.role}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Text Content (60%) */}
          <div className="lg:col-span-7">
            {/* Overview */}
            <Section id="overview" label="01 — Context" title="Overview">
              {project.description.map((p, i) => (
                <p key={i} className="mb-4">{p}</p>
              ))}
            </Section>

            {/* Problem */}
            <Section id="problem" label="02 — The Challenge" title="Problem Statement">
              <div className="bg-surface border-l-[3px] border-primary py-[18px] px-[22px] rounded-r-md mb-6">
                <strong>Core issue:</strong> {project.problemStatement}
              </div>
            </Section>

            {/* Research */}
            <Section id="research" label="03 — Discovery" title="Research & Insights">
              <p>{project.research}</p>
            </Section>

            {/* Process */}
            <Section id="process" label="04 — Methodology" title="Design Process">
              <p>{project.designProcess}</p>
            </Section>

            {/* Key Decisions */}
            <Section id="decisions" label="05 — Execution" title="Key UX Decisions">
              <div className="space-y-4 mt-6">
                {project.keyDecisions.map((decision, i) => (
                  <div key={i} className="bg-white border border-border rounded-lg p-[22px] max-w-[680px]">
                    <div className="font-sans text-[15px] font-bold text-foreground mb-2">Decision {i + 1}</div>
                    <div className="font-sans text-[14px] text-[#555] leading-[1.65]">
                      {decision}
                    </div>
                    <div className="mt-3">
                      <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.5px] bg-accent-soft text-primary px-[10px] py-[3px] rounded-full inline-block">Strategy</span>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Final Screens */}
            <Section id="screens" label="06 — Deliverables" title="Final Screens">
              <div className="border border-border bg-surface p-12 flex items-center justify-center aspect-[16/9] rounded-lg">
                <p className="font-mono text-[11px] text-muted-foreground text-center">
                  [Project screens — add 2–3 annotated screenshots here]
                </p>
              </div>
            </Section>

            {/* Outcome */}
            <Section id="outcome" label="07 — Results" title="Outcome & Impact" isDark>
              <p>{project.outcome}</p>
            </Section>

            {/* Learnings */}
            <Section id="learnings" label="08 — Reflection" title="Learnings">
              <p>{project.learnings}</p>
            </Section>

            {/* Next Steps */}
            <div className="mt-32">
              <NextSteps prev={adjacent.prev} next={adjacent.next} />
            </div>
          </div>

          {/* Right Column - Visual Support (40%) */}
          <div className="hidden lg:block lg:col-span-5 space-y-32 pt-12">
            {/* Visual 1 - Abstract Grid */}
            <div className="sticky top-32">
              <div className="aspect-square border border-border bg-surface p-6 flex flex-col justify-between rounded-lg">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`aspect-square rounded-sm ${i % 3 === 0 ? 'bg-primary/20' : 'bg-border'}`} />
                  ))}
                </div>
                <div className="mt-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">System Architecture</span>
                  <div className="h-px w-full bg-border mt-2" />
                </div>
              </div>

              {/* Visual 2 - Data Flow */}
              <div className="aspect-[4/3] border border-border bg-surface p-6 mt-16 flex flex-col justify-between rounded-lg">
                <div className="space-y-4">
                  <div className="h-2 w-3/4 bg-border rounded-full" />
                  <div className="h-2 w-1/2 bg-primary/40 rounded-full" />
                  <div className="h-2 w-5/6 bg-border rounded-full" />
                  <div className="h-2 w-2/3 bg-border rounded-full" />
                </div>
                <div className="mt-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Process Flow</span>
                  <div className="h-px w-full bg-border mt-2" />
                </div>
              </div>
              
              {/* Visual 3 - UI Block */}
              <div className="aspect-square border border-border bg-surface p-6 mt-16 flex flex-col justify-between rounded-lg">
                 <div className="flex-1 border border-dashed border-border flex items-center justify-center bg-white rounded-md">
                    <span className="font-mono text-[11px] text-muted-foreground">UI Component</span>
                 </div>
                <div className="mt-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Interface Pattern</span>
                  <div className="h-px w-full bg-border mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CaseStudy;
