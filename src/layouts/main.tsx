import Header from '@/components/header/header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default function Main ({ children, title = 'Next.js Ecommerce' }: LayoutType) {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="max-w-[1440px] mx-auto items-center px-10">
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