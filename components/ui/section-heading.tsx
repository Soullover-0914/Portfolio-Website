import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent/60" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-paragraph sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
