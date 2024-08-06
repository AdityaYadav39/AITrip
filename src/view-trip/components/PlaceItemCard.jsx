import { Button } from '@/components/ui/button';
import React from 'react';
import { ImLocation } from "react-icons/im";
import { Link } from 'react-router-dom';

const PlaceItemCard = ({ place }) => {
    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(place?.placeName)} target='_blank'>
            <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
                <img
                    src="/planner.jpeg"
                    alt={place?.placeName || "Place image"}
                    className='w-[130px] h-[130px] rounded-xl object-cover'
                />
                <div className='flex flex-col gap-2'>
                    <h2 className='font-medium text-lg'>{place.placeName}</h2>
                    <p className='text-xs text-gray-500'>{place.placeDetails}</p>
                    {place.timeToTravel && <h2>⏳ {place.timeToTravel}</h2>}
                    <p className=' font-normal text-sm'>💰 {place.ticketPricing}</p>
                    <div className='flex justify-between'>
                        <p className=' font-normal text-sm'>{place.rating}⭐</p>
                        <Button size='sm' className=" h-8 w-16" ><ImLocation /></Button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PlaceItemCard;
