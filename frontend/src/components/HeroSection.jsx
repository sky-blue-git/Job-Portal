import { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LottieAnimation from './ui/lottie-animation';
import BackgroundPattern from './ui/background-pattern';
import jobSearchAnimation from '../assets/lottie/job-search.json';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='relative text-center overflow-hidden'>
            <BackgroundPattern variant="waves" className="opacity-30" />
            
            {/* Blur effect elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            
            <div className='flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-16 gap-8'>
                <motion.div 
                    className='flex flex-col gap-6 text-left md:w-1/2'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.span 
                        className='inline-block px-4 py-2 rounded-full bg-accent text-primary font-medium'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        No. 1 Job Hunt Website
                    </motion.span>
                    
                    <motion.h1 
                        className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Search, Apply & <br /> Get Your <span className='text-primary'>Dream Jobs</span>
                    </motion.h1>
                    
                    <motion.p 
                        className='text-muted-foreground max-w-xl'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Find your perfect career opportunity from thousands of up-to-date job listings across various industries and locations.
                    </motion.p>
                    
                    <motion.div 
                        className='flex w-full shadow-lg border border-border pl-3 rounded-full items-center gap-4 transition-all hover:shadow-xl bg-background'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <input
                            type="text"
                            placeholder='Find your dream jobs'
                            onChange={(e) => setQuery(e.target.value)}
                            className='outline-none border-none w-full bg-transparent py-3'
                        />
                        <Button 
                            onClick={searchJobHandler} 
                            className="rounded-r-full bg-primary hover:bg-primary/90 transition-colors"
                        >
                            <Search className='h-5 w-5' />
                        </Button>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className='md:w-1/2 h-[300px] md:h-[400px]'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <LottieAnimation 
                        animationData={jobSearchAnimation} 
                        loop={true}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection