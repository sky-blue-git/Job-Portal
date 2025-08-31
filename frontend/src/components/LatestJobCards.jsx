import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { AnimatedCard } from './ui/animated-card'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, DollarSign, Clock } from 'lucide-react'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    
    return (
        <AnimatedCard 
            onClick={()=> navigate(`/description/${job._id}`)} 
            className="cursor-pointer hover:border-primary/50 transition-all duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="flex items-start justify-between">
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>India</span>
                    </div>
                </div>
                <motion.div 
                    className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Briefcase className="h-5 w-5 text-primary" />
                </motion.div>
            </div>
            
            <div className="my-4">
                <h1 className='font-bold text-lg mb-2'>{job?.title}</h1>
                <p className='text-sm text-muted-foreground line-clamp-2'>{job?.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="flex items-center gap-1 text-sm">
                    <Clock className="h-3 w-3 text-primary" />
                    <span>{job?.jobType}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                    <DollarSign className="h-3 w-3 text-primary" />
                    <span>{job?.salary} LPA</span>
                </div>
            </div>
            
            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className={'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'} variant="outline">{job?.position} Positions</Badge>
                <Badge className={'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 font-medium'} variant="outline">{job?.jobType}</Badge>
                <Badge className={'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-medium'} variant="outline">{job?.salary}LPA</Badge>
            </div>
        </AnimatedCard>
    )
}

export default LatestJobCards