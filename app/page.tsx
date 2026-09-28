"use client"
import Header from "./components/Header";
import UNDirective from "./components/UNDirective";
import MissionVision from "./components/MissionVision";
import WhatWeDo from "./components/WhatWeDo";
import Subsidiaries from "./components/Subsidiaries";
import Team from "./components/Team";
import Newcontact from "./components/Newcontact";
import AffiliatedActions from "./components/AffiliatedActions";

export default function Home() {
  return (
    <div className="flex max-w-[1600px] gap-12 md:gap-[4em] flex-col mx-auto h-full min-h-screen text-white p-8 md:p-12 lg:p-16">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <UNDirective />
        <div className="flex flex-col gap-12">
          <MissionVision />
          <WhatWeDo />
        </div>
      </div>
      <AffiliatedActions />
      <Subsidiaries />
      <Team />
      <Newcontact />
    </div>
  );
}

