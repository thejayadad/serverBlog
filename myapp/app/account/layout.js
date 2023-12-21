import Sidebar from '@/components/Aside/Sidebar';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='sm:flex sm:flex-col flex gap-4 max-w-screen-xl mx-auto'>
      <div className='grid sm:grid sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-8 w-full'>
        <div className='col-span-2 w-full p-24'>
          <Sidebar />
        </div>
        <div className='col-span-6 bg-red-400 w-full p-24'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
