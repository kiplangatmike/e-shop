import Header from '@/components/header/header';
import Head from 'next/head';
// import Header from '@/components/header';
import { useRouter } from 'next/navigation';
import React from 'react';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default function Main ({ children, title = 'Next.js Ecommerce' }: LayoutType) {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="max-w-[1440px] mx-auto items-center">
      <Head>
        <title>{ title }</title>
      </Head>

      <Header />

      <main className={'max-w-[1200px]'}>
        { children }
      </main>
    </div>
  )
}