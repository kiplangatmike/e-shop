import Head from "next/head";
import { useRouter } from "next/router";
import  Header from "../components/header";


type LayoutType = {
    children?: React.ReactNode;
    title?: string;
}

export default function Layout({ children, title = "This is the default title" }: LayoutType) {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <div className="">
            <Head>
                <title>Page not found: {title}</title>
            </Head>
            <Header isErrorPage />

            <main className={(pathname !== '/' ? 'main-page' : '')}>
                {children}
            </main>
        </div>
    )
}