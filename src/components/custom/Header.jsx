import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from 'react-router-dom'


const Header = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

    useEffect(() => {
        console.log(user);
    })

    console.log("current user", user);
    return (
        <div className='p-2 shadow-sm flex justify-between items-center px-5'>

            <img src="/logo.svg" alt="" width={90} />

            <div>
                {
                    isAuthenticated ? <div className=' flex gap-3'>
                        <a href="/my-trips">
                            <Button variant='outline' className=" rounded-full">My Trips</Button>
                        </a>
                        <Popover>
                            <PopoverTrigger>
                                <img src={user?.picture} alt="" className=' h-10 w-10 cursor-pointer rounded-full' />
                            </PopoverTrigger>
                            <PopoverContent>
                                <Button onClick={() => {
                                    logout()
                                }}>Logout</Button>
                            </PopoverContent>
                        </Popover>
                    </div>
                        :
                        <Button onClick={(e) => loginWithRedirect()}>sign in</Button>
                }
            </div>
        </div>
    )
}

export default Header