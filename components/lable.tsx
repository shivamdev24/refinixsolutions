import { cn } from "@/lib/utils";

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500", className)}>
      <span className="h-px w-7 bg-[#e34a27]" />
      {children}
    </div>
  );
}

export default Label;