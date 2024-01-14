import { Footer, NavbarComponent } from "@/components";
import { client } from "@/graphql";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export const revalidate = 0;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <main className="flex flex-col min-h-screen">
        <NavbarComponent />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </ApolloProvider>
  );
}
