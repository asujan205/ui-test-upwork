import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar";
import MainContent from "./components/maincontent";
import TableComponent from "./components/table";

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
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="flex mx-auto p-4">
        <div className="flex flex-col gap-2">
          <MainContent />

          <TableComponent />
        </div>
      </div>
    </div>
  );
}
