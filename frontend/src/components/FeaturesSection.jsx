import { motion } from 'framer-motion'
import { FeatureCard } from './ui/feature-card'
import BackgroundPattern from './ui/background-pattern'
import LottieAnimation from './ui/lottie-animation'
import careerGrowthAnimation from '../assets/lottie/career-growth.json'
import { Briefcase, Search, Users, Bell, Shield, Zap } from 'lucide-react';

const FeaturesSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className='relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden'>
            <BackgroundPattern variant="dots" className="opacity-30" />
            
            <motion.div 
                className='text-center mb-16'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.span 
                    className='inline-block px-4 py-2 rounded-full bg-accent text-primary font-medium mb-4'
                    whileHover={{ scale: 1.05 }}
                >
                    Our Features
                </motion.span>
                <h2 className='text-3xl md:text-4xl font-bold mb-4'>Why Choose Our Job Portal</h2>
                <p className='text-muted-foreground max-w-2xl mx-auto'>Discover the advantages that make our platform the preferred choice for job seekers and employers alike.</p>
            </motion.div>

            <div className='flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto'>
                <motion.div 
                    className='lg:w-1/3 h-[300px] lg:h-[400px] flex items-center justify-center'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <LottieAnimation 
                        animationData={careerGrowthAnimation} 
                        loop={true}
                    />
                </motion.div>

                <motion.div 
                    className='lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants}>
                        <FeatureCard
                            icon={<Search className="h-6 w-6 text-primary" />}
                            title="Advanced Job Search"
                            description="Find the perfect job with our powerful search tools that filter by location, salary, experience level, and more."
                        />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <FeatureCard
                            icon={<Briefcase className="h-6 w-6 text-primary" />}
                            title="Career Growth"
                            description="Access resources and opportunities designed to help you advance in your career path and achieve your professional goals."
                        />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <FeatureCard
                            icon={<Users className="h-6 w-6 text-primary" />}
                            title="Networking Opportunities"
                            description="Connect with industry professionals, join communities, and expand your professional network."
                        />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <FeatureCard
                            icon={<Bell className="h-6 w-6 text-primary" />}
                            title="Job Alerts"
                            description="Stay updated with personalized job notifications that match your skills and preferences delivered straight to your inbox."
                        />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <FeatureCard
                            icon={<Shield className="h-6 w-6 text-primary" />}
                            title="Verified Employers"
                            description="Apply with confidence knowing that all employers on our platform are verified and legitimate."
                        />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <FeatureCard
                            icon={<Zap className="h-6 w-6 text-primary" />}
                            title="Quick Apply"
                            description="Apply to multiple jobs with just a few clicks using our streamlined application process and saved profile information."
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default FeaturesSection;