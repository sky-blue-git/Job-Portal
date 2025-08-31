import { motion } from 'framer-motion';
import { TestimonialCard } from './ui/testimonial-card';
import BackgroundPattern from './ui/background-pattern';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This job portal helped me find my dream job within weeks. The interface is intuitive and the job recommendations are spot on!",
      author: "Sarah Johnson",
      role: "Software Developer",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "As a recruiter, I've found exceptional talent through this platform. The filtering options make it easy to find the right candidates.",
      author: "Michael Chen",
      role: "HR Manager",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      quote: "The user experience is fantastic! I love how I can track my applications and get notifications about new opportunities.",
      author: "Emily Rodriguez",
      role: "Marketing Specialist",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative py-20 px-4 md:px-8 lg:px-16 bg-muted/10 overflow-hidden">
      <BackgroundPattern variant="circles" className="opacity-20" />
      
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="inline-block px-4 py-2 rounded-full bg-accent text-primary font-medium mb-4"
          whileHover={{ scale: 1.05 }}
        >
          Testimonials
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hear from job seekers and employers who have found success using our platform.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={itemVariants}>
            <TestimonialCard 
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;