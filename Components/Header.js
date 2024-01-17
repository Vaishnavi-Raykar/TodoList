import React from 'react'
import Link from "next/link"




const Header = () => {
    return (
        <>
        <div className='h-10 p-2 font-semibold bg-blue-900 flex item-center justify-between text-center align-middle text-white'>

            <Link href="/">NOTES</Link>

            <div className='flex justify-evenly gap-8'>
            <Link href="/Trash">Trash</Link>
            <Link href="/Settings">Settings</Link>
            <Link href="/Help">Help</Link>
            </div>
        </div>
       </>
    )
}

export default Header







  
 
      
   