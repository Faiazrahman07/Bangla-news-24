
'use client'

import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";

const Signinpage = () => {

  const handlesignin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);
    const user = Object.fromEntries(formdata.entries()) 

    const { data, error } = await signIn.email({
       email: user.email as string,
  password: user.password as string,
      rememberMe: true,
      callbackURL: '/',
    });

    if (data) {
      toast.success("Sign-IN successful!");
    }

    if (error) {
      toast.error("Something went wrong!");
    }
  };

  const handlegoogle = async () => {
    const data = await signIn.social({
      provider: "google",
    });
  };

  const handlegithub = async () => {
    const data = await signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-4">

      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-base-100 border border-base-300 shadow-2xl rounded-3xl p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome Back 
            </h1>

            <p className="text-base-content/60 mt-2">
              Sign in to continue to your account
            </p>
          </div>

          {/* Email Sign In */}
          <form onSubmit={handlesignin}>

            <div className="space-y-5">

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
                  placeholder="Enter your password"
                  className="input input-bordered w-full h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="btn btn-primary w-full h-12 rounded-xl text-base font-semibold shadow-lg hover:scale-[1.01] transition"
              >
                Sign In
              </button>

            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-7">
            <div className="h-px flex-1 bg-base-300"></div>

            <span className="text-xs text-base-content/50 uppercase">
              Or continue with
            </span>

            <div className="h-px flex-1 bg-base-300"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">

            <button
              onClick={handlegoogle}
              className="btn btn-outline w-full h-12 rounded-xl hover:bg-base-200"
            >
              <span className="text-lg font-bold">G</span>
              Continue with Google
            </button>

            <button
              onClick={handlegithub}
              className="btn btn-outline w-full h-12 rounded-xl hover:bg-base-200"
            >
              <span className="text-lg">●</span>
              Continue with GitHub
            </button>

          </div>

          {/* Bottom Text */}
          <p className="text-center text-sm text-base-content/60 mt-7">
            Don't have an account?
            <Link href='signup' className="text-primary font-semibold ml-1 cursor-pointer hover:underline">
              Sign Up
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Signinpage;
