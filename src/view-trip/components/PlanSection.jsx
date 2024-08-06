import React from 'react';
import PlaceItemCard from './PlaceItemCard'; // Ensure correct import

const PlanSection = ({ trip }) => {
  const renderActivity = (activity, time, index) => (
    <div className='my-3' key={index}>
      <h2 className='font-medium text-lg text-orange-500'>{time}</h2>
      <PlaceItemCard place={activity} />
    </div>
  );

  const renderDayPlan = (dayPlan, dayKey) => (
    <div className='mt-4' key={dayKey}>
      <h2 className='font-semibold text-xl'>{`Day ${dayKey.replace('day', '')}`}</h2>
      <div className='grid md:grid-cols-2 gap-x-5 gap-y-3'>
        {dayPlan.morning && renderActivity(dayPlan.morning.activity, dayPlan.morning.time, 'morning')}
        {dayPlan.afternoon && renderActivity(dayPlan.afternoon.activity, dayPlan.afternoon.time, 'afternoon')}
        {dayPlan.evening && renderActivity(dayPlan.evening.activity, dayPlan.evening.time, 'evening')}
      </div>
    </div>
  );

  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Places To Visit</h2>
      <div className=' h-[2px] bg-slate-600'></div>
      <div>
        {trip?.tripData?.itinerary ? (
          Object.keys(trip.tripData.itinerary).map((dayKey) => {
            const dayPlan = trip.tripData.itinerary[dayKey];
            return renderDayPlan(dayPlan, dayKey);
          })
        ) : (
          <p>No plans available.</p>
        )}
      </div>
    </div>
  );
};

export default PlanSection;
