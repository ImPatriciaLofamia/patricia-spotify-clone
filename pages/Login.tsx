import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Button from "@/components/Button";
import InputField from "@/components/InputField";

function Login({providers}) {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex justify-center w-full py-6 border-b-2 border-gray-300">
        <div className="flex flex-row items-center">
          <img src="spotify.png" className="w-15"/>
          <p className="text-2xl font-bold"> Spotify.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full ">
        <div className="flex flex-col items-center justify-center w-full gap-3 pt-7">
          <p className="text-sm font-semibold">
            To continue, log in to Spotify.
          </p>
          <div className="flex flex-col gap-3 pb-2 border-gray-300">
            <Button
              className="px-8 py-3"
              primary
              image="fb.png"
              buttonName={"Continue with Facebook".toUpperCase()}
              onClick={() =>
                alert(
                  `You're logging to spotify using your facebook account 😊!`
                )
              }
            />
            <Button
              image="apple.png"
              className="px-8 py-3 text-white bg-black hover:bg-slate-700"
              buttonName={"continue with apple".toUpperCase()}
              onClick={() =>
                alert(`You're logging to spotify using your apple account 🍎!`)
              }
            />
            <Button
              onClick={() =>
                alert(`You're logging to spotify using your google account 🔍!`)
              }
              image="google.png"
              className="px-8 py-3 text-black bg-white hover:bg-slate-300"
              buttonName={"continue with google".toUpperCase()}
            />
            <div className="flex items-center justify-center w-full gap-2 ">
              <div className="w-full border border-gray-400"></div>
              <p className="font-sans text-xs font-bold ">OR</p>
              <div className="w-full border border-gray-400"></div>
            </div>
            <InputField
              className="w-full p-3"
              type="text"
              label="Email address or username"
              placeholder="Email address or username"
            />
            <InputField
              className="w-full p-3"
              type="text"
              label="Password"
              placeholder="Password"
            />
            <a
              className="inline-block text-sm font-bold text-black underline align-baseline hover:text-green-500"
              href="#"
            >
              Forgot your password?
            </a>
            <div className="flex justify-between pb-2 border-b-2 border-gray-300">
              <div className="flex items-center gap-2">
                <InputField type="checkbox" />
                <p>Remember me</p>
              </div>
              {Object.values(providers).map((provider: any) => {
                return (
                  <div key={provider.name}>
                    <Button
                      className="px-8 py-3"
                      success
                      buttonName="LOGIN"
                      onClick={() => {
                        signIn(provider.id, { callbackUrl: "/" });
                        console.log("uadad", provider);
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <p className="font-bold text-center">Don't have an account?</p>
            <Button
              onClick={() => alert(`Signing up for spotify 😍!`)}
              buttonName="SIGN UP FOR SPOTIFY"
              className="flex justify-center px-8 py-3 hover:bg-slate-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
