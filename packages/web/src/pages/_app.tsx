import { NavbarComponent } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export const revalidate = 0;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="">
      <NavbarComponent />
      <Component {...pageProps} />
    </main>
  );
}
