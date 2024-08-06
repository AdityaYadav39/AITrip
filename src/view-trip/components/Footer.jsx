import React from 'react'

const Footer = ({ trip }) => {
  return (
    <footer className='bg-gray-800 text-white py-6 mt-10'>
      <div className='container mx-auto text-center'>
        {trip && (
          <div className='mt-4'>
            <h3 className='text-md font-semibold'>⛺ Trip Summary</h3>
            <p>Destination: {trip?.tripData?.trip_details?.location}</p>
            <p>Total Days: {trip?.tripData?.trip_details?.duration}</p>
            <p>Traveler: {trip.userEmail}</p>
          </div>
        )}
        <h2 className='font-semibold text-lg mt-3'>Created By @Aditya ❤️ AI Travel-Whiz Application 🚀-2024</h2>
      </div>
    </footer>
  )
}

export default Footer;
