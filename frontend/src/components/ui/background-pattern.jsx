import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const BackgroundPattern = ({ className, variant = 'dots', ...props }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const patterns = {
    dots: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern 
            id="dots" 
            x="0" 
            y="0" 
            width="20" 
            height="20" 
            patternUnits="userSpaceOnUse"
          >
            <circle 
              cx="2" 
              cy="2" 
              r="1" 
              fill={isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.07)'} 
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    ),
    grid: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern 
            id="grid" 
            x="0" 
            y="0" 
            width="40" 
            height="40" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M 40 0 L 0 0 0 40" 
              fill="none" 
              stroke={isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'} 
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    ),
    waves: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern 
            id="waves" 
            x="0" 
            y="0" 
            width="100" 
            height="20" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" 
              fill="none" 
              stroke={isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'} 
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>
    ),
    diagonal: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern 
            id="diagonal" 
            x="0" 
            y="0" 
            width="10" 
            height="10" 
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line 
              x1="0" 
              y1="0" 
              x2="0" 
              y2="10" 
              stroke={isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'} 
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal)" />
      </svg>
    ),
    circles: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern 
            id="circles" 
            x="0" 
            y="0" 
            width="50" 
            height="50" 
            patternUnits="userSpaceOnUse"
          >
            <circle 
              cx="25" 
              cy="25" 
              r="10" 
              fill="none"
              stroke={isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'} 
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circles)" />
      </svg>
    )
  };

  return (
    <motion.div 
      className={cn('absolute inset-0 -z-10 overflow-hidden', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {patterns[variant] || patterns.dots}
    </motion.div>
  );
};

export default BackgroundPattern;