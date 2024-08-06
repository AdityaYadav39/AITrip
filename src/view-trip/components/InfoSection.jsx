import { Button } from '@/components/ui/button';
import React from 'react'
import { IoIosSend } from "react-icons/io";

const InfoSection = ({ trip }) => {

  return (
    <div>
      <img src='/placeholder.jpg' alt="" className=' h-[340px] w-full object-cover rounded-xl' />

      <div className=' flex justify-between items-center'>
        <div className=" my-4 flex flex-col gap-2">
          <h2 className=' font-bold text-2xl'>🌏 {trip?.tripData?.trip_details?.location}</h2>
          <div className='flex gap-4'>
            <h2 className=' p-1 px-3 bg-gray-200 rounded-full text-xs md:text-base'>📅 {trip?.tripData?.trip_details?.duration}</h2>
            <h2 className=' p-1 px-3 bg-gray-200 rounded-full text-xs md:text-base'>💲{trip?.tripData?.trip_details?.budget} Budget</h2>
            <h2 className=' p-1 px-3 bg-gray-200 rounded-full text-xs md:text-base'>🥂 No. Of Travelers: {trip?.tripData?.trip_details?.travelers}</h2>
          </div>
        </div>
        <Button><IoIosSend className=' h-5 w-5'></IoIosSend></Button>
      </div>
    </div>
  )
}

export default InfoSection