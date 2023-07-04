import Image from "next/image";
import Main from "@/layouts/main";
import 'tailwindcss/tailwind.css';
import PageIntro from "@/components/page-intro";
import NewArrivals from "@/components/newArrivals";
import Why from "@/components/why";
import Selected from "@/components/selectedForYou";
import Subscribe from "@/components/subscribe";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <Main>
      <PageIntro />
      <NewArrivals />
      <Why />
      <Selected />
      <Subscribe />
      <Footer />
    </Main>
  );
}
