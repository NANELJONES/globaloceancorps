"use client"
import Image from "next/image";
import Header from "./components/Header";
import UNDirective from "./components/UNDirective";
import MissionVision from "./components/MissionVision";
import WhatWeDo from "./components/WhatWeDo";
import DownloadableContent from "./components/DownloadableContent";
import Subsidiaries from "./components/Subsidiaries";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
export default function Home() {
  return (
  <div className="max flex max-w-[1600px] gap-12 md:gap-[6em] flex-col gap-4 mx-auto h-full min-h-screen text-white p-8 md:p-12 lg:p-16">
  <Header />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <UNDirective />
    <div className="flex flex-col gap-12">
    <MissionVision />
    <WhatWeDo />
    <DownloadableContent />
  </div>
  </div>
  <Subsidiaries />
  <Team />
  <ContactUs />
  </div>
  );
}
