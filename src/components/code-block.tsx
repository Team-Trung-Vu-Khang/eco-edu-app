import React from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "tsx", className }: CodeBlockProps) {
  return (
    <div className={cn("relative rounded-lg bg-zinc-950 p-4 font-mono text-sm", className)}>
      <pre className="overflow-x-auto text-zinc-50">
        <code>{code}</code>
      </pre>
    </div>
  );
}
