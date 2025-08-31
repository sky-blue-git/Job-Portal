import { motion } from 'framer-motion'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 
import BackgroundPattern from './ui/background-pattern';
import { JobCardSkeleton } from './ui/job-skeleton';
import { useState, useEffect } from 'react';

const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
    const [isLoading, setIsLoading] = useState(true);
    
    // Simulate loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        
        return () => clearTimeout(timer);
    }, []);
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
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
            <BackgroundPattern variant="grid" className="opacity-20" />
            
            <div className='max-w-7xl mx-auto'>
                <motion.div 
                    className='text-center mb-12'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span 
                        className='inline-block px-4 py-2 rounded-full bg-accent text-primary font-medium mb-4'
                        whileHover={{ scale: 1.05 }}
                    >
                        Job Opportunities
                    </motion.span>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>Latest & Top <span className='text-primary'>Job Openings</span></h2>
                    <p className='text-muted-foreground max-w-2xl mx-auto'>Explore the most recent job listings from top companies across various industries.</p>
                </motion.div>
                
                {isLoading ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {[...Array(6)].map((_, index) => (
                            <JobCardSkeleton key={index} />
                        ))}
                    </div>
                ) : (
                    <motion.div 
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {
                            allJobs.length <= 0 ? 
                            <motion.div 
                                className="col-span-full text-center py-12 text-muted-foreground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="text-xl">No Jobs Available</span>
                                <p className="mt-2">Check back soon for new opportunities</p>
                            </motion.div> : 
                            allJobs?.slice(0,6).map((job) => (
                                <motion.div key={job._id} variants={itemVariants}>
                                    <LatestJobCards job={job}/>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default LatestJobs