export interface Project {
  id: number;
  slug: string;
  title: string;
  year: string;
  client: string;
  role: string;
  image: string;
  summary: string;
  description: string[];
  problemStatement: string;
  research: string;
  designProcess: string;
  keyDecisions: string[];
  outcome: string;
  learnings: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "triage-room",
    title: "TRIAGE ROOM",
    year: "2023–2024",
    client: "Toyota Motor North America",
    role: "Sole Product Designer",
    image: "https://picsum.photos/seed/triage/1920/1080",
    summary: "Designing the Triage Room for Toyota's supply chain crisis resolution — replacing emails with a structured collaboration system.",
    description: [
      "How I took a single requirements screenshot and shaped it into a shipped, horizontally scalable product — replacing emails and phone calls with a structured, access-controlled collaboration system used by 4,000+ users across Toyota's supplier network.",
      "A supply chain crisis exposed the gap between Toyota's operational complexity and its collaboration tooling. When a critical part faces a supply gap, the resolution process was unstructured: scattered emails, phone calls, and Excel files sitting on individual laptops."
    ],
    problemStatement: "Two organizations (buyer and supplier) with asymmetric information, different permission models, and competing urgencies needed to collaborate in a single, privacy-controlled space where even platform admins cannot see the conversation. The system had to support 400+ suppliers and thousands of part-supplier-plant intersections.",
    research: "Received a 15-row requirements screenshot. Conducted working sessions with functional PM and PMM team. Built process maps in live Excel sessions. Studied the Gap Escalation to Guide Flow (Toyota's internal process doc) to understand judgment criteria and necessary conditions for each workflow step.",
    designProcess: "Operated in a dual-track model within the SAFe ART: discovery work ran one sprint ahead of delivery work. Rapidly iterated on platform constraints to leverage existing Pulse (chat), inline forms, and pivot widgets. The biggest architectural shift was moving from a task-management-centric design to a collaboration-first approach, mirroring how supply crisis resolution actually happens.",
    keyDecisions: [
      "Reuse existing widgets vs. build custom components to reduce engineering effort by ~40% and lower risk.",
      "Contextual creation from the gap table rather than a standalone workflow to reduce errors.",
      "User-level access control (not role-based) to ensure privacy by design — even admins can't access others' chats.",
      "Dual-audience forms with strict data ownership: supplier-editable Run-Out vs. OEM-editable NAMC Impact.",
      "State machine design for room lifecycle to prevent premature resolution."
    ],
    outcome: "Triage Room shipped as part of Toyota NA's 2WSC platform launch in December 2023 and was subsequently productized as a core o9 SRM Foundation feature. It was adopted by 4,000+ supplier users at launch and became a key sales differentiator against SAP, Kinaxis, and Blue Yonder, influencing deals with Apple, Marelli, and Coca-Cola.",
    learnings: "The design survived contact with reality because of upfront systems thinking rather than jumping to screens. Direct supplier user research would have helped prioritize progressive disclosure, and earlier design system contribution could have enabled reuse in other SRM features. Ultimately, the architectural resilience came from treating the problem as a system, not just a screen.",
  },
  {
    id: 2,
    slug: "monolith",
    title: "MONOLITH",
    year: "2025",
    client: "Self-initiated",
    role: "Art Direction, Design",
    image: "https://picsum.photos/seed/monolith/1920/1080",
    summary: "Brutalist architecture through digital media — exploring how concrete forms translate into pixel structures.",
    description: [
      "An exploration of brutalist architecture through the lens of digital media. The project investigates how concrete forms translate into pixel structures, examining the tension between physical permanence and digital ephemerality.",
      "Shot over three months across seven cities, the series strips away context to isolate pure form. Each structure becomes an artifact divorced from its geography, forcing the viewer to confront shape without narrative.",
    ],
    problemStatement: "Architectural photography has become increasingly homogenized through social media filters and predictable compositions. The challenge was to create a visual language that strips away aesthetic comfort and forces direct engagement with form.",
    research: "Conducted extensive field research across seven cities, studying brutalist structures in varying light conditions. Analyzed existing architectural photography trends to identify visual clichés to deliberately avoid. Interviewed architects and urban planners about the intended emotional impact of brutalist design.",
    designProcess: "The process began with analog sketches mapping shadow patterns across concrete surfaces at different times of day. Digital capture was intentionally constrained to a single focal length to eliminate compositional shortcuts. Post-processing was reduced to contrast adjustments only — no color grading, no cropping.",
    keyDecisions: [
      "Single focal length constraint to force compositional discipline",
      "No color correction — what you see is what exists",
      "Context removal to isolate pure architectural form",
      "Three-month timeline to capture seasonal light variations",
    ],
    outcome: "The series was exhibited in four galleries and acquired by two permanent collections. It generated a 340% increase in studio inquiries and established a new visual methodology for architectural documentation that has since been adopted by three other studios.",
    learnings: "Constraints breed creativity. By removing the tools photographers typically rely on, the project forced a deeper engagement with the subject matter. The biggest lesson was that removing context doesn't remove meaning — it redirects it.",
  },
  {
    id: 2,
    slug: "void-protocol",
    title: "VOID PROTOCOL",
    year: "2024",
    client: "Redacted",
    role: "Creative Direction",
    image: "https://picsum.photos/seed/void/1920/1080",
    summary: "A classified editorial system designed for an institution that operates in deliberate obscurity.",
    description: [
      "A classified editorial system designed for an institution that operates in deliberate obscurity. The visual language was engineered to communicate authority without revealing identity.",
      "Every typographic decision was a negotiation between visibility and concealment. The final system exists as a paradox: a brand identity designed to resist being identified.",
    ],
    problemStatement: "The client required a complete visual identity system that would convey institutional authority while maintaining operational anonymity. Traditional branding approaches were incompatible with the requirement for deliberate obscurity.",
    research: "Studied historical precedents of anonymous institutional communication — from government redaction patterns to anonymous press releases. Analyzed how authority is perceived in the absence of visible branding. Conducted blind perception tests with focus groups.",
    designProcess: "Developed a typographic system based on negative space rather than positive mark-making. The identity exists in what is absent rather than what is present. Created a modular grid system that can be recognized by pattern without being attributable to a specific entity.",
    keyDecisions: [
      "Identity through absence rather than presence",
      "Typographic system based on negative space",
      "Modular grid recognizable by pattern, not attribution",
      "Redaction as a design element rather than a limitation",
    ],
    outcome: "The system has been in continuous use for 18 months across all institutional communications. Internal surveys showed a 78% increase in perceived authority among recipients. The project won two industry awards under a pseudonym.",
    learnings: "The most powerful brand identities don't always need to be visible. Sometimes the strongest communication happens in the spaces between elements. This project fundamentally changed how I think about the relationship between visibility and authority.",
  },
  {
    id: 3,
    slug: "vessel",
    title: "VESSEL",
    year: "2024",
    client: "Ceramic Atelier Mura",
    role: "Photography, Design",
    image: "https://picsum.photos/seed/vessel/1920/1080",
    summary: "Museum-quality product documentation for a ceramics studio producing exactly twelve pieces per year.",
    description: [
      "Museum-quality product documentation for a ceramics studio producing exactly twelve pieces per year. Each vessel was photographed as though it were the last object on earth.",
      "The lighting rig was designed to simulate a single window in an otherwise sealed room. No color correction was applied. What you see is what exists.",
    ],
    problemStatement: "The atelier needed product photography that matched the exclusivity and craftsmanship of their limited production. Standard product photography felt disposable and mass-market — antithetical to objects that take months to create.",
    research: "Spent two weeks in the atelier observing the creation process. Studied museum documentation practices for archaeological ceramics. Analyzed how scarcity and perceived value intersect in visual presentation.",
    designProcess: "Built a custom lighting environment simulating a single north-facing window in an otherwise sealed space. Each vessel was photographed over a full day to capture how light interacted with glazes at different angles. The editorial layout was designed to give each piece a full spread with generous negative space.",
    keyDecisions: [
      "Single light source to create museum-like atmosphere",
      "No color correction to preserve glaze authenticity",
      "Full-day shooting sessions per vessel",
      "Editorial layout with maximum negative space",
    ],
    outcome: "The catalogue contributed to selling out the entire annual production within 72 hours of release. The photography style has become synonymous with the atelier's brand and has been referenced by three major design publications.",
    learnings: "Restraint in photography is as important as restraint in ceramics. The temptation to add more light, more angles, more processing was constant. The discipline to resist created images that feel as considered as the objects themselves.",
  },
  {
    id: 4,
    slug: "grid-collapse",
    title: "GRID COLLAPSE",
    year: "2023",
    client: "Institute of Digital Arts",
    role: "Installation, Code",
    image: "https://picsum.photos/seed/grid/1920/1080",
    summary: "A generative installation mapping structural failures of urban planning grids onto light sculptures.",
    description: [
      "A generative installation that maps the structural failures of urban planning grids onto light sculptures. The piece responds to real-time seismic data, translating geological instability into visual instability.",
      "Commissioned for a permanent collection. The code will run until the hardware fails. There is no maintenance contract.",
    ],
    problemStatement: "The institute wanted an installation that made invisible urban infrastructure failures visible and visceral. The challenge was translating abstract data — seismic readings, grid stress patterns — into an emotionally resonant physical experience.",
    research: "Collaborated with structural engineers and seismologists to understand how urban grids respond to geological stress. Analyzed three decades of seismic data from the installation site. Studied precedents in data-driven art installations.",
    designProcess: "Developed a custom algorithm that maps seismic amplitude to LED intensity and frequency. The physical structure mirrors a simplified urban grid at 1:1000 scale. Each node in the grid responds independently, creating emergent patterns that mirror real structural behavior.",
    keyDecisions: [
      "Real-time data feed rather than recorded data",
      "No maintenance contract — the piece is designed to degrade",
      "1:1000 scale mapping of actual urban grid",
      "Independent node response for emergent behavior",
    ],
    outcome: "The installation has been running continuously for 14 months. It detected and visualized a magnitude 3.2 earthquake in real-time, creating an unexpected moment of documentary art. Visitor engagement averages 12 minutes — four times the museum average.",
    learnings: "Designing for degradation is fundamentally different from designing for permanence. Knowing the piece will eventually fail changed every material and code decision. Impermanence became a feature, not a bug.",
  },
  {
    id: 5,
    slug: "night-corridor",
    title: "NIGHT CORRIDOR",
    year: "2023",
    client: "Infrastructure Bureau",
    role: "Aerial Photography",
    image: "https://picsum.photos/seed/night/1920/1080",
    summary: "An aerial survey of industrial corridors captured exclusively between 2:00 AM and 4:00 AM.",
    description: [
      "An aerial survey of industrial corridors captured exclusively between 2:00 AM and 4:00 AM. The project documents infrastructure as it exists when no one is watching.",
      "The artificial lighting becomes the subject—sodium vapor creating corridors of visibility through absolute darkness. Each road is a sentence; each intersection, punctuation.",
    ],
    problemStatement: "Infrastructure is designed to be invisible — it works best when no one notices it. The challenge was to make infrastructure the protagonist of a visual narrative, revealing its hidden beauty and logic.",
    research: "Mapped industrial corridors across the region, identifying areas with distinctive lighting patterns. Studied sodium vapor light spectra and how they interact with aerial photography sensors. Consulted with urban planners about infrastructure routing logic.",
    designProcess: "All flights were conducted between 2:00 AM and 4:00 AM to eliminate traffic and human presence. Used modified camera sensors optimized for sodium vapor wavelengths. The editing process was purely subtractive — selecting from thousands of captures to find the images where infrastructure told its own story.",
    keyDecisions: [
      "2:00-4:00 AM capture window exclusively",
      "Modified sensors for sodium vapor optimization",
      "Subtractive editing process only",
      "No human presence in any frame",
    ],
    outcome: "The series was published by the Infrastructure Bureau as their annual report cover and internal documentation. It has since been licensed by four international publications. The project opened a new revenue stream in infrastructure documentation.",
    learnings: "The most interesting subjects are often the ones hiding in plain sight. Infrastructure is everywhere and nowhere — photographing it required learning to see what we've trained ourselves to ignore.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
