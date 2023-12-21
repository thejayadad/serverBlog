// Layout.js
import Sidebar from '@/components/Aside/Sidebar';
import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const Layout = async ({ children }) => {
    const session = await getServerSession(authOptions)
    if(!session){
        return redirect('/')
    }
  return (
    <div className='flex flex-col sm:flex-row gap-4 max-w-screen-xl mx-auto'>
      <div className='sm:w-2/5 p-4'>
        <Sidebar />
      </div>
      <div className='sm:w-3/5 bg-red-400 p-4'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
