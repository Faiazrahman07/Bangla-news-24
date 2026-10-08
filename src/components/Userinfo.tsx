
'use client'

import { signOut, useSession } from '@/lib/auth-client'
import Link from 'next/link'
import React from 'react'

const Userinfo = () => {

  const { data: session } = useSession()

  const user = session?.user

  const handlesignout = async () => {
    await signOut()
  }

  return (
    <div>
      {user ? (
        <div className="flex flex-col items-center gap-2">

          <Link href="/profile">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img
                  alt={user.name}
                  src={user.image || "/default-avatar.png"}
                />
              </div>
            </div>
          </Link>

          <p className="text-xs">{user.name}</p>

          <button
            onClick={handlesignout}
            className="text-xs btn btn-neutral btn-outline"
          >
            Sign-out
          </button>

        </div>
      ) : (
        <div>
          <Link href="/signin">
            <button className="btn btn-soft btn-primary rounded-xl">
              সাইন ইন
            </button>
          </Link>

          <Link href="/signup">
            <button className="btn btn-soft btn-secondary text-white-300 px-2 rounded-xl bg-red-700">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Userinfo
