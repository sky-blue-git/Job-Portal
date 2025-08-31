import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon,
  title,
  description,
  className,
  ...props
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "p-6 rounded-xl bg-card border border-border shadow-md transition-all",
        className
      )}
      {...props}
    >
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}