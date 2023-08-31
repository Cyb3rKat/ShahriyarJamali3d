import MainPageContent from "@/components/react/MainPageContent";
import SideMenu from "@/components/react/SideMenu";
import Image from "next/image";
import Link from "next/link";

import mylogo from '/public/social/shahriyar-logo.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full bg-[#E8E7E7] scrollbar scroll-smooth " >
      <SideMenu />
      <MainPageContent />
    </main>
  )
}
