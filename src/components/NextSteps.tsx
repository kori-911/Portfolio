import { Link } from "react-router-dom";
import { Project } from "@/data/projects";
import ContactDrawer from "@/components/ContactDrawer";

interface NextStepsProps {
  prev: Project | null;
  next: Project | null;
}

const NextSteps = ({ prev, next }: NextStepsProps) => {
  return (
    <div className="mt-32 border-t border-border pt-16">
      <span className="font-mono text-[10px] font-medium text-primary uppercase tracking-widest block mb-12 text-center">
        CONTINUE EXPLORING
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Previous Project */}
        {prev ? (
          <Link
            to={`/work/${prev.slug}`}
            className="group block border border-border bg-surface p-8 hover:border-foreground transition-colors rounded-lg"
          >
            <span className="font-mono text-[10px] font-medium text-muted-foreground uppercase tracking-widest block mb-4">
              ← Previous Project
            </span>
            <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
              {prev.title}
            </h3>
            <p className="font-sans text-sm text-muted-foreground">{prev.summary}</p>
          </Link>
        ) : (
          <div className="border border-border bg-surface p-8 opacity-50 flex flex-col justify-center rounded-lg">
            <span className="font-mono text-[10px] font-medium text-muted-foreground uppercase tracking-widest block">
              Start of Archive
            </span>
          </div>
        )}

        {/* Next Project */}
        {next ? (
          <Link
            to={`/work/${next.slug}`}
            className="group block border border-border bg-surface p-8 hover:border-foreground transition-colors text-right rounded-lg"
          >
            <span className="font-mono text-[10px] font-medium text-muted-foreground uppercase tracking-widest block mb-4">
              Next Project →
            </span>
            <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
              {next.title}
            </h3>
            <p className="font-sans text-sm text-muted-foreground">{next.summary}</p>
          </Link>
        ) : (
          <div className="border border-border bg-surface p-8 opacity-50 flex flex-col justify-center text-right rounded-lg">
            <span className="font-mono text-[10px] font-medium text-muted-foreground uppercase tracking-widest block">
              End of Archive
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/work"
          className="border border-border px-6 py-3 font-mono text-[10px] font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground hover:border-foreground transition-colors text-center"
        >
          Explore All Work
        </Link>
        <ContactDrawer 
          buttonText="Get in Touch"
          buttonClassName="border border-primary bg-primary text-primary-foreground px-6 py-3 font-mono text-[10px] font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors text-center cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NextSteps;
