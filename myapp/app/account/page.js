import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import {getServerSession} from "next-auth";



const AccountPage = async ({searchParams}) => {
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;
    if (!session) {
        return redirect('/');
      }

    if(session === 'pending'){
        return <h2 className='text-center'>Loading</h2>
    }
  return (
    <div className='px-4 py-12 flex flex-col items-center'>

        {session?.user?.name}<br />

        <form
        className='flex flex-col p-8 max-w-screen-md gap-4'
        >
            <input
            type='text'
            className='p-4'
            placeholder='UserName'
            />
            <button
            className='cursor-pointer border border-primary p-4'
            type='submit'
            >Your UserName</button>
        </form>
    </div>
  )
}

export default AccountPage