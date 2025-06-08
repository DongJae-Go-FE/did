"use client";

import { useState } from "react";

import Map from "@/components/Map/Map";

export default function Section02() {
  const [mapValue, setMapValue] = useState("서울대교구");

  const leftBoxStyle =
    "mobile:w-full mobile:border-b mobile:border-[#d9d9d9] mobile:pb-[16dvw] tablet:w-full tablet:border-b tablet:border-[#d9d9d9] tablet:pb-[10dvw] desktop:flex-1 desktop:border-b-0 desktop:border-r desktop:border-[#d9d9d9] desktop:pr-[120px] desktop:pb-0";
  const rightBoxStyle =
    "mobile:w-full mobile:pt-[16dvw] tablet:w-full tablet:pt-[10dvw] desktop:flex-1 desktop:pl-[120px] desktop:pt-0";

  return (
    <div className="p-[3vw] bg-gray-100">
      <h2>교구 소개</h2>
      <div className="mobile:flex-wrap tablet:flex-wrap flex">
        <div className={leftBoxStyle}>
          <Map onChangeValue={(value) => setMapValue(value)} />
        </div>
        <div className={rightBoxStyle}>{mapValue}</div>
      </div>
    </div>
  );
}
