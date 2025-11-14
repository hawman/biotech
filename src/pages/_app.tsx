import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${geistSans.style.fontFamily},
            ${geistMono.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>MDx Biotechnology</title>
      </Head>
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full whitespace-pre-wrap">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
