import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[calc(100vh-56px)] items-center justify-center bg-background">
      <div className="text-center border border-border p-16">
        <h1 className="mb-4 text-7xl font-display text-foreground">404</h1>
        <p className="mb-8 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          PATH NOT FOUND
        </p>
        <Link
          to="/"
          className="border border-primary bg-primary text-primary-foreground px-6 py-3 font-mono text-[10px] font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
