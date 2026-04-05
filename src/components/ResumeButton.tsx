import React, { useState, useEffect } from "react";

export default function ResumeButton() {
  const [isAvailable, setIsAvailable] = useState<boolean>(true);

  useEffect(() => {
    fetch("/assets/PSourabhKori_Resume.pdf", { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          setIsAvailable(false);
        }
      })
      .catch(() => {
        setIsAvailable(false);
      });
  }, []);

  if (!isAvailable) {
    return (
      <button
        disabled
        className="border border-border bg-background text-muted-foreground px-6 py-3 font-mono text-[10px] font-medium uppercase tracking-widest inline-block text-center cursor-not-allowed"
      >
        Resume not available
      </button>
    );
  }

  return (
    <a
      href="/assets/PSourabhKori_Resume.pdf"
      download="PSourabhKori_Resume.pdf"
      className="border border-primary bg-primary text-primary-foreground px-6 py-3 font-mono text-[10px] font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors inline-block text-center cursor-pointer"
    >
      Download Resume
    </a>
  );
}
