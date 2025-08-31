import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedCard({
  children,
  className,
  onClick,
  ...props
}) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
      className={cn(
        "p-5 rounded-lg bg-card border border-border shadow-md transition-all",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
}