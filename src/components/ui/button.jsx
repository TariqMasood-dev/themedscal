import { cn } from "@/lib/utils";

const variantClasses = {
  primary:
    "bg-primary text-primary-foreground hover:bg-accent hover:text-primary-foreground",
  secondary:
    "border border-border bg-surface text-surface-foreground hover:border-primary",
  ghost: "text-foreground hover:bg-muted",
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        className,
      )}
      type={type}
      {...props}
    />
  );
}
