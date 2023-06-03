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
    <div className="">
      <Head>
        <title>{ title }</title>
      </Head>

      {/* <Header /> */}

      <main className={''}>
        { children }
      </main>
    </div>
  )
}