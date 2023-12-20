'use client';
import {signOut} from "next-auth/react";

import React from 'react'

const LogOutBtn = () => {
  return (
    <button
    onClick={() => signOut()}>

    <span>Logout</span>

  </button>
  )
}

export default LogOutBtn