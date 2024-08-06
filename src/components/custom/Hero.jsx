import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'


const Hero = () => {
    return (
        <div className=' flex flex-col items-center mx-56 gap-6'>
            <h1 className=' text-[50px] font-extrabold text-center mt-16'>
                <span className=' text-[#f56551] '>Discover Your Next Adventure with AI: </span>
                Personalized Itineraries at Your Fingertips</h1>
            <p className=' text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
            
            <Link to='/create-trip' className=' hover:shadow-sm hover:scale-105 transition-all'>
                <Button>
                    Get Started,Its free
                </Button>
            </Link>

            <img src="/landing.png" alt="landing-img" className='-mt-19' />
        </div>
    )
}

export default Hero