import React from 'react'
import Link from 'next/link'
export const Nav = () => {
  return (
    <>
        <nav className='flex justify-between p-2'>
            <div>TAXI IGI</div>
            <div>
                <Link href="/">Contribute</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Do Simethings</Link>
            </div>

        </nav>

    </>
  )
}
