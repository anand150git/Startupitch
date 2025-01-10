import { auth, signIn, signOut } from '@/auth'
import { client } from '@/sanity/lib/client'
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries'
import { BadgePlusIcon, LogOutIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Navbar = async () => {
  const session = await auth()
  // let params = { id: session.user.id}
  let id = session?.id || ""

  const author = await client.fetch(AUTHOR_BY_ID_QUERY, { id })
  // console.log(user)


  return (
    <header className='px-4 py-3 font-work-sans shadow-sm'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <img src="/logo.png" alt='logo' height={30} width={144} />
        </Link>

        <div className='flex gap-5 items-center'>
          {session && session?.user ? (
            <>
              <Link href='/startup/create'>
                <span className='max-sm:hidden'>Create</span>
                <BadgePlusIcon className='sm:hidden' />
              </Link>
              <form action={async () => {
                "use server"
                await signOut({ redirectTo: "/" })
              }}>
                <button type='submit'>
                  <span className='max-sm:hidden'>Logout</span>
                  <LogOutIcon className='size-6 sm:hidden text-red-500' />
                </button>
              </form>
              <Link href={`/${author.username}`}>
                <Avatar className='size-10'>
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form action={async () => {
              "use server"
              await signIn("github")
            }}>
              <button type='submit'>LogIn</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar