import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function AnimatedButton({
  children,
  className,
  onClick,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Button
        variant={variant}
        size={size}
        className={cn("font-medium", className)}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}