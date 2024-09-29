'use client'
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation'
function Home() {

  const router = useRouter();
  const navigate = (page) => {
    router.push(page)
  }
  

  return (
    <>
    <h1>Welcome to My Home Page</h1>
    </>
  )
}

export default Home 