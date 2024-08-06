import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '@/service/firebaseConfig';
import TripCard from './component/TripCard';


const MyTrips = () => {

    const navigation = useNavigate();
    const [userTrips, setUserTrips] = useState([]);

    useEffect(() => {
        GetUserTrips();
    }, [])

    // used to get Multiple data from firbase

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            navigation('/');
            return;
        }

        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
        const querySnapshot = await getDocs(q);

        setUserTrips([]);

        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setUserTrips(prevVal => [...prevVal, doc.data()])
        });
    }
    return (
        <div className='sm:px-10 md:px-20 lg:px-32 xl:px-56 px-5 mt-10 flex flex-col'>
            <h2 className=' font-bold text-3xl'>
                My Trips <span className=' text-4xl'>⛺🏖️</span>
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
                {
                    userTrips?.length>0?userTrips.map((trip, index) => (
                        <div key={index}>
                            <TripCard trip={trip}></TripCard>
                        </div>
                    ))
                    :[1,2,3,4,5,6].map((item,index) =>(
                        <div key={index} className='h-[260px] w-full bg-slate-200 animate-pulse rounded-xl'>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyTrips;