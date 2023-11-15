import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Page = () => {
//     const router = useRouter();

//   const handleClick = () => {
  
//     router.push("/dashboard");
//   };
  return (
  <ul>
      <li>
        <Link href="/pages/dashboard">Home</Link>
          </li>
          </ul>
  )
}

export default Page
