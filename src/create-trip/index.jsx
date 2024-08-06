import { Button } from '@/components/ui/button';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { chatSession } from '@/service/AiModal';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useAuth0 } from '@auth0/auth0-react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const CreateTrip = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [place, setPlace] = useState('');
  const [formData, setFormData] = useState({});
  const [days, setDays] = useState('');
  const [loding, setLoding] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  const saveAiTrips = async (TripData) => {
    setLoding(true);
    const user = JSON.parse(localStorage.getItem('user'));
    const docId = Date.now().toString();

    let parsedTripData;
    try {
      parsedTripData = JSON.parse(TripData);
    } catch (error) {
      console.error("Failed to parse TripData:", TripData);
      toast("Failed to generate trip. Please try again.");
      setLoding(false);
      return;
    }

    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: parsedTripData,
      userEmail: user?.email,
      id: docId
    });
    setLoding(false);
    navigate('/view-trip/' + docId);
  };

  const onGenerateTrips = async () => {
    if (!isAuthenticated) {
      toast("Please Sign in first");
      await loginWithRedirect();
      return;
    }

    if (!formData?.place || !formData?.time || !formData?.budget || !formData?.travel) {
      toast("Please fill all the details");
      return;
    }

    setLoding(true);
    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData?.place)
      .replace('{time}', formData?.time)
      .replace('{travel}', formData?.travel)
      .replace('{budget}', formData?.budget)
      .replace('{time}', formData?.time);

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    const responseText = await result?.response?.text();

    console.log("__", responseText);
    setLoding(false);
    saveAiTrips(responseText);
  };

  return (
    <div className='sm:px-10 md:px-20 lg:px-32 xl:px-56 px-5 mt-10 flex flex-col'>
      <h2 className='text-3xl font-bold'>Tell us your travel preferences 🏕️🌴</h2>
      <p className='mt-3 text-gray-500 text-xl'>
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>
      <div>
        <div className='mt-20 flex flex-col gap-10'>
          <div>
            <h2 className='text-xl my-3 font-medium'>
              What is your destination of choice?
            </h2>
            <input
              type='text'
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
                handleInputChange('place', e.target.value);
              }}
              placeholder='Enter your destination'
              className='border p-2 rounded w-full'
            />
          </div>

          <div>
            <h2 className='text-xl my-3 font-medium'>
              How many days are you planning your trip?
            </h2>
            <input
              type='number'
              value={days}
              onChange={(e) => {
                setDays(e.target.value);
                handleInputChange('time', e.target.value);
              }}
              placeholder='Ex.3'
              className='border p-2 rounded w-full'
            />
          </div>
        </div>
        <div>
          <h2 className='text-xl my-3 font-medium'>
            What is Your Budget?
          </h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptions.map((item, index) => (
              <div key={index}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.budget === item.title && 'shadow-lg border border-black'}`}
                onClick={() => {
                  handleInputChange('budget', item.title);
                }}>
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <p className='text-sm text-gray-500'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectTravelesList.map((item, index) => (
              <div key={index}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.travel === item.people && 'shadow-lg border border-black'}`}
                onClick={() => {
                  handleInputChange('travel', item.people);
                }}>
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <p className='text-sm text-gray-500'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='my-10 flex justify-end'>
        <Button onClick={onGenerateTrips} disabled={loding}>
          {
            loding ? <AiOutlineLoading3Quarters className=' h-7 w-7 animate-spin' /> :
              'Generate Trip'
          }
        </Button>
      </div>
    </div>
  );
};

export default CreateTrip;
