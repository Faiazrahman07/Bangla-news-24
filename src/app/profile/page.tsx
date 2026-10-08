
'use client'

import { signOut, updateUser, useSession } from '@/lib/auth-client'
import Link from 'next/link'
import React, { useState } from 'react'

const Profilepage = () => {
  const [show, setShow] = useState(false)

  const { data: session } = useSession()
  const user = session?.user

  const onupdateprofile = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    const formdata = new FormData(e.currentTarget)
    const userData = Object.fromEntries(formdata.entries())

    await updateUser({
      ...userData,
    })

    setShow(false)
  }

  const handlesignout = async () => {
    await signOut()
  }

  const handleform = () => {
    setShow(!show)
  }

  return (
    <div className="min-h-screen bg-base-200 px-4 py-10">

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 md:flex-row md:items-start md:justify-center">

        {/* Profile Card */}
        <div className="card w-full max-w-md border border-base-300 bg-base-100 shadow-2xl">

          <div className="card-body items-center text-center">

            {/* Avatar */}
            <div className="avatar mb-4">
              <div className="w-28 rounded-full ring ring-primary ring-offset-4 ring-offset-base-100">
                <img
                  src={user?.image || '/default-avatar.png'}
                  alt={user?.name || 'User'}
                />
              </div>
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold">
              {user?.name || 'User'}
            </h2>

            {/* Email */}
            <p className="text-sm text-base-content/60">
              {user?.email}
            </p>

            {/* Divider */}
            <div className="divider my-1 w-full" />

            {/* Actions */}
            <div className="flex w-full flex-col gap-3">

              <Link
                href="/"
                className="btn btn-primary w-full rounded-xl"
              >
                Back to Home
              </Link>

              <button
                onClick={handleform}
                className="btn btn-outline btn-primary w-full rounded-xl"
              >
                {show ? 'Close Editor' : 'Edit Profile'}
              </button>

              <button
                onClick={handlesignout}
                className="btn btn-outline btn-error w-full rounded-xl"
              >
                Sign Out
              </button>

            </div>

          </div>
        </div>

        {/* Edit Profile */}
        {show && (
          <div className="card w-full max-w-md border border-base-300 bg-base-100 shadow-2xl">

            <div className="card-body">

              <div className="mb-4">
                <h2 className="text-2xl font-bold">
                  Edit Profile
                </h2>

                <p className="mt-1 text-sm text-base-content/60">
                  Update your profile information
                </p>
              </div>

              <form onSubmit={onupdateprofile} className="space-y-4">

                {/* Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Name
                    </span>
                  </label>

                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    defaultValue={user?.name || ''}
                    className="input input-bordered w-full rounded-xl"
                  />
                </div>

                {/* Image URL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Profile Image URL
                    </span>
                  </label>

                  <input
                    name="image"
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    defaultValue={user?.image || ''}
                    className="input input-bordered w-full rounded-xl"
                  />
                </div>

                {/* Update Button */}
                <button
                  type="submit"
                  className="btn btn-primary mt-2 w-full rounded-xl"
                >
                  Update Profile
                </button>

              </form>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Profilepage
