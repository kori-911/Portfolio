import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ScrambleText from "@/components/ScrambleText";
import PageWrapper from "@/components/PageWrapper";

const Work = () => {
  return (
    <PageWrapper className="bg-background">
      <div className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6"><ScrambleText text="WORK" /></h1>
          <div className="h-[2px] w-12 bg-primary mb-6" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-16">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Work;
