import { useCallback } from "react";
import { withSSRSession } from "@frontegg/nextjs/pages";
import { useAuth } from "@frontegg/nextjs";
import { useRouter } from "next/router";

export default function MyPage({ products }) {
  const { user } = useAuth();

  const router = useRouter();

  const logout = useCallback(() => {
    router.replace("/account/logout");
  }, [router]);

  return (
    <div>
      <h1>My Page</h1>
      {products}
      <div>
        <img src={user?.profilePictureUrl} alt={user?.name} />
      </div>
      <div>
        <span>Logged in as: {user?.name}</span>
      </div>
      <div>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
}

// In the `getServerSideProps` method you can get data from an external service to pull relevant data for a logged in user.
// we used the prop `products`. See the commented code for an example.

export const getServerSideProps = withSSRSession(async (context, session) => {
  //     const { data } = await fetch('{external}/product', {
  //      headers: {
  //        Authorization: 'bearer ' + session.accessToken,
  //      },
  //    });
  return { props: {} };
});
