import React from 'react'
import { Link } from 'react-router-dom'

const HotelSection = ({ trip }) => {
  return (
    <div>
      <h2 className=' font-bold text-xl mt-5'> Hotel Recommendation</h2>
      <div className=' h-[2px] bg-slate-600 mb-2'></div>

      <div className=' grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {
          trip?.tripData?.hotels?.length>0?trip?.tripData?.hotels?.map((hotel, index) => (
            <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelName+","+hotel?.hotelAddress} target="_blank" key={index}>
              <div className=' my-5 mr-5 px-1 pb-2 flex flex-col gap-2 shadow-md cursor-pointer hover:scale-105 transition-all rounded-lg'>
                <img src="/HotelImg.jpeg" alt="" className=' rounded-xl' />
                <div className='flex flex-col gap-2'>
                  <h2 className=' font-medium text-base'>{hotel?.hotelName}</h2>
                  <h2 className=' text-xs text-gray-500'>📍{hotel?.hotelAddress}</h2>
                  <h2 className=' text-sm'>💰 {hotel?.price}</h2>
                  <h2>⭐ {hotel?.rating} stars</h2>
                </div>
              </div>
            </Link>
          ))
          :[1,2,3,4].map((item,index) =>(
            <div key={index} className='h-[150px] w-full bg-slate-200 animate-pulse rounded-xl'>

            </div>
        ))
        }
      </div>
    </div>
  )
}

export default HotelSection