
'use client'

import { signUp } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Signuppage = () => {

  const onsubmit = async (
    e: React.SubmitEvent<HTMLElement>
  ) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const user = Object.fromEntries(formdata.entries());

    const { data, error } = await signUp.email({
      name: user.name as string,
      image : user.image as string,
  email: user.email as string,
  password: user.password as string,
      callbackURL: '/',
    });

    if (data) {
      toast.success("Sign-Up successful!");
    }

    if (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-4 py-10">

      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-base-100 border border-base-300 shadow-2xl rounded-3xl p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Create Account 
            </h1>

            <p className="text-base-content/60 mt-2">
              Sign up to get started with your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onsubmit}>

            <div className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name
                </label>

                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Image */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Profile Image URL
                  <span className="text-xs text-base-content/40 ml-1">
                    (Optional)
                  </span>
                </label>

                <input
                  name="image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>

                <input
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-primary w-full h-12 rounded-xl text-base font-semibold shadow-lg hover:scale-[1.01] transition"
              >
                Create Account
              </button>

            </div>

          </form>

          {/* Bottom */}
          <p className="text-center text-sm text-base-content/60 mt-7">
            Already have an account?
            <span className="text-primary font-semibold ml-1 cursor-pointer hover:underline">
              Sign In
            </span>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Signuppage;
