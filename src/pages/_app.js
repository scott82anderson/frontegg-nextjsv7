import { withFronteggApp } from "@frontegg/nextjs/pages";

function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withFronteggApp(CustomApp, {
  hostedLoginBox: true,
  authOptions: {
    // keepSessionAlive: true, // Uncomment this in order to maintain the session alive
  },
});
