'use client'
import grabUsername from '@/lib/grabUsername'
import React from 'react'
import {redirect} from "next/navigation";
import {useState} from "react";
import SubmitButton from '../buttons/Submit';

const UserNameForm = ({desiredUsername}) => {
    const [taken,setTaken] = useState(false);
    async function handleSubmit(formData) {
      const result = await grabUsername(formData);
  
      setTaken(result === false);
      if (result) {
        redirect('/account/'+formData.get('username'));
      }
    }
  
  return (
    <div>
     <h1 className="text-4xl font-bold text-center mb-2">
        Enter A UserName
      </h1>
      <p className="text-center mb-6 text-primary">
        What would you like to be called?
      </p>
         <form
        action={handleSubmit}
        className='flex flex-col p-8 max-w-screen-md gap-4'
        >
            <input
            name="username"
            type='text'
            className='p-4 border border-primary'
            placeholder='UserName'
            defaultValue={desiredUsername}

            />
            {taken && (
            <div className="bg-red-200 border border-red-500 p-2 mb-2 text-center">
                This username is taken
            </div>
            )}
            <SubmitButton>

            Your UserName</SubmitButton>
        </form>

    </div>
  )
}

export default UserNameForm