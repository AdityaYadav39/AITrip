import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import { ImLocation } from "react-icons/im";


const TripCard = ({ trip }) => {
    return (
        <Link to={'/view-trip/'+trip?.id}>
            <div className=' p-2 hover:scale-105 transition-all hover:shadow-md rounded-md flex flex-col gap-2'>
                <img src="/placeholder.jpg" alt="" className=' object-cover rounded-lg' />
                <div>
                    <h2 className=' font-bold text-lg'>🌏 {trip.tripData.trip_details.location}</h2>
                    <h2 className=' font-medium text-base text-gray-600' >🗓 {trip.tripData.trip_details.duration} with {trip.tripData.trip_details.budget} budget</h2>
                    <h2 className=' font-medium text-base text-gray-600' >🤜🤛 Company of {trip.tripData.trip_details.travelers}</h2>
                    <Button className=" flex items-center justify-center gap-2 mt-2">Locate Journey <ImLocation/></Button>
                </div>
            </div>
        </Link>
    )
}

export default TripCard