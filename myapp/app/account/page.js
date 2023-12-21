import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import {getServerSession} from "next-auth";
import UserNameForm from '@/components/Forms/UserNameForm';
import Page from '@/models/Page';


const AccountPage = async ({searchParams, ...rest}) => {
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;
    const page = await Page.findOne({owner: session?.user?.email});

    if (!session) {
        return redirect('/');
      }

    if(session === 'pending'){
        return <h2 className='text-center'>Loading</h2>
    }
    if(page){
      return(
        <div>
          your page is {page.uri}
        </div>
      )
    }
  return (
    <div className='px-4 py-12 flex flex-col items-center'>

        {session?.user?.name}<br />

        <UserNameForm desiredUsername={desiredUsername} />
    </div>
  )
}

export default AccountPage