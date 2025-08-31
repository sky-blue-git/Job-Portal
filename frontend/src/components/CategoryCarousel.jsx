import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';
import { motion } from 'framer-motion';
import BackgroundPattern from './ui/background-pattern';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.3
            } 
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: 'spring', stiffness: 300, damping: 24 }
        },
        hover: { scale: 1.05, transition: { duration: 0.2 } }
    };

    return (
        <div className="relative py-16 overflow-hidden">
            <BackgroundPattern variant="diagonal" className="opacity-10" />
            
            <motion.div 
                className="relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.h2 
                    className="text-2xl font-bold text-center mb-8"
                    variants={itemVariants}
                >
                    Popular Categories
                </motion.h2>
                
                <Carousel className="w-full max-w-xl mx-auto">
                    <CarouselContent>
                        {
                            category.map((cat, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <motion.div 
                                        variants={itemVariants}
                                        whileHover="hover"
                                    >
                                        <Button 
                                            onClick={()=>searchJobHandler(cat)} 
                                            variant="outline" 
                                            className="rounded-full shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            {cat}
                                        </Button>
                                    </motion.div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious className="-left-4" />
                    <CarouselNext className="-right-4" />
                </Carousel>
            </motion.div>
        </div>
    )
}

export default CategoryCarousel