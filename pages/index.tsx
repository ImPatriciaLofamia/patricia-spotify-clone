import React from "react"
import { getSession } from "next-auth/react"
export default function Home() {
  return (
    <div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
};
}