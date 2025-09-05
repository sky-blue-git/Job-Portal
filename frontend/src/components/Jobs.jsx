import { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import useGetAllJobs from '@/hooks/useGetAllJobs';

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
    useGetAllJobs(); // Add this hook to fetch all jobs
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase())
            })
            setFilterJobs(filteredJobs)
        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchedQuery]);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col lg:flex-row gap-5'>
                    {/* Filter Sidebar - Hidden on mobile, shown on desktop */}
                    <div className='hidden lg:block lg:w-1/4'>
                        <FilterCard />
                    </div>
                    
                    {/* Mobile Filter Toggle - Only shown on mobile */}
                    <div className='lg:hidden mb-4'>
                        <FilterCard />
                    </div>
                    
                    {/* Jobs Grid */}
                    {
                        filterJobs.length <= 0 ? (
                            <div className="flex-1 flex items-center justify-center py-12">
                                <div className="text-center">
                                    <h3 className="text-lg font-medium text-muted-foreground">No jobs found</h3>
                                    <p className="text-sm text-muted-foreground mt-2">Try adjusting your search criteria</p>
                                </div>
                            </div>
                        ) : (
                            <div className='flex-1 min-h-[70vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6'>
                                    {
                                        filterJobs.map((job) => (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.3 }}
                                                key={job?._id}
                                                className="w-full"
                                            >
                                                <Job job={job} />
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs