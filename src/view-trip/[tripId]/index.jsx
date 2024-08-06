import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import PlanSection from '../components/PlanSection';
import HotelSection from '../components/HotelSection';
import Footer from '../components/Footer';

const ViewTrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    tripId && GetTripData();
  }, [tripId])

  // to get data from fireStore 
  const GetTripData = async () => {
    const docrefer = doc(db, "AITrips", tripId);
    const docsnap = await getDoc(docrefer);

    if (docsnap.exists()) {
      console.log("docment: ", docsnap.data());
      setTrip(docsnap.data());

    } else {
      console.log("data is not available");
      toast("Trip data not found");
    }
  }


  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      {/* view-trip data                  *********** */}

      {/* Imformation Section */}
      <InfoSection trip={trip}></InfoSection>

      {/* Hotel Section */}
      <HotelSection trip={trip}></HotelSection>

      {/* Days planning Section */}
      <PlanSection trip={trip}></PlanSection>

      {/* Footer */}
      <Footer trip={trip}></Footer>

    </div>
  )
}

export default ViewTrip