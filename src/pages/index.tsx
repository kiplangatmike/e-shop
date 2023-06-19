import Image from "next/image";
import Main from "@/layouts/main";
import 'tailwindcss/tailwind.css';
import PageIntro from "@/components/header/page-intro";
import NewArrivals from "@/components/header/newArrivals";
import Why from "@/components/why";
import Selected from "@/components/selectedForYou";
import Subscribe from "@/components/subscribe";

export default function Home() {
  return (
    <Main>
      <PageIntro />
      <NewArrivals />
      <Why />
      <Selected />
      <Subscribe />
    </Main>
  );
}
