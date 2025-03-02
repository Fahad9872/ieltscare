import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import DragAndDrop from "@/components/Home/DragAndDrop";
import NavBar from "@/components/NavBar/NavBar";
import Banner from "@/components/Home/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="md:max-w-[1440px] mx-auto ">
      <NavBar />
      <Banner />
      {/* <DragAndDrop /></div> */}
    </div>
  );
}
