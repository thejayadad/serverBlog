import React from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import {getServerSession} from "next-auth";
import Link from "next/link";
import LogOutBtn from '../buttons/LogOutBtn';
import LoginWithGoogle from '../buttons/LoginWithGoogle';


const AuthLinks = async () => {
    const session = await getServerSession(authOptions);

  return (
    <div>
        {
            session ? (
                <div className='flex items-center gap-4'>
                    <span>{session?.user.name}</span>
                    <LogOutBtn />
                </div>
            ) : (
                <div className='flex items-center gap-4'>
                    <LoginWithGoogle />
                </div>
            )
        }
    </div>
  )
}

export default AuthLinks