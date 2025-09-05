import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        fitlerType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    useEffect(()=>{
        dispatch(setSearchedQuery(selectedValue));
    },[selectedValue]);
    return (
        <div className='w-full bg-card border rounded-lg p-4 shadow-sm'>
            <h1 className='font-bold text-lg mb-4 text-card-foreground'>Filter Jobs</h1>
            <hr className='mb-4 border-border' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler} className="space-y-4">
                {
                    fitlerData.map((data, index) => (
                        <div key={index} className="space-y-3">
                            <h2 className='font-semibold text-base text-card-foreground'>{data.fitlerType}</h2>
                            <div className="space-y-2">
                                {
                                    data.array.map((item, idx) => {
                                        const itemId = `id${index}-${idx}`
                                        return (
                                            <div key={idx} className='flex items-center space-x-2'>
                                                <RadioGroupItem value={item} id={itemId} />
                                                <Label htmlFor={itemId} className="text-sm text-muted-foreground cursor-pointer">{item}</Label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default FilterCard