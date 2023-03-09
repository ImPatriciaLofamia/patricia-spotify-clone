import React from "react";
import { getProviders, signIn } from "next-auth/react"
import Button from "@/components/Button";
import InputBox from "@/components/InputBox";

export const Login = () => {
  return (
    <div className="flex w-full justify-center flex-col">
      <div className="w-full flex justify-center border-b-2 border-gray-300 py-6">
        <div className="flex flex-row items-center">
          <svg viewBox="0 0 50 50" width="40px" height="40px">
            <path d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z" />
          </svg>
          <p className="text-2xl font-bold"> Spotify.</p>
        </div>
      </div>
      <div className="flex w-full justify-center flex-col ">
        <div className="w-full flex justify-center items-center flex-col gap-3 pt-7">
          <p className="font-semibold text-sm">
            To continue, log in to Spotify.
          </p>
          <div className="flex flex-col gap-3 border-gray-300 pb-2">
            <Button
              primary
              icon={
                <svg viewBox="0 0 48 48" width="25px" height="25px">
                  <linearGradient
                    id="Ld6sqrtcxMyckEl6xeDdMa"
                    x1="9.993"
                    x2="40.615"
                    y1="9.993"
                    y2="40.615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#2aa4f4" />
                    <stop offset="1" stop-color="#007ad9" />
                  </linearGradient>
                  <path
                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                  />
                  <path
                    fill="#fff"
                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                  />
                </svg>
              }
              buttonName={"Continue with Facebook".toUpperCase()}
            />
            <Button
              icon={
                <svg
                  viewBox="0,0,256,256"
                  width="25px"
                  height="25px"
                  fill-rule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M44.52734,34.75c-1.07812,2.39453 -1.59766,3.46484 -2.98437,5.57813c-1.94141,2.95313 -4.67969,6.64063 -8.0625,6.66406c-3.01172,0.02734 -3.78906,-1.96484 -7.87891,-1.92969c-4.08594,0.01953 -4.9375,1.96875 -7.95312,1.9375c-3.38672,-0.03125 -5.97656,-3.35156 -7.91797,-6.30078c-5.42969,-8.26953 -6.00391,-17.96484 -2.64844,-23.12109c2.375,-3.65625 6.12891,-5.80469 9.65625,-5.80469c3.59375,0 5.85156,1.97266 8.82031,1.97266c2.88281,0 4.63672,-1.97656 8.79297,-1.97656c3.14063,0 6.46094,1.71094 8.83594,4.66406c-7.76562,4.25781 -6.50391,15.34766 1.33984,18.31641zM31.19531,8.46875c1.51172,-1.94141 2.66016,-4.67969 2.24219,-7.46875c-2.46484,0.16797 -5.34766,1.74219 -7.03125,3.78125c-1.52734,1.85938 -2.79297,4.61719 -2.30078,7.28516c2.69141,0.08594 5.47656,-1.51953 7.08984,-3.59766z"></path>
                    </g>
                  </g>
                </svg>
              }
              className="bg-black text-white hover:bg-slate-700"
              buttonName={"continue with apple".toUpperCase()}
            />
            <Button
              icon={
                <svg viewBox="0 0 48 48" width="25px" height="25px">
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
              }
              className="bg-white text-black  hover:bg-slate-300"
              buttonName={"continue with google".toUpperCase()}
            />
            <div className=" w-full flex justify-center gap-2 items-center">
              <div className="w-full border border-gray-400"></div>
              <p className=" font-sans font-bold text-xs">OR</p>
              <div className="w-full border border-gray-400"></div>
            </div>
            <InputBox
              className="p-3 "
              label="Email address or username"
              placeholder="Email address or username"
            />
            <InputBox
              className="p-3 "
              label="Password"
              placeholder="Password"
            />
            <a
              className="inline-block align-baseline font-bold underline text-sm text-black hover:text-green-500"
              href="#"
            >
              Forgot your password?
            </a>
            <div className="flex justify-between border-b-2 border-gray-300 pb-2">
              <div className="flex gap-2 items-center">
                <InputBox type="checkbox"/>
                <p>Remember me</p>
              </div>
              <Button success buttonName="LOGIN"/>
            </div>
            <p className="font-bold text-center">Don't have an account?</p>
            <Button
              buttonName="SIGN UP FOR SPOTIFY"
              className="hover:bg-slate-300 flex justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps(){
  const providers = await getProviders();
}